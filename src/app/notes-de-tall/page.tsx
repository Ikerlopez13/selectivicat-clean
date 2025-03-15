import { Suspense } from 'react';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import PopularDegrees from '@/components/PopularDegrees';
import Link from 'next/link';
import ClientSearchComponent from './client-search';

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
      <NavbarMain />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-selectivi-yellow py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-3/5">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Cercador de notes de Tall</h1>
                <p className="text-xl mb-6">Cerca qualsevol grau universitari.</p>
                <p className="mb-8">Nosaltres et proporcionem la dada oficial de <strong>totes les universitats</strong> de Catalunya.</p>
                
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
                <Suspense fallback={<div>Loading search...</div>}>
                  <ClientSearchComponent />
                </Suspense>
              </div>
              
              <div className="lg:w-2/5 flex justify-center">
                <img 
                  src="/images/Group11.png" 
                  alt="Estudiant buscant notes de tall" 
                  className="w-s max-w-sm h-auto"
                />
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
      </div>
      
      <FooterMain />
    </div>
  );
} 