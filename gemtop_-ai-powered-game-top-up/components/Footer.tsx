
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-base-200 mt-12 py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
                <p>&copy; {new Date().getFullYear()} GemTop. All rights reserved.</p>
                <p className="text-sm mt-1">A secure and AI-enhanced top-up service for gamers.</p>
            </div>
        </footer>
    );
};
