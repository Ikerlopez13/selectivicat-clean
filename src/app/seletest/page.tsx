"use client"

import React, { useState, useEffect } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import Image from 'next/image';
import HeroSeleTest from '@/components/HeroSeleTest';
import { useSession } from "next-auth/react";
import type { Question } from "@/types/questions";
import { getMatematiquesList, getSubTemasForCategory, filterQuestionsBySubTemas } from '@/utils/matematiques-utils';
import AdSenseAd from '@/components/AdSenseAd';

// At the top of the file, add this line after the imports
const isProd = process.env.NODE_ENV === 'production';

// Mapeo de categorías a archivos JSON
const categoryToJsonFile: { [key: string]: string } = {
  'Biologia': 'biologia.json',
  'Química': 'quimica.json',
  'Física': 'fisica.json',
  'Matemàtiques': 'matematiques.json',
  'Matemàtiques CCSS': 'matematiques_ccss.json',
  'Geografia': 'geografia.json',
  'Història': 'història.json',
  'Català': 'catala.json',
  'Castellano': 'castellano.json',
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
    'filosofia': 'Filosofia',
    'catala': 'Català',
    'castella': 'Castellano'
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

// Lista de asignaturas disponibles
const availableSubjects: Subject[] = [
  // Fase General
  { id: 'historia', name: 'Història', category: 'Fase General' },
  { id: 'filosofia', name: 'Filosofia', category: 'Fase General' },
  { id: 'catala', name: 'Català', category: 'Fase General' },
  { id: 'castella', name: 'Castellano', category: 'Fase General' },
  
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
  'historia': 'Història',
  'catala': 'Català',
  'castella': 'Castellano'
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
  }, []);

  useEffect(() => {
    if (!isPremium && isClient) {
      try {
        if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
          const ads = document.querySelectorAll('.adsbygoogle');
          ads.forEach(ad => {
            try {
              ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            } catch (innerError) {
              console.warn('Ad push failed:', innerError);
            }
          });
        }
      } catch (error) {
        console.warn('AdSense initialization error:', error);
      }
    }
  }, [isPremium, isClient]);

  if (!question || !question.opciones) return null;

  const isCorrect = hasAnswered && selectedAnswer === question.respuestaCorrecta.toString();
  const isIncorrect = hasAnswered && selectedAnswer && selectedAnswer !== question.respuestaCorrecta.toString();

  return (
    <div className="flex justify-between items-start gap-4">
      {!isPremium && isClient && (
        <div className="hidden xl:block w-[160px] sticky top-24">
          <div id="adContainer-left">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '160px', height: '600px' }}
              data-ad-client="ca-pub-4829722017444918"
              data-ad-slot="1859826246"
              data-ad-format="vertical"
              data-full-width-responsive="false">
            </ins>
          </div>
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
          <div id="adContainer-right">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '160px', height: '600px' }}
              data-ad-client="ca-pub-4829722017444918"
              data-ad-slot="1859826246"
              data-ad-format="vertical"
              data-full-width-responsive="false">
            </ins>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente de Onboarding
const Onboarding: React.FC<{
  onComplete: (selectedSubjects: string[], totalQuestions: number, selectedSubtemes?: Record<string, string[]>) => void;
  isPremium: boolean;
}> = ({ onComplete, isPremium }) => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [maxQuestions, setMaxQuestions] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [subtemesBySubject, setSubtemesBySubject] = useState<Record<string, string[]>>({});
  const [selectedSubtemes, setSelectedSubtemes] = useState<Record<string, string[]>>({});

  // Cargar subtemas únicos para cada asignatura seleccionada (solo premium)
  useEffect(() => {
    if (!isPremium) return;
    const fetchSubtemes = async () => {
      const newSubtemes: Record<string, string[]> = {};
      for (const subject of selectedSubjects) {
        try {
          const fileName = categoryToJsonFile[subject];
          const response = await fetch(`/data/questions/${fileName}`);
          if (!response.ok) continue;
          const data = await response.json();
          let questions = Array.isArray(data) ? data : [...(data.standard || []), ...(data.premium || [])];
          const subtemes = Array.from(new Set(questions.map((q: any) => q.subTema).filter(Boolean)));
          newSubtemes[subject] = subtemes;
        } catch {}
      }
      setSubtemesBySubject(newSubtemes);
    };
    if (selectedSubjects.length > 0) fetchSubtemes();
  }, [selectedSubjects, isPremium]);

  // useEffect para calcular maxQuestions
  useEffect(() => {
    async function calculateMaxQuestions() {
      setIsLoading(true);
      let totalAvailableQuestions = 0;
      for (const subject of selectedSubjects) {
        try {
          const fileName = categoryToJsonFile[subject];
          const response = await fetch(`/data/questions/${fileName}`);
          if (!response.ok) continue;
          const data = await response.json();
          let questions = Array.isArray(data)
            ? data
            : [...(data.standard || []), ...(isPremium ? (data.premium || []) : [])];
          // Si hay subtemas seleccionados para esta asignatura, filtrar
          if (isPremium && selectedSubtemes[subject]?.length) {
            questions = questions.filter((q: any) => selectedSubtemes[subject].includes(q.subTema));
          }
          totalAvailableQuestions += questions.length;
        } catch {}
      }
      setMaxQuestions(totalAvailableQuestions);
      setTotalQuestions(prev => Math.min(prev, totalAvailableQuestions || 1));
      setIsLoading(false);
    }
    if (selectedSubjects.length > 0) {
      calculateMaxQuestions();
    } else {
      setMaxQuestions(0);
      setTotalQuestions(10);
    }
  }, [selectedSubjects, isPremium, selectedSubtemes]);

  const handleSubjectToggle = (subject: string) => {
    console.log('Toggling subject:', subject);
    setSelectedSubjects(prev => {
      if (prev.includes(subject)) {
        return prev.filter(s => s !== subject);
      } else {
        return [...prev, subject];
      }
    });
  };

  const handleSubtemaToggle = (subject: string, subtema: string) => {
    setSelectedSubtemes(prev => {
      const prevList = prev[subject] || [];
      return {
        ...prev,
        [subject]: prevList.includes(subtema)
          ? prevList.filter(s => s !== subtema)
          : [...prevList, subtema]
      };
    });
  };

  const handleComplete = () => {
    if (selectedSubjects.length > 0 && totalQuestions > 0) {
      console.log('Completing onboarding with subjects:', selectedSubjects);
      onComplete(selectedSubjects, totalQuestions, isPremium ? selectedSubtemes : undefined);
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
          {!isPremium && (
            <div className="flex justify-center mt-4">
              <a
                href="/premium"
                className="flex items-center gap-2 px-3 py-2 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700 text-sm font-medium hover:bg-yellow-100 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.01z"/>
                </svg>
                <span>
                  Accedeix a <span className="font-semibold">preguntes il·limitades</span> i tria per <span className="font-semibold">subtemes</span> amb <span className="underline ml-1">SeleTest Premium</span>
                </span>
              </a>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Selecciona les assignatures</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(subjectIdToCategory).map(([id, name]) => {
                const isSelected = selectedSubjects.includes(name);
                const hasSubtemes = isPremium && subtemesBySubject[name]?.length > 0;
                return (
                  <div key={id} className="relative">
                    <button
                      onClick={() => handleSubjectToggle(name)}
                      className={`p-6 rounded-lg text-center transition-all duration-300 w-full ${
                        isSelected ? 'bg-selectivi-yellow text-white' : 'bg-white hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {name}
                    </button>
                    {/* Desplegable de subtemas con lista de checkboxes */}
                    {isSelected && hasSubtemes && (
                      <details className="mt-2 w-full">
                        <summary className="cursor-pointer text-sm font-semibold text-yellow-700 bg-yellow-50 border border-yellow-200 rounded px-3 py-2 mb-2">
                          Selecciona subtemes
                        </summary>
                        <div className="flex flex-col gap-2 p-2">
                          {subtemesBySubject[name].map(subtema => (
                            <label key={subtema} className="flex items-center gap-2 text-sm">
                              <input
                                type="checkbox"
                                checked={selectedSubtemes[name]?.includes(subtema) || false}
                                onChange={() => handleSubtemaToggle(name, subtema)}
                                className="accent-selectivi-yellow"
                              />
                              {subtema}
                            </label>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Nombre de preguntes</h3>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={1}
                max={maxQuestions || 1}
                value={totalQuestions}
                onChange={(e) => setTotalQuestions(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-selectivi-yellow"
                disabled={maxQuestions === 0 || isLoading}
              />
              <span className="text-gray-600 min-w-[4rem] text-right">
                {isLoading ? (
                  <span className="inline-block animate-spin">⌛</span>
                ) : (
                  `${totalQuestions} / ${maxQuestions || 0}`
                )}
              </span>
            </div>
          </div>

          <button
            onClick={handleComplete}
            disabled={selectedSubjects.length === 0 || maxQuestions === 0 || isLoading}
            className={`w-full py-3 rounded-lg text-center transition-all ${
              selectedSubjects.length > 0 && maxQuestions > 0 && !isLoading
                ? 'bg-selectivi-yellow text-white hover:bg-selectivi-yellow/90'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isLoading ? 'Carregant...' : 'Començar'}
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

// Función para obtener el mensaje de apoyo basado en la puntuación
function getSupportMessage(score: number): string {
  if (score >= 9) {
    return "Impressionant! Estàs més que preparat/da per a la Selectivitat! 🌟";
  } else if (score >= 7) {
    return "Molt bé! Vas pel bon camí, segueix així! 💪";
  } else if (score >= 5) {
    return "Vas bé, però encara pots millorar. Segueix practicant! 📚";
  } else {
    return "No et desanimis! Amb més pràctica ho conseguiràs! 💪";
  }
}

// Componente principal SeleTest
export default function SeleTest() {
  const { data: session, status } = useSession();
  const [isClient, setIsClient] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isPremium, setIsPremium] = useState<boolean | null>(null);
  const [loadingPremium, setLoadingPremium] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchPremiumStatus = async () => {
      setLoadingPremium(true);
      try {
        const res = await fetch("/api/premium-status");
        if (res.ok) {
          const data = await res.json();
          setIsPremium(!!data.hasPremiumStatus);
        } else {
          setIsPremium(false);
        }
      } catch (e) {
        setIsPremium(false);
      } finally {
        setLoadingPremium(false);
      }
    };
    fetchPremiumStatus();
  }, []);

  const handleSelectAnswer = (answer: string) => {
    if (answer === 'next') {
      handleNextQuestion();
      return;
    }

    if (!hasAnswered && questions[currentQuestionIndex]) {
      setSelectedAnswer(answer);
      setHasAnswered(true);
      
      const isCorrect = parseInt(answer) === questions[currentQuestionIndex].respuestaCorrecta;
      if (isCorrect) {
        setScore(prev => prev + 1);
        setCorrectAnswers(prev => prev + 1);
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
    setCorrectAnswers(0);
  };

  const handleOnboardingComplete = async (selectedSubjects: string[], totalQuestions: number, selectedSubtemes?: Record<string, string[]>) => {
    setShowOnboarding(false);
    try {
      let availableQuestions: Question[] = [];
      
      // Cargar preguntas para cada asignatura seleccionada
      for (const subject of selectedSubjects) {
        const category = subject;
        const fileName = categoryToJsonFile[category];
        
        console.log('Loading questions for:', category, 'from file:', fileName);
        
        if (fileName) {
          try {
            const response = await fetch(`/data/questions/${fileName}`);
            if (!response.ok) {
              console.error(`HTTP error loading ${fileName}:`, response.status);
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(`Loaded data for ${category}:`, data);
            
            // Comprobar si las preguntas están en formato standard/premium o en array directo
            if (Array.isArray(data)) {
              console.log(`${category}: Found direct array with ${data.length} questions`);
              availableQuestions = [...availableQuestions, ...data];
            } else {
              console.log(`${category}: Found standard/premium format`);
              if (data.standard) {
                availableQuestions = [...availableQuestions, ...data.standard];
                if (isPremium && data.premium) {
                  availableQuestions = [...availableQuestions, ...data.premium];
                }
              }
            }
          } catch (error) {
            console.error(`Error loading questions for ${category}:`, error);
          }
        }
      }

      console.log('Total available questions:', availableQuestions.length);

      if (availableQuestions.length === 0) {
        console.warn('No se encontraron preguntas para los criterios seleccionados');
        return;
      }

      // Filtrar por subtemas si es premium y hay selección
      if (isPremium && selectedSubtemes) {
        availableQuestions = availableQuestions.filter((q: any) => {
          const subject = q.categoria;
          // Buscar la key de asignatura que coincida con la categoría
          const subjectKey = Object.values(subjectIdToCategory).find(cat => cat === subject);
          if (subjectKey && selectedSubtemes[subjectKey]?.length) {
            return selectedSubtemes[subjectKey].includes(q.subTema);
          }
          // Si no hay subtemas seleccionados para esta asignatura, incluir todas
          return true;
        });
      }

      // Mezclar y seleccionar el número de preguntas especificado
      const shuffledQuestions = availableQuestions
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(totalQuestions, availableQuestions.length));

      console.log('Final selected questions:', shuffledQuestions.length);
      
      setQuestions(shuffledQuestions);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setHasAnswered(false);
      setGameOver(false);
      setScore(0);
      setCorrectAnswers(0);
    } catch (error) {
      console.error('Error loading questions:', error);
    }
  };

  if (!isClient || loadingPremium || isPremium === null) {
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
          <Onboarding onComplete={handleOnboardingComplete} isPremium={!!isPremium} />
        ) : !gameOver ? (
          <div className="container mx-auto">
            <div className="mb-6 max-w-3xl mx-auto">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  Pregunta {currentQuestionIndex + 1} de {questions.length}
                </h2>
                <span className="text-gray-500">
                  Puntuación: {score} / {currentQuestionIndex}
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

            {questions.length > 0 && currentQuestionIndex < questions.length && questions[currentQuestionIndex] && (
              <Question
                question={questions[currentQuestionIndex]}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={handleSelectAnswer}
                hasAnswered={hasAnswered}
              />
            )}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
            <div className="inline-flex justify-center items-center p-4 bg-selectivi-yellow/20 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-selectivi-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Test completat!</h2>
            <div className="space-y-4 mb-8">
              <p className="text-xl">
                La teva puntuació: <span className="font-bold text-selectivi-yellow">{score}</span> de {questions.length}
              </p>
              <div className="my-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg inline-block">
                <span className="block text-lg font-semibold text-yellow-700">Nota simulada sobre 14:</span>
                <span className="text-3xl font-bold text-yellow-600">{((score / questions.length) * 14).toFixed(2)} / 14</span>
              </div>
              <p className="text-lg text-gray-600">
                {getSupportMessage(score / questions.length)}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const notaSobre14 = parseFloat(((correctAnswers / questions.length) * 14).toFixed(2));
                  let emoji = '🎓';
                  if (notaSobre14 >= 12) emoji = '🏆';
                  else if (notaSobre14 >= 10) emoji = '🌟';
                  else if (notaSobre14 >= 7) emoji = '📚';
                  else emoji = '💪';
                  const text = `He obtingut un ${notaSobre14.toFixed(2)}/14 a SelectiviCat! ${emoji}\nPosa't a prova tu també a https://selectivi.cat`;
                  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                Compartir per WhatsApp
              </button>
              <button 
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestionIndex(0);
                  setCorrectAnswers(0);
                  setShowOnboarding(true);
                }}
                className="flex items-center justify-center gap-2 bg-selectivi-yellow hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Tornar a començar
              </button>
            </div>
            
          </div>
        )}
      </div>
      <FooterMain />
    </div>
  );
} 