import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { normalizeSubTema, isValidSubTema } from '../utils/matematiques-validator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Leer el archivo de preguntas
const questionsPath = join(__dirname, '../data/questions/matematiques.json');
const questions = JSON.parse(readFileSync(questionsPath, 'utf8'));

// Función para procesar una pregunta
function processQuestion(question) {
  if (!question.subTema) {
    console.warn(`Pregunta ${question.id} no tiene subTema definido`);
    return question;
  }

  const normalizedSubTema = normalizeSubTema(question.subTema);
  
  if (!isValidSubTema(normalizedSubTema)) {
    console.error(`Pregunta ${question.id} tiene un subTema inválido: ${question.subTema}`);
    return question;
  }

  return {
    ...question,
    subTema: normalizedSubTema
  };
}

// Procesar todas las preguntas
const updatedQuestions = {
  standard: questions.standard.map(processQuestion),
  premium: questions.premium.map(processQuestion)
};

// Guardar el archivo actualizado
writeFileSync(
  questionsPath,
  JSON.stringify(updatedQuestions, null, 2),
  'utf8'
);

console.log('Proceso completado. Revisa los warnings y errores arriba.'); 