import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SaasRecommendationProps {
  className?: string;
}

export default function SaasRecommendation({ className = '' }: SaasRecommendationProps) {
  return (
    <div className={`bg-black rounded-xl p-6 shadow-lg ${className}`}>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="#FF2D70" />
            <circle cx="50" cy="50" r="35" fill="black" />
          </svg>
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-white">Necessites concentrar-te en els teus estudis?</h3>
          <p className="text-gray-300 mt-2">
            Prova <span className="font-medium text-[#FF2D70]">FocusCircle</span>, el nostre gestor de tasques amb temporitzador Pomodoro 
            per maximitzar la teva productivitat i organitzar millor el teu temps d'estudi.
          </p>
          
          <div className="mt-4">
            <a 
              href="https://focuscircle.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF2D70] hover:bg-[#FF4585] text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              <span>Visitar FocusCircle</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 