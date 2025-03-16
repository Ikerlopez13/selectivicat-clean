export interface Examen {
  id: string;
  asignatura: string;
  año: number;
  convocatoria: string;
  titulo: string;
  rutaExamen: string;
  rutaSolucion: string;
  comunidadAutonoma?: string;
  isExternalUrl?: boolean;
  viewUrl?: string;
}

export const examenes: Examen[] = [
  {
    id: "mat-2024-jul",
    asignatura: "matematicas",
    año: 2024,
    convocatoria: "julio",
    titulo: "Matemáticas II - Julio 2024",
    rutaExamen: "/examenes/matematicas/2024/julio/pau_mate24jl.pdf",
    rutaSolucion: "/examenes/matematicas/2024/julio/pau_mate24jp.pdf",
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "macs-2024-jun",
    asignatura: "matematicas-sociales",
    año: 2024,
    convocatoria: "junio",
    titulo: "Matemáticas aplicadas a las ciencias sociales - Junio 2024",
    rutaExamen: "https://www.selecat.cat/pau/pau_macs_2024_jun.pdf",
    rutaSolucion: "https://www.selecat.cat/pau/pau_macs_2024_jun_sol.pdf",
    comunidadAutonoma: "Cataluña",
    isExternalUrl: true,
    viewUrl: "https://www.selecat.cat/view.php?p=pau_macs24jl"
  },
  {
    id: "mat-2023-jun",
    asignatura: "matematicas",
    año: 2023,
    convocatoria: "junio",
    titulo: "Matemáticas II - Junio 2023",
    rutaExamen: "https://www.selecat.cat/pau/pau_mat_2023_jun.pdf",
    rutaSolucion: "https://www.selecat.cat/pau/pau_mat_2023_jun_sol.pdf",
    comunidadAutonoma: "Cataluña",
    isExternalUrl: true
  },
  {
    id: "mat-2023-sep",
    asignatura: "matematicas",
    año: 2023,
    convocatoria: "septiembre",
    titulo: "Matemáticas II - Septiembre 2023",
    rutaExamen: "https://www.selecat.cat/pau/pau_mat_2023_set.pdf",
    rutaSolucion: "https://www.selecat.cat/pau/pau_mat_2023_set_sol.pdf",
    comunidadAutonoma: "Cataluña",
    isExternalUrl: true
  },
  {
    id: "mat-2022-jun",
    asignatura: "matematicas",
    año: 2022,
    convocatoria: "junio",
    titulo: "Matemáticas II - Junio 2022",
    rutaExamen: "https://www.selecat.cat/pau/pau_mat_2022_jun.pdf",
    rutaSolucion: "https://www.selecat.cat/pau/pau_mat_2022_jun_sol.pdf",
    comunidadAutonoma: "Cataluña",
    isExternalUrl: true
  },
  {
    id: "fis-2023-jun",
    asignatura: "fisica",
    año: 2023,
    convocatoria: "junio",
    titulo: "Física - Junio 2023",
    rutaExamen: "https://www.selecat.cat/pau/pau_fis_2023_jun.pdf",
    rutaSolucion: "https://www.selecat.cat/pau/pau_fis_2023_jun_sol.pdf",
    comunidadAutonoma: "Cataluña",
    isExternalUrl: true
  },
  {
    id: "fis-2023-sep",
    asignatura: "fisica",
    año: 2023,
    convocatoria: "septiembre",
    titulo: "Física - Septiembre 2023",
    rutaExamen: "https://www.selecat.cat/pau/pau_fis_2023_set.pdf",
    rutaSolucion: "https://www.selecat.cat/pau/pau_fis_2023_set_sol.pdf",
    comunidadAutonoma: "Cataluña",
    isExternalUrl: true
  },
  {
    id: "quim-2023-jun",
    asignatura: "quimica",
    año: 2023,
    convocatoria: "junio",
    titulo: "Química - Junio 2023",
    rutaExamen: "https://www.selecat.cat/pau/pau_qui_2023_jun.pdf",
    rutaSolucion: "https://www.selecat.cat/pau/pau_qui_2023_jun_sol.pdf",
    comunidadAutonoma: "Cataluña",
    isExternalUrl: true
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