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
  },
  {
    id: "dibujo-tecnico-2025-modelo-0",
    asignatura: "dibujo-tecnico",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Dibujo Técnico Aplicado - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/dibujo-tecnico/pau_dtaap25_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/dibujo-tecnico/pau25_dtaap_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "fundamentos-empresa-2025-modelo-0",
    asignatura: "fundamentos-empresa",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Fundamentos de la Empresa - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/fundamentos-empresa/01_PAU25_FEiDMN_Model_0-corr-ca.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/fundamentos-empresa/01_PAU25_FEiDMN_Model_0_pautes-corr-ca.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "historia-2025-modelo-0",
    asignatura: "historia",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Historia - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/historia/01_PAU25_Historia_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/historia/01_PAU25_Historia_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "analisis-musical-2025-modelo-0",
    asignatura: "analisis-musical",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Análisis Musical - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/analisis-musical/01_pau25_AMusical_model0_CA_CORR.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/analisis-musical/01_pau25_AMusical_model0_pautes_CA_CORR.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "ingles-2025-modelo-0",
    asignatura: "ingles",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Inglés - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/ingles/pau_angl25_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/ingles/pau_angl25_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "lengua-cultura-griegas-2025-modelo-0",
    asignatura: "lengua-cultura-griegas",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Lengua y Cultura Griegas - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/lengua-cultura-griegas/01_PAU25_Grec_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/lengua-cultura-griegas/01_PAU25_grec_0_correccio.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "literatura-dramatica-2025-modelo-0",
    asignatura: "literatura-dramatica",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Literatura Dramática - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/literatura-dramatica/01_PAU25_Literatura-Dramatica_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/literatura-dramatica/01_PAU25_Literatura-Dramatica_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "quimica-2025-modelo-0",
    asignatura: "quimica",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Química - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/quimica/01_PAU25_quimica_Model-0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/quimica/01_PAU25_quimica_Model0_c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "italiano-2025-modelo-0",
    asignatura: "italia",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Italiano - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/italiano/01_PAU25_Italia_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/italiano/01_PAU25_Italia_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "castellano-2025-modelo-0",
    asignatura: "castella",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Lengua Castellana - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/castellano/01_PAU25_LlenguaCastellana_Model-0_vdef.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/castellano/01_PAU25_LlenguaCastellana_Model-0_c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "filosofia-2025-modelo-0",
    asignatura: "filosofia",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Filosofía - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/filosofia/01_pau25_filo_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/filosofia/01_pau25_filo_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "geografia-2025-modelo-0",
    asignatura: "geografia",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Geografía - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/geografia/01_pau25_geografia_model0-corr-ca.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/geografia/01_pau25_geografia_model0_correccio-corr-ca.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "dibujo-artistico-2025-modelo-0",
    asignatura: "dibuix-artistic",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Dibujo Artístico - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/dibujo artistico/01_pau25_dibuixartistic_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/dibujo artistico/01_pau25_dibuixartistic_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "matematicas-2025-modelo-0",
    asignatura: "matematiques",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Matemáticas - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/matematicas/01_pau25_mates_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/matematicas/01_pau25_mates_0_c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "tec-expresion-graficoplastica-2025-modelo-0",
    asignatura: "dibuix-artistic",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Técnicas de Expresión Gráficoplástica - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/tecnicas de expresion graficoplastica/01_PAU25_TEG_Model_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/tecnicas de expresion graficoplastica/01_PAU25_TEG_Model_0_pautes.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "artes-escenicas-2025-modelo-0",
    asignatura: "arts-esceniques",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Artes Escénicas - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/tecnicas de expresion graficoplastica/artes escenicas/pau_asc25_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/tecnicas de expresion graficoplastica/artes escenicas/pau_asc25_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "diseno-2025-modelo-0",
    asignatura: "disseny",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Diseño - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/diseño/pau25_disseny25_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/diseño/pau25_disseny25_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "coro-tecnica-vocal-2025-modelo-0",
    asignatura: "analisi-musical",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Coro y Técnica Vocal - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/coro y tecnica vocal/01_pau_cortv25_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/coro y tecnica vocal/01_pau_cortv25_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "historia-arte-2025-modelo-0",
    asignatura: "historia-art",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Historia del Arte - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/historia del arte/PAU_HArt2025_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/historia del arte/PAU_HArt2025_0C.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "fundamentos-artisticos-2025-modelo-0",
    asignatura: "fonaments-arts",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Fundamentos Artísticos - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/fundamentos artisticos/PAU_FonamentsArtistics2025_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/fundamentos artisticos/PAU_FonamentsArtistics2025_0C.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "biologia-2025-modelo-0",
    asignatura: "biologia",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Biología - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/biologia/01.-Model-dexamen_Corr_CA_v2.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/biologia/01.criteris-correccio-Biologia-PAU_2025_Corr_CA_v2.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "frances-2025-modelo-0",
    asignatura: "frances",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Francés - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/frances/01_pau25_Frances_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/frances/01_pau25_Frances_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "matematicas-ccss-2025-modelo-0",
    asignatura: "matematiques-socials",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Matemáticas Aplicadas a CCSS - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/matematicas CCSS/PAU_MatesAplicades2025_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/matematicas CCSS/PAU_matesAplicades2025_0C.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "geologia-ciencias-ambientales-2025-modelo-0",
    asignatura: "geologia",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Geología y Ciencias Ambientales - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/geologia y ciencias ambientales/PAU_GICA2025_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/geologia y ciencias ambientales/PAU_GICA2025_0C.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "catalan-2025-modelo-0",
    asignatura: "catala",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Lengua Catalana y Literatura - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/lengua catalana i literatura/01_pau25_catala_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/lengua catalana i literatura/01_pau25_catala_0c.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "literatura-castellana-2025-modelo-0",
    asignatura: "literatura-castellana",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Literatura Castellana - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/literatura castellana/01_PAU25_LiteCastellana_Model0_v2.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/literatura castellana/01_PAU25_LiteCastellana_model0_pautes_v2.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "literatura-catalana-2025-modelo-0",
    asignatura: "literatura-catalana",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Literatura Catalana - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/literatura catalana/01_PAU25_LiteCatalana_Model0_v2.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/literatura catalana/01_PAU25_LiteCatalana_Model0_pautes_v2.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "movimientos-culturales-2025-modelo-0",
    asignatura: "movimientos-culturales",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Movimientos Culturales y Artísticos - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/movimientos culturales i artisticos/pau_moca25_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/movimientos culturales i artisticos/pau_moca25_0C.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "tecnologia-ingenieria-2025-modelo-0",
    asignatura: "tecnologia",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Tecnología e Ingeniería - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/tecnologia e ingenieria/01.-Model-dexamen-Serie-0_PAU2025_Corr.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/tecnologia e ingenieria/01.-Criteris-correccio-Serie-0_-PAU2025_Corr.pdf", // Criterios de corrección
    comunidadAutonoma: "Cataluña",
    isExternalUrl: false
  },
  {
    id: "historia-musica-danza-2025-modelo-0",
    asignatura: "historia-musica",
    año: 2025,
    convocatoria: "modelo-0",
    titulo: "Historia de la Música y de la Danza - Modelo 0 PAU 2025",
    rutaExamen: "/examenes/historia de la musica y de la danza/PAU_HMusicaiDansa2025_0.pdf",
    rutaSolucion: "", // No hay solución disponible aún
    rutaCorreccion: "/examenes/historia de la musica y de la danza/PAU_HMusicaiDansa2025_0C.pdf", // Criterios de corrección
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
  // Mostrar todos los exámenes disponibles para el componente de exámenes recientes
  return examenes;
}

export function getExamenById(id: string): Examen | undefined {
  return examenes.find(examen => examen.id === id);
} 