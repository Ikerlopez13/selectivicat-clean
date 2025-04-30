'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import type { Question } from "@/types/questions";
import AdSenseAd from '@/components/AdSenseAd';
import SubjectTag from './SubjectTag';
import { useSession } from "next-auth/react";

interface QuestionProps {
  question: Question;
  showExplanation: boolean;
  isAnswerCorrect: boolean | null;
  selectedAnswer: number | null;
  onAnswerSubmit: (answer: number) => void;
  onNextQuestion: () => void;
}

interface CustomUser {
  hasPremiumStatus?: boolean;
}

interface CustomSession {
  user?: CustomUser;
}

export default function QuestionSeleTest({
  question,
  showExplanation,
  isAnswerCorrect,
  selectedAnswer,
  onAnswerSubmit,
  onNextQuestion
}: QuestionProps) {
  const { data: session } = useSession() as { data: CustomSession | null };
  const isPremium = !!session?.user?.hasPremiumStatus;

  // Función para formatear el texto con fórmulas LaTeX
  function formatText(text: string) {
    if (!text) return '';

    // Limpiar los delimitadores LaTeX si existen
    text = text.replace(/\\\[|\\\]/g, '');
    text = text.replace(/\\\(|\\\)/g, '');

    // Buscar fórmulas LaTeX entre $ o $$
    const parts = text.split(/((?:\$\$|\$).*?(?:\$\$|\$))/g);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        // Fórmula LaTeX en bloque
        const formula = part.slice(2, -2);
        return <BlockMath key={index} math={formula} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        // Fórmula LaTeX en línea
        const formula = part.slice(1, -1);
        return <InlineMath key={index} math={formula} />;
      }
      // Texto normal
      return <span key={index}>{part}</span>;
    });
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      <div className="flex justify-between items-start">
        <SubjectTag subject={question.categoria} />
        {question.subTema && (
          <span className="text-sm text-gray-500">{question.subTema}</span>
        )}
      </div>

      <div className="space-y-4">
        <p className="text-lg font-medium text-gray-900 whitespace-pre-line">
          {formatText(question.pregunta)}
        </p>

        <div className="space-y-3">
          {question.opciones.map((opcion, index) => (
            <button
              key={index}
              onClick={() => !showExplanation && onAnswerSubmit(index)}
              disabled={showExplanation}
              className={`w-full p-4 text-left rounded-lg transition-colors ${
                showExplanation
                  ? index === question.respuestaCorrecta
                    ? 'bg-green-100 border-2 border-green-500'
                    : index === selectedAnswer
                    ? 'bg-red-100 border-2 border-red-500'
                    : 'bg-gray-50 border border-gray-200'
                  : selectedAnswer === index
                  ? 'bg-blue-100 border-2 border-blue-500'
                  : 'bg-white border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start">
                <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                <span className="whitespace-pre-line">{formatText(opcion)}</span>
              </div>
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Explicación:</h3>
            <p className="text-gray-700 whitespace-pre-line">{formatText(question.explicacion)}</p>
            <button
              onClick={onNextQuestion}
              className="mt-4 w-full bg-selectivi-yellow text-white py-2 px-4 rounded-lg hover:bg-selectivi-yellow/90 transition-colors"
            >
              Siguiente pregunta
            </button>
          </div>
        )}

        {!showExplanation && selectedAnswer !== null && (
          <button
            onClick={onNextQuestion}
            className="mt-4 w-full bg-selectivi-yellow text-white py-2 px-4 rounded-lg hover:bg-selectivi-yellow/90 transition-colors"
          >
            Comprobar respuesta
          </button>
        )}
      </div>
    </div>
  );
}