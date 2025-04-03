'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import AnimateOnScroll from './AnimateOnScroll';
import { getAsignaturasPopulares, getBusquedasPopulares, getSugerenciasBusqueda } from '@/data/itinerarios';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from 'next/navigation';

export default function HeroMain() {
  const router = useRouter();
  const { data: session } = useSession();
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

  const handleSeleTestClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Redirect to SeleTest if logged in, otherwise trigger Google login
    if (session) {
      router.push('/seletest');
    } else {
      signIn("google", { callbackUrl: "/seletest" });
    }
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
    <div className="min-h-[600px] grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      <div className="bg-white py-12 px-4 md:px-6 lg:px-8 flex items-center relative z-10">
        <div className="w-full max-w-2xl lg:max-w-none space-y-8">
          <AnimateOnScroll animation="fadeIn" duration={0.8}>
            <div className="space-y-4">
              <h1 className="space-y-1">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 block">
                  Prepara't per la
                </span>
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-selectivi-yellow block">
                  Selectivitat 2025
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Practica amb més de 500 preguntes reals i millora la teva nota amb el nostre simulador personalitzat.
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeIn" delay={0.2} duration={0.8}>
            <div className="space-y-4">
              <button 
                onClick={handleSeleTestClick}
                className="group inline-flex items-center px-8 py-4 bg-selectivi-yellow text-white rounded-2xl text-lg font-semibold hover:bg-selectivi-yellow/90 transition-all shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  <svg 
                    className="w-6 h-6" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 2L14.4 9.2H22L16.8 13.8L19.2 21L12 16.4L4.8 21L7.2 13.8L2 9.2H9.6L12 2Z" 
                      fill="currentColor" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                    />
                  </svg>
                  {session ? 'Accedir a SeleTest' : 'Prova SeleTest Gratis'}
                </span>
                <span className="ml-3 bg-selectivi-yellow text-white px-3 py-1 rounded-full text-sm border border-white/20">
                  Nou!
                </span>
              </button>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-selectivi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Preguntes il·limitades</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-selectivi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seguiment del teu progrés</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-selectivi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Atenció Premium 24/7</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slideUp" delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Link href="/notes-de-tall" className="btn bg-selectivi-yellow text-white hover:bg-selectivi-yellow/90 border-none flex items-center gap-2 px-6 py-3 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Consulta les notes de tall
              </Link>
              <Link href="/calculadora" className="btn bg-gray-100 text-gray-600 hover:bg-gray-200 border-none flex items-center gap-2 px-6 py-3 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Calcula la teva nota
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Divisor SVG */}
      <div className="absolute top-0 right-0 h-full w-[100vw] hidden lg:block" style={{ transform: 'translateX(40%)' }}>
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 0 L100 0 L100 100 L50 100 C70 70 70 30 50 0"
            fill="currentColor"
            className="text-selectivi-yellow"
          />
        </svg>
      </div>

      <div className="bg-selectivi-yellow py-12 px-4 md:px-6 lg:px-8 flex items-center relative z-10">
        <AnimateOnScroll animation="slideLeft" delay={0.3} duration={0.8}>
          <div className="flex justify-center items-center w-full">
            <div className="relative w-full">
              <Image 
                src="/images/Group10.png" 
                alt="SelectiviCAT Ilustración" 
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
} 