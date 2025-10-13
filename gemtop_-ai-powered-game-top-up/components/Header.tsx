
import React from 'react';

const GemIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.5 9.5a.5.5 0 01.5-.5h8a.5.5 0 010 1H6a.5.5 0 01-.5-.5zm.707 3.707a.5.5 0 01.707 0L10 15.207l2.086-2.086a.5.5 0 11.707.707l-2.5 2.5a.5.5 0 01-.707 0l-2.5-2.5a.5.5 0 010-.707z" clipRule="evenodd" />
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.08 6.643a.5.5 0 01.632-.632L10 9.293l5.288-3.282a.5.5 0 01.632.632L10 10.707l-5.92-4.064z" />
    </svg>
);


export const Header: React.FC = () => {
    return (
        <header className="bg-base-200/50 backdrop-blur-sm sticky top-0 z-40 shadow-lg shadow-black/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <GemIcon/>
                        <h1 className="text-2xl font-bold text-white tracking-wider">
                            Gem<span className="text-primary">Top</span>
                        </h1>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-slate-300 hover:text-primary transition-colors duration-200">Games</a>
                        <a href="#" className="text-slate-300 hover:text-primary transition-colors duration-200">Promotions</a>
                        <a href="#" className="text-slate-300 hover:text-primary transition-colors duration-200">Support</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};
