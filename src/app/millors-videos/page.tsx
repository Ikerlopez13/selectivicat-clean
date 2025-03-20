"use client";

import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import Link from 'next/link';
import { useState } from 'react';

export default function MillorsVideosPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeSubFilter, setActiveSubFilter] = useState<string>('all');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setActiveSubFilter('all'); // Reset sub-filter when changing main filter
  };

  const handleSubFilterClick = (subFilter: string) => {
    setActiveSubFilter(subFilter);
  };

  // Verificar si el video debe mostrarse según el filtro activo
  const shouldShowVideo = (tags: string[], subTags: string[] = []) => {
    if (activeFilter === 'all') return true;
    if (!tags.includes(activeFilter)) return false;
    
    // Si hay un subfiltro activo, verificar si el video tiene ese subfiltro
    if (activeSubFilter !== 'all') {
      return subTags.includes(activeSubFilter);
    }
    
    return true;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-selectivi-yellow py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-3/5">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Millors Vídeos Educatius</h1>
                <p className="text-xl mb-6">Recursos audiovisuals seleccionats per ajudar-te a preparar la selectivitat.</p>
                <p className="mb-8">Hem recopilat els millors vídeos de professors experts que expliquen conceptes clau de manera clara i concisa.</p>
              </div>
              
              <div className="lg:w-2/5 flex justify-center">
                <div className="bg-white p-8 rounded-full shadow-lg">
                  <span className="text-8xl">📹</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filtres de categoria */}
        <div className="bg-gray-100 py-6 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-3 justify-center">
              <button 
                className={`${activeFilter === 'all' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-opacity-80 transition-colors`}
                onClick={() => handleFilterClick('all')}
              >
                Tots els vídeos
              </button>
              <button 
                className={`${activeFilter === 'Matemàtiques' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
                onClick={() => handleFilterClick('Matemàtiques')}
              >
                Matemàtiques
              </button>
              <button 
                className={`${activeFilter === 'Matemàtiques CCSS' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
                onClick={() => handleFilterClick('Matemàtiques CCSS')}
              >
                Matemàtiques CCSS
              </button>
              <button 
                className={`${activeFilter === 'Física' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
                onClick={() => handleFilterClick('Física')}
              >
                Física
              </button>
              <button 
                className={`${activeFilter === 'Química' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
                onClick={() => handleFilterClick('Química')}
              >
                Química
              </button>
              <button 
                className={`${activeFilter === 'Història' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow`}
                onClick={() => handleFilterClick('Història')}
              >
                Història
              </button>
              <button 
                className={`${activeFilter === 'Filosofia' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow`}
                onClick={() => handleFilterClick('Filosofia')}
              >
                Filosofia
              </button>
              <button 
                className={`${activeFilter === 'Història de la Filosofia' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow`}
                onClick={() => handleFilterClick('Història de la Filosofia')}
              >
                Història de la Filosofia
              </button>
              <button 
                className={`${activeFilter === 'Llengua Castellana' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow`}
                onClick={() => handleFilterClick('Llengua Castellana')}
              >
                Llengua Castellana
              </button>
            </div>
            
            {/* Subfiltres per a Matemàtiques */}
            {(activeFilter === 'Matemàtiques' || activeFilter === 'Matemàtiques CCSS') && (
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <button 
                  className={`${activeSubFilter === 'all' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('all')}
                >
                  Tots els temes
                </button>
                <button 
                  className={`${activeSubFilter === 'Integrals' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Integrals')}
                >
                  Integrals
                </button>
                <button 
                  className={`${activeSubFilter === 'Sistemes' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Sistemes')}
                >
                  Sistemes d'equacions
                </button>
                <button 
                  className={`${activeSubFilter === 'Derivades' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Derivades')}
                >
                  Derivades
                </button>
                <button 
                  className={`${activeSubFilter === 'Probabilitat' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Probabilitat')}
                >
                  Probabilitat
                </button>
                <button 
                  className={`${activeSubFilter === 'Geometria' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Geometria')}
                >
                  Geometria
                </button>
              </div>
            )}
            
            {/* Subfiltres per a Química */}
            {activeFilter === 'Química' && (
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <button 
                  className={`${activeSubFilter === 'all' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('all')}
                >
                  Tots els temes
                </button>
                <button 
                  className={`${activeSubFilter === 'Reaccions' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Reaccions')}
                >
                  Reaccions químiques
                </button>
                <button 
                  className={`${activeSubFilter === 'Equilibri' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Equilibri')}
                >
                  Equilibri químic
                </button>
                <button 
                  className={`${activeSubFilter === 'Acids' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Acids')}
                >
                  Àcids i bases
                </button>
                <button 
                  className={`${activeSubFilter === 'Redox' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Redox')}
                >
                  Reaccions redox
                </button>
              </div>
            )}
            
            {/* Subfiltres per a Llengua Castellana */}
            {activeFilter === 'Llengua Castellana' && (
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <button 
                  className={`${activeSubFilter === 'all' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('all')}
                >
                  Tots els temes
                </button>
                <button 
                  className={`${activeSubFilter === 'Comentari' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Comentari')}
                >
                  Comentari de text
                </button>
                <button 
                  className={`${activeSubFilter === 'Literatura' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Literatura')}
                >
                  Literatura
                </button>
                <button 
                  className={`${activeSubFilter === 'Sintaxi' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Sintaxi')}
                >
                  Sintaxi
                </button>
              </div>
            )}
            
            {/* Subfiltres per a Filosofia */}
            {activeFilter === 'Filosofia' && (
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <button 
                  className={`${activeSubFilter === 'all' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('all')}
                >
                  Tots els temes
                </button>
                <button 
                  className={`${activeSubFilter === 'Plató' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Plató')}
                >
                  Plató
                </button>
                <button 
                  className={`${activeSubFilter === 'Ontologia' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Ontologia')}
                >
                  Ontologia
                </button>
                <button 
                  className={`${activeSubFilter === 'Aristòtil' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Aristòtil')}
                >
                  Aristòtil
                </button>
                <button 
                  className={`${activeSubFilter === 'Kant' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Kant')}
                >
                  Kant
                </button>
                <button 
                  className={`${activeSubFilter === 'Nietzsche' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Nietzsche')}
                >
                  Nietzsche
                </button>
              </div>
            )}
            
            {/* Subfiltres per a Història de la Filosofia (los mismos que Filosofia) */}
            {activeFilter === 'Història de la Filosofia' && (
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <button 
                  className={`${activeSubFilter === 'all' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('all')}
                >
                  Tots els temes
                </button>
                <button 
                  className={`${activeSubFilter === 'Plató' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Plató')}
                >
                  Plató
                </button>
                <button 
                  className={`${activeSubFilter === 'Ontologia' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Ontologia')}
                >
                  Ontologia
                </button>
                <button 
                  className={`${activeSubFilter === 'Aristòtil' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Aristòtil')}
                >
                  Aristòtil
                </button>
                <button 
                  className={`${activeSubFilter === 'Kant' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Kant')}
                >
                  Kant
                </button>
                <button 
                  className={`${activeSubFilter === 'Nietzsche' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                  onClick={() => handleSubFilterClick('Nietzsche')}
                >
                  Nietzsche
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Secció de vídeos destacats */}
        <div className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {activeFilter === 'all' ? 'Vídeos Destacats' : 
               activeSubFilter === 'all' ? `Vídeos de ${activeFilter}` : 
               `Vídeos de ${activeFilter}: ${activeSubFilter}`}
            </h2>
            
            {/* Mostrar missatge si no hi ha vídeos per al filtre seleccionat */}
            {activeFilter !== 'all' && 
             activeFilter !== 'Matemàtiques' && 
             activeFilter !== 'Matemàtiques CCSS' &&
             activeFilter !== 'Física' &&
             activeFilter !== 'Llengua Castellana' &&
             activeFilter !== 'Filosofia' &&
             activeFilter !== 'Història de la Filosofia' &&
             activeFilter !== 'Història' && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">Encara no hi ha vídeos disponibles per a aquesta categoria.</p>
                <p>Estem treballant per afegir més contingut aviat!</p>
              </div>
            )}
            
            {/* Vídeo de profesor10demates - Física */}
            {shouldShowVideo(['Física']) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Vídeo principal destacat */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/HtJTBubySkg" 
                      title="Física: Moviment Harmònic Simple (MHS)" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Moviment Harmònic Simple (MHS)</h3>
                    <p className="text-gray-600 mb-4">
                      Explicació detallada del Moviment Harmònic Simple, un tema fonamental en la física de la selectivitat, amb exemples pràctics i resolució de problemes.
                    </p>
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://yt3.googleusercontent.com/ytc/AIf8zZRVPb3NF5rJKQUGAOdBRLqRBPiAKQqS_1uuCTN7=s176-c-k-c0x00ffffff-no-rj" 
                        alt="profesor10demates" 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold">profesor10demates (Sergio)</p>
                        <p className="text-sm text-gray-500">Professor de Física i Matemàtiques</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Física</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">MHS</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Oscil·lacions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <a 
                        href="https://www.youtube.com/watch?v=HtJTBubySkg&list=PLunRFUHsCA1yOJhwcVcGIUAFhwKcukhOa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black font-medium"
                      >
                        Veure a YouTube
                      </a>
                      <a 
                        href="https://www.youtube.com/@profesor10demates" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                      >
                        Subscriu-te al canal
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Informació sobre el professor */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Per què recomanem a profesor10demates?</h3>
                  <p className="mb-4">
                    Sergio (profesor10demates) és un excel·lent professor de física i matemàtiques amb una gran capacitat per explicar conceptes complexos de manera clara i entenedora. Els seus vídeos destaquen per:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Explicacions metòdiques i detallades de conceptes físics complexos</li>
                    <li>Resolució pas a pas de problemes típics de selectivitat</li>
                    <li>Ús d'exemples visuals i gràfics per facilitar la comprensió</li>
                    <li>Llistes de reproducció organitzades per temes</li>
                  </ul>
                  <p className="mb-6">
                    El seu canal de YouTube és un recurs molt valuós per als estudiants que volen reforçar els seus coneixements de física i preparar-se adequadament per a la selectivitat.
                  </p>
                  <div className="mt-auto">
                    <a 
                      href="https://www.youtube.com/@profesor10demates" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-selectivi-yellow text-gray-800 px-6 py-3 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                    >
                      Visita el seu canal
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            {/* Vídeo de Sergiprofe - Sistemes d'equacions */}
            {shouldShowVideo(['Matemàtiques', 'Matemàtiques CCSS'], ['Sistemes']) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Vídeo principal destacat */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/EIfZqtg-Tik" 
                      title="Sistemes d'equacions: Gauss i el Teorema de Rouché-Frobenius" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Sistemes d'equacions: Gauss i Rouché-Frobenius</h3>
                    <p className="text-gray-600 mb-4">
                      Explicació detallada del mètode de Gauss i el Teorema de Rouché-Frobenius per resoldre sistemes d'equacions lineals, amb exemples pràctics per a la selectivitat.
                    </p>
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://yt3.googleusercontent.com/ytc/AIf8zZQTjS7LzQ9r5HG8HIVOJGqYSKGHJJ-7Y2ScIg=s176-c-k-c0x00ffffff-no-rj" 
                        alt="Sergiprofe" 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold">Sergiprofe</p>
                        <p className="text-sm text-gray-500">Professor de Matemàtiques</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Matemàtiques</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Matemàtiques CCSS</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Sistemes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <a 
                        href="https://www.youtube.com/watch?v=EIfZqtg-Tik" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black font-medium"
                      >
                        Veure a YouTube
                      </a>
                      <a 
                        href="https://www.youtube.com/@sergiprofe" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                      >
                        Subscriu-te al canal
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Informació sobre el professor */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Per què recomanem a Sergiprofe?</h3>
                  <p className="mb-4">
                    Sergiprofe és un excel·lent professor de matemàtiques amb anys d'experiència en la preparació d'estudiants per a la selectivitat. Els seus vídeos destaquen per:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Explicacions clares i concises dels conceptes més complexos</li>
                    <li>Exemples pràctics similars als que apareixen a la selectivitat</li>
                    <li>Trucs i consells per resoldre problemes de manera eficient</li>
                    <li>Material complementari disponible al seu canal</li>
                  </ul>
                  <p className="mb-6">
                    El seu canal de YouTube és un recurs imprescindible per a qualsevol estudiant que vulgui preparar-se a fons per a les proves d'accés a la universitat.
                  </p>
                  <div className="mt-auto">
                    <a 
                      href="https://www.youtube.com/@sergiprofe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-selectivi-yellow text-gray-800 px-6 py-3 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                    >
                      Visita el seu canal
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            {/* Llista de reproducció d'Integrals */}
            {shouldShowVideo(['Matemàtiques', 'Matemàtiques CCSS'], ['Integrals']) && (
              <div className="mb-16">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Llista de reproducció: Integrals</h3>
                  <a 
                    href="https://www.youtube.com/watch?v=qqHrFjr9Scg&list=PLy4Skq8Pu_yVaWoiYV_wD5vMADbbyl7AO" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                  >
                    Veure llista completa
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Video 1 de la lista */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/qqHrFjr9Scg" 
                        title="Integrals: Introducció" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                      </iframe>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Integrals: Introducció</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Conceptes bàsics d'integració i primeres tècniques per resoldre integrals senzilles.
                      </p>
                      <div className="flex items-center">
                        <img 
                          src="https://yt3.googleusercontent.com/ytc/AIf8zZQTjS7LzQ9r5HG8HIVOJGqYSKGHJJ-7Y2ScIg=s176-c-k-c0x00ffffff-no-rj" 
                          alt="Sergiprofe" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <p className="text-xs text-gray-500">Sergiprofe</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video 2 de la lista */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/EIfZqtg-Tik" 
                        title="Integrals: Integració per parts" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                      </iframe>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Integrals: Integració per parts</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Mètode d'integració per parts amb exemples pràctics per a la selectivitat.
                      </p>
                      <div className="flex items-center">
                        <img 
                          src="https://yt3.googleusercontent.com/ytc/AIf8zZQTjS7LzQ9r5HG8HIVOJGqYSKGHJJ-7Y2ScIg=s176-c-k-c0x00ffffff-no-rj" 
                          alt="Sergiprofe" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <p className="text-xs text-gray-500">Sergiprofe</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video 3 de la lista */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/qqHrFjr9Scg" 
                        title="Integrals: Canvi de variable" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                      </iframe>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Integrals: Canvi de variable</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Tècnica de canvi de variable per resoldre integrals més complexes.
                      </p>
                      <div className="flex items-center">
                        <img 
                          src="https://yt3.googleusercontent.com/ytc/AIf8zZQTjS7LzQ9r5HG8HIVOJGqYSKGHJJ-7Y2ScIg=s176-c-k-c0x00ffffff-no-rj" 
                          alt="Sergiprofe" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <p className="text-xs text-gray-500">Sergiprofe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Vídeo de LenGuay - Sintaxi */}
            {shouldShowVideo(['Llengua Castellana'], ['Sintaxi']) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Vídeo principal destacat */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/Vmchhx6Oedk" 
                      title="Com analitzar oracions (sintaxi)" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Com analitzar oracions (sintaxi)</h3>
                    <p className="text-gray-600 mb-4">
                      Guia completa per analitzar oracions en castellà. Explicació detallada del procés d'anàlisi sintàctic amb passos clars per no equivocar-se.
                    </p>
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://yt3.googleusercontent.com/ytc/AIf8zZRVPb3NF5rJKQUGAOdBRLqRBPiAKQqS_1uuCTN7=s176-c-k-c0x00ffffff-no-rj" 
                        alt="LenGuay" 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold">LenGuay</p>
                        <p className="text-sm text-gray-500">Professor de Llengua Castellana i Literatura</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Llengua Castellana</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Sintaxi</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Anàlisi</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <a 
                        href="https://www.youtube.com/watch?v=Vmchhx6Oedk" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black font-medium"
                      >
                        Veure a YouTube
                      </a>
                      <a 
                        href="https://www.youtube.com/@LenGuay" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                      >
                        Subscriu-te al canal
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Informació sobre el professor */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Per què recomanem a LenGuay?</h3>
                  <p className="mb-4">
                    LenGuay és un excel·lent professor de llengua castellana i literatura amb una gran capacitat per explicar tècniques d'anàlisi sintàctic i gramatical. Els seus vídeos destaquen per:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Explicacions clares i estructurades sobre com analitzar oracions</li>
                    <li>Mètodes pas a pas per no equivocar-se en l'anàlisi sintàctic</li>
                    <li>Tècniques i estratègies per identificar correctament les funcions sintàctiques</li>
                    <li>Consells específics per obtenir una bona puntuació a l'examen</li>
                  </ul>
                  <p className="mb-6">
                    El seu canal de YouTube és un recurs molt valuós per als estudiants que volen millorar les seves habilitats d'anàlisi sintàctic per a la selectivitat.
                  </p>
                  <div className="mt-auto">
                    <a 
                      href="https://www.youtube.com/@LenGuay" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-selectivi-yellow text-gray-800 px-6 py-3 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                    >
                      Visita el seu canal
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            {/* Més vídeos d'història */}
            {shouldShowVideo(['Història']) && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6">Més vídeos d'història</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Vídeo 1: Segunda República */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <a 
                      href="https://www.youtube.com/watch?v=ORNTC9GB7_Y" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="relative pb-[56.25%]">
                        <img 
                          src="https://img.youtube.com/vi/ORNTC9GB7_Y/maxresdefault.jpg" 
                          alt="La SEGUNDA REPÚBLICA ESPAÑOLA [1931-1936]" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">🇪🇸 La SEGUNDA REPÚBLICA ESPAÑOLA [1931-1936] 🌐 HISTORIA de ESPAÑA</h3>
                        <p className="text-gray-600 text-sm mb-2">Atodaleche</p>
                        <p className="text-gray-500 text-xs">18:45 • 98.000 visualitzacions</p>
                      </div>
                    </a>
                  </div>
                  
                  {/* Vídeo 2: Franquismo */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <a 
                      href="https://www.youtube.com/watch?v=0ttmdGypnVw" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="relative pb-[56.25%]">
                        <img 
                          src="https://img.youtube.com/vi/0ttmdGypnVw/maxresdefault.jpg" 
                          alt="El FRANQUISMO [1939-1975]" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">🇪🇸 El FRANQUISMO [1939-1975] 🌐 HISTORIA de ESPAÑA</h3>
                        <p className="text-gray-600 text-sm mb-2">Atodaleche</p>
                        <p className="text-gray-500 text-xs">20:15 • 115.000 visualitzacions</p>
                      </div>
                    </a>
                  </div>
                  
                  {/* Vídeo 3: Transición */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <a 
                      href="https://www.youtube.com/watch?v=8DPKW4fuKvM" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="relative pb-[56.25%]">
                        <img 
                          src="https://img.youtube.com/vi/8DPKW4fuKvM/maxresdefault.jpg" 
                          alt="La TRANSICIÓN ESPAÑOLA [1975-1982]" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">🇪🇸 La TRANSICIÓN ESPAÑOLA [1975-1982] 🌐 HISTORIA de ESPAÑA</h3>
                        <p className="text-gray-600 text-sm mb-2">Atodaleche</p>
                        <p className="text-gray-500 text-xs">17:30 • 105.000 visualitzacions</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <a 
                    href="/subjects/historia" 
                    className="inline-block bg-selectivi-yellow text-gray-800 px-6 py-3 rounded-lg hover:bg-selectivi-yellow/80 transition-colors font-medium"
                  >
                    Veure tots els vídeos d'història
                  </a>
                </div>
              </div>
            )}
            
            {/* Vídeos de Filosofia */}
            {shouldShowVideo(['Filosofia']) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Vídeo principal destacat - Plató */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/63QfNrSEVY4" 
                      title="PLATÓN (Selectividad): LA TEORÍA DE LAS IDEAS" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">PLATÓN: LA TEORÍA DE LAS IDEAS</h3>
                    <p className="text-gray-600 mb-4">
                      Explicació detallada de la Teoria de las Ideas de Plató, concepto fundamental para entender su pensamiento filosófico y para la selectividad.
                    </p>
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://yt3.googleusercontent.com/4RM7sEvCZ5hb5aIQnRbZfZXYEQ27Jjj13jt46iUsUJyXjMxF6WxGAJ4PzagYQ6JUm00leYL9=s176-c-k-c0x00ffffff-no-rj" 
                        alt="Unprofesor - Filosofía" 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold">Unprofesor - Filosofía</p>
                        <p className="text-sm text-gray-500">Professor de Filosofía</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Filosofía</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Plató</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Teoria de las Ideas</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <a 
                        href="https://www.youtube.com/watch?v=63QfNrSEVY4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black font-medium"
                      >
                        Veure a YouTube
                      </a>
                      <a 
                        href="https://www.youtube.com/@UnprofesorFilosofia" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                      >
                        Subscriu-te al canal
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Informació sobre los videos de filosofía */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Contenidos de Filosofía para la Selectividad</h3>
                  <p className="mb-4">
                    Estos vídeos de filosofía cubren los principales temas y autores que necesitas dominar para la selectividad:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Teoria de las Ideas de Plató</li>
                    <li>Ontología y metafísica</li>
                    <li>La ética de Aristóteles</li>
                    <li>El imperativo categórico de Kant</li>
                    <li>El nihilismo de Nietzsche</li>
                  </ul>
                  <p className="mb-6">
                    Estos recursos audiovisuales han sido seleccionados por su claridad y profundidad, y son especialmente útiles para comprender los conceptos filosóficos más complejos.
                  </p>
                </div>
              </div>
            )}
            
            {/* Més vídeos de Filosofia */}
            {shouldShowVideo(['Filosofia']) && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6">Més vídeos de Filosofia</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Vídeo 1: Ontologia */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <a 
                      href="https://www.youtube.com/watch?v=F6HstBW8lX4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="relative pb-[56.25%]">
                        <img 
                          src="https://i.ytimg.com/vi/F6HstBW8lX4/hqdefault.jpg" 
                          alt="Ontología - Filosofía - Selectividad - Metafísica" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">Ontología - Filosofía - Selectividad - Metafísica</h3>
                        <p className="text-gray-600 text-sm mb-2">Unprofesor - Filosofía</p>
                        <p className="text-gray-500 text-xs">13:41 • 234.512 visualizaciones</p>
                      </div>
                    </a>
                  </div>
                  
                  {/* Vídeo 2: Aristòtil */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <a 
                      href="https://www.youtube.com/watch?v=trwXp6hMN8M" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="relative pb-[56.25%]">
                        <img 
                          src="https://i.ytimg.com/vi/trwXp6hMN8M/hqdefault.jpg" 
                          alt="ARISTÓTELES: La ÉTICA y la FELICIDAD" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">ARISTÓTELES: La ÉTICA y la FELICIDAD</h3>
                        <p className="text-gray-600 text-sm mb-2">Adictos a la Filosofía</p>
                        <p className="text-gray-500 text-xs">10:28 • 189.754 visualizaciones</p>
                      </div>
                    </a>
                  </div>
                  
                  {/* Vídeo 3: Kant */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <a 
                      href="https://www.youtube.com/watch?v=ZhN-grPFGQI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="relative pb-[56.25%]">
                        <img 
                          src="https://i.ytimg.com/vi/ZhN-grPFGQI/hqdefault.jpg" 
                          alt="KANT: El IMPERATIVO CATEGÓRICO explicado fácil" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">KANT: El IMPERATIVO CATEGÓRICO explicado fácil</h3>
                        <p className="text-gray-600 text-sm mb-2">Adictos a la Filosofía</p>
                        <p className="text-gray-500 text-xs">11:12 • 342.876 visualizaciones</p>
                      </div>
                    </a>
                  </div>
                  
                  {/* Vídeo 4: Nietzsche */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <a 
                      href="https://www.youtube.com/watch?v=QIQvy3nF_mE" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="relative pb-[56.25%]">
                        <img 
                          src="https://i.ytimg.com/vi/QIQvy3nF_mE/hqdefault.jpg" 
                          alt="NIETZSCHE y la MUERTE de DIOS" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">NIETZSCHE y la MUERTE de DIOS</h3>
                        <p className="text-gray-600 text-sm mb-2">Adictos a la Filosofía</p>
                        <p className="text-gray-500 text-xs">12:34 • 285.329 visualizaciones</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <a 
                    href="/subjects/filosofia" 
                    className="inline-block bg-selectivi-yellow text-gray-800 px-6 py-3 rounded-lg hover:bg-selectivi-yellow/80 transition-colors font-medium"
                  >
                    Veure tots els vídeos de Filosofia
                  </a>
                </div>
              </div>
            )}
            
            {/* Vídeos d'Història de la Filosofia */}
            {shouldShowVideo(['Història de la Filosofia']) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Vídeo principal destacat - Plató */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/63QfNrSEVY4" 
                      title="PLATÓN (Selectividad): LA TEORÍA DE LAS IDEAS" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">PLATÓN: LA TEORÍA DE LAS IDEAS</h3>
                    <p className="text-gray-600 mb-4">
                      Explicació detallada de la Teoria de las Idees de Plató, concepte fonamental en la Història de la Filosofia i per a la selectivitat.
                    </p>
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://yt3.googleusercontent.com/4RM7sEvCZ5hb5aIQnRbZfZXYEQ27Jjj13jt46iUsUJyXjMxF6WxGAJ4PzagYQ6JUm00leYL9=s176-c-k-c0x00ffffff-no-rj" 
                        alt="Unprofesor - Filosofía" 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold">Unprofesor - Filosofía</p>
                        <p className="text-sm text-gray-500">Professor de Filosofia</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Història de la Filosofia</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Plató</span>
                      <span className="bg-selectivi-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm">Teoria de las Idees</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <a 
                        href="https://www.youtube.com/watch?v=63QfNrSEVY4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black font-medium"
                      >
                        Veure a YouTube
                      </a>
                      <a 
                        href="https://www.youtube.com/@UnprofesorFilosofia" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded-lg hover:bg-selectivi-yellow/80 transition-colors"
                      >
                        Subscriu-te al canal
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Informació sobre els videos d'història de la filosofia */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Continguts d'Història de la Filosofia per a la Selectivitat</h3>
                  <p className="mb-4">
                    Aquests vídeos cobreixen el desenvolupament històric del pensament filosòfic occidental i els principals autors del programa de selectivitat:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>La filosofia antiga: Plató i Aristòtil</li>
                    <li>La filosofia medieval i moderna</li>
                    <li>La filosofia contemporània: Kant i Nietzsche</li>
                    <li>Contextos històrics i influències filosòfiques</li>
                    <li>Comparativa entre diferents corrents filosòfiques</li>
                  </ul>
                  <p className="mb-6">
                    Aquests materials audiovisuals presenten de manera clara i concisa el pensament dels grans filòsofs, facilitant la comprensió dels seus conceptes i la relació entre ells.
                  </p>
                </div>
              </div>
            )}
            
            {/* Més vídeos d'Història de la Filosofia */}
            {shouldShowVideo(['Història de la Filosofia']) && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6">Més vídeos d'Història de la Filosofia</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Vídeo 1: Ontologia */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <a 
                      href="https://www.youtube.com/watch?v=F6HstBW8lX4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="relative pb-[56.25%]">
                        <img 
                          src="https://i.ytimg.com/vi/F6HstBW8lX4/hqdefault.jpg" 
                          alt="Ontología - Filosofía - Selectividad - Metafísica" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">Ontología - Filosofía - Selectividad - Metafísica</h3>
                        <p className="text-gray-600 text-sm mb-2">Unprofesor - Filosofía</p>
                        <p className="text-gray-500 text-xs">13:41 • 234.512 visualizaciones</p>
                      </div>
                    </a>
                  </div>
                  
                  {/* Vídeo 2: Aristòtil */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <a 
                      href="https://www.youtube.com/watch?v=trwXp6hMN8M" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="relative pb-[56.25%]">
                        <img 
                          src="https://i.ytimg.com/vi/trwXp6hMN8M/hqdefault.jpg" 
                          alt="ARISTÓTELES: La ÉTICA y la FELICIDAD" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">ARISTÓTELES: La ÉTICA y la FELICIDAD</h3>
                        <p className="text-gray-600 text-sm mb-2">Adictos a la Filosofía</p>
                        <p className="text-gray-500 text-xs">10:28 • 189.754 visualizaciones</p>
                      </div>
                    </a>
                  </div>
                  
                  {/* Vídeo 3: Kant */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <a 
                      href="https://www.youtube.com/watch?v=ZhN-grPFGQI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="relative pb-[56.25%]">
                        <img 
                          src="https://i.ytimg.com/vi/ZhN-grPFGQI/hqdefault.jpg" 
                          alt="KANT: El IMPERATIVO CATEGÓRICO explicado fácil" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">KANT: El IMPERATIVO CATEGÓRICO explicado fácil</h3>
                        <p className="text-gray-600 text-sm mb-2">Adictos a la Filosofía</p>
                        <p className="text-gray-500 text-xs">11:12 • 342.876 visualizaciones</p>
                      </div>
                    </a>
                  </div>
                  
                  {/* Vídeo 4: Nietzsche */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <a 
                      href="https://www.youtube.com/watch?v=QIQvy3nF_mE" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="relative pb-[56.25%]">
                        <img 
                          src="https://i.ytimg.com/vi/QIQvy3nF_mE/hqdefault.jpg" 
                          alt="NIETZSCHE y la MUERTE de DIOS" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">NIETZSCHE y la MUERTE de DIOS</h3>
                        <p className="text-gray-600 text-sm mb-2">Adictos a la Filosofía</p>
                        <p className="text-gray-500 text-xs">12:34 • 285.329 visualizaciones</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <a 
                    href="/subjects/historia-filosofia" 
                    className="inline-block bg-selectivi-yellow text-gray-800 px-6 py-3 rounded-lg hover:bg-selectivi-yellow/80 transition-colors font-medium"
                  >
                    Veure tots els vídeos d'Història de la Filosofia
                  </a>
                </div>
              </div>
            )}
            
            {/* Més vídeos recomanats (placeholders) - Només es mostren si el filtre és 'all' o 'Matemàtiques' */}
            {(activeFilter === 'all' || 
              (activeFilter === 'Matemàtiques' && activeSubFilter !== 'Integrals' && activeSubFilter !== 'Sistemes')) && (
              <>
                <h3 className="text-2xl font-bold mb-6">Més vídeos recomanats</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {/* Video placeholder 1 */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">🎬</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Derivades i aplicacions</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Aprèn a calcular derivades i les seves aplicacions en problemes pràctics.
                      </p>
                      <p className="text-xs text-gray-500">Properament</p>
                    </div>
                  </div>
                  
                  {/* Video placeholder 2 */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">🎬</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Probabilitat i estadística</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Conceptes clau de probabilitat i estadística per a la selectivitat.
                      </p>
                      <p className="text-xs text-gray-500">Properament</p>
                    </div>
                  </div>
                  
                  {/* Video placeholder 3 */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">🎬</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Geometria analítica</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Vectors, rectes i plans en l'espai: tot el que necessites saber.
                      </p>
                      <p className="text-xs text-gray-500">Properament</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Secció d'altres categories - Només es mostra si el filtre és 'all' */}
        {activeFilter === 'all' && (
          <div className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Explora altres categoríes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Categoría Física */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-selectivi-yellow flex items-center justify-center">
                    <span className="text-6xl">⚛️</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Física</h3>
                    <p className="text-gray-600 mb-4">
                      Vídeos sobre mecànica, electromagnetisme, ones i física moderna.
                    </p>
                    <button 
                      className="text-gray-800 font-medium hover:text-black"
                      onClick={() => handleFilterClick('Física')}
                    >
                      Veure vídeos →
                    </button>
                  </div>
                </div>
                
                {/* Categoría Química */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-selectivi-yellow flex items-center justify-center">
                    <span className="text-6xl">🧪</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Química</h3>
                    <p className="text-gray-600 mb-4">
                      Vídeos sobre química orgànica, inorgànica, equilibris i reaccions.
                    </p>
                    <button 
                      className="text-gray-800 font-medium hover:text-black"
                      onClick={() => handleFilterClick('Química')}
                    >
                      Veure vídeos →
                    </button>
                  </div>
                </div>
                
                {/* Categoría Historia */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-selectivi-yellow flex items-center justify-center">
                    <span className="text-6xl">📜</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Història</h3>
                    <p className="text-gray-600 mb-4">
                      Vídeos sobre història contemporània, d'Espanya i de Catalunya.
                    </p>
                    <button 
                      className="text-gray-800 font-medium hover:text-black"
                      onClick={() => handleFilterClick('Història')}
                    >
                      Veure vídeos →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* CTA para sugerir videos */}
        <div className="py-12 px-4 md:px-8 bg-selectivi-yellow text-gray-800">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Coneixes algun vídeo que hauria d'estar aquí?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Si coneixes algun professor o canal de YouTube amb contingut de qualitat per a la selectivitat, fes-nos-ho saber!
            </p>
            <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-gray-300">
              Suggerir un vídeo
            </button>
          </div>
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 