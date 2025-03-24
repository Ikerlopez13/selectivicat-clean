'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import AnimateOnScroll from './AnimateOnScroll';
import { getAsignaturasPopulares, getBusquedasPopulares, getSugerenciasBusqueda } from '@/data/itinerarios';

export default function HeroMain() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [suggestions, setSuggestions] = useState<{ texto: string; url: string; tipo: string }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [popularSearches, setPopularSearches] = useState<{ texto: string; url: string }[]>([]);
  const [popularSubjects, setPopularSubjects] = useState<{ nombre: string; ruta: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const searchOptions = [
    { nombre: 'Notes de tall', path: '/notes-de-tall' },
    { nombre: 'Exàmens', path: '/examenes' },
    { nombre: 'Calculadora', path: '/calculadora' },
    { nombre: 'Videos educatius', path: '/videos' },
    { nombre: 'Itineraris i Assignatures', path: '/search' },
  ];

  // Cargar búsquedas populares y asignaturas al inicio
  useEffect(() => {
    try {
      const busquedas = getBusquedasPopulares();
      setPopularSearches(busquedas);
      
      const asignaturas = getAsignaturasPopulares();
      setPopularSubjects(asignaturas.map(a => ({ 
        nombre: a.nombre, 
        ruta: `/search?q=${encodeURIComponent(a.nombre)}` 
      })));
    } catch (error) {
      console.error("Error cargando datos:", error);
    }
  }, []);

  // Generar sugerencias basadas en el término de búsqueda
  useEffect(() => {
    if (searchTerm.trim().length >= 2) {
      const sugerenciasGeneradas = getSugerenciasBusqueda(searchTerm);
      setSuggestions(sugerenciasGeneradas);
      setShowSuggestions(sugerenciasGeneradas.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  // Cerrar sugerencias al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (url: string) => {
    router.push(url);
    setShowSuggestions(false);
  };

  const handleOptionClick = (path: string) => {
    if (searchTerm.trim()) {
      router.push(`${path}?q=${encodeURIComponent(searchTerm)}`);
    } else {
      router.push(path);
    }
    setShowDropdown(false);
  };

  return (
    <div className="bg-selectivi-yellow py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <AnimateOnScroll animation="fadeIn" duration={0.8}>
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Treu el màxim partit de selectiviCAT,</h2>
                <h1 className="text-5xl md:text-6xl font-bold">
                  El teu <span className="text-white">aliat.</span>
                </h1>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fadeIn" delay={0.2} duration={0.8}>
              <p className="text-lg">
                Treu la teva <Link href="/millor-versio" className="underline font-semibold">millor versió</Link> a la Selectivitat i 
                aconsegueix anar a la carrera <Link href="/somnis" className="underline font-semibold">dels teus somnis.🔮</Link>
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slideUp" delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link href="/notes-de-tall" className="btn bg-white text-selectivi-yellow hover:bg-white/90 border-none flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Consulta les notes de tall
                </Link>
                <Link href="/calculadora" className="btn bg-white/20 text-white hover:bg-white/30 border-white/30 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Calcula la teva nota
                </Link>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slideUp" delay={0.6}>
              <div className="pt-4">
                <div className="relative" ref={searchRef}>
                  <form onSubmit={handleSearch} className="join relative">
                    <div className="relative">
                      <input
                        ref={inputRef}
                        className="w-full p-4 pl-12 rounded-xl bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-selectivi-yellow focus:border-transparent"
                        placeholder="Cerca itineraris, assignatures..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={() => {
                          if (suggestions.length > 0) {
                            setShowSuggestions(true);
                          }
                        }}
                      />
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <button className="bg-white text-selectivi-yellow hover:text-selectivi-yellow/80 p-2 rounded-lg flex items-center gap-2">
                          <span>Filtra</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* Sugerencias de búsqueda */}
                    {showSuggestions && (
                      <div 
                        ref={suggestionsRef}
                        className="absolute top-full left-0 mt-1 w-full md:w-80 bg-white rounded-md shadow-lg z-20 overflow-hidden"
                      >
                        <ul className="py-1">
                          {suggestions.map((suggestion, index) => (
                            <li 
                              key={index}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                              onClick={() => handleSuggestionClick(suggestion.url)}
                            >
                              <span className="mr-2">
                                {suggestion.tipo === 'itinerario' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                  </svg>
                                )}
                                {suggestion.tipo === 'asignatura' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                  </svg>
                                )}
                                {suggestion.tipo === 'busqueda' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                  </svg>
                                )}
                              </span>
                              <span>{suggestion.texto}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Dropdown de filtros */}
                    {showDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-10">
                        <div className="p-2">
                          <h3 className="text-sm font-medium text-gray-700 mb-2">Buscar en:</h3>
                          <div className="space-y-1">
                            {searchOptions.map((option, index) => (
                              <div 
                                key={index}
                                className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                                onClick={() => handleOptionClick(option.path)}
                              >
                                {option.nombre}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          
          <AnimateOnScroll animation="slideLeft" delay={0.3} duration={0.8}>
            <div className="flex justify-center items-center">
              <div className="w-full h-full relative">
                <div className="p-4 rounded-lg w-full h-auto flex items-center justify-center">
                  <img 
                    src="/images/Group10.png" 
                    alt="SelectiviCAT Ilustración" 
                    className="w-full h-auto object-contain max-w-[500px]"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
} 