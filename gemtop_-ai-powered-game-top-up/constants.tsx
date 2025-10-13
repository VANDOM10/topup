
import React from 'react';
import type { Game, TopUpItem, PaymentMethod } from './types';

const CreditCardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
);
const WalletIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
);
const BankIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4v1h-4zm-2 10v-1h4v1h-4zm-2 2h8a2 2 0 002-2V7a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);


const VALORANT_ITEMS: TopUpItem[] = [
    { id: 'val-1', name: '125 Points', price: 1.99 },
    { id: 'val-2', name: '475 Points', price: 4.99 },
    { id: 'val-3', name: '1000 Points', price: 9.99, bonus: '50 Bonus' },
    { id: 'val-4', name: '2050 Points', price: 19.99, bonus: '150 Bonus' },
    { id: 'val-5', name: '5350 Points', price: 49.99, bonus: '450 Bonus' },
    { id: 'val-6', name: '11000 Points', price: 99.99, bonus: '1000 Bonus' },
];

const GENSHIN_ITEMS: TopUpItem[] = [
    { id: 'gen-1', name: '60 Crystals', price: 0.99 },
    { id: 'gen-2', name: '300 Crystals', price: 4.99, bonus: '30 Bonus' },
    { id: 'gen-3', name: '980 Crystals', price: 14.99, bonus: '110 Bonus' },
    { id: 'gen-4', name: '1980 Crystals', price: 29.99, bonus: '260 Bonus' },
    { id: 'gen-5', name: '3280 Crystals', price: 49.99, bonus: '600 Bonus' },
    { id: 'gen-6', name: '6480 Crystals', price: 99.99, bonus: '1600 Bonus' },
];

const APEX_ITEMS: TopUpItem[] = [
    { id: 'apex-1', name: '1000 Coins', price: 9.99 },
    { id: 'apex-2', name: '2150 Coins', price: 19.99, bonus: '150 Bonus' },
    { id: 'apex-3', name: '4350 Coins', price: 39.99, bonus: '350 Bonus' },
    { id: 'apex-4', name: '6700 Coins', price: 59.99, bonus: '700 Bonus' },
    { id: 'apex-5', name: '11500 Coins', price: 99.99, bonus: '1500 Bonus' },
];

const PAYMENT_METHODS: PaymentMethod[] = [
    { id: 'pm-1', name: 'Credit Card', icon: <CreditCardIcon /> },
    { id: 'pm-2', name: 'E-Wallet', icon: <WalletIcon /> },
    { id: 'pm-3', name: 'Bank Transfer', icon: <BankIcon /> },
];

export const GAMES: Game[] = [
    {
        id: 1,
        name: 'Valorant',
        genre: 'Tactical Shooter',
        imageUrl: 'https://picsum.photos/seed/valorant/400/500',
        topUpItems: VALORANT_ITEMS,
        paymentMethods: PAYMENT_METHODS,
    },
    {
        id: 2,
        name: 'Genshin Impact',
        genre: 'Action RPG',
        imageUrl: 'https://picsum.photos/seed/genshin/400/500',
        topUpItems: GENSHIN_ITEMS,
        paymentMethods: PAYMENT_METHODS,
    },
    {
        id: 3,
        name: 'Apex Legends',
        genre: 'Battle Royale',
        imageUrl: 'https://picsum.photos/seed/apex/400/500',
        topUpItems: APEX_ITEMS,
        paymentMethods: PAYMENT_METHODS,
    },
    {
        id: 4,
        name: 'Cyber Odyssey',
        genre: 'Sci-Fi MMO',
        imageUrl: 'https://picsum.photos/seed/cyber/400/500',
        topUpItems: GENSHIN_ITEMS,
        paymentMethods: PAYMENT_METHODS,
    },
     {
        id: 5,
        name: 'Mystic Realms',
        genre: 'Fantasy RPG',
        imageUrl: 'https://picsum.photos/seed/mystic/400/500',
        topUpItems: VALORANT_ITEMS,
        paymentMethods: PAYMENT_METHODS,
    },
     {
        id: 6,
        name: 'Starfall Arena',
        genre: 'MOBA',
        imageUrl: 'https://picsum.photos/seed/starfall/400/500',
        topUpItems: APEX_ITEMS,
        paymentMethods: PAYMENT_METHODS,
    }
];
