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
    id: "aleman-2023-ordinaria",
    asignatura: "aleman",
    año: 2023,
    convocatoria: "ordinaria",
    titulo: "Alemán - PAU 2023 Ordinaria",
    rutaExamen: "/examenes/aleman/01_pau23_aleman.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/aleman/01_pau23_aleman_c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "aleman-2023-extraordinaria",
    asignatura: "aleman",
    año: 2023,
    convocatoria: "extraordinaria",
    titulo: "Alemán - PAU 2023 Extraordinaria",
    rutaExamen: "/examenes/aleman/02_pau23_aleman.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/aleman/02_pau23_aleman_c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "ciencias-generales-2023-ordinaria",
    asignatura: "ciencias-generales",
    año: 2023,
    convocatoria: "ordinaria",
    titulo: "Ciencias Generales - PAU 2023 Ordinaria",
    rutaExamen: "/examenes/ciencias-generales/01_pau23_ciencias_generales.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/ciencias-generales/01_pau23_ciencias_generales_c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "ciencias-generales-2023-extraordinaria",
    asignatura: "ciencias-generales",
    año: 2023,
    convocatoria: "extraordinaria",
    titulo: "Ciencias Generales - PAU 2023 Extraordinaria",
    rutaExamen: "/examenes/ciencias-generales/02_pau23_ciencias_generales.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/ciencias-generales/02_pau23_ciencias_generales_c.pdf", // Criterios de corrección
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