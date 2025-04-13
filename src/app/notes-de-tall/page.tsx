import { Suspense } from 'react';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import PopularDegrees from '@/components/PopularDegrees';
import SaasRecommendation from '@/components/SaasRecommendation';
import Link from 'next/link';
import ClientSearchComponent from './client-search';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes de Tall 2024 | Consulta Totes les Notes d\'Accés Universitari | SelectiviCAT',
  description: 'Consulta les notes de tall actualitzades de tots els graus universitaris de Catalunya. Troba la informació més recent sobre els requisits d\'accés a la universitat.',
  openGraph: {
    title: 'Notes de Tall 2024 | SelectiviCAT',
    description: 'Consulta les notes de tall actualitzades de tots els graus universitaris de Catalunya.',
    images: ['/images/og-notes-tall.jpg'],
    locale: 'ca_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notes de Tall 2024 | SelectiviCAT',
    description: 'Consulta les notes de tall actualitzades de tots els graus universitaris de Catalunya.',
    images: ['/images/og-notes-tall.jpg'],
  },
  alternates: {
    canonical: 'https://selectivi.cat/notes-de-tall',
  },
};

// Schema.org JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Notes de Tall 2024 - SelectiviCAT",
  "description": "Consulta les notes de tall actualitzades de tots els graus universitaris de Catalunya.",
  "url": "https://selectivi.cat/notes-de-tall",
  "provider": {
    "@type": "Organization",
    "name": "SelectiviCAT",
    "url": "https://selectivi.cat"
  },
  "about": {
    "@type": "Thing",
    "name": "Notes de tall universitàries",
    "description": "Informació sobre els requisits d'accés als graus universitaris de Catalunya"
  }
};

export default function NotesPage() {
  const popularSearches = [
    "Medicina", 
    "Psicologia", 
    "Enginyeria Informàtica", 
    "Dret", 
    "Infermeria"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <NavbarMain />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-selectivi-yellow py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Cercador de notes de Tall</h1>
                <p className="text-xl mb-6">Cerca qualsevol grau universitari.</p>
                <p className="mb-8">Nosaltres et proporcionem la dada oficial de <strong>totes les universities</strong> de Catalunya.</p>
                
                {/* Tags populares */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {popularSearches.map((term, index) => (
                    <Link 
                      key={index}
                      href={`/notes-de-tall?search=${encodeURIComponent(term)}`}
                      className="btn btn-sm bg-white hover:bg-gray-100 text-gray-800"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
                
                {/* Buscador con valores iniciales */}
                <div className="w-full">
                  <Suspense fallback={<div>Loading search...</div>}>
                    <ClientSearchComponent />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sección de grados populares */}
        <div className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Les més populars...</h2>
            <PopularDegrees />
          </div>
        </div>
        
        {/* Sección de información adicional */}
        <div className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Com s'estableixen les notes de tall?</h2>
                <p className="mb-4">Les notes de tall no són una qualificació predeterminada, sinó que es fixen en funció de:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>L'oferta de places disponibles a cada grau</li>
                  <li>La demanda d'estudiants que sol·liciten accedir-hi</li>
                  <li>Les qualificacions d'aquests estudiants</li>
                </ul>
                <p>Per tant, la nota de tall correspon a la qualificació de l'últim estudiant que ha obtingut plaça en aquella titulació.</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Com es calcula la teva nota d'accés?</h2>
                <p className="mb-4">La nota d'accés a la universitat es calcula:</p>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="font-semibold">Nota d'accés = 0,6 × NMB + 0,4 × QFG</p>
                  <p className="text-sm mt-2">On:</p>
                  <ul className="text-sm list-disc pl-6">
                    <li>NMB = Nota mitjana del batxillerat</li>
                    <li>QFG = Qualificació de la fase general de les PAU</li>
                  </ul>
                </div>
                <p className="mb-6">A aquesta nota se li poden sumar les qualificacions de les matèries específiques (fins a 4 punts addicionals).</p>
                
                {/* Botón para la calculadora */}
                <div className="mt-8 text-center">
                  <Link 
                    href="/calculadora" 
                    className="btn bg-selectivi-yellow hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Calcula la teva nota amb la nostra calculadora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Preguntes freqüents sobre notes de tall</h2>
            <div className="space-y-6">
              <details className="bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 group cursor-pointer">
                <summary className="text-lg font-semibold">Quan es publiquen les notes de tall?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Les notes de tall es publiquen en dos moments:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Notes provisionals: Durant el procés d'assignació de places (juliol)</li>
                    <li>Notes definitives: Després del procés de matriculació universitària (finals de juliol)</li>
                  </ul>
                </div>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 group cursor-pointer">
                <summary className="text-lg font-semibold">Les notes de tall són les mateixes cada any?</summary>
                <div className="mt-4 text-gray-600">
                  <p>No, les notes de tall poden variar cada any segons:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>El nombre de places disponibles</li>
                    <li>La quantitat d'estudiants que sol·liciten plaça</li>
                    <li>Les notes mitjanes dels estudiants que s'hi presenten</li>
                  </ul>
                </div>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 group cursor-pointer">
                <summary className="text-lg font-semibold">Com puc millorar la meva nota per arribar a la nota de tall?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Hi ha diverses maneres de millorar la teva nota:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Presentar-te a la fase específica amb assignatures que ponderen 0.2 pel grau que t'interessa</li>
                    <li>Mantenir una bona mitjana de batxillerat</li>
                    <li>Preparar bé les assignatures obligatòries de la fase general</li>
                    <li>Considerar fer la prova d'una segona llengua estrangera si pondera pel grau desitjat</li>
                  </ul>
                </div>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 group cursor-pointer">
                <summary className="text-lg font-semibold">Què passa si no arribo a la nota de tall?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Si no arribes a la nota de tall tens diverses opcions:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Considerar altres universities que ofereixen el mateix grau</li>
                    <li>Explorar graus similars amb notes de tall més baixes</li>
                    <li>Matricular-te en un CFGS relacionat i accedir a la universitat per aquesta via</li>
                    <li>Preparar-te per tornar a fer la selectivitat l'any següent</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
        
        {/* Recomendación de FocusCircle */}
        <div className="py-8 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <SaasRecommendation />
          </div>
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 