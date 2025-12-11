import React, { useState } from 'react';
import { VocabItem } from '../types';
import { Volume2, RotateCw } from 'lucide-react';

interface FlashcardProps {
  item: VocabItem;
}

export const Flashcard: React.FC<FlashcardProps> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(item.word);
    utterance.lang = 'en-GB';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div 
      className={`flip-card w-full h-80 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner shadow-xl shadow-sky-100 rounded-xl">
        {/* Front */}
        <div className="flip-card-front bg-white border border-slate-200 flex flex-col items-center justify-center p-6 text-slate-800 rounded-xl">
          <div className="absolute top-4 right-4 text-slate-300">
            <RotateCw size={20} />
          </div>
          <h3 className="text-4xl font-bold mb-4 text-sky-600 text-center">{item.word}</h3>
          <p className="text-lg text-slate-500 font-mono mb-6">{item.transcription}</p>
          <button 
            onClick={handleSpeak}
            className="p-3 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-600 transition-colors"
          >
            <Volume2 size={24} />
          </button>
          <p className="absolute bottom-6 text-sm text-slate-400">Tap to flip</p>
        </div>

        {/* Back */}
        <div className="flip-card-back bg-gradient-to-br from-sky-500 to-cyan-600 text-white flex flex-col items-center justify-center p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-4 border-b border-sky-300 pb-2">Definition</h4>
          <p className="text-lg text-center leading-relaxed font-medium">
            {item.definition}
          </p>
          <p className="absolute bottom-6 text-sm text-sky-200">Tap to flip back</p>
        </div>
      </div>
    </div>
  );
};