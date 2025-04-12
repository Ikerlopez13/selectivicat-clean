"use client"

import React, { useState, useEffect } from 'react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import Image from 'next/image';
import HeroSeleTest from '@/components/HeroSeleTest';
import { useSession } from "next-auth/react";
import { standardQuestions, premiumQuestions } from "@/data/questions";

// Definición de interfaces y tipos
interface Question {
  id: string;
  categoria: string;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

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
  // ... otros campos del usuario si los hay
}

interface CustomSession {
  user?: CustomUser;
  // ... otros campos de la sesión si los hay
}

// Lista de asignaturas disponibles (solo las que tienen preguntas)
const availableSubjects: Subject[] = [
  // Fase General
  { id: 'historia', name: 'Història', category: 'Fase General' },
  { id: 'filosofia', name: 'Filosofia', category: 'Fase General' },
  
  // Fase Específica - Ciencias
  { id: 'mates', name: 'Matemàtiques', category: 'Científic' },
  { id: 'fisica', name: 'Física', category: 'Científic' },
  { id: 'quimica', name: 'Química', category: 'Científic' },
  { id: 'biologia', name: 'Biologia', category: 'Científic' },
  
  // Fase Específica - Humanidades y Ciencias Sociales
  { id: 'mates-aplicades', name: 'Matemàtiques Aplicades', category: 'Social' },
  { id: 'geografia', name: 'Geografia', category: 'Social' }
];

// Componente para mostrar una pregunta individual
const Question: React.FC<QuestionProps> = ({ 
  question,
  selectedAnswer,
  onSelectAnswer,
  hasAnswered 
}) => {
  if (!question) return null;

  const formatText = (text: string) => {
    if (text.includes("$")) {
      const parts = text.split(/(\$.*?\$)/g);
      return parts.map((part: string, index: number) => {
        if (part.startsWith("$") && part.endsWith("$")) {
          const formula = part.slice(1, -1);
          return <InlineMath key={index} math={formula} />;
        }
        return part;
      });
    }
    return text;
  };

  const isCorrect = hasAnswered && selectedAnswer === question.respuestaCorrecta.toString();
  const isIncorrect = hasAnswered && selectedAnswer && selectedAnswer !== question.respuestaCorrecta.toString();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
          question.categoria === "Historia" ? "bg-red-100 text-red-800" :
          question.categoria === "Filosofía" ? "bg-purple-100 text-purple-800" :
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
              {question.explicacion}
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
  );
};

// Componente de Onboarding
const Onboarding: React.FC<{
  onComplete: (selectedSubjects: string[], totalQuestions: number) => void;
}> = ({ onComplete }) => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [totalQuestions, setTotalQuestions] = useState<number>(10);
  const [maxQuestions, setMaxQuestions] = useState<number>(10);

  const handleSubjectToggle = (subjectId: string) => {
    setSelectedSubjects(prev => {
      const newSelection = prev.includes(subjectId)
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId];
      
      const categoryToSubjectId: Record<string, string> = {
        'Matemáticas': 'mates',
        'Física': 'fisica',
        'Filosofía': 'filosofia',
        'Química': 'quimica',
        'Biología': 'biologia',
        'Matemáticas CCSS': 'mates-aplicades',
        'Geografia': 'geografia',
        'Historia': 'historia'
      };

      const availableQuestions = availableSubjects.filter(subject => newSelection.includes(subject.id));

      const newMaxQuestions = availableQuestions.length;
      setMaxQuestions(newMaxQuestions);
      setTotalQuestions(Math.min(totalQuestions, newMaxQuestions));
      return newSelection;
    });
  };

  const handleComplete = () => {
    if (selectedSubjects.length > 0) {
      onComplete(selectedSubjects, totalQuestions);
    }
  };

  const groupedSubjects = availableSubjects.reduce((acc, subject) => {
    if (!acc[subject.category]) {
      acc[subject.category] = [];
    }
    acc[subject.category].push(subject);
    return acc;
  }, {} as Record<string, Subject[]>);

  return (
    <div className="space-y-8">
      {/* Selector de asignaturas */}
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
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
          {Object.entries(groupedSubjects).map(([category, subjects]) => (
            <div key={category} className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {subjects.map(subject => (
                  <label
                    key={subject.id}
                    className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedSubjects.includes(subject.id)
                        ? 'border-selectivi-yellow bg-selectivi-yellow/10'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedSubjects.includes(subject.id)}
                      onChange={() => handleSubjectToggle(subject.id)}
                      className="w-4 h-4 rounded accent-selectivi-yellow focus:ring-selectivi-yellow focus:ring-2 focus:ring-offset-2"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      {subject.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {selectedSubjects.length > 0 && (
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Número de preguntes</h3>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max={maxQuestions}
                  value={totalQuestions}
                  onChange={(e) => setTotalQuestions(parseInt(e.target.value))}
                  className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-selectivi-yellow [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:bg-selectivi-yellow [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:bg-selectivi-yellow [&::-ms-thumb]:border-0 [&::-ms-thumb]:w-4 [&::-ms-thumb]:h-4 [&::-ms-thumb]:rounded-full [&::-ms-thumb]:cursor-pointer"
                />
                <span className="text-gray-700 font-medium">{totalQuestions}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Màxim disponible: {maxQuestions} preguntes
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleComplete}
            disabled={selectedSubjects.length === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedSubjects.length > 0
                ? 'bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-white'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            Començar el test
          </button>
          {selectedSubjects.length === 0 && (
            <p className="text-sm text-red-500 mt-2">
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

  // Limpiar localStorage al inicio
  if (typeof window !== 'undefined') {
    localStorage.removeItem('seletest_questions');
    localStorage.removeItem('seletest_currentIndex');
    localStorage.removeItem('seletest_selectedAnswer');
    localStorage.removeItem('seletest_hasAnswered');
    localStorage.removeItem('seletest_gameOver');
    localStorage.removeItem('seletest_score');
    localStorage.removeItem('seletest_hasCompletedOnboarding');
    localStorage.removeItem('seletest_selectedSubjects');
    localStorage.removeItem('seletest_totalQuestions');
  }
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean>(false);
  const [selectedSubjectsFromOnboarding, setSelectedSubjectsFromOnboarding] = useState<string[]>([]);
  const [totalQuestionsRequested, setTotalQuestionsRequested] = useState<number>(10);

  // Guardar estados en localStorage cuando cambien
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('seletest_questions', JSON.stringify(questions));
      localStorage.setItem('seletest_currentIndex', currentQuestionIndex.toString());
      localStorage.setItem('seletest_selectedAnswer', selectedAnswer || '');
      localStorage.setItem('seletest_hasAnswered', hasAnswered.toString());
      localStorage.setItem('seletest_gameOver', gameOver.toString());
      localStorage.setItem('seletest_score', score.toString());
      localStorage.setItem('seletest_hasCompletedOnboarding', hasCompletedOnboarding.toString());
      localStorage.setItem('seletest_selectedSubjects', JSON.stringify(selectedSubjectsFromOnboarding));
      localStorage.setItem('seletest_totalQuestions', totalQuestionsRequested.toString());
    }
  }, [
    questions,
    currentQuestionIndex,
    selectedAnswer,
    hasAnswered,
    gameOver,
    score,
    hasCompletedOnboarding,
    selectedSubjectsFromOnboarding,
    totalQuestionsRequested
  ]);

  // Efecto para cargar las preguntas iniciales solo si no hay preguntas guardadas
  useEffect(() => {
    if (hasCompletedOnboarding && selectedSubjectsFromOnboarding.length > 0 && questions.length === 0) {
      const categoryToSubjectId: Record<string, string> = {
        'Matemáticas': 'mates',
        'Física': 'fisica',
        'Filosofía': 'filosofia',
        'Química': 'quimica',
        'Biología': 'biologia',
        'Matemáticas CCSS': 'mates-aplicades',
        'Geografia': 'geografia',
        'Historia': 'historia'
      };

      // Usar el banco de preguntas según si el usuario es premium o no
      const questionBank = session?.user?.hasPremiumStatus ? premiumQuestions : standardQuestions;

      const filteredQuestions = questionBank.filter((question: Question) => {
        const subjectId = categoryToSubjectId[question.categoria];
        return selectedSubjectsFromOnboarding.includes(subjectId);
      });

      const shuffledQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5);
      setQuestions(shuffledQuestions.slice(0, totalQuestionsRequested));
    }
  }, [hasCompletedOnboarding, selectedSubjectsFromOnboarding, totalQuestionsRequested, questions.length, session?.user?.hasPremiumStatus]);

  const handleSelectAnswer = (answer: string) => {
    if (answer === 'next') {
      handleNextQuestion();
      return;
    }

    const selectedIndex = parseInt(answer);
    setSelectedAnswer(answer);
    setHasAnswered(true);
    if (selectedIndex === questions[currentQuestionIndex].respuestaCorrecta) {
      setScore(prev => prev + 1);
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
    if (typeof window !== 'undefined') {
      localStorage.removeItem('seletest_questions');
      localStorage.removeItem('seletest_currentIndex');
      localStorage.removeItem('seletest_selectedAnswer');
      localStorage.removeItem('seletest_hasAnswered');
      localStorage.removeItem('seletest_gameOver');
      localStorage.removeItem('seletest_score');
      localStorage.removeItem('seletest_hasCompletedOnboarding');
      localStorage.removeItem('seletest_selectedSubjects');
      localStorage.removeItem('seletest_totalQuestions');
    }

    setHasCompletedOnboarding(false);
    setSelectedSubjectsFromOnboarding([]);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setGameOver(false);
    setScore(0);
    setTotalQuestionsRequested(10);
  };

  const handleOnboardingComplete = (selectedSubjects: string[], totalQuestions: number) => {
    setSelectedSubjectsFromOnboarding(selectedSubjects);
    setTotalQuestionsRequested(totalQuestions);
    setHasCompletedOnboarding(true);
  };

  if (!hasCompletedOnboarding) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <NavbarMain />
        <div className="pt-24 pb-16 px-4 md:px-8 flex-grow">
          <Onboarding onComplete={handleOnboardingComplete} />
        </div>
        <FooterMain />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavbarMain />
      <div className="pt-24 pb-16 px-4 md:px-8 flex-grow">
        <div className="container mx-auto max-w-4xl">
          {!gameOver ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">
                    Pregunta {currentQuestionIndex + 1} de {questions.length}
                  </h2>
                  <span className="text-gray-500">
                    Puntuación: {score}/{currentQuestionIndex + (hasAnswered ? 1 : 0)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-selectivi-yellow h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestionIndex + (hasAnswered ? 1 : 0)) / questions.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <Question
                question={questions[currentQuestionIndex]}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={handleSelectAnswer}
                hasAnswered={hasAnswered}
              />
            </>
          ) : (
            <div className="text-center bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="inline-flex justify-center items-center p-4 bg-selectivi-yellow/20 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-selectivi-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">¡Test completado!</h2>
              <div className="space-y-4 mb-8">
                <p className="text-xl">
                  Tu puntuación: <span className="font-bold text-selectivi-yellow">{score}</span> de {questions.length}
                </p>
                {(() => {
                  // Calcular la nota proyectada sobre 14 usando regla de tres
                  const notaProyectada = (score / questions.length) * 14;
                  const notaRedondeada = Math.round(notaProyectada * 100) / 100;
                  
                  let mensaje = '';
                  let colorClase = '';
                  let emoji = '';
                  
                  if (notaRedondeada >= 13) {
                    mensaje = '¡Excelente! Vas muy bien preparado/a para la Selectividad. ¡Sigue así!';
                    colorClase = 'text-green-600';
                    emoji = '🏆';
                  } else if (notaRedondeada >= 11) {
                    mensaje = '¡Muy bien! Estás en buen camino. Sigue practicando para mejorar aún más.';
                    colorClase = 'text-green-500';
                    emoji = '🌟';
                  } else if (notaRedondeada >= 9) {
                    mensaje = 'Vas por buen camino, pero aún hay margen de mejora. ¡No dejes de practicar!';
                    colorClase = 'text-yellow-600';
                    emoji = '💪';
                  } else if (notaRedondeada >= 7) {
                    mensaje = 'Necesitas repasar un poco más. ¡Con práctica lo conseguirás!';
                    colorClase = 'text-orange-500';
                    emoji = '📚';
                  } else {
                    mensaje = 'Te recomendamos dedicar más tiempo al estudio. ¡No te desanimes, con esfuerzo lo lograrás!';
                    colorClase = 'text-red-500';
                    emoji = '✍️';
                  }

                  const handleShare = () => {
                    const urgencyMessages = [
                      "🔥 Més de 1000 estudiants ja han provat el seu nivell!",
                      "⚡️ Falten menys de 100 dies per la Selectivitat!",
                      "🎯 Descobreix el teu potencial ara!",
                      "📊 Uneix-te als estudiants més preparats!"
                    ];

                    const ctaMessages = [
                      "No esperis més! Descobreix la teva predicció 👇",
                      "És el moment de preparar-te! Fes el test ara 👇",
                      "Comprova el teu nivell abans que sigui tard! 👇",
                      "La Selectivitat s'acosta! Prepara't ara 👇"
                    ];

                    const randomUrgency = urgencyMessages[Math.floor(Math.random() * urgencyMessages.length)];
                    const randomCta = ctaMessages[Math.floor(Math.random() * ctaMessages.length)];

                    const shareText = `${emoji} He aconseguit un ${notaRedondeada.toFixed(2)}/14 a SeleTest!\n\n${mensaje}\n\n${randomUrgency}\n${randomCta}\n\nhttps://selectivicat-clean.vercel.app/seletest`;
                    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
                    window.open(whatsappUrl, '_blank');
                  };
                  
                  return (
                    <>
                      <p className="text-lg font-semibold">
                        Proyección para Selectividad:{' '}
                        <span className={colorClase}>{notaRedondeada.toFixed(2)}</span> / 14
                      </p>
                      <p className={`text-base ${colorClase}`}>
                        {mensaje}
                      </p>
                      <div className="mt-6 space-y-4">
                        <button 
                          onClick={handleShare}
                          className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Compartir en WhatsApp
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>

              <button 
                onClick={handleRestart}
                className="px-6 py-3 rounded-lg font-medium bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-white transition-all"
              >
                Volver a intentar
              </button>
            </div>
          )}
        </div>
      </div>
      <FooterMain />
    </div>
  );
} 