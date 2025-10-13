
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GameCard } from './components/GameCard';
import { TopUpModal } from './components/TopUpModal';
import { GAMES } from './constants';
import type { Game } from './types';

const App: React.FC = () => {
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    const handleGameSelect = (game: Game) => {
        setSelectedGame(game);
    };

    const handleCloseModal = () => {
        setSelectedGame(null);
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-10 animate-fade-in">
                    <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                        Choose Your Game
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
                        Select a game to top up. Instant delivery, secure payments, and AI-powered deals.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {GAMES.map((game, index) => (
                         <div key={game.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-slide-in-up opacity-0">
                           <GameCard game={game} onSelect={handleGameSelect} />
                         </div>
                    ))}
                </div>
            </main>
            <Footer />
            
            {selectedGame && <TopUpModal game={selectedGame} onClose={handleCloseModal} />}
        </div>
    );
};

export default App;
