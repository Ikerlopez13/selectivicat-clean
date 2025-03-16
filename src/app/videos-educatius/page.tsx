"use client";

import React, { useState, ReactNode } from 'react';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import Link from 'next/link';
import Image from 'next/image';
import { videos, Video } from '@/data/videos';

// Declaración de tipos para JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Componente para mostrar un video
const VideoCard = ({ video }: { video: Video }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-48 w-full">
          <Image 
            src={video.thumbnailUrl || `https://img.youtube.com/vi/${video.videoUrl.split('v=')[1]}/maxresdefault.jpg`}
            alt={video.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
        </div>
      </a>
      <div className="p-4">
        <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-selectivi-yellow transition-colors">{video.title}</h3>
        </a>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
        <div className="flex justify-between items-center">
          <a href={video.channelUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-700">
            {video.channelName}
          </a>
          <span className="text-xs text-gray-500">{formatViewCount(video.viewCount)} visualizaciones</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {video.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Función para formatear el número de visualizaciones
function formatViewCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
}

export default function VideosEducatiusPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeSubFilter, setActiveSubFilter] = useState<string>('all');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setActiveSubFilter('all'); // Reset sub-filter when changing main filter
  };

  const handleSubFilterClick = (subFilter: string) => {
    setActiveSubFilter(subFilter);
  };

  // Mapeo de filtros a IDs de asignaturas
  const filterToSubjectId: Record<string, string> = {
    'Matemàtiques': 'matematiques',
    'Química': 'quimica',
    'Física': 'fisica',
    'Història': 'historia',
    'Matemàtiques CCSS': 'matematiques-ccss',
    'Castellà': 'castella'
  };

  // Filtrar videos según los filtros seleccionados
  const filteredVideos = React.useMemo(() => {
    if (activeFilter === 'all') {
      return videos;
    }
    
    const subjectId = filterToSubjectId[activeFilter];
    let filtered = videos.filter(video => video.subjectId === subjectId);
    
    if (activeSubFilter !== 'all') {
      filtered = filtered.filter(video => 
        video.tags.some(tag => tag.toLowerCase().includes(activeSubFilter.toLowerCase()))
      );
    }
    
    return filtered;
  }, [activeFilter, activeSubFilter]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      {/* Hero Section - Ahora directamente después del navbar */}
      <div className="bg-selectivi-yellow py-12 px-4 md:px-8 mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Vídeos Educatius</h1>
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
      
      {/* Filtros de categoría */}
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
              className={`${activeFilter === 'Química' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
              onClick={() => handleFilterClick('Química')}
            >
              Química
            </button>
            <button 
              className={`${activeFilter === 'Física' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
              onClick={() => handleFilterClick('Física')}
            >
              Física
            </button>
            <button 
              className={`${activeFilter === 'Matemàtiques CCSS' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
              onClick={() => handleFilterClick('Matemàtiques CCSS')}
            >
              Matemàtiques CCSS
            </button>
            <button 
              className={`${activeFilter === 'Història' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
              onClick={() => handleFilterClick('Història')}
            >
              Història
            </button>
            <button 
              className={`${activeFilter === 'Castellà' ? 'bg-selectivi-yellow' : 'bg-white'} text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors`}
              onClick={() => handleFilterClick('Castellà')}
            >
              Castellà
            </button>
          </div>
          
          {/* Subfiltros para Química */}
          {activeFilter === 'Química' && (
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <button 
                className={`${activeSubFilter === 'all' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                onClick={() => handleSubFilterClick('all')}
              >
                Tots els temes
              </button>
              <button 
                className={`${activeSubFilter === 'Reacciones' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                onClick={() => handleSubFilterClick('Reacciones')}
              >
                Reaccions químiques
              </button>
              <button 
                className={`${activeSubFilter === 'Equilibrio' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                onClick={() => handleSubFilterClick('Equilibrio')}
              >
                Equilibri químic
              </button>
              <button 
                className={`${activeSubFilter === 'Ácidos' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                onClick={() => handleSubFilterClick('Ácidos')}
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
          
          {/* Subfiltros para Matemáticas */}
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
                className={`${activeSubFilter === 'Derivades' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                onClick={() => handleSubFilterClick('Derivades')}
              >
                Derivades
              </button>
              <button 
                className={`${activeSubFilter === 'Límites' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                onClick={() => handleSubFilterClick('Límites')}
              >
                Límits
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

          {/* Subfiltros para Castellano */}
          {activeFilter === 'Castellà' && (
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <button 
                className={`${activeSubFilter === 'all' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                onClick={() => handleSubFilterClick('all')}
              >
                Tots els temes
              </button>
              <button 
                className={`${activeSubFilter === 'Comentario' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                onClick={() => handleSubFilterClick('Comentario')}
              >
                Comentario de texto
              </button>
              <button 
                className={`${activeSubFilter === 'Literatura' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                onClick={() => handleSubFilterClick('Literatura')}
              >
                Literatura
              </button>
              <button 
                className={`${activeSubFilter === 'Sintaxis' ? 'bg-selectivi-yellow/70' : 'bg-white'} text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors`}
                onClick={() => handleSubFilterClick('Sintaxis')}
              >
                Sintaxis
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Sección de videos */}
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Contenido según el filtro seleccionado */}
          {activeFilter === 'all' ? (
            <React.Fragment>
              <h2 className="text-3xl font-bold mb-8 text-center">Vídeos Destacats</h2>
              
              {filteredVideos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {filteredVideos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-100 p-8 rounded-lg text-center">
                  <p className="text-xl font-medium mb-4">No hi ha vídeos disponibles</p>
                  <p className="text-gray-600">Encara no s'han afegit vídeos a aquesta categoria.</p>
                </div>
              )}
            </React.Fragment>
          ) : activeFilter in filterToSubjectId ? (
            <React.Fragment>
              <h2 className="text-3xl font-bold mb-8 text-center">
                {activeSubFilter === 'all' ? `Vídeos de ${activeFilter}` : `Vídeos de ${activeFilter}: ${activeSubFilter}`}
              </h2>
              
              {filteredVideos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {filteredVideos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600 mb-4">No hi ha vídeos disponibles per a aquesta categoria.</p>
                  <p>Estem treballant per afegir més contingut aviat!</p>
                </div>
              )}
            </React.Fragment>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold mb-8 text-center">{activeFilter}</h2>
              <p className="text-xl text-gray-600 mb-4">Encara no hi ha vídeos disponibles per a aquesta categoria.</p>
              <p>Estem treballant per afegir més contingut aviat!</p>
            </div>
          )}
        </div>
      </div>
      
      {/* CTA para calculadora */}
      <div className="py-12 px-4 md:px-8 bg-gray-100">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Calcula la teva nota de selectivitat</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Utilitza la nostra calculadora per saber quina nota necessites per accedir als graus que t'interessen.
          </p>
          <Link 
            href="/calculadora" 
            className="bg-selectivi-yellow hover:bg-yellow-500 text-gray-800 px-8 py-3 rounded-lg inline-block"
          >
            Anar a la calculadora
          </Link>
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 