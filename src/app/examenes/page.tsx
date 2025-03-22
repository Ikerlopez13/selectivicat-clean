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
      <div className="py-12 px-4 md:px-8 bg-gray-50 flex-grow">
        <div className="container mx-auto max-w-6xl">
          {/* Examen destacado - Física Modelo 0 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{fisicaExamen.titulo}</h2>
                  <p className="text-gray-600 text-lg">
                    {fisicaExamen.convocatoria.charAt(0).toUpperCase() + fisicaExamen.convocatoria.slice(1)} {fisicaExamen.año} - {fisicaExamen.comunidadAutonoma}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Vista previa del PDF y documentos */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Columna izquierda: Vista previa */}
                <div className="md:col-span-1">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-full h-48 bg-blue-100 rounded-lg">
                        <span className="text-7xl">🔭</span>
                      </div>
                      <p className="mt-3 text-sm text-gray-500 text-center">
                        Modelo oficial para la PAU 2025
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Columna derecha: Documentos */}
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Documentos disponibles</h3>
                  
                  <div className="space-y-6">
                    {/* Tarjeta del Examen */}
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-lg border border-yellow-200 shadow-sm">
                      <h4 className="text-lg font-bold mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                          <path d="M3 8a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                        </svg>
                        Examen Oficial
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Accede al examen modelo 0 de Física para la PAU 2025.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <a 
                          href={fisicaExamen.rutaExamen} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors flex items-center shadow-sm"
                          onClick={(e) => {
                            if (!fisicaExamen.isExternalUrl) {
                              e.preventDefault();
                              window.open(fisicaExamen.rutaExamen, '_blank');
                            }
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Ver Examen
                        </a>
                        <a 
                          href={fisicaExamen.rutaExamen} 
                          download="fisica_modelo0_pau2025.pdf"
                          className="text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-md transition-colors flex items-center border border-blue-200"
                          onClick={(e) => {
                            if (!fisicaExamen.isExternalUrl) {
                              const link = document.createElement('a');
                              link.href = fisicaExamen.rutaExamen;
                              link.download = "fisica_modelo0_pau2025.pdf";
                              document.body.appendChild(link);
                              link.click();
                              document.body.removeChild(link);
                              e.preventDefault();
                            }
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Descargar
                        </a>
                      </div>
                    </div>
                    
                    {/* Tarjeta de los Criterios de Corrección (solo si hay disponibles) */}
                    {fisicaExamen.rutaCorreccion && fisicaExamen.rutaCorreccion !== "" && (
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 shadow-sm">
                        <h4 className="text-lg font-bold mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Criterios de Corrección y Solución
                        </h4>
                        <p className="text-gray-600 mb-4">
                          Documento con los criterios de corrección que incluye las soluciones detalladas del examen.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <a 
                            href={fisicaExamen.rutaCorreccion} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-selectivi-yellow text-gray-800 px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors flex items-center shadow-sm"
                            onClick={(e) => {
                              if (!fisicaExamen.isExternalUrl && fisicaExamen.rutaCorreccion) {
                                e.preventDefault();
                                window.open(fisicaExamen.rutaCorreccion, '_blank');
                              }
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Ver Solución
                          </a>
                          <a 
                            href={fisicaExamen.rutaCorreccion} 
                            download="fisica_modelo0_pau2025_solucion.pdf"
                            className="text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-md transition-colors flex items-center border border-blue-200"
                            onClick={(e) => {
                              if (!fisicaExamen.isExternalUrl && fisicaExamen.rutaCorreccion) {
                                const link = document.createElement('a');
                                link.href = fisicaExamen.rutaCorreccion;
                                link.download = "fisica_modelo0_pau2025_solucion.pdf";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                                e.preventDefault();
                              }
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Descargar
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {/* Mensaje sobre disponibilidad futura */}
                    {!fisicaExamen.rutaCorreccion || fisicaExamen.rutaCorreccion === "" ? (
                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 pt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9.382 16h1.236a.75.75 0 001.476-.246c-.01-3.5-.748-4.236-2.394-4.236h-.059a1.147 1.147 0 01-1.059-.736 1.483 1.483 0 01.059-1.225 1.12 1.12 0 011-.736h.117c1.92 0 2.473.456 2.473 1.472 0 .41.167.799.462 1.086l.61.713c.372.428.975.562 1.396.3l.715-.215A.75.75 0 1013.5 13.5a.704.704 0 01-.4.215l-.712.214a.748.748 0 01-.436 0l-.712-.214a.74.74 0 01-.337-.214.69.69 0 01-.163-.245 1.5 1.5 0 00-1.35-.738c-.652 0-1.2.32-1.534.787l-.66.925c-.193.27-.273.61-.223.95.054.343.243.655.523.874z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-gray-600">Soluciones en desarrollo</h3>
                            <div className="mt-2 text-sm text-gray-500">
                              <p>
                                Las soluciones y criterios de corrección estarán disponibles próximamente.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
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
            <p className="mb-4">
              Los criterios de corrección incluyen las soluciones detalladas de cada problema y ejercicio.
            </p>
            <p>
              Puedes acceder al examen utilizando los enlaces proporcionados.
              El documento se abrirá en una nueva pestaña para facilitar su visualización.
            </p>
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