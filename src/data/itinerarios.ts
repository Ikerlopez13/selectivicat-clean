export interface Asignatura {
  id: string;
  nombre: string;
  descripcion: string;
  itinerarioId: string;
  emoji: string;
  ruta: string;
}

export interface Itinerario {
  id: string;
  nombre: string;
  descripcion: string;
  color: string;
  emoji: string;
  ruta: string;
}

export const itinerarios: Itinerario[] = [
  {
    id: "tecnologic",
    nombre: "Tecnològic i Científic",
    descripcion: "Recursos i materials per a les matèries de l'itinerari tecnològic i científic.",
    color: "#A8E6CF",
    emoji: "🏗️",
    ruta: "/categories/tecnologic"
  },
  {
    id: "social",
    nombre: "Social i Humanístic",
    descripcion: "Recursos i materials per a les matèries de l'itinerari social i humanístic.",
    color: "#FFB7B2",
    emoji: "📚",
    ruta: "/categories/social"
  },
  {
    id: "llengues",
    nombre: "Llengües",
    descripcion: "Recursos i materials per a les matèries de llengües.",
    color: "#E2B6CF",
    emoji: "🗣️",
    ruta: "/categories/llengues"
  },
  {
    id: "artistic",
    nombre: "Artístic",
    descripcion: "Recursos i materials per a les matèries de l'itinerari artístic.",
    color: "#FFDAC1",
    emoji: "🎨",
    ruta: "/categories/artistic"
  },
  {
    id: "comunes",
    nombre: "Matèries Comunes",
    descripcion: "Recursos i materials per a les matèries comunes de la selectivitat.",
    color: "#B5EAD7",
    emoji: "📝",
    ruta: "/categories/comunes"
  }
];

export const asignaturas: Asignatura[] = [
  // Tecnológicas y científicas
  {
    id: "ciencies-generals",
    nombre: "Ciències Generals",
    descripcion: "Conceptes bàsics i fonamentals de les ciències experimentals.",
    itinerarioId: "tecnologic",
    emoji: "🔬",
    ruta: "/subjects/ciencies-generals"
  },
  {
    id: "biologia",
    nombre: "Biologia",
    descripcion: "Estudi dels éssers vius i els processos biològics.",
    itinerarioId: "tecnologic",
    emoji: "🧬",
    ruta: "/subjects/biologia"
  },
  {
    id: "ciencies-terra",
    nombre: "Ciències de la terra",
    descripcion: "Estudi de la Terra, la seva estructura, composició i processos.",
    itinerarioId: "tecnologic",
    emoji: "🌍",
    ruta: "/subjects/ciencies-terra"
  },
  {
    id: "dibuix-tecnic",
    nombre: "Dibuix tècnic",
    descripcion: "Representació gràfica i tècnica d'objectes i espais.",
    itinerarioId: "tecnologic",
    emoji: "📐",
    ruta: "/subjects/dibuix-tecnic"
  },
  {
    id: "fisica",
    nombre: "Física",
    descripcion: "Estudi de la matèria, l'energia i les seves interaccions.",
    itinerarioId: "tecnologic",
    emoji: "⚛️",
    ruta: "/subjects/fisica"
  },
  {
    id: "matematiques",
    nombre: "Matemàtiques",
    descripcion: "Estudi de les propietats i relacions entre nombres, figures i estructures.",
    itinerarioId: "tecnologic",
    emoji: "√x",
    ruta: "/subjects/matematiques"
  },
  {
    id: "electrotecnia",
    nombre: "Electrotècnia",
    descripcion: "Aplicació pràctica de l'electricitat i els circuits elèctrics.",
    itinerarioId: "tecnologic",
    emoji: "⚡",
    ruta: "/subjects/electrotecnia"
  },
  {
    id: "quimica",
    nombre: "Química",
    descripcion: "Estudi de la composició, estructura i propietats de la matèria.",
    itinerarioId: "tecnologic",
    emoji: "🧪",
    ruta: "/subjects/quimica"
  },
  {
    id: "tecnologia-industrial",
    nombre: "Tecnologia Industrial",
    descripcion: "Estudi dels processos industrials i tecnològics.",
    itinerarioId: "tecnologic",
    emoji: "🔧",
    ruta: "/subjects/tecnologia-industrial"
  },
  
  // Sociales y humanísticas
  {
    id: "economia",
    nombre: "Economia",
    descripcion: "Estudi dels sistemes econòmics i els processos de producció, distribució i consum.",
    itinerarioId: "social",
    emoji: "💰",
    ruta: "/subjects/economia"
  },
  {
    id: "empresa",
    nombre: "Empresa",
    descripcion: "Estudi de l'organització i gestió empresarial.",
    itinerarioId: "social",
    emoji: "🏢",
    ruta: "/subjects/empresa"
  },
  {
    id: "geografia",
    nombre: "Geografia",
    descripcion: "Estudi de la Terra i les seves característiques físiques i humanes.",
    itinerarioId: "social",
    emoji: "🗺️",
    ruta: "/subjects/geografia"
  },
  {
    id: "historia",
    nombre: "Història",
    descripcion: "Estudi dels esdeveniments passats i la seva relació amb el present.",
    itinerarioId: "social",
    emoji: "📜",
    ruta: "/subjects/historia"
  },
  {
    id: "historia-art",
    nombre: "Història de l'Art",
    descripcion: "Estudi de les manifestacions artístiques al llarg de la història.",
    itinerarioId: "social",
    emoji: "🖼️",
    ruta: "/subjects/historia-art"
  },
  {
    id: "matematiques-ccss",
    nombre: "Matemàtiques CCSS",
    descripcion: "Matemàtiques aplicades a les ciències socials, amb èmfasi en l'estadística i la probabilitat.",
    itinerarioId: "social",
    emoji: "📈",
    ruta: "/subjects/matematiques-ccss"
  },
  
  // Lenguas
  {
    id: "llati",
    nombre: "Llatí",
    descripcion: "Estudi de la llengua, literatura i cultura de l'antiga Roma.",
    itinerarioId: "llengues",
    emoji: "🏛️",
    ruta: "/subjects/llati"
  },
  {
    id: "italia",
    nombre: "Italià",
    descripcion: "Estudi de la llengua italiana i la seva cultura.",
    itinerarioId: "llengues",
    emoji: "🇮🇹",
    ruta: "/subjects/italia"
  },
  {
    id: "frances",
    nombre: "Francès",
    descripcion: "Estudi de la llengua francesa i la seva cultura.",
    itinerarioId: "llengues",
    emoji: "🇫🇷",
    ruta: "/subjects/frances"
  },
  {
    id: "grec",
    nombre: "Grec",
    descripcion: "Estudi de la llengua, literatura i cultura de l'antiga Grècia.",
    itinerarioId: "llengues",
    emoji: "🏺",
    ruta: "/subjects/grec"
  },
  {
    id: "alemany",
    nombre: "Alemany",
    descripcion: "Estudi de la llengua alemanya i la seva cultura.",
    itinerarioId: "llengues",
    emoji: "🇩🇪",
    ruta: "/subjects/alemany"
  },
  {
    id: "angles",
    nombre: "Anglès",
    descripcion: "Estudi de la llengua anglesa i la seva cultura.",
    itinerarioId: "llengues",
    emoji: "🇬🇧",
    ruta: "/subjects/angles"
  },
  
  // Artísticas
  {
    id: "analisi-musical",
    nombre: "Anàlisi musical",
    descripcion: "Estudi de les estructures, formes i elements de les obres musicals.",
    itinerarioId: "artistic",
    emoji: "🎵",
    ruta: "/subjects/analisi-musical"
  },
  {
    id: "arts-esceniques",
    nombre: "Arts Escèniques",
    descripcion: "Estudi del teatre, la dansa i altres formes d'expressió escènica.",
    itinerarioId: "artistic",
    emoji: "🎭",
    ruta: "/subjects/arts-esceniques"
  },
  {
    id: "cultura-audiovisual",
    nombre: "Cultura Audiovisual",
    descripcion: "Anàlisi i creació de continguts audiovisuals i multimèdia.",
    itinerarioId: "artistic",
    emoji: "🎬",
    ruta: "/subjects/cultura-audiovisual"
  },
  {
    id: "dibuix-artistic",
    nombre: "Dibuix artístic",
    descripcion: "Tècniques i mètodes de representació gràfica i expressió visual.",
    itinerarioId: "artistic",
    emoji: "✏️",
    ruta: "/subjects/dibuix-artistic"
  },
  {
    id: "disseny",
    nombre: "Disseny",
    descripcion: "Principis, processos i metodologies del disseny gràfic, industrial i d'espais.",
    itinerarioId: "artistic",
    emoji: "🖌️",
    ruta: "/subjects/disseny"
  },
  {
    id: "fonaments-arts",
    nombre: "Fonaments de les arts",
    descripcion: "Estudi dels fonaments teòrics i històrics de les diferents disciplines artístiques.",
    itinerarioId: "artistic",
    emoji: "🏛️",
    ruta: "/subjects/fonaments-arts"
  },
  {
    id: "historia-musica-dansa",
    nombre: "Història de la Música i de la Dansa",
    descripcion: "Evolució històrica de la música i la dansa a través de diferents èpoques i cultures.",
    itinerarioId: "artistic",
    emoji: "💃",
    ruta: "/subjects/historia-musica-dansa"
  },
  
  // Comunes
  {
    id: "catala",
    nombre: "Llengua Catalana i Literatura",
    descripcion: "Estudi de la llengua catalana i la seva literatura.",
    itinerarioId: "comunes",
    emoji: "📕",
    ruta: "/subjects/catala"
  },
  {
    id: "castella",
    nombre: "Llengua Castellana i Literatura",
    descripcion: "Estudi de la llengua castellana i la seva literatura.",
    itinerarioId: "comunes",
    emoji: "📗",
    ruta: "/subjects/castella"
  },
  {
    id: "filosofia",
    nombre: "Filosofia",
    descripcion: "Estudi del pensament, la raó i l'existència humana.",
    itinerarioId: "comunes",
    emoji: "🧠",
    ruta: "/subjects/filosofia"
  },
  {
    id: "historia-filosofia",
    nombre: "Història de la Filosofia",
    descripcion: "Estudi de l'evolució del pensament filosòfic al llarg de la història.",
    itinerarioId: "comunes",
    emoji: "🤔",
    ruta: "/subjects/historia-filosofia"
  }
];

// Funciones de utilidad
export function getAsignaturasByItinerario(itinerarioId: string): Asignatura[] {
  return asignaturas.filter(asignatura => asignatura.itinerarioId === itinerarioId);
}

export function searchItinerariosYAsignaturas(searchTerm: string): {
  itinerarios: Itinerario[];
  asignaturas: Asignatura[];
} {
  if (!searchTerm.trim()) {
    return { itinerarios: [], asignaturas: [] };
  }
  
  const searchTermLower = searchTerm.toLowerCase();
  
  const itinerariosEncontrados = itinerarios.filter(
    itinerario => 
      itinerario.nombre.toLowerCase().includes(searchTermLower) ||
      itinerario.descripcion.toLowerCase().includes(searchTermLower)
  );
  
  const asignaturasEncontradas = asignaturas.filter(
    asignatura => 
      asignatura.nombre.toLowerCase().includes(searchTermLower) ||
      asignatura.descripcion.toLowerCase().includes(searchTermLower)
  );
  
  return {
    itinerarios: itinerariosEncontrados,
    asignaturas: asignaturasEncontradas
  };
}

// Nuevas funciones para recomendaciones
export function getItinerariosDestacados(limit: number = 3): Itinerario[] {
  // En un caso real, esto podría basarse en popularidad, visitas, etc.
  // Por ahora, simplemente devolvemos los primeros N itinerarios
  return itinerarios.slice(0, limit);
}

export function getAsignaturasPopulares(limit: number = 6): Asignatura[] {
  // En un caso real, esto podría basarse en popularidad, visitas, etc.
  // Por ahora, devolvemos una selección variada de asignaturas
  const populares = [
    asignaturas.find(a => a.id === "mates"),
    asignaturas.find(a => a.id === "fisica"),
    asignaturas.find(a => a.id === "catala"),
    asignaturas.find(a => a.id === "historia"),
    asignaturas.find(a => a.id === "economia"),
    asignaturas.find(a => a.id === "dibuix"),
  ].filter(Boolean) as Asignatura[];
  
  return populares.slice(0, limit);
}

export function getAsignaturasRelacionadas(asignaturaId: string, limit: number = 3): Asignatura[] {
  // Encuentra la asignatura actual
  const asignaturaActual = asignaturas.find(a => a.id === asignaturaId);
  
  if (!asignaturaActual) return [];
  
  // Obtiene asignaturas del mismo itinerario, excluyendo la actual
  const relacionadas = asignaturas
    .filter(a => a.itinerarioId === asignaturaActual.itinerarioId && a.id !== asignaturaId)
    .slice(0, limit);
    
  return relacionadas;
}

// Función para obtener términos de búsqueda populares
export function getBusquedasPopulares(): { texto: string; url: string }[] {
  // En un caso real, esto podría basarse en análisis de búsquedas reales
  return [
    { texto: "Matemàtiques", url: "/search?q=matematiques" },
    { texto: "Biologia", url: "/search?q=biologia" },
    { texto: "Física", url: "/search?q=fisica" },
    { texto: "Tecnològic", url: "/search?q=tecnologic" },
    { texto: "Humanístic", url: "/search?q=humanistic" },
    { texto: "Notes de tall", url: "/notes-de-tall" },
    { texto: "Exàmens", url: "/examenes" },
    { texto: "Calculadora", url: "/calculadora" }
  ];
}

// Nueva función para obtener sugerencias de búsqueda en tiempo real
export function getSugerenciasBusqueda(termino: string, limite: number = 5): { texto: string; url: string; tipo: string }[] {
  if (!termino || termino.trim().length < 2) return [];
  
  const terminoLower = termino.toLowerCase().trim();
  const sugerencias: { texto: string; url: string; tipo: string; relevancia: number }[] = [];
  
  // Buscar en itinerarios
  itinerarios.forEach(itinerario => {
    const nombreMatch = itinerario.nombre.toLowerCase().includes(terminoLower);
    if (nombreMatch) {
      // Calcular relevancia: coincidencia exacta al inicio tiene mayor prioridad
      const relevancia = itinerario.nombre.toLowerCase().startsWith(terminoLower) ? 100 : 50;
      
      sugerencias.push({
        texto: itinerario.nombre,
        url: itinerario.ruta,
        tipo: 'itinerario',
        relevancia
      });
    }
  });
  
  // Buscar en asignaturas
  asignaturas.forEach(asignatura => {
    const nombreMatch = asignatura.nombre.toLowerCase().includes(terminoLower);
    if (nombreMatch) {
      // Calcular relevancia: coincidencia exacta al inicio tiene mayor prioridad
      const relevancia = asignatura.nombre.toLowerCase().startsWith(terminoLower) ? 90 : 40;
      
      sugerencias.push({
        texto: asignatura.nombre,
        url: asignatura.ruta,
        tipo: 'asignatura',
        relevancia
      });
    }
  });
  
  // Añadir búsquedas populares que coincidan
  const busquedasPopulares = getBusquedasPopulares();
  busquedasPopulares.forEach(busqueda => {
    if (busqueda.texto.toLowerCase().includes(terminoLower)) {
      // Las búsquedas populares tienen menor prioridad que las coincidencias directas
      const relevancia = busqueda.texto.toLowerCase().startsWith(terminoLower) ? 80 : 30;
      
      sugerencias.push({
        texto: busqueda.texto,
        url: busqueda.url,
        tipo: 'busqueda',
        relevancia
      });
    }
  });
  
  // Ordenar por relevancia y limitar resultados
  return sugerencias
    .sort((a, b) => b.relevancia - a.relevancia)
    .slice(0, limite);
}

// Nuevas funciones para obtener asignaturas e itinerarios por ID
export function getAsignaturaById(id: string): Asignatura | undefined {
  return asignaturas.find(asignatura => asignatura.id === id);
}

export function getItinerarioById(id: string): Itinerario | undefined {
  return itinerarios.find(itinerario => itinerario.id === id);
}

export function getItinerarioByAsignaturaId(asignaturaId: string): Itinerario | undefined {
  const asignatura = getAsignaturaById(asignaturaId);
  if (!asignatura) return undefined;
  
  return getItinerarioById(asignatura.itinerarioId);
} 