"use client";

import React, { useState } from 'react';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import { examenes, Examen, getExamenesByAsignatura } from '@/data/examenes';
import Link from 'next/link';

// Obtener el examen de física modelo 0
const fisicaExamen = examenes[0]; // Ahora solo hay un examen en el array (el modelo 0 de física)

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
  }
];

export default function ExamenesPage() {
  const [viewMode, setViewMode] = useState<'examen' | 'solucion'>('examen');

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      {/* Hero Section - Mostrando el Modelo 0 de Física */}
      <div className="bg-selectivi-yellow py-12 px-4 md:px-8 mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Física - Modelo 0 PAU 2025</h1>
              <p className="text-xl mb-6">Modelo-0 2025 - Selectividad Cataluña</p>
              <p className="mb-8">Accede al nuevo modelo de examen oficial para la PAU 2025.</p>
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
      <div className="py-12 px-4 md:px-8 bg-white flex-grow">
        <div className="container mx-auto max-w-6xl">
          {/* Examen destacado - Física Modelo 0 */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-bold">{fisicaExamen.titulo}</h2>
                <p className="text-gray-600 text-lg">
                  {fisicaExamen.convocatoria.charAt(0).toUpperCase() + fisicaExamen.convocatoria.slice(1)} {fisicaExamen.año} - {fisicaExamen.comunidadAutonoma}
                </p>
              </div>
            </div>
            
            {/* Vista previa del PDF */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-full h-64 bg-blue-100 rounded-lg shadow-sm">
                  <span className="text-8xl">🔭</span>
                </div>
              </div>
            </div>
            
            {/* Enlaces a los PDFs */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6">Documentos disponibles</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tarjeta del Examen */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-medium mb-3">Examen Oficial</h4>
                    <p className="text-gray-600 mb-4">
                      Accede al examen modelo 0 de Física para la PAU 2025.
                    </p>
                    <div className="flex justify-between items-center">
                      <a 
                        href={fisicaExamen.rutaExamen} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded hover:bg-opacity-80 transition-colors flex items-center"
                      >
                        <span className="mr-2">Ver Examen</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                          <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                        </svg>
                      </a>
                      <a 
                        href={fisicaExamen.rutaExamen} 
                        download
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        Descargar
                      </a>
                    </div>
                  </div>
                  
                  {/* Tarjeta de la Solución (solo si hay solución disponible) */}
                  {fisicaExamen.rutaSolucion && fisicaExamen.rutaSolucion !== "" && (
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-medium mb-3">Solución Oficial</h4>
                      <p className="text-gray-600 mb-4">
                        Accede a la solución oficial del examen para comprobar tus respuestas.
                      </p>
                      <div className="flex justify-between items-center">
                        <a 
                          href={fisicaExamen.rutaSolucion} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded hover:bg-opacity-80 transition-colors flex items-center"
                        >
                          <span className="mr-2">Ver Solución</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                          </svg>
                        </a>
                        <a 
                          href={fisicaExamen.rutaSolucion} 
                          download
                          className="text-blue-600 hover:underline flex items-center"
                        >
                          Descargar
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {/* Tarjeta de la Corrección (siempre incluida, puede ser próximamente) */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-medium mb-3">Criterios de Corrección</h4>
                    <p className="text-gray-600 mb-4">
                      Consulta los criterios de corrección aplicados en este modelo de examen.
                    </p>
                    <div className="flex justify-between items-center">
                      {fisicaExamen.rutaCorreccion ? (
                        <>
                          <a 
                            href={fisicaExamen.rutaCorreccion} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded hover:bg-opacity-80 transition-colors flex items-center"
                          >
                            <span className="mr-2">Ver Criterios</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                              <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                            </svg>
                          </a>
                          <a 
                            href={fisicaExamen.rutaCorreccion} 
                            download
                            className="text-blue-600 hover:underline flex items-center"
                          >
                            Descargar
                          </a>
                        </>
                      ) : (
                        <span className="text-gray-500 italic">Próximamente</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Información adicional */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Información sobre el examen</h3>
              <p className="mb-4">
                Este examen corresponde al nuevo modelo 0 para la PAU 2025 de la asignatura de Física
                para la Selectividad de Cataluña.
              </p>
              <p className="mb-4">
                El modelo 0 muestra la nueva estructura de examen que se utilizará en la PAU 2025,
                siguiendo los cambios establecidos en el nuevo currículum.
              </p>
              <p>
                Puedes acceder al examen utilizando los enlaces proporcionados.
                El documento se abrirá en una nueva pestaña para facilitar su visualización.
              </p>
            </div>
          </div>
          
          {/* Sección de Asignaturas - Para mostrar todas las asignaturas disponibles */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Exámenes por asignatura</h2>
            
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
                          <span className="text-white font-medium text-lg">Próximamente</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{asignatura.nombre}</h3>
                      <p className="text-gray-600 mb-4">
                        {hayExamenes 
                          ? `${examenesAsignatura.length} modelo${examenesAsignatura.length > 1 ? 's' : ''} disponible${examenesAsignatura.length > 1 ? 's' : ''}`
                          : 'Modelos en preparación'}
                      </p>
                      {hayExamenes ? (
                        <a 
                          href={examenesAsignatura[0].rutaExamen}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-selectivi-yellow text-gray-800 px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                        >
                          Ver modelo
                        </a>
                      ) : (
                        <button 
                          disabled
                          className="block w-full text-center bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed"
                        >
                          Próximamente
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