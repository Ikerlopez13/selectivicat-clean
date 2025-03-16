"use client";

import React, { useState } from 'react';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import { examenes, Examen } from '@/data/examenes';

// Obtener el examen de matemáticas de julio 2024
const matematicasExamen = examenes[0]; // Ahora solo hay un examen en el array

export default function ExamenesPage() {
  const [viewMode, setViewMode] = useState<'examen' | 'solucion'>('examen');

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      {/* Hero Section */}
      <div className="bg-selectivi-yellow py-12 px-4 md:px-8 mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Examen de Matemáticas II</h1>
              <p className="text-xl mb-6">Julio 2024 - Selectividad Cataluña</p>
              <p className="mb-8">Accede al examen oficial y su solución para prepararte mejor.</p>
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
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-bold">{matematicasExamen.titulo}</h2>
                <p className="text-gray-600 text-lg">
                  {matematicasExamen.convocatoria.charAt(0).toUpperCase() + matematicasExamen.convocatoria.slice(1)} {matematicasExamen.año} - {matematicasExamen.comunidadAutonoma}
                </p>
              </div>
            </div>
            
            {/* Vista previa del PDF */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-center">
                <img 
                  src="/examenes/matematicas/2024/julio/Captura de pantalla 2025-03-15 a las 13.32.11.png" 
                  alt="Vista previa del examen de Matemáticas II - Julio 2024" 
                  className="shadow-sm rounded-lg object-contain max-h-[400px]"
                />
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
                      Accede al examen oficial de Matemáticas II de la convocatoria de julio 2024.
                    </p>
                    <div className="flex justify-between items-center">
                      <a 
                        href={matematicasExamen.rutaExamen} 
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
                        href={matematicasExamen.rutaExamen} 
                        download
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        Descargar
                      </a>
                    </div>
                  </div>
                  
                  {/* Tarjeta de la Solución */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-medium mb-3">Solución Oficial</h4>
                    <p className="text-gray-600 mb-4">
                      Accede a la solución oficial del examen para comprobar tus respuestas.
                    </p>
                    <div className="flex justify-between items-center">
                      <a 
                        href={matematicasExamen.rutaSolucion} 
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
                        href={matematicasExamen.rutaSolucion} 
                        download
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        Descargar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Información adicional */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Información sobre el examen</h3>
              <p className="mb-4">
                Este examen corresponde a la convocatoria de julio de 2024 de la asignatura de Matemáticas II 
                para la Selectividad de Cataluña.
              </p>
              <p className="mb-4">
                La prueba consta de varios problemas que evalúan los conocimientos en álgebra, cálculo, 
                geometría y probabilidad según el temario oficial.
              </p>
              <p>
                Puedes acceder tanto al examen como a su solución oficial utilizando los enlaces proporcionados.
                Los documentos se abrirán en una nueva pestaña para facilitar su visualización.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 