
import React from 'react';
import type { Game } from '../types';

interface GameCardProps {
    game: Game;
    onSelect: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onSelect }) => {
    return (
        <div 
            className="group relative rounded-xl overflow-hidden bg-base-200 shadow-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fade-in"
            onClick={() => onSelect(game)}
        >
            <img src={game.imageUrl} alt={game.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <h3 className="text-2xl font-bold">{game.name}</h3>
                <p className="text-sm text-slate-300">{game.genre}</p>
                <button className="mt-4 w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                    Top Up Now
                </button>
            </div>
        </div>
    );
};
