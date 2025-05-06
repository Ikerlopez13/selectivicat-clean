"use client"

import React, { useState } from 'react';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import { examenes, Examen, getExamenesByAsignatura } from '@/data/examenes';
import Link from 'next/link';
import Script from 'next/script';
import { Helmet } from 'react-helmet';

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
    id: 'matematiques', 
    nombre: 'Matemáticas', 
    emoji: '📊', 
    color: 'bg-purple-100'
  },
  { 
    id: 'matematiques-socials', 
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
    id: 'biologia', 
    nombre: 'Biología', 
    emoji: '🧬', 
    color: 'bg-emerald-100'
  },
  { 
    id: 'historia', 
    nombre: 'Historia', 
    emoji: '📜', 
    color: 'bg-red-100'
  },
  { 
    id: 'ingles', 
    nombre: 'Inglés', 
    emoji: '🇬🇧', 
    color: 'bg-cyan-100'
  },
  { 
    id: 'aleman', 
    nombre: 'Alemán', 
    emoji: '🇩🇪', 
    color: 'bg-yellow-100'
  },
  { 
    id: 'frances', 
    nombre: 'Francés', 
    emoji: '🇫🇷', 
    color: 'bg-blue-50'
  },
  { 
    id: 'italia', 
    nombre: 'Italiano', 
    emoji: '🇮🇹', 
    color: 'bg-green-200'
  },
  { 
    id: 'ciencias-generales', 
    nombre: 'Ciencias Generales', 
    emoji: '🔬', 
    color: 'bg-teal-100'
  },
  { 
    id: 'dibujo-tecnico', 
    nombre: 'Dibujo Técnico Aplicado', 
    emoji: '✏️', 
    color: 'bg-orange-100'
  },
  { 
    id: 'fundamentos-empresa', 
    nombre: 'Fundamentos de la Empresa', 
    emoji: '💼', 
    color: 'bg-indigo-100'
  },
  { 
    id: 'analisis-musical', 
    nombre: 'Análisis Musical', 
    emoji: '🎵', 
    color: 'bg-purple-200'
  },
  { 
    id: 'lengua-cultura-griegas', 
    nombre: 'Lengua y Cultura Griegas', 
    emoji: '🏛️', 
    color: 'bg-blue-200'
  },
  { 
    id: 'literatura-dramatica', 
    nombre: 'Literatura Dramática', 
    emoji: '🎭', 
    color: 'bg-amber-100'
  },
  { 
    id: 'castella', 
    nombre: 'Lengua Castellana', 
    emoji: '📚', 
    color: 'bg-red-200'
  },
  { 
    id: 'catala', 
    nombre: 'Lengua Catalana', 
    emoji: '📖', 
    color: 'bg-red-50'
  },
  { 
    id: 'literatura-castellana', 
    nombre: 'Literatura Castellana', 
    emoji: '📜', 
    color: 'bg-red-300'
  },
  { 
    id: 'literatura-catalana', 
    nombre: 'Literatura Catalana', 
    emoji: '📝', 
    color: 'bg-red-100'
  },
  { 
    id: 'filosofia', 
    nombre: 'Filosofía', 
    emoji: '🧠', 
    color: 'bg-blue-50'
  },
  { 
    id: 'geografia', 
    nombre: 'Geografía', 
    emoji: '🌍', 
    color: 'bg-lime-100'
  },
  { 
    id: 'geologia', 
    nombre: 'Geología y Ciencias Ambientales', 
    emoji: '🏔️', 
    color: 'bg-emerald-200'
  },
  { 
    id: 'dibuix-artistic', 
    nombre: 'Dibujo Artístico', 
    emoji: '🎨', 
    color: 'bg-orange-200'
  },
  { 
    id: 'tecnologia', 
    nombre: 'Tecnología e Ingeniería', 
    emoji: '⚙️', 
    color: 'bg-slate-100'
  },
  { 
    id: 'arts-esceniques', 
    nombre: 'Artes Escénicas', 
    emoji: '🎬', 
    color: 'bg-yellow-200'
  },
  { 
    id: 'disseny', 
    nombre: 'Diseño', 
    emoji: '🎭', 
    color: 'bg-purple-50'
  },
  { 
    id: 'historia-art', 
    nombre: 'Historia del Arte', 
    emoji: '🖼️', 
    color: 'bg-rose-100'
  },
  { 
    id: 'historia-musica', 
    nombre: 'Historia de la Música y Danza', 
    emoji: '🎼', 
    color: 'bg-indigo-50'
  },
  { 
    id: 'fonaments-arts', 
    nombre: 'Fundamentos Artísticos', 
    emoji: '🏺', 
    color: 'bg-amber-200'
  },
  {
    id: 'movimientos-culturales',
    nombre: 'Movimientos Culturales y Artísticos',
    emoji: '🎭',
    color: 'bg-rose-200'
  }
];

export default function ExamenesPage() {
  const [viewMode, setViewMode] = useState<'examen' | 'solucion'>('examen');
  
  // Crear datos estructurados para SEO (Schema.org)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Models 0 Selectivitat 2025 Catalunya",
    "description": "Col·lecció completa dels models 0 oficials per a la Selectivitat 2025 a Catalunya. Inclou exàmens i criteris de correcció de totes les assignatures.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": examenes.map((examen, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "DigitalDocument",
          "name": examen.titulo,
          "description": `Model 0 oficial de ${examen.titulo} per a la Selectivitat 2025 de Catalunya`,
          "url": `https://selectivicat.com${examen.rutaExamen}`
        }
      }))
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      {/* Metadatos y SEO */}
      <Helmet>
        <title>Models 0 Selectivitat 2025 Catalunya | PAU 2025 | Exàmens oficials</title>
        <meta name="description" content="Descarrega els models 0 de Selectivitat 2025 Catalunya. Tots els exàmens oficials PAU 2025 amb criteris de correcció. Prepara't per la Selectivitat amb els últims models." />
        <meta name="keywords" content="Selectivitat 2025, PAU Catalunya, models 0, exàmens Selectivitat, criteris correcció PAU, proves PAU 2025" />
        <meta property="og:title" content="Models 0 Selectivitat 2025 Catalunya | Exàmens PAU oficials" />
        <meta property="og:description" content="Descarrega els models 0 oficials de la Selectivitat 2025. Tots els exàmens i criteris de correcció per preparar-te per la PAU a Catalunya." />
        <meta property="og:url" content="https://selectivicat.com/examenes" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-examenes.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Models d'examen Selectivitat 2025" />
      </Helmet>
      
      {/* Script para datos estructurados JSON-LD (SEO) */}
      <Script id="exam-schema" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      
      {/* Hero Section - Banner general */}
      <section className="bg-selectivi-yellow py-12 px-4 md:px-8" aria-labelledby="hero-heading">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-4">Models d'examen Selectivitat 2025</h1>
              <p className="text-xl mb-6">Exàmens oficials Model 0 PAU 2025 Catalunya</p>
              <p className="mb-8">Accedeix als models d'examen oficials per a la Selectivitat, amb criteris de correcció i solucions.</p>
            </div>
            
            <div className="lg:w-2/5 flex justify-center">
              <div className="bg-white p-8 rounded-full shadow-lg">
                <span className="text-8xl" role="img" aria-label="Icona d'examen">📝</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contenido principal */}
      <main className="py-12 px-4 md:px-8 bg-gray-50 flex-grow">
        <div className="container mx-auto max-w-6xl">
          
          {/* Sección de todos los exámenes disponibles */}
          <section className="mb-16" aria-labelledby="examenes-disponibles">
            <h2 id="examenes-disponibles" className="text-3xl font-bold mb-8">Models 0 PAU 2025 disponibles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {asignaturas.map(asignatura => {
                const examenesAsignatura = getExamenesByAsignatura(asignatura.id);
                if (examenesAsignatura.length === 0) return null;
                
                // Obtener el primer examen disponible para esta asignatura
                const examen = examenesAsignatura[0];
                
                return (
                  <article key={asignatura.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <header className={`p-6 border-b ${asignatura.color}`}>
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 text-4xl" role="img" aria-label={`Icona de ${asignatura.nombre}`}>{asignatura.emoji}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{examen.titulo}</h3>
                          <p className="text-gray-600">
                            {examen.convocatoria === 'modelo-0' ? 'Model 0' : examen.convocatoria.charAt(0).toUpperCase() + examen.convocatoria.slice(1)} {examen.año} - {examen.comunidadAutonoma}
                          </p>
                        </div>
                      </div>
                    </header>
                    
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
                          aria-label={`Veure examen de ${asignatura.nombre} Model 0 PAU 2025`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
                            aria-label={`Veure criteris de correcció de ${asignatura.nombre} Model 0 PAU 2025`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Criteris i Solució
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              }).filter(Boolean)}
            </div>
          </section>
          
          {/* Información sobre los modelos 0 */}
          <section className="mt-8 bg-white p-6 rounded-lg shadow-sm mb-16" aria-labelledby="info-models">
            <h2 id="info-models" className="text-xl font-bold mb-4">Informació sobre els models d'examen Selectivitat 2025</h2>
            <p className="mb-4">
              Els models d'examen d'aquesta pàgina corresponen als nous models 0 de la Selectivitat (PAU) 2025 de Catalunya.
            </p>
            <p className="mb-4">
              Aquests models 0 mostren la nova estructura d'examen seguint els canvis establerts en el nou currículum per a la Selectivitat 2025. Són la millor guia per preparar-te per a les proves d'accés a la universitat.
            </p>
            <p className="mb-4">
              Els criteris de correcció inclouen las soluciones detalladas de cada problema y ejercicio, resultant essencials per entender como se evaluarían las pruebas reales.
            </p>
            <p>
              Pots accedir als documentos haciendo clic en los enlaces correspondientes. Los documentos se abrirán en una nueva pestaña para facilitar su visualización.
            </p>
            
            {/* FAQ para SEO */}
            <div className="mt-8 border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Preguntes freqüents sobre els Models 0 de la Selectivitat 2025</h3>
              
              <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                  <h4 itemProp="name" className="font-medium text-gray-900">Què són els Models 0 de la Selectivitat?</h4>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <div itemProp="text" className="mt-2 text-gray-600">
                      Els Models 0 són exàmens oficials que publica la Generalitat de Catalunya per mostrar l'estructura i tipus de preguntes que s'inclouran a les proves PAU 2025. Són essencials per entendre els canvis en el format d'examen.
                    </div>
                  </div>
                </div>
                
                <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                  <h4 itemProp="name" className="font-medium text-gray-900">Quan es faran les proves PAU 2025 a Catalunya?</h4>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <div itemProp="text" className="mt-2 text-gray-600">
                      Les proves de Selectivitat 2025 a Catalunya normalment es realitzen al juny, amb una convocatòria extraordinària al setembre. Les dates exactes es publicaran a la web oficial del Consell Interuniversitari de Catalunya.
                    </div>
                  </div>
                </div>
                
                <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                  <h4 itemProp="name" className="font-medium text-gray-900">Com han canviat els exàmens de la PAU per al 2025?</h4>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <div itemProp="text" className="mt-2 text-gray-600">
                      Els exàmens PAU 2025 presenten canvis tant en format com en contingut adaptats al nou currículum. S'ha modificat el tipus de preguntes, la seva valoració i, en alguns casos, l'enfocament de les matèries. Els Models 0 disponibles aquí reflecteixen aquests canvis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <FooterMain />
    </div>
  );
} 