export interface Examen {
  id: string;
  asignatura: string;
  año: number;
  convocatoria: string;
  titulo: string;
  rutaExamen: string;
  rutaSolucion?: string;
  rutaCorreccion?: string;
  comunidadAutonoma?: string;
  isExternalUrl?: boolean;
  viewUrl?: string;
}

export const examenes: Examen[] = [
  {
    id: "fis-2025-modelo-0",
    asignatura: "fisica",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Física - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/fisica/01_pau25_fisica_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/fisica/01_pau25_fisica_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "aleman-2025-modelo-0",
    asignatura: "aleman",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Alemán - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/aleman/pau_alemany25_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/aleman/pau_alemany25_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "ciencias-generales-2025-modelo-0",
    asignatura: "ciencias-generales",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Ciencias Generales - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/ciencias-generales/01_pau25_ccgg_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/ciencias-generales/01_pau25_ccgg_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  }
];

// Funciones de utilidad
export function getExamenesByAsignatura(asignatura: string): Examen[] {
  return examenes.filter(examen => examen.asignatura === asignatura);
}

export function getExamenesByAño(año: number): Examen[] {
  return examenes.filter(examen => examen.año === año);
}

export function getFeaturedExamenes(): Examen[] {
  return examenes.slice(0, Math.min(6, examenes.length));
}

export function getExamenById(id: string): Examen | undefined {
  return examenes.find(examen => examen.id === id);
} 