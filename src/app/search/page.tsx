'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { 
  searchItinerariosYAsignaturas, 
  getItinerariosDestacados,
  getAsignaturasPopulares,
  getBusquedasPopulares,
  Itinerario, 
  Asignatura 
} from '@/data/itinerarios';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('q') || '';
  const [results, setResults] = useState<{ itinerarios: Itinerario[], asignaturas: Asignatura[] }>({ 
    itinerarios: [], 
    asignaturas: [] 
  });
  const [recomendaciones, setRecomendaciones] = useState<{ 
    itinerarios: Itinerario[], 
    asignaturas: Asignatura[] 
  }>({ 
    itinerarios: [], 
    asignaturas: [] 
  });
  const [relacionadas, setRelacionadas] = useState<Asignatura[]>([]);
  const [busquedasPopulares, setBusquedasPopulares] = useState<{ texto: string; url: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar recomendaciones y búsquedas populares al inicio
    const itinerariosDestacados = getItinerariosDestacados();
    const asignaturasPopulares = getAsignaturasPopulares();
    
    setRecomendaciones({
      itinerarios: itinerariosDestacados,
      asignaturas: asignaturasPopulares
    });
    setBusquedasPopulares(getBusquedasPopulares());

    // Buscar resultados si hay término de búsqueda
    if (searchTerm) {
      const searchResults = searchItinerariosYAsignaturas(searchTerm);
      setResults(searchResults);
      
      // Generar asignaturas relacionadas (diferentes a las encontradas)
      // En un caso real, esto podría usar un algoritmo más sofisticado
      if (searchResults.asignaturas.length > 0) {
        // Usar el itinerario de la primera asignatura encontrada para sugerir relacionadas
        const primeraAsignatura = searchResults.asignaturas[0];
        const asignaturasDelMismoItinerario = asignaturasPopulares.filter(
          a => a.itinerarioId === primeraAsignatura.itinerarioId && 
               !searchResults.asignaturas.some(found => found.id === a.id)
        );
        setRelacionadas(asignaturasDelMismoItinerario.slice(0, 3));
      } else if (searchResults.itinerarios.length > 0) {
        // Si no hay asignaturas pero sí itinerarios, mostrar asignaturas de ese itinerario
        const primerItinerario = searchResults.itinerarios[0];
        const asignaturasDelItinerario = asignaturasPopulares.filter(
          a => a.itinerarioId === primerItinerario.id
        );
        setRelacionadas(asignaturasDelItinerario.slice(0, 3));
      } else {
        // Si no hay resultados, mostrar algunas asignaturas populares como relacionadas
        setRelacionadas(asignaturasPopulares.slice(0, 3));
      }
    }
    
    setIsLoading(false);
  }, [searchTerm]);

  const totalResults = results.itinerarios.length + results.asignaturas.length;

  // Renderizar tarjeta de itinerario
  const renderItinerarioCard = (itinerario: Itinerario) => (
    <AnimateOnScroll animation="fadeIn" delay={0.1} key={itinerario.id}>
      <Link 
        href={itinerario.ruta}
        className="block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-5"
        style={{ borderLeft: `4px solid ${itinerario.color}` }}
      >
        <div className="flex items-center mb-2">
          <span className="text-2xl mr-3">{itinerario.emoji}</span>
          <h3 className="text-xl font-medium">{itinerario.nombre}</h3>
        </div>
        <p className="text-gray-600">{itinerario.descripcion}</p>
      </Link>
    </AnimateOnScroll>
  );

  // Renderizar tarjeta de asignatura
  const renderAsignaturaCard = (asignatura: Asignatura, index: number) => (
    <AnimateOnScroll animation="fadeIn" delay={0.1 * index} key={asignatura.id}>
      <Link 
        href={asignatura.ruta}
        className="block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-5"
      >
        <div className="flex items-center mb-2">
          <span className="text-2xl mr-3">{asignatura.emoji}</span>
          <h3 className="text-xl font-medium">{asignatura.nombre}</h3>
        </div>
        <p className="text-gray-600">{asignatura.descripcion}</p>
      </Link>
    </AnimateOnScroll>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">
            {searchTerm ? 'Resultats de cerca' : 'Descobreix itineraris i assignatures'}
          </h1>
          
          {searchTerm && (
            <p className="text-gray-600 mb-6">
              {isLoading ? 'Cercant...' : 
                `S'han trobat ${totalResults} resultats per "${searchTerm}"`}
            </p>
          )}

          {/* Búsquedas populares - mostrar siempre */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Tendències de cerca:</h2>
            <div className="flex flex-wrap gap-2">
              {busquedasPopulares.map((busqueda, index) => (
                <Link 
                  key={index} 
                  href={busqueda.url}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
                >
                  {busqueda.texto}
                </Link>
              ))}
            </div>
          </div>

          {/* Resultados de búsqueda */}
          {searchTerm && !isLoading && totalResults === 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-2">No s'han trobat resultats</h2>
              <p className="text-gray-600 mb-4">
                No hem trobat cap itinerari ni assignatura que coincideixi amb "{searchTerm}". 
                Prova amb un altre terme de cerca o explora les nostres recomanacions.
              </p>
            </div>
          )}

          {/* Mostrar resultados de búsqueda si hay término de búsqueda */}
          {searchTerm && results.itinerarios.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Itineraris ({results.itinerarios.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.itinerarios.map(renderItinerarioCard)}
              </div>
            </div>
          )}

          {searchTerm && results.asignaturas.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Assignatures ({results.asignaturas.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.asignaturas.map((asignatura, index) => renderAsignaturaCard(asignatura, index))}
              </div>
            </div>
          )}

          {/* Mostrar asignaturas relacionadas si hay búsqueda */}
          {searchTerm && relacionadas.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">També et pot interessar</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relacionadas.map((asignatura, index) => renderAsignaturaCard(asignatura, index))}
              </div>
            </div>
          )}

          {/* Mostrar recomendaciones si no hay término de búsqueda o no hay resultados */}
          {(!searchTerm || (searchTerm && totalResults === 0)) && (
            <>
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold">Itineraris destacats</h2>
                  <Link href="/categories" className="text-selectivi-yellow hover:underline">
                    Veure tots
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recomendaciones.itinerarios.map(renderItinerarioCard)}
                </div>
              </div>

              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold">Assignatures populars</h2>
                  <Link href="/assignatures" className="text-selectivi-yellow hover:underline">
                    Veure totes
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recomendaciones.asignaturas.map((asignatura, index) => renderAsignaturaCard(asignatura, index))}
                </div>
              </div>

              <div className="bg-selectivi-yellow/10 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">No saps per on començar?</h2>
                <p className="text-gray-700 mb-4">
                  Explora els diferents itineraris per descobrir quines assignatures s'adapten millor als teus interessos i objectius acadèmics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/categories/tecnologic" className="btn bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-white border-none">
                    Itinerari Tecnològic
                  </Link>
                  <Link href="/calculadora" className="btn bg-white text-selectivi-yellow hover:bg-gray-100 border border-selectivi-yellow">
                    Calculadora de notes
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <FooterMain />
    </div>
  );
} 