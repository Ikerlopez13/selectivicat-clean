"use client"

import React, { useState, useEffect } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import Image from 'next/image';
import HeroSeleTest from '@/components/HeroSeleTest';
import { useSession } from "next-auth/react";
import { standardQuestions, premiumQuestions, premiumOnlyQuestions } from "@/data/questions";
import type { Question } from "@/types/questions";
import { matematiques } from '@/data/questions/matematiques';
import { getMatematiquesList } from '@/utils/matematiques-utils';
import AdSenseAd from '@/components/AdSenseAd';

// At the top of the file, add this line after the imports
const isProd = process.env.NODE_ENV === 'production';

// Mapeo de categorías a archivos JSON
const categoryToJsonFile: { [key: string]: string } = {
  'Biologia': 'biologia.json',
  'Química': 'quimica.json',
  'Física': 'fisica.json',
  'Geografia': 'geografia.json',
  'Història': 'història.json',
  'Matemàtiques': 'matematiques.json',
  'Matemàtiques CCSS': 'matematiques_ccss.json',
  'Filosofia': 'filosofia.json'
};

// Definición de interfaces y tipos
interface QuestionProps {
  question?: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
  hasAnswered: boolean;
}

interface Subject {
  id: string;
  name: string;
  category: string;
}

interface CustomUser {
  hasPremiumStatus?: boolean;
}

interface CustomSession {
  user?: CustomUser;
}

interface SubjectPhases {
  general: Record<string, string>;
  scientific: Record<string, string>;
  social: Record<string, string>;
}

const subjectsByPhase: SubjectPhases = {
  general: {
    'historia': 'Història',
    'filosofia': 'Filosofia'
  },
  scientific: {
    'matematiques': 'Matemàtiques',
    'fisica': 'Física',
    'quimica': 'Química',
    'biologia': 'Biologia'
  },
  social: {
    'matematiques-aplicades': 'Matemàtiques CCSS',
    'geografia': 'Geografia'
  }
};

// Lista de asignaturas disponibles (solo las que tienen preguntas)
const availableSubjects: Subject[] = [
  // Fase General
  { id: 'historia', name: 'Història', category: 'Fase General' },
  { id: 'filosofia', name: 'Filosofia', category: 'Fase General' },
  
  // Fase Específica - Ciencias
  { id: 'matematiques', name: 'Matemàtiques', category: 'Científic' },
  { id: 'fisica', name: 'Física', category: 'Científic' },
  { id: 'quimica', name: 'Química', category: 'Científic' },
  { id: 'biologia', name: 'Biologia', category: 'Científic' },
  
  // Fase Específica - Humanidades y Ciencias Sociales
  { id: 'matematiques-aplicades', name: 'Matemàtiques CCSS', category: 'Social' },
  { id: 'geografia', name: 'Geografia', category: 'Social' }
];

// Mapeo de IDs a categorías
const subjectIdToCategory: Record<string, string> = {
  'matematiques': 'Matemàtiques',
  'fisica': 'Física',
  'filosofia': 'Filosofia',
  'quimica': 'Química',
  'biologia': 'Biologia',
  'matematiques-aplicades': 'Matemàtiques CCSS',
  'geografia': 'Geografia',
  'historia': 'Història'
};

// Obtener la lista de matemáticas
const matematiquesList = getMatematiquesList();

// Utility function for formatting text with LaTeX
const formatText = (text: string) => {
  if (!text) return '';
  
  const cleanDelimiters = (formula: string) => {
    return formula
      .replace(/\\\[|\\\]/g, '')
      .replace(/\\\(|\\\)/g, '')
      .replace(/\$\$/g, '')
      .replace(/\$/g, '')
      .trim();
  };

  const parts = text.split(/(\$\$.*?\$\$|\$.*?\$|\\\[.*?\\\]|\\\(.*?\\\))/gs);
  
  return parts.map((part: string, index: number) => {
    const isDisplayMath = part.startsWith('$$') || part.startsWith('\\[');
    const isInlineMath = part.startsWith('$') || part.startsWith('\\(');
    
    if (isDisplayMath || isInlineMath) {
      const formula = cleanDelimiters(part);
      try {
        return (
          <span key={index} className={`${isDisplayMath ? 'block my-4' : 'inline-block mx-1'}`}>
            {isDisplayMath ? (
              <BlockMath math={formula} errorColor="#FF0000" />
            ) : (
              <InlineMath math={formula} errorColor="#FF0000" />
            )}
          </span>
        );
      } catch (error) {
        console.error('Error rendering LaTeX:', error, formula);
        return <span key={index} className="text-red-500">{formula}</span>;
      }
    }
    return <span key={index}>{part}</span>;
  });
};

// Componente para mostrar una pregunta individual
const Question: React.FC<QuestionProps> = ({ 
  question,
  selectedAnswer,
  onSelectAnswer,
  hasAnswered 
}) => {
  const { data: session } = useSession() as { data: CustomSession | null };
  const isPremium = !!session?.user?.hasPremiumStatus;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Intentar cargar los anuncios cuando el componente se monta
    if (!isPremium && isClient) {
      try {
        const adsbygoogle = (window as any).adsbygoogle || [];
        const pushAd = () => {
          try {
            adsbygoogle.push({});
          } catch (error) {
            console.error('Error pushing ad:', error);
          }
        };

        // Intentar cargar los anuncios varias veces
        pushAd(); // Para el primer anuncio
        pushAd(); // Para el segundo anuncio

        // Backup: intentar cargar de nuevo después de un breve retraso
        setTimeout(() => {
          pushAd();
          pushAd();
        }, 2000);
      } catch (error) {
        console.error('Error loading ads:', error);
      }
    }
  }, [isPremium, isClient]);

  if (!question) return null;

  const isCorrect = hasAnswered && selectedAnswer === question.respuestaCorrecta.toString();
  const isIncorrect = hasAnswered && selectedAnswer && selectedAnswer !== question.respuestaCorrecta.toString();

  return (
    <div className="flex justify-between items-start gap-4">
      {!isPremium && isClient && (
        <div className="hidden xl:block w-[160px] sticky top-24">
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '160px', height: '600px' }}
            data-ad-client="ca-pub-4829722017444918"
            data-ad-slot="1859826246"
            data-ad-format="vertical"
            data-full-width-responsive="false">
          </ins>
        </div>
      )}

      <div className={`${isPremium ? 'w-full max-w-3xl mx-auto' : 'flex-1 max-w-3xl'}`}>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
              question.categoria === "Història" ? "bg-red-100 text-red-800" :
              question.categoria === "Filosofia" ? "bg-purple-100 text-purple-800" :
              question.categoria === "Física" ? "bg-blue-100 text-blue-800" :
              "bg-green-100 text-green-800"
            }`}>
              {question.categoria}
            </span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">{formatText(question.pregunta)}</h3>
          
          <div className="space-y-3">
            {question.opciones.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => !hasAnswered && onSelectAnswer(index.toString())}
                disabled={hasAnswered}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedAnswer === index.toString() && isCorrect ? "bg-green-100 border-green-500 text-green-800" :
                  selectedAnswer === index.toString() && isIncorrect ? "bg-red-100 border-red-500 text-red-800" :
                  selectedAnswer === index.toString() ? "bg-gray-100 border-gray-300" :
                  hasAnswered && index.toString() === question.respuestaCorrecta.toString() ? "bg-green-50 border-green-300 text-green-800" :
                  "hover:bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center">
                  <span className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 ${
                    selectedAnswer === index.toString() && isCorrect ? "bg-green-500 text-white" :
                    selectedAnswer === index.toString() && isIncorrect ? "bg-red-500 text-white" :
                    selectedAnswer === index.toString() ? "bg-gray-300" :
                    hasAnswered && index.toString() === question.respuestaCorrecta.toString() ? "bg-green-500 text-white" :
                    "bg-gray-200"
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-grow text-gray-700">{formatText(option)}</span>
                </div>
              </button>
            ))}
          </div>

          {hasAnswered && (
            <div className="mt-6 space-y-4">
              <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                <h4 className="font-semibold mb-2">Explicación:</h4>
                <p className="text-gray-700">
                  {formatText(question.explicacion)}
                </p>
              </div>
              <button
                onClick={() => onSelectAnswer('next')}
                className="w-full bg-selectivi-yellow text-white py-3 rounded-lg hover:bg-selectivi-yellow/90 transition-colors"
              >
                Siguiente pregunta
              </button>
            </div>
          )}
        </div>
      </div>

      {!isPremium && isClient && (
        <div className="hidden xl:block w-[160px] sticky top-24">
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '160px', height: '600px' }}
            data-ad-client="ca-pub-4829722017444918"
            data-ad-slot="1859826246"
            data-ad-format="vertical"
            data-full-width-responsive="false">
          </ins>
        </div>
      )}
    </div>
  );
};

// Componente de Onboarding
const Onboarding: React.FC<{
  onComplete: (selectedSubjects: string[], totalQuestions: number) => void;
  isPremium: boolean;
}> = ({ onComplete, isPremium }) => {
  const { data: session } = useSession() as { data: CustomSession | null };
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [totalQuestions, setTotalQuestions] = useState(1);
  const [maxQuestions, setMaxQuestions] = useState(0);

  // Calcular el número máximo de preguntas disponibles cuando cambian las asignaturas seleccionadas
  useEffect(() => {
    let availableQuestions = 0;
    
    selectedSubjects.forEach(subjectId => {
      const category = subjectIdToCategory[subjectId];
      const subjectQuestions = [...standardQuestions, ...(isPremium ? premiumQuestions : [])].filter(q => q.categoria === category);
      availableQuestions += subjectQuestions.length;
    });

    setMaxQuestions(availableQuestions);
    // Ajustar el número de preguntas seleccionadas si excede el nuevo máximo
    setTotalQuestions(prev => Math.min(prev, availableQuestions));
  }, [selectedSubjects, isPremium]);

  const handleSubjectToggle = (subjectId: string) => {
    setSelectedSubjects(prev => {
      if (prev.includes(subjectId)) {
        return prev.filter(id => id !== subjectId);
      } else {
        return [...prev, subjectId];
      }
    });
  };

  const handleComplete = () => {
    if (selectedSubjects.length > 0 && totalQuestions > 0) {
      onComplete(selectedSubjects, totalQuestions);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl font-bold">
              <span className="text-selectivi-blue">Sele</span>
              <span className="text-selectivi-yellow">Test</span>
            </h2>
          </div>
          <p className="text-gray-600 mb-2">Descobreix com et podria anar a la Selectivitat amb la nostra predicció personalitzada</p>
          <p className="text-sm text-gray-500">Selecciona les assignatures que cursaràs per obtenir una predicció més precisa de la teva nota</p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Selecciona les assignatures</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {availableSubjects.map(subject => (
                <button
                  key={subject.id}
                  onClick={() => handleSubjectToggle(subject.id)}
                  className={`p-4 rounded-lg border transition-all ${
                    selectedSubjects.includes(subject.id)
                      ? 'bg-selectivi-yellow text-white border-selectivi-yellow'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {subject.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Nombre de preguntes</h3>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={maxQuestions > 0 ? 1 : 0}
                max={maxQuestions}
                value={totalQuestions}
                onChange={(e) => setTotalQuestions(Math.max(1, Number(e.target.value)))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-selectivi-yellow"
                disabled={maxQuestions === 0}
              />
              <span className="text-gray-600 min-w-[4rem] text-right">
                {maxQuestions > 0 ? `${totalQuestions} / ${maxQuestions}` : '0'}
              </span>
            </div>
          </div>

          <button
            onClick={handleComplete}
            disabled={selectedSubjects.length === 0 || maxQuestions === 0}
            className={`w-full py-3 rounded-lg text-center transition-all ${
              selectedSubjects.length > 0 && maxQuestions > 0
                ? 'bg-selectivi-yellow text-white hover:bg-selectivi-yellow/90'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            Començar
          </button>

          {selectedSubjects.length === 0 && (
            <p className="text-red-500 text-center text-sm">
              Selecciona almenys una assignatura per continuar
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente principal SeleTest
export default function SeleTest() {
  const { data: session } = useSession() as { data: CustomSession | null };
  const isPremium = !!session?.user?.hasPremiumStatus;
  const [isClient, setIsClient] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSelectAnswer = (answer: string) => {
    if (!hasAnswered) {
      setSelectedAnswer(answer);
      setHasAnswered(true);
      if (parseInt(answer) === questions[currentQuestionIndex]?.respuestaCorrecta) {
        setScore(prev => prev + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
    } else {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setShowOnboarding(true);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setGameOver(false);
    setScore(0);
  };

  const loadInitialQuestions = async (selectedSubjects: string[], totalQuestions: number) => {
    try {
      let availableQuestions: Question[] = [];
      
      for (const subjectId of selectedSubjects) {
        const category = subjectIdToCategory[subjectId];
        const fileName = categoryToJsonFile[category];
        
        if (fileName) {
          try {
            const response = await fetch(`/data/questions/${fileName}`);
            const data = await response.json();
            
            // Los archivos JSON tienen una estructura { standard: [], premium: [] }
            if (data.standard) {
              // Si el usuario es premium, incluir todas las preguntas
              if (isPremium && data.premium) {
                availableQuestions = [...availableQuestions, ...data.standard, ...data.premium];
              } else {
                // Si no es premium, solo incluir preguntas estándar
                availableQuestions = [...availableQuestions, ...data.standard];
              }
            }
          } catch (error) {
            console.error(`Error loading questions for ${category}:`, error);
          }
        }
      }

      if (availableQuestions.length === 0) {
        console.warn('No se encontraron preguntas para los criterios seleccionados');
        return;
      }

      // Mezclar y seleccionar preguntas
      const shuffledQuestions = availableQuestions
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(totalQuestions, availableQuestions.length));

      setQuestions(shuffledQuestions);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setHasAnswered(false);
      setGameOver(false);
      setScore(0);
    } catch (error) {
      console.error('Error loading questions:', error);
    }
  };

  const handleOnboardingComplete = (selectedSubjects: string[], totalQuestions: number) => {
    setShowOnboarding(false);
    loadInitialQuestions(selectedSubjects, totalQuestions);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <NavbarMain />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-selectivi-yellow"></div>
        </div>
        <FooterMain />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavbarMain />
      <div className="pt-24 pb-16 px-4 md:px-8 flex-grow">
        {showOnboarding ? (
          <Onboarding onComplete={handleOnboardingComplete} isPremium={isPremium} />
        ) : !gameOver ? (
          <div className="container mx-auto">
            <div className="mb-6 max-w-3xl mx-auto">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  Pregunta {currentQuestionIndex + 1} de {questions.length}
                </h2>
                <span className="text-gray-500">
                  Puntuación: {score} / {questions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-selectivi-yellow h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-start gap-4 max-w-[1600px] mx-auto">
              {!isPremium && isClient && (
                <div className="hidden xl:block w-full max-w-[300px]">
                  <AdSenseAd slot="1859826246" />
                </div>
              )}

              <div className={`flex-1 max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6`}>
                <div className="mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    questions[currentQuestionIndex]?.categoria === "Història" ? "bg-red-100 text-red-800" :
                    questions[currentQuestionIndex]?.categoria === "Filosofia" ? "bg-purple-100 text-purple-800" :
                    questions[currentQuestionIndex]?.categoria === "Física" ? "bg-blue-100 text-blue-800" :
                    "bg-green-100 text-green-800"
                  }`}>
                    {questions[currentQuestionIndex]?.categoria}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-6">
                  {formatText(questions[currentQuestionIndex]?.pregunta || '')}
                </h3>

                <div className="space-y-3">
                  {questions[currentQuestionIndex]?.opciones.map((opcion, index) => {
                    const letter = String.fromCharCode(65 + index);
                    const isSelected = selectedAnswer === index.toString();
                    const isCorrect = hasAnswered && index === questions[currentQuestionIndex].respuestaCorrecta;
                    const isIncorrect = hasAnswered && isSelected && !isCorrect;

                    return (
                      <button
                        key={index}
                        onClick={() => handleSelectAnswer(index.toString())}
                        disabled={hasAnswered}
                        className={`w-full text-left p-4 rounded-lg transition-all ${
                          isSelected ? 'border-2 ' : 'border '
                        }${
                          isCorrect ? 'bg-green-50 border-green-500 text-green-700' :
                          isIncorrect ? 'bg-red-50 border-red-500 text-red-700' :
                          isSelected ? 'bg-blue-50 border-blue-500' :
                          'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="font-semibold mr-2">{letter}.</span>
                        {formatText(opcion)}
                      </button>
                    );
                  })}
                </div>

                {hasAnswered && (
                  <div className="mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2">Explicación:</h4>
                      <p>{questions[currentQuestionIndex]?.explicacion}</p>
                    </div>
                    <button
                      onClick={handleNextQuestion}
                      className="w-full bg-selectivi-yellow hover:bg-yellow-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                    >
                      Siguiente pregunta
                    </button>
                  </div>
                )}
              </div>

              {!isPremium && isClient && (
                <div className="hidden xl:block w-full max-w-[300px]">
                  <AdSenseAd slot="1859826246" />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">¡Test completado!</h2>
            <p className="text-xl mb-8">
              Tu puntuación: <span className="font-bold text-selectivi-yellow">{score}</span> de {questions.length}
            </p>
            <button
              onClick={handleRestart}
              className="bg-selectivi-yellow hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Volver a empezar
            </button>
          </div>
        )}
      </div>
      <FooterMain />
    </div>
  );
} 