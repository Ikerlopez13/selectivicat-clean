// Datos de notas de corte basados en el documento oficial
// Fuente: https://universitats.gencat.cat/web/.content/01_acces_i_admissio/preinscripcions/documentacio/Notes_i_places/Notes-de-tall-via-PAU-CFGS_2020_2024.pdf

export interface University {
  name: string;
  code: string;
}

export interface CutoffScore {
  university: string; // Código de la universidad
  score: number;      // Nota final del proceso (junio 2024)
  year: number;       // Año de la nota (2024)
  initialScore?: number; // Nota al inicio del proceso (junio 2024)
  finalScore?: number;   // Nota al final del proceso (junio 2024) - Igual que score
}

export interface Degree {
  id: number;
  name: string;
  scores: CutoffScore[];
}

// Lista de universidades
export const universities: University[] = [
  { name: "Universitat de Barcelona", code: "UB" },
  { name: "Universitat Autònoma de Barcelona", code: "UAB" },
  { name: "Universitat Politècnica de Catalunya", code: "UPC" },
  { name: "Universitat Pompeu Fabra", code: "UPF" },
  { name: "Universitat de Girona", code: "UdG" },
  { name: "Universitat de Lleida", code: "UdL" },
  { name: "Universitat Rovira i Virgili", code: "URV" },
  { name: "Universitat Oberta de Catalunya", code: "UOC" },
  { name: "Universitat Ramon Llull", code: "URL" },
  { name: "Universitat de Vic", code: "UVic" }
];

// Lista de grados con sus notas de corte
export const degrees: Degree[] = [
  {
    id: 1,
    name: "Medicina",
    scores: [
      { university: "UB", score: 12.650, year: 2024, initialScore: 12.946, finalScore: 12.650 },
      { university: "UAB", score: 12.511, year: 2024, initialScore: 12.586, finalScore: 12.511 },
      { university: "UdG", score: 12.486, year: 2024, initialScore: 12.553, finalScore: 12.486 },
      { university: "UdL", score: 12.431, year: 2024, initialScore: 12.558, finalScore: 12.431 },
      { university: "URV", score: 12.438, year: 2024, initialScore: 12.696, finalScore: 12.438 },
      { university: "UVic", score: 11.388, year: 2024, initialScore: 11.984, finalScore: 11.388 }
    ]
  },
  {
    id: 2,
    name: "Psicologia",
    scores: [
      { university: "UB", score: 9.929, year: 2024, initialScore: 10.064, finalScore: 9.929 },
      { university: "UAB", score: 9.887, year: 2024, initialScore: 9.887, finalScore: 9.887 },
      { university: "UdG", score: 9.682, year: 2024, initialScore: 9.785, finalScore: 9.682 },
      { university: "UdL", score: 9.554, year: 2024, initialScore: 9.770, finalScore: 9.554 },
      { university: "URV", score: 9.520, year: 2024, initialScore: 9.576, finalScore: 9.520 },
      { university: "UVic", score: 6.796, year: 2024, initialScore: 7.979, finalScore: 6.796 }
    ]
  },
  {
    id: 3,
    name: "Enginyeria Informàtica",
    scores: [
      { university: "UB", score: 9.876, year: 2024, initialScore: 10.108, finalScore: 9.876 },
      { university: "UPC", score: 10.366, year: 2024, initialScore: 10.410, finalScore: 10.366 },
      { university: "UAB", score: 9.572, year: 2024, initialScore: 9.572, finalScore: 9.572 },
      { university: "UdG", score: 8.248, year: 2024, initialScore: 8.350, finalScore: 8.248 },
      { university: "UdL", score: 7.776, year: 2024, initialScore: 7.973, finalScore: 7.776 },
      { university: "URV", score: 7.446, year: 2024, initialScore: 8.056, finalScore: 7.446 },
      { university: "UPC-VNG", score: 8.968, year: 2024, initialScore: 9.075, finalScore: 8.968 }
    ]
  },
  {
    id: 4,
    name: "Dret",
    scores: [
      { university: "UB", score: 9.812, year: 2024, initialScore: 9.900, finalScore: 9.812 },
      { university: "UPF", score: 11.064, year: 2024, initialScore: 11.103, finalScore: 11.064 },
      { university: "UAB", score: 9.570, year: 2024, initialScore: 9.746, finalScore: 9.570 },
      { university: "UdG", score: 8.748, year: 2024, initialScore: 8.820, finalScore: 8.748 },
      { university: "UdL", score: 7.386, year: 2024, initialScore: 7.766, finalScore: 7.386 },
      { university: "URV", score: 8.346, year: 2024, initialScore: 8.536, finalScore: 8.346 }
    ]
  },
  {
    id: 5,
    name: "Administració i Direcció d'Empreses",
    scores: [
      { university: "UB", score: 9.540, year: 2024, initialScore: 9.636, finalScore: 9.540 },
      { university: "UPF", score: 11.250, year: 2024, initialScore: 11.316, finalScore: 11.250 },
      { university: "UAB", score: 10.074, year: 2024, initialScore: 10.138, finalScore: 10.074 },
      { university: "UdG", score: 9.324, year: 2024, initialScore: 9.446, finalScore: 9.324 },
      { university: "UdL", score: 7.542, year: 2024, initialScore: 7.634, finalScore: 7.542 },
      { university: "URV", score: 7.788, year: 2024, initialScore: 7.866, finalScore: 7.788 }
    ]
  },
  {
    id: 6,
    name: "Infermeria",
    scores: [
      { university: "UB-Clínic", score: 11.720, year: 2024, initialScore: 11.976, finalScore: 11.720 },
      { university: "UB-Bellvitge", score: 10.641, year: 2024, initialScore: 11.068, finalScore: 10.641 },
      { university: "UAB", score: 10.710, year: 2024, initialScore: 10.982, finalScore: 10.710 },
      { university: "UdG", score: 10.245, year: 2024, initialScore: 10.550, finalScore: 10.245 },
      { university: "UdL", score: 10.790, year: 2024, initialScore: 11.146, finalScore: 10.790 },
      { university: "URV", score: 10.740, year: 2024, initialScore: 11.278, finalScore: 10.740 }
    ]
  },
  {
    id: 7,
    name: "Biologia",
    scores: [
      { university: "UB", score: 11.012, year: 2024, initialScore: 11.030, finalScore: 11.012 },
      { university: "UAB", score: 10.749, year: 2024, initialScore: 10.936, finalScore: 10.749 },
      { university: "UdG", score: 9.320, year: 2024, initialScore: 9.822, finalScore: 9.320 },
      { university: "UVic", score: 5.000, year: 2024, initialScore: 5.000, finalScore: 5.000 }
    ]
  },
  {
    id: 8,
    name: "Farmàcia",
    scores: [
      { university: "UB", score: 10.956, year: 2024, initialScore: 11.216, finalScore: 10.956 }
    ]
  },
  {
    id: 9,
    name: "Arquitectura",
    scores: [
      { university: "UPC", score: 9.486, year: 2024, initialScore: 9.516, finalScore: 9.486 },
      { university: "UdG", score: 9.490, year: 2024, initialScore: 9.490, finalScore: 9.490 },
      { university: "URV", score: 8.614, year: 2024, initialScore: 8.910, finalScore: 8.614 },
      { university: "UPC-SC", score: 9.844, year: 2024, initialScore: 9.844, finalScore: 9.844 }
    ]
  },
  {
    id: 10,
    name: "Periodisme",
    scores: [
      { university: "UPF", score: 10.866, year: 2024, initialScore: 10.866, finalScore: 10.866 },
      { university: "UAB", score: 9.300, year: 2024, initialScore: 9.718, finalScore: 9.300 },
      { university: "URV", score: 7.080, year: 2024, initialScore: 8.822, finalScore: 7.080 },
      { university: "UVic", score: 5.000, year: 2024, initialScore: 5.000, finalScore: 5.000 }
    ]
  },
  {
    id: 11,
    name: "Educació Primària",
    scores: [
      { university: "UB", score: 9.350, year: 2024, initialScore: 9.442, finalScore: 9.350 },
      { university: "UAB", score: 10.157, year: 2024, initialScore: 10.157, finalScore: 10.157 },
      { university: "UdG", score: 9.162, year: 2024, initialScore: 9.178, finalScore: 9.162 },
      { university: "UdL", score: 8.348, year: 2024, initialScore: 8.416, finalScore: 8.348 },
      { university: "URV", score: 8.940, year: 2024, initialScore: 9.040, finalScore: 8.940 }
    ]
  },
  {
    id: 12,
    name: "Educació Infantil",
    scores: [
      { university: "UB", score: 9.050, year: 2024, initialScore: 9.064, finalScore: 9.050 },
      { university: "UAB", score: 9.134, year: 2024, initialScore: 9.216, finalScore: 9.134 },
      { university: "UdG", score: 8.010, year: 2024, initialScore: 8.320, finalScore: 8.010 },
      { university: "UdL", score: 5.000, year: 2024, initialScore: 5.000, finalScore: 5.000 },
      { university: "URV", score: 5.558, year: 2024, initialScore: 7.206, finalScore: 5.558 }
    ]
  },
  {
    id: 13,
    name: "Economia",
    scores: [
      { university: "UB", score: 9.084, year: 2024, initialScore: 9.238, finalScore: 9.084 },
      { university: "UPF", score: 10.664, year: 2024, initialScore: 10.722, finalScore: 10.664 },
      { university: "UAB", score: 9.020, year: 2024, initialScore: 9.150, finalScore: 9.020 }
    ]
  },
  {
    id: 14,
    name: "Física",
    scores: [
      { university: "UB", score: 11.686, year: 2024, initialScore: 11.716, finalScore: 11.686 },
      { university: "UAB", score: 11.770, year: 2024, initialScore: 11.770, finalScore: 11.770 }
    ]
  },
  {
    id: 15,
    name: "Química",
    scores: [
      { university: "UB", score: 9.546, year: 2024, initialScore: 9.673, finalScore: 9.546 },
      { university: "UAB", score: 9.228, year: 2024, initialScore: 9.396, finalScore: 9.228 },
      { university: "URV", score: 8.722, year: 2024, initialScore: 8.722, finalScore: 8.722 }
    ]
  },
  {
    id: 16,
    name: "Biotecnologia",
    scores: [
      { university: "UB", score: 11.754, year: 2024, initialScore: 11.793, finalScore: 11.754 },
      { university: "UAB", score: 11.264, year: 2024, initialScore: 11.408, finalScore: 11.264 },
      { university: "UdG", score: 10.450, year: 2024, initialScore: 10.508, finalScore: 10.450 },
      { university: "UdL", score: 9.798, year: 2024, initialScore: 10.128, finalScore: 9.798 },
      { university: "URV", score: 10.034, year: 2024, initialScore: 10.514, finalScore: 10.034 }
    ]
  },
  {
    id: 17,
    name: "Ciències Biomèdiques",
    scores: [
      { university: "UB", score: 12.272, year: 2024, initialScore: 12.304, finalScore: 12.272 },
      { university: "UAB", score: 12.392, year: 2024, initialScore: 12.431, finalScore: 12.392 },
      { university: "UdL", score: 11.732, year: 2024, initialScore: 11.767, finalScore: 11.732 }
    ]
  },
  {
    id: 18,
    name: "Enginyeria Biomèdica",
    scores: [
      { university: "UB", score: 12.454, year: 2024, initialScore: 12.500, finalScore: 12.454 },
      { university: "UPF", score: 12.170, year: 2024, initialScore: 12.286, finalScore: 12.170 },
      { university: "UPC", score: 11.684, year: 2024, initialScore: 11.838, finalScore: 11.684 },
      { university: "UdG", score: 10.064, year: 2024, initialScore: 10.708, finalScore: 10.064 },
      { university: "URV", score: 9.942, year: 2024, initialScore: 10.686, finalScore: 9.942 }
    ]
  },
  {
    id: 19,
    name: "Odontologia",
    scores: [
      { university: "UB", score: 12.472, year: 2024, initialScore: 12.496, finalScore: 12.472 },
      { university: "UVic", score: 7.870, year: 2024, initialScore: 11.356, finalScore: 7.870 }
    ]
  },
  {
    id: 20,
    name: "Fisioteràpia",
    scores: [
      { university: "UAB", score: 10.270, year: 2024, initialScore: 10.620, finalScore: 10.270 },
      { university: "UdL", score: 9.922, year: 2024, initialScore: 10.117, finalScore: 9.922 },
      { university: "URV", score: 8.900, year: 2024, initialScore: 9.425, finalScore: 8.900 },
      { university: "UdG", score: 6.968, year: 2024, initialScore: 7.787, finalScore: 6.968 },
      { university: "UVic", score: 6.993, year: 2024, initialScore: 7.689, finalScore: 6.993 }
    ]
  }
];

// Función para buscar grados por nombre
export function searchDegrees(searchTerm: string, universityFilter?: string): Degree[] {
  if (!searchTerm && !universityFilter) return [];
  
  return degrees.filter(degree => {
    // Filtrar por nombre del grado
    const nameMatch = searchTerm 
      ? degree.name.toLowerCase().includes(searchTerm.toLowerCase()) 
      : true;
    
    // Filtrar por universidad
    const universityMatch = universityFilter 
      ? degree.scores.some(score => score.university === universityFilter)
      : true;
    
    return nameMatch && universityMatch;
  });
}

// Función para obtener los grados más populares
export function getPopularDegrees(limit: number = 6): Degree[] {
  return degrees.slice(0, limit);
} 