
import React from 'react';
import { AlertType, AlertInfo } from '../types';

interface AlertProps {
    alertInfo: AlertInfo | null;
}

const ICONS = {
    [AlertType.SUCCESS]: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    [AlertType.ERROR]: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    [AlertType.INFO]: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
};

const STYLES = {
    [AlertType.SUCCESS]: 'bg-green-500/20 text-green-300 border-green-500',
    [AlertType.ERROR]: 'bg-red-500/20 text-red-300 border-red-500',
    [AlertType.INFO]: 'bg-blue-500/20 text-blue-300 border-blue-500',
};

export const Alert: React.FC<AlertProps> = ({ alertInfo }) => {
    if (!alertInfo) return null;

    const { type, message } = alertInfo;

    return (
        <div className={`flex items-center space-x-3 p-4 rounded-lg border ${STYLES[type]} animate-fade-in`} role="alert">
            <div>{ICONS[type]}</div>
            <p className="text-sm font-medium">{message}</p>
        </div>
    );
};
