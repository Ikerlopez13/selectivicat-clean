"use client";

import { useState } from 'react';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import SaasRecommendation from '@/components/SaasRecommendation';
import { Examen } from '@/data/examenes';
import { Video } from '@/data/videos';
import { Asignatura, Itinerario } from '@/data/itinerarios';

interface SubjectPageTemplateProps {
  subject: Asignatura;
  itinerario: Itinerario;
  videos: Video[];
  examenes: Examen[];
}

export default function SubjectPageTemplate({ subject, itinerario, videos, examenes }: SubjectPageTemplateProps) {
  const [activeTab, setActiveTab] = useState<'videos' | 'examenes'>('videos');
  
  console.log(`SubjectPageTemplate - ${subject.nombre} - Videos:`, videos.length);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      {/* Hero Section */}
      <div className={`bg-[${itinerario.color}] py-16 px-4 md:px-8`} style={{ backgroundColor: itinerario.color }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{subject.nombre}</h1>
              <p className="text-xl mb-6">{subject.descripcion}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium" 
                      style={{ backgroundColor: `${itinerario.color}40` }}>
                  {itinerario.nombre}
                </span>
              </div>
            </div>
            
            <div className="lg:w-2/5 flex justify-center">
              <div className="bg-white p-8 rounded-full shadow-lg">
                <span className="text-8xl">{subject.emoji}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex">
            <button 
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-4 font-medium text-lg border-b-2 transition-colors ${
                activeTab === 'videos' 
                  ? `border-[${itinerario.color}] text-gray-900` 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              style={{ borderColor: activeTab === 'videos' ? itinerario.color : 'transparent' }}
            >
              Vídeos Recomanats
            </button>
            <button 
              onClick={() => setActiveTab('examenes')}
              className={`px-6 py-4 font-medium text-lg border-b-2 transition-colors ${
                activeTab === 'examenes' 
                  ? `border-[${itinerario.color}] text-gray-900` 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              style={{ borderColor: activeTab === 'examenes' ? itinerario.color : 'transparent' }}
            >
              Exàmens d'Anys Anteriors
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 flex-grow">
        <div className="container mx-auto max-w-6xl">
          {activeTab === 'videos' && (
            <AnimateOnScroll animation="fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-8">Vídeos Recomanats de {subject.nombre}</h2>
                
                {videos && videos.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                      <a 
                        key={video.id} 
                        href={video.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="relative pb-[56.25%]">
                          <img 
                            src={video.thumbnailUrl || '/images/video-placeholder.jpg'} 
                            alt={video.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/video-placeholder.jpg';
                            }}
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
                          <h3 className="font-bold text-lg mb-1 line-clamp-2">{video.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{video.channelName}</p>
                          <p className="text-gray-500 text-xs">{video.duration} • {video.viewCount.toLocaleString()} visualitzacions</p>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="text-6xl mb-4">📹</div>
                    <h3 className="text-2xl font-bold mb-2">Encara no hi ha vídeos disponibles</h3>
                    <p className="text-gray-600 mb-6">Estem treballant per afegir vídeos educatius de qualitat per a aquesta assignatura.</p>
                    
                    {/* Placeholder videos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 opacity-50">
                      {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                          <div className="relative pb-[56.25%] bg-gray-200">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="h-5 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          )}
          
          {activeTab === 'examenes' && (
            <AnimateOnScroll animation="fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-8">Exàmens d'Anys Anteriors de {subject.nombre}</h2>
                
                {examenes && examenes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {examenes.map((examen) => (
                      <div key={examen.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                              {examen.convocatoria} {examen.año}
                            </span>
                            <span className="text-sm text-gray-500">{examen.comunidadAutonoma}</span>
                          </div>
                          <h3 className="font-bold text-lg mb-4">{examen.titulo}</h3>
                          <div className="flex flex-col space-y-2">
                            <a 
                              href={examen.rutaExamen} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                              Veure Examen
                            </a>
                            {examen.rutaSolucion && (
                              <a 
                                href={examen.rutaSolucion} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Veure Solució
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-2xl font-bold mb-2">Encara no hi ha exàmens disponibles</h3>
                    <p className="text-gray-600 mb-6">Estem treballant per afegir exàmens d'anys anteriors per a aquesta assignatura.</p>
                    
                    {/* Placeholder exams */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg overflow-hidden p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                          </div>
                          <div className="h-6 bg-gray-200 rounded mb-4"></div>
                          <div className="space-y-2">
                            <div className="h-10 bg-gray-200 rounded"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </div>
      
      {/* Recursos adicionales */}
      <div className="py-12 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Recursos Addicionals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">Bibliografia Recomanada</h3>
              <p className="text-gray-600 mb-4">Llibres i materials de referència per a l'estudi d'aquesta assignatura.</p>
              <span className="text-sm text-gray-500">Properament</span>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="text-xl font-bold mb-2">Exercicis Pràctics</h3>
              <p className="text-gray-600 mb-4">Col·lecció d'exercicis per practicar i reforçar els coneixements.</p>
              <span className="text-sm text-gray-500">Properament</span>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">Guies d'Estudi</h3>
              <p className="text-gray-600 mb-4">Materials per organitzar i optimitzar el teu estudi per a la selectivitat.</p>
              <span className="text-sm text-gray-500">Properament</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recomendación de FocusCircle */}
      <div className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SaasRecommendation />
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 