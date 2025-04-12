import matematiquesData from '@/data/questions/matematiques.json';
import matematiquesConfig from '@/data/config/matematiques-config.json';
import type { Question } from '@/types/questions';

interface SubTemaConfig {
  id: string;
  name: string;
  subCategories: any[];
}

interface MatematiqueConfig {
  subTemas: SubTemaConfig[];
}

export interface SubTemaData {
  id: string;
  name: string;
  subCategories: any[];
}

export interface MatematiquesList {
  standard: Question[];
  premium: Question[];
}

// Obtener todas las preguntas de matemáticas
export function getMatematiquesList(): MatematiquesList {
  return {
    standard: matematiquesData.standard || [],
    premium: matematiquesData.premium || []
  };
}

// Obtener todos los subtemas disponibles para una categoría
export function getSubTemasForCategory(questions: Question[]): SubTemaData[] {
  const uniqueSubTemas = new Set<string>();
  
  questions.forEach(question => {
    if (question.subTema) {
      uniqueSubTemas.add(question.subTema.toLowerCase());
    }
  });

  const config = matematiquesConfig as MatematiqueConfig;
  return Array.from(uniqueSubTemas)
    .map(subTema => {
      const configSubTema = config.subTemas.find(st => st.id.toLowerCase() === subTema);
      return configSubTema || {
        id: subTema,
        name: subTema,
        subCategories: []
      };
    });
}

// Filtrar preguntas por subtemas seleccionados
export function filterQuestionsBySubTemas(questions: Question[], selectedSubTemas: string[]): Question[] {
  if (!selectedSubTemas || selectedSubTemas.length === 0) {
    return questions;
  }

  const normalizedSelectedSubTemas = selectedSubTemas.map(s => s.toLowerCase());
  return questions.filter(question => 
    question.subTema && normalizedSelectedSubTemas.includes(question.subTema.toLowerCase())
  );
} 