import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const matematiquesConfig = JSON.parse(
  readFileSync(
    join(__dirname, '../data/config/matematiques-config.json'),
    'utf8'
  )
);

/**
 * Valida si un subtema es válido según la configuración
 * @param {string} subTema - El subtema a validar
 * @returns {boolean} - True si el subtema es válido, false en caso contrario
 */
export function isValidSubTema(subTema) {
  // Obtener todas las subcategorías en un array plano
  const allSubcategories = Object.values(matematiquesConfig.subTemes)
    .flatMap(tema => tema.subcategories);
  
  // Comprobar si el subtema existe en las subcategorías
  return allSubcategories.includes(subTema);
}

/**
 * Obtiene el tema principal de una subcategoría
 * @param {string} subTema - La subcategoría
 * @returns {string|null} - El tema principal o null si no se encuentra
 */
export function getMainTema(subTema) {
  for (const [key, tema] of Object.entries(matematiquesConfig.subTemes)) {
    if (tema.subcategories.includes(subTema)) {
      return tema.nom;
    }
  }
  return null;
}

/**
 * Obtiene todas las subcategorías de un tema principal
 * @param {string} mainTema - El tema principal
 * @returns {string[]} - Array de subcategorías
 */
export function getSubcategories(mainTema) {
  const tema = Object.values(matematiquesConfig.subTemes)
    .find(t => t.nom === mainTema);
  return tema ? tema.subcategories : [];
}

/**
 * Obtiene todos los temas principales
 * @returns {string[]} - Array de temas principales
 */
export function getMainTemes() {
  return Object.values(matematiquesConfig.subTemes)
    .map(tema => tema.nom);
}

/**
 * Normaliza un subtema (corrige errores comunes de nomenclatura)
 * @param {string} subTema - El subtema a normalizar
 * @returns {string} - El subtema normalizado o el original si no hay corrección
 */
export function normalizeSubTema(subTema) {
  const normalizationMap = {
    'Càlcul': 'Derivades',
    'Càlcul Diferencial': 'Derivades',
    'Càlcul Integral': 'Integrals',
    'Àlgebra Lineal': 'Matrius',
    'Optimització': 'Problemes d\'Optimització',
    'Probabilitat': 'Probabilitat'
  };

  return normalizationMap[subTema] || subTema;
} 