export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  channelName: string;
  channelUrl: string;
  publishedAt: string;
  duration: string;
  viewCount: number;
  subjectId: string;
  tags: string[];
}

// Estructura para los videos educativos
export const videos: Video[] = [
  {
    id: "castellano-comentario-texto-1",
    title: "Cómo hacer un COMENTARIO DE TEXTO paso a paso",
    description: "Guía completa para realizar un comentario de texto en castellano. Explicación detallada del proceso, desde la lectura inicial hasta la redacción final, con ejemplos prácticos.",
    videoUrl: "https://www.youtube.com/watch?v=Vmchhx6Oedk",
    thumbnailUrl: "https://img.youtube.com/vi/Vmchhx6Oedk/maxresdefault.jpg",
    channelName: "LenGuay",
    channelUrl: "https://www.youtube.com/@LenGuay",
    publishedAt: "2023-02-15",
    duration: "14:23",
    viewCount: 52000,
    subjectId: "castella",
    tags: ["Comentario de texto", "Selectividad", "Lengua Castellana", "Literatura"]
  },
  // Videos de Historia de España para Selectividad
  {
    id: "historia-espana-1",
    title: "🇪🇸 La GUERRA CIVIL ESPAÑOLA [1936-1939] 🌐 HISTORIA de ESPAÑA",
    description: "Resumen completo de la Guerra Civil Española (1936-1939) para preparar la Selectividad. Causas, desarrollo y consecuencias explicadas de forma clara y concisa.",
    videoUrl: "https://www.youtube.com/watch?v=0x5A4Jji8k4",
    thumbnailUrl: "https://img.youtube.com/vi/0x5A4Jji8k4/maxresdefault.jpg",
    channelName: "Atodaleche",
    channelUrl: "https://www.youtube.com/@Atodaleche",
    publishedAt: "2023-05-10",
    duration: "15:20",
    viewCount: 125000,
    subjectId: "historia",
    tags: ["Guerra Civil", "Selectividad", "Historia de España", "Siglo XX"]
  },
  {
    id: "historia-espana-2",
    title: "🇪🇸 La SEGUNDA REPÚBLICA ESPAÑOLA [1931-1936] 🌐 HISTORIA de ESPAÑA",
    description: "Análisis de la Segunda República Española, desde su proclamación hasta el inicio de la Guerra Civil. Incluye las reformas, problemas y crisis del periodo republicano.",
    videoUrl: "https://www.youtube.com/watch?v=ORNTC9GB7_Y",
    thumbnailUrl: "https://img.youtube.com/vi/ORNTC9GB7_Y/maxresdefault.jpg",
    channelName: "Atodaleche",
    channelUrl: "https://www.youtube.com/@Atodaleche",
    publishedAt: "2023-04-15",
    duration: "18:45",
    viewCount: 98000,
    subjectId: "historia",
    tags: ["Segunda República", "Selectividad", "Historia de España", "Siglo XX"]
  },
  {
    id: "historia-espana-3",
    title: "🇪🇸 El FRANQUISMO [1939-1975] 🌐 HISTORIA de ESPAÑA",
    description: "Explicación completa de la dictadura franquista (1939-1975). Etapas, política, economía y sociedad durante el régimen de Franco, enfocado a exámenes de Selectividad.",
    videoUrl: "https://www.youtube.com/watch?v=0ttmdGypnVw",
    thumbnailUrl: "https://img.youtube.com/vi/0ttmdGypnVw/maxresdefault.jpg",
    channelName: "Atodaleche",
    channelUrl: "https://www.youtube.com/@Atodaleche",
    publishedAt: "2023-03-20",
    duration: "20:15",
    viewCount: 115000,
    subjectId: "historia",
    tags: ["Franquismo", "Dictadura", "Selectividad", "Historia de España", "Siglo XX"]
  },
  {
    id: "historia-espana-4",
    title: "🇪🇸 La TRANSICIÓN ESPAÑOLA [1975-1982] 🌐 HISTORIA de ESPAÑA",
    description: "Análisis del proceso de Transición española (1975-1982). Desde la muerte de Franco hasta la consolidación democrática, incluyendo la Constitución de 1978 y el golpe del 23-F.",
    videoUrl: "https://www.youtube.com/watch?v=8DPKW4fuKvM",
    thumbnailUrl: "https://img.youtube.com/vi/8DPKW4fuKvM/maxresdefault.jpg",
    channelName: "Atodaleche",
    channelUrl: "https://www.youtube.com/@Atodaleche",
    publishedAt: "2023-02-28",
    duration: "17:30",
    viewCount: 105000,
    subjectId: "historia",
    tags: ["Transición", "Democracia", "Selectividad", "Historia de España", "Siglo XX"]
  },
  {
    id: "historia-espana-5",
    title: "Los REYES CATÓLICOS y la unificación de España - Selectividad",
    description: "Explicación del reinado de los Reyes Católicos y la unificación territorial, política y religiosa de España. Incluye la conquista de Granada, expulsión de los judíos y descubrimiento de América.",
    videoUrl: "https://www.youtube.com/watch?v=aVMBJ_Yd-D8",
    thumbnailUrl: "https://img.youtube.com/vi/aVMBJ_Yd-D8/maxresdefault.jpg",
    channelName: "Atodaleche",
    channelUrl: "https://www.youtube.com/@Atodaleche",
    publishedAt: "2023-01-15",
    duration: "16:45",
    viewCount: 92000,
    subjectId: "historia",
    tags: ["Reyes Católicos", "Edad Moderna", "Selectividad", "Historia de España", "Siglo XV"]
  },
  {
    id: "quimica-reacciones-1",
    title: "Reacciones químicas - Ejercicio resuelto de selectividad",
    description: "Resolución detallada de un ejercicio de reacciones químicas que ha aparecido en exámenes de selectividad. Explicación paso a paso del método de resolución.",
    videoUrl: "https://www.youtube.com/watch?v=_l1-V0crLq8",
    thumbnailUrl: "https://img.youtube.com/vi/_l1-V0crLq8/maxresdefault.jpg",
    channelName: "profesor10demates",
    channelUrl: "https://www.youtube.com/channel/profesor10demates",
    publishedAt: "2022-05-15",
    duration: "12:45",
    viewCount: 45000,
    subjectId: "quimica",
    tags: ["Reacciones químicas", "Selectividad", "Química", "Ejercicios resueltos"]
  },
  {
    id: "quimica-equilibrio-1",
    title: "Equilibrio químico - Ejercicio completo",
    description: "Explicación del equilibrio químico con ejemplos prácticos para preparar la selectividad. Incluye trucos y consejos para resolver este tipo de problemas.",
    videoUrl: "https://www.youtube.com/watch?v=D8ExrVOOhYA",
    thumbnailUrl: "https://img.youtube.com/vi/D8ExrVOOhYA/maxresdefault.jpg",
    channelName: "profesor10demates",
    channelUrl: "https://www.youtube.com/channel/profesor10demates",
    publishedAt: "2022-06-10",
    duration: "15:20",
    viewCount: 38000,
    subjectId: "quimica",
    tags: ["Equilibrio químico", "Constante de equilibrio", "Selectividad", "Química"]
  },
  {
    id: "quimica-acidos-bases-1",
    title: "Ácidos y bases - Ejercicio de selectividad resuelto",
    description: "Resolución de un problema de ácidos y bases típico de selectividad. Se explica el cálculo de pH y las reacciones de neutralización.",
    videoUrl: "https://www.youtube.com/watch?v=nGlFVrDXKJQ",
    thumbnailUrl: "https://img.youtube.com/vi/nGlFVrDXKJQ/maxresdefault.jpg",
    channelName: "profesor10demates",
    channelUrl: "https://www.youtube.com/channel/profesor10demates",
    publishedAt: "2022-04-20",
    duration: "14:10",
    viewCount: 42000,
    subjectId: "quimica",
    tags: ["Ácidos y bases", "pH", "Selectividad", "Química", "Neutralización"]
  },
  {
    id: "quimica-redox-1",
    title: "Reacciones redox - Serie de ejercicios para selectividad",
    description: "Colección de ejercicios de reacciones de oxidación-reducción frecuentes en exámenes de selectividad. Incluye técnicas para ajustar ecuaciones y calcular potenciales.",
    videoUrl: "https://www.youtube.com/watch?v=8B16zGe99VE",
    thumbnailUrl: "https://img.youtube.com/vi/8B16zGe99VE/maxresdefault.jpg",
    channelName: "profesor10demates",
    channelUrl: "https://www.youtube.com/channel/profesor10demates",
    publishedAt: "2022-03-05",
    duration: "18:30",
    viewCount: 36000,
    subjectId: "quimica",
    tags: ["Redox", "Oxidación-reducción", "Selectividad", "Química", "Potenciales"]
  }
];

// Función para obtener videos por asignatura
export function getVideosBySubject(subjectId: string): Video[] {
  console.log('Buscando videos para la asignatura:', subjectId);
  const filteredVideos = videos.filter(video => video.subjectId === subjectId);
  console.log('Videos encontrados:', filteredVideos.length);
  return filteredVideos;
}

// Función para obtener videos destacados
export function getFeaturedVideos(): Video[] {
  // Devuelve los primeros 6 videos o menos si no hay suficientes
  return videos.slice(0, 6);
}

// Función para obtener un video por su ID
export function getVideoById(id: string): Video | undefined {
  return videos.find(video => video.id === id);
} 