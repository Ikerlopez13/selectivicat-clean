'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import AdSenseAd from '@/components/AdSenseAd';
import QuestionSeleTest from '@/components/QuestionSeleTest';
import OnboardingSeleTest from '@/components/OnboardingSeleTest';
import type { Question } from "@/types/questions";

const isProd = process.env.NODE_ENV === 'production';

interface CustomUser {
  hasPremiumStatus?: boolean;
}

interface CustomSession {
  user?: CustomUser;
}

// Configuración de materias
const subjectConfig = {
  mates: {
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
  bio: {
    name: 'Biologia',
    file: 'biologia.json',
    icon: '🧬'
  }
};

// Agrupar materias por categoría
const subjectsByCategory = {
  cientific: ['mates', 'fisica', 'quimica', 'bio'],
  social: [],
  humanistic: []
};

interface GameState {
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: number | null;
  showExplanation: boolean;
  isAnswerCorrect: boolean | null;
  isGameOver: boolean;
}

function getSupportMessage(score: number, total: number): string {
  const percentage = (score / total) * 100;
  if (percentage >= 90) return "Impressionant! Estàs més que preparat/da per a la Selectivitat! 🌟";
  if (percentage >= 70) return "Molt bé! Vas pel bon camí, segueix així! 💪";
  if (percentage >= 50) return "Vas bé, però encara pots millorar. Segueix practicant! 📚";
  return "No et desanimis! Amb més pràctica ho conseguiràs! 💪";
}

export default function SeleTestPage() {
  console.log("DEBUG: ENTRANDO EN SELETEStPAGE");
  const { data: session } = useSession() as { data: CustomSession | null };
  const router = useRouter();
  
  // Estado del juego
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null,
    showExplanation: false,
    isAnswerCorrect: null,
    isGameOver: false
  });
  
  // Estado de la pregunta actual y configuración
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    if (gameState.currentQuestionIndex > 0 && gameState.currentQuestionIndex % 5 === 0) {
      setShowAd(true);
    }
  }, [gameState.currentQuestionIndex]);

  // Cargar pregunta actual
  useEffect(() => {
    if (selectedSubject && questions.length > 0) {
      setCurrentQuestion(questions[gameState.currentQuestionIndex]);
    }
  }, [selectedSubject, questions, gameState.currentQuestionIndex]);

  // Cargar preguntas cuando se selecciona una materia
  useEffect(() => {
    async function loadQuestions() {
      if (selectedSubject) {
        const subject = subjectConfig[selectedSubject as keyof typeof subjectConfig];
        try {
          const response = await fetch(`/api/questions/${subject.file}`);
          const data = await response.json();
          setQuestions(data);
        } catch (error) {
          console.error('Error loading questions:', error);
        }
      }
    }
    
    if (selectedSubject) {
      loadQuestions();
    }
  }, [selectedSubject]);

  // Manejar la selección de materia
  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setIsOnboardingComplete(true);
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswer: null,
      showExplanation: false,
      isAnswerCorrect: null,
      isGameOver: false
    });
  };

  // Manejar la respuesta del usuario
  const handleAnswerSubmit = (answer: number) => {
    if (!currentQuestion || gameState.showExplanation) return;

    const isCorrect = answer === currentQuestion.respuestaCorrecta;
    
    setGameState(prev => ({
      ...prev,
      selectedAnswer: answer,
      showExplanation: true,
      isAnswerCorrect: isCorrect,
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  };

  // Pasar a la siguiente pregunta
  const handleNextQuestion = () => {
    if (!currentQuestion) return;

    const nextIndex = gameState.currentQuestionIndex + 1;
    
    if (nextIndex >= questions.length) {
      setGameState(prev => ({ ...prev, isGameOver: true }));
    } else {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: nextIndex,
        selectedAnswer: null,
        showExplanation: false,
        isAnswerCorrect: null
      }));
    }
  };

  // Reiniciar el juego
  const handleRestart = () => {
    setIsOnboardingComplete(false);
    setQuestions([]);
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswer: null,
      showExplanation: false,
      isAnswerCorrect: null,
      isGameOver: false
    });
  };

  // Compartir resultados
  const handleShare = () => {
    const text = `He fet el SeleTest i he encertat ${gameState.score} de ${questions.length} preguntes! 🎓 Prova-ho tu també a selectivicat.com`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (!isOnboardingComplete) {
    console.log("DEBUG: RETURN ONBOARDING");
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <OnboardingSeleTest
          onComplete={(selectedSubjects, totalQuestions) => {
            handleSubjectSelect(selectedSubjects[0] || 'mates');
          }}
        />
      </div>
    );
  }

  if (gameState.isGameOver) {
    const notaSobre14 = ((gameState.score / questions.length) * 14).toFixed(2);
    console.log('DEBUG: RETURN GAME OVER', { score: gameState.score, total: questions.length, notaSobre14 });
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 mb-6">
            <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75V17.75M12 6.25V6.25M6.25 12H6.25M17.75 12H17.75M8.5 8.5L8.5 8.5M15.5 15.5L15.5 15.5M8.5 15.5L8.5 15.5M15.5 8.5L15.5 8.5" /></svg>
          </span>
          <h2 className="text-3xl font-bold mb-6">Test completat!</h2>
          <p className="text-2xl mb-2">
            La teva puntuació: <span className="font-bold text-yellow-600">{gameState.score}</span> de {questions.length}
          </p>
          <div className="my-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg inline-block">
            <span className="block text-lg font-semibold text-yellow-700">Nota simulada sobre 14:</span>
            <span className="text-3xl font-bold text-yellow-600">{notaSobre14} / 14</span>
          </div>
          <p className="text-xl mb-8 text-gray-600">{getSupportMessage(gameState.score, questions.length)}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <button
              onClick={handleShare}
              className="flex-1 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-lg font-medium"
            >
              Compartir per WhatsApp
            </button>
            <button
              onClick={handleRestart}
              className="flex-1 py-4 bg-selectivi-yellow text-white rounded-lg hover:bg-selectivi-yellow/90 transition-colors text-lg font-medium"
            >
              Tornar a començar
            </button>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="/premium"
              className="py-4 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium shadow-md"
            >
              ¿Quieres usar SeleTest de forma ilimitada? Hazte premium
            </a>
          </div>
        </div>
      </div>
    );
  }

  console.log("DEBUG: RETURN MAIN FLOW");
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarMain />
      
      <main className="container mx-auto px-4 py-12">
        {showAd && !session?.user?.hasPremiumStatus && isProd && (
          <div className="max-w-4xl mx-auto mb-8">
            <AdSenseAd slot="1859826246" />
          </div>
        )}
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Pregunta {gameState.currentQuestionIndex + 1} de {questions.length}
              </h2>
              <div className="text-xl font-semibold text-gray-700">
                Puntuació: {gameState.score} / {gameState.currentQuestionIndex + 1}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-selectivi-yellow h-3 rounded-full transition-all duration-300"
                style={{
                  width: `${((gameState.currentQuestionIndex + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {currentQuestion && (
            <QuestionSeleTest
              question={currentQuestion}
              selectedAnswer={gameState.selectedAnswer}
              showExplanation={gameState.showExplanation}
              isAnswerCorrect={gameState.isAnswerCorrect}
              onAnswerSubmit={handleAnswerSubmit}
              onNextQuestion={handleNextQuestion}
            />
          )}
        </div>
      </main>

      <FooterMain />
    </div>
  );
} 