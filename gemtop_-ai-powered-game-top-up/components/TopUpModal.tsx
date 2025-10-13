
import React, { useState, useEffect } from 'react';
import type { Game, TopUpItem, PaymentMethod, AlertInfo } from '../types';
import { AlertType } from '../types';
import { suggestPromo } from '../services/geminiService';
import { Spinner } from './Spinner';
import { Alert } from './Alert';


interface TopUpModalProps {
    game: Game | null;
    onClose: () => void;
}

const ModalSection: React.FC<{ title: string; step: number; children: React.ReactNode }> = ({ title, step, children }) => (
    <div className="mb-6">
        <h3 className="text-lg font-bold text-primary mb-3 flex items-center">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-base-100 font-bold mr-3">{step}</span>
            {title}
        </h3>
        {children}
    </div>
);

export const TopUpModal: React.FC<TopUpModalProps> = ({ game, onClose }) => {
    const [userId, setUserId] = useState('');
    const [selectedItem, setSelectedItem] = useState<TopUpItem | null>(null);
    const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuggesting, setIsSuggesting] = useState(false);
    const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
    const [alert, setAlert] = useState<AlertInfo | null>(null);
    const [userIdError, setUserIdError] = useState<string | null>(null);

    useEffect(() => {
        if (game) {
            // Reset state when a new game is selected or modal opens
            setUserId('');
            setSelectedItem(null);
            setSelectedPayment(null);
            setIsProcessing(false);
            setAiSuggestion(null);
            setAlert(null);
            setUserIdError(null);
        }
    }, [game]);

    if (!game) return null;

    const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserId(value);
        // Simple validation: user ID should be numeric and between 5-12 digits.
        if (!/^\d{5,12}$/.test(value) && value.length > 0) {
            setUserIdError('User ID must be 5-12 digits.');
        } else {
            setUserIdError(null);
        }
    };

    const handleGetSuggestion = async () => {
        setIsSuggesting(true);
        setAiSuggestion(null);
        const suggestion = await suggestPromo(game.name, game.topUpItems);
        setAiSuggestion(suggestion);
        setIsSuggesting(false);
    };

    const handleSubmit = () => {
        if (!userId || !selectedItem || !selectedPayment || userIdError) {
            setAlert({ type: AlertType.ERROR, message: 'Please complete all steps before confirming.' });
            return;
        }

        setIsProcessing(true);
        setAlert(null);
        // Simulate a secure transaction
        setTimeout(() => {
            setIsProcessing(false);
            setAlert({ type: AlertType.SUCCESS, message: `Successfully topped up ${selectedItem.name} for User ID: ${userId}. A confirmation has been sent.` });
            setTimeout(onClose, 3000); // Close modal after success
        }, 2000);
    };

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center animate-fade-in" onClick={onClose}>
            <div className="bg-base-200 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-slide-in-up" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 sm:p-8 relative">
                    <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <h2 className="text-3xl font-bold text-white mb-2">Top Up: {game.name}</h2>
                    <p className="text-slate-400 mb-6">Complete the steps below to recharge your account.</p>

                    <ModalSection title="Enter User ID" step={1}>
                        <input
                            type="text"
                            value={userId}
                            onChange={handleUserIdChange}
                            placeholder={`Enter your ${game.name} User ID`}
                            className={`w-full bg-base-300 border ${userIdError ? 'border-red-500' : 'border-slate-600'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary`}
                        />
                        {userIdError && <p className="text-red-400 text-sm mt-1">{userIdError}</p>}
                    </ModalSection>
                    
                    <ModalSection title="Select Amount" step={2}>
                         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {game.topUpItems.map(item => (
                                <div
                                    key={item.id}
                                    onClick={() => setSelectedItem(item)}
                                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${selectedItem?.id === item.id ? 'bg-primary/20 border-primary' : 'bg-base-300 border-slate-600 hover:border-secondary'}`}
                                >
                                    <p className="font-bold text-white">{item.name}</p>
                                    <p className="text-sm text-slate-300">${item.price.toFixed(2)}</p>
                                    {item.bonus && <p className="text-xs text-primary font-semibold mt-1">{item.bonus}</p>}
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 p-4 rounded-lg bg-base-300/50 border border-slate-700">
                             <div className="flex items-center justify-between">
                                 <div>
                                    <h4 className="font-semibold text-white">Need help choosing?</h4>
                                    <p className="text-sm text-slate-400">Let our AI find the best value for you!</p>
                                 </div>
                                <button onClick={handleGetSuggestion} disabled={isSuggesting} className="bg-secondary text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-400 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors flex items-center">
                                    {isSuggesting ? <Spinner size="sm" /> : 'Ask AI'}
                                </button>
                            </div>
                            {aiSuggestion && (
                                <div className="mt-3 text-sm text-slate-300 border-t border-slate-700 pt-3">
                                   <p><strong className="text-secondary">AI Suggestion:</strong> {aiSuggestion}</p>
                                </div>
                            )}
                        </div>
                    </ModalSection>
                    
                    <ModalSection title="Select Payment" step={3}>
                        <div className="flex flex-col space-y-3">
                            {game.paymentMethods.map(method => (
                                <div
                                    key={method.id}
                                    onClick={() => setSelectedPayment(method)}
                                    className={`flex items-center space-x-4 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${selectedPayment?.id === method.id ? 'bg-primary/20 border-primary' : 'bg-base-300 border-slate-600 hover:border-secondary'}`}
                                >
                                    <span className={selectedPayment?.id === method.id ? 'text-primary' : 'text-slate-400'}>{method.icon}</span>
                                    <span className="font-semibold text-white">{method.name}</span>
                                </div>
                            ))}
                        </div>
                    </ModalSection>
                    
                    <div className="mt-8">
                       {alert && <div className="mb-4"><Alert alertInfo={alert} /></div>}
                        <button 
                            onClick={handleSubmit} 
                            disabled={isProcessing}
                            className="w-full bg-primary text-white text-lg font-bold py-3 px-4 rounded-lg hover:bg-teal-400 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                        >
                            {isProcessing ? <Spinner /> : `Confirm Purchase - $${selectedItem?.price.toFixed(2) ?? '0.00'}`}
                        </button>
                        <p className="text-xs text-center text-slate-500 mt-2">
                           Your transaction is secure. By clicking confirm, you agree to our Terms of Service. This is a simulated payment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
