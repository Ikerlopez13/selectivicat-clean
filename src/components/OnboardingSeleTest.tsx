'use client';

import React, { useState } from 'react';
import { useSession } from "next-auth/react";

interface SubjectConfig {
  name: string;
  file: string;
  icon: string;
}

type CategoryType = 'cientific' | 'social' | 'humanistic' | 'general';
type SubjectId = keyof typeof subjectConfig;

// Configuración de materias
const subjectConfig = {
  matematiques: {
    name: 'Matemàtiques',
    file: 'matematiques.json',
    icon: '📐'
  },
  fisica: {
    name: 'Física',
    file: 'fisica.json',
    icon: '⚡'
  },
  quimica: {
    name: 'Química',
    file: 'quimica.json',
    icon: '🧪'
  },
  biologia: {
    name: 'Biologia',
    file: 'biologia.json',
    icon: '🧬'
  },
  filosofia: {
    name: 'Filosofia',
    file: 'filosofia.json',
    icon: '🤔'
  },
  matematiques_ccss: {
    name: 'Matemàtiques CCSS',
    file: 'matematiques_ccss.json',
    icon: '📊'
  },
  geografia: {
    name: 'Geografia',
    file: 'geografia.json',
    icon: '🌍'
  },
  historia: {
    name: 'Història',
    file: 'historia.json',
    icon: '📚'
  },
  catala: {
    name: 'Català',
    file: 'catala.json',
    icon: '📝'
  },
  castella: {
    name: 'Castellano',
    file: 'castellano.json',
    icon: '✍️'
  }
} as const;

// Agrupar materias por categoría
const subjectsByCategory: Record<CategoryType, SubjectId[]> = {
  general: ['catala', 'castella', 'historia', 'filosofia'],
  cientific: ['matematiques', 'fisica', 'quimica', 'biologia'],
  social: ['matematiques_ccss', 'geografia'],
  humanistic: []
};

interface OnboardingSeleTestProps {
  onComplete: (selectedSubjects: string[], totalQuestions: number) => void;
}

export default function OnboardingSeleTest({ onComplete }: OnboardingSeleTestProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('general');
  const [selectedSubjects, setSelectedSubjects] = useState<SubjectId[]>([]);

  const handleSubjectToggle = (subjectId: SubjectId) => {
    setSelectedSubjects(prev =>
      prev.includes(subjectId)
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">
          <span className="text-selectivi-blue">Sele</span>
          <span className="text-selectivi-yellow">Test</span>
        </h2>
        <p className="text-gray-600 mb-2">Descobreix com et podria anar a la Selectivitat amb la nostra predicció personalitzada</p>
        <p className="text-sm text-gray-500">Selecciona les assignatures que cursaràs per obtenir una predicció més precisa de la teva nota</p>
      </div>

      <div className="space-y-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setSelectedCategory('general')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedCategory === 'general'
                ? 'bg-selectivi-yellow text-gray-900'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Fase General
          </button>
          <button
            onClick={() => setSelectedCategory('cientific')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedCategory === 'cientific'
                ? 'bg-selectivi-yellow text-gray-900'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Científic
          </button>
          <button
            onClick={() => setSelectedCategory('social')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedCategory === 'social'
                ? 'bg-selectivi-yellow text-gray-900'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Social
          </button>
          <button
            onClick={() => setSelectedCategory('humanistic')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedCategory === 'humanistic'
                ? 'bg-selectivi-yellow text-gray-900'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Humanístic
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectsByCategory[selectedCategory].map((subjectId) => {
            const subject = subjectConfig[subjectId];
            return (
              <button
                key={subjectId}
                onClick={() => handleSubjectToggle(subjectId)}
                className={`p-6 rounded-lg text-center transition-all duration-300 ${
                  selectedSubjects.includes(subjectId)
                    ? 'bg-selectivi-yellow text-white'
                    : 'bg-white hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">{subject.icon}</span>
                  <span className="text-lg font-medium">{subject.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Nombre de preguntes</h3>
          <input
            type="range"
            min={1}
            max={7}
            defaultValue={7}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-selectivi-yellow"
          />
          <div className="text-right text-gray-600">7 / 7</div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => onComplete(selectedSubjects, 7)}
            className="bg-selectivi-yellow text-white px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Començar
          </button>
        </div>
      </div>
    </div>
  );
} 