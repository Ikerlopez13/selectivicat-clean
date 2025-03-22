"use client";

import React, { useState } from 'react';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import { examenes, Examen, getExamenesByAsignatura } from '@/data/examenes';
import Link from 'next/link';

// Obtener todos los exámenes disponibles
const examenesDisponibles = examenes;

// Definir las asignaturas disponibles (para cuando se agreguen más modelos 0)
const asignaturas = [
  { 
    id: 'fisica', 
    nombre: 'Física', 
    emoji: '🔭', 
    color: 'bg-blue-100' 
  },
  { 
    id: 'matematicas', 
    nombre: 'Matemáticas II', 
    emoji: '📊', 
    color: 'bg-purple-100'
  },
  { 
    id: 'matematicas-sociales', 
    nombre: 'Matemáticas CCSS', 
    emoji: '📈', 
    color: 'bg-green-100'
  },
  { 
    id: 'quimica', 
    nombre: 'Química', 
    emoji: '🧪', 
    color: 'bg-pink-100'
  },
  { 
    id: 'aleman', 
    nombre: 'Alemán', 
    emoji: '🇩🇪', 
    color: 'bg-yellow-100'
  },
  { 
    id: 'ciencias-generales', 
    nombre: 'Ciencias Generales', 
    emoji: '🧬', 
    color: 'bg-teal-100'
  }
];

export default function ExamenesPage() {
  const [viewMode, setViewMode] = useState<'examen' | 'solucion'>('examen');

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      {/* Hero Section - Banner general */}
      <div className="bg-selectivi-yellow py-12 px-4 md:px-8 mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Models d'examen</h1>
              <p className="text-xl mb-6">Exàmens oficials de Selectivitat</p>
              <p className="mb-8">Accedeix als models d'examen oficials per a la Selectivitat, amb criteris de correcció i solucions.</p>
            </div>
            
            <div className="lg:w-2/5 flex justify-center">
              <div className="bg-white p-8 rounded-full shadow-lg">
                <span className="text-8xl">📝</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 flex-grow">
        <div className="container mx-auto max-w-6xl">
          
          {/* Sección de todos los exámenes disponibles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Exàmens disponibles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {asignaturas.map(asignatura => {
                const examenesAsignatura = getExamenesByAsignatura(asignatura.id);
                if (examenesAsignatura.length === 0) return null;
                
                // Obtener el primer examen disponible para esta asignatura
                const examen = examenesAsignatura[0];
                
                return (
                  <div key={asignatura.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className={`p-6 border-b ${asignatura.color}`}>
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 text-4xl">{asignatura.emoji}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{examen.titulo}</h3>
                          <p className="text-gray-600">
                            {examen.convocatoria.charAt(0).toUpperCase() + examen.convocatoria.slice(1)} {examen.año} - {examen.comunidadAutonoma}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-3">
                        <a 
                          href={examen.rutaExamen} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors flex items-center shadow-sm"
                          onClick={(e) => {
                            if (!examen.isExternalUrl) {
                              e.preventDefault();
                              window.open(examen.rutaExamen, '_blank');
                            }
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Veure Examen
                        </a>
                        
                        {examen.rutaCorreccion && examen.rutaCorreccion !== "" && (
                          <a 
                            href={examen.rutaCorreccion} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors flex items-center shadow-sm border border-blue-200"
                            onClick={(e) => {
                              if (!examen.isExternalUrl && examen.rutaCorreccion) {
                                e.preventDefault();
                                window.open(examen.rutaCorreccion, '_blank');
                              }
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Criteris i Solució
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }).filter(Boolean)}
            </div>
          </div>
          
          {/* Información sobre los modelos 0 */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm mb-16">
            <h3 className="text-xl font-bold mb-4">Informació sobre els models d'examen</h3>
            <p className="mb-4">
              Els models d'examen d'aquesta pàgina corresponen a exàmens oficials de Selectivitat (PAU) de diversos anys i convocatòries.
            </p>
            <p className="mb-4">
              També s'inclouen els nous models 0 per a la PAU 2025, que mostren la nova estructura d'examen seguint els canvis establerts en el nou currículum.
            </p>
            <p className="mb-4">
              Els criteris de correcció inclouen les solucions detallades de cada problema i exercici.
            </p>
            <p>
              Pots accedir als documents fent clic als enllaços corresponents. Els documents s'obriran en una nova pestanya per facilitar la seva visualització.
            </p>
          </div>
          
          {/* Sección de Asignaturas - Para mostrar todas las asignaturas disponibles */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Exàmens per assignatura</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {asignaturas.map(asignatura => {
                const examenesAsignatura = getExamenesByAsignatura(asignatura.id);
                const hayExamenes = examenesAsignatura.length > 0;
                
                return (
                  <div 
                    key={asignatura.id}
                    className={`bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${!hayExamenes ? 'opacity-50' : ''}`}
                  >
                    <div className={`h-48 overflow-hidden relative flex items-center justify-center ${asignatura.color}`}>
                      <span className="text-7xl">{asignatura.emoji}</span>
                      {!hayExamenes && (
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center">
                          <span className="text-white font-medium text-lg">Properament</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{asignatura.nombre}</h3>
                      <p className="text-gray-600 mb-4">
                        {hayExamenes 
                          ? `${examenesAsignatura.length} model${examenesAsignatura.length > 1 ? 's' : ''} disponible${examenesAsignatura.length > 1 ? 's' : ''}`
                          : 'Models en preparació'}
                      </p>
                      {hayExamenes ? (
                        <a 
                          href={examenesAsignatura[0].rutaExamen}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-selectivi-yellow text-gray-800 px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                        >
                          Veure models
                        </a>
                      ) : (
                        <button 
                          disabled
                          className="block w-full text-center bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed"
                        >
                          Properament
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 