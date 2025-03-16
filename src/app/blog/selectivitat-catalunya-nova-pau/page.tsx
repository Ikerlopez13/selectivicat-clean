import { Metadata } from 'next';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata: Metadata = {
  title: 'Selectivitat a Catalunya: Com afecta la nova PAU a la teva nota final? | SelectiviCat',
  description: 'Descobreix com la reforma de la Selectivitat 2025 a Catalunya afectarà la teva nota final d\'accés a la universitat i com optimitzar-la.',
};

export default function BlogSelectivitatNovaPau() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow pt-16">
        <article className="container mx-auto max-w-4xl px-4 py-12">
          {/* Cabecera del artículo */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Selectivitat a Catalunya: Com afecta la nova PAU a la teva nota final?</h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span className="mr-4">Publicat: 25 de juny de 2024</span>
              <span>Actualitzat: 25 de juny de 2024</span>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <span className="text-6xl">📝</span>
            </div>
          </div>
          
          {/* Introducción */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="lead text-xl">
              Amb la reforma de la Selectivitat a Catalunya el 2025, molts estudiants es pregunten com aquests canvis influiran en la seva nota final d'accés a la universitat. En aquesta guia, t'expliquem tot el que necessites saber per calcular la teva puntuació i entendre com optimitzar-la.
            </p>
          </div>
          
          {/* Sección 1: Cómo se calculará la nota final */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Com es calcularà la nota final el 2025?</h2>
            <p className="mb-4">
              El sistema continuarà basant-se en dues fases:
            </p>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">1. Nota d'Accés a la Universitat</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>60% de la mitjana del Batxillerat.</li>
                <li>40% de la fase general de la PAU.</li>
              </ul>
              
              <div className="bg-selectivi-yellow/20 p-3 rounded-lg mt-4">
                <p className="font-medium text-center">
                  Nota d'Accés = (0,6 × Nota Batxillerat) + (0,4 × Nota Fase General)
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">2. Nota d'Admissió</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Es poden sumar fins a 4 punts addicionals amb la fase específica.</li>
                <li>Les assignatures ponderen 0.1 o 0.2 segons la carrera a la qual vulguis accedir.</li>
              </ul>
              
              <div className="bg-selectivi-yellow/20 p-3 rounded-lg mt-4">
                <p className="font-medium text-center">
                  Nota d'Admissió = Nota d'Accés + (Millors notes de la fase específica × ponderació)
                </p>
              </div>
            </div>
          </section>
          
          {/* Sección 2: Cambios que introduce la nueva PAU */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Quins canvis introdueix la nova PAU?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <div className="text-center mb-3">
                  <span className="text-3xl">📋</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">Modificació en el format d'exàmens</h3>
                <p className="text-sm text-gray-600">
                  S'espera més opcionalitat i menys preguntes memorístiques, amb un enfocament més pràctic i competencial.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <div className="text-center mb-3">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">Revisió de les ponderacions</h3>
                <p className="text-sm text-gray-600">
                  Algunes matèries podrien tenir més o menys pes en funció del grau universitari al qual vulguis accedir.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <div className="text-center mb-3">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">Major importància de les competències</h3>
                <p className="text-sm text-gray-600">
                  Les proves podrien incloure una avaluació més aplicada, valorant la capacitat d'anàlisi i resolució de problemes.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="font-medium">Nota important:</p>
              <p>Aquests canvis busquen avaluar millor les competències reals dels estudiants i adaptar-se a les necessitats actuals del sistema universitari i del mercat laboral.</p>
            </div>
          </section>
          
          {/* Sección 3: Cómo optimizar tu nota */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Com optimitzar la teva nota?</h2>
            
            <ul className="space-y-4 mb-6">
              <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-start">
                <span className="text-xl mr-3 mt-1">✅</span>
                <div>
                  <h3 className="font-bold mb-1">Tria bé les assignatures de la fase específica</h3>
                  <p className="text-gray-600">Escull les que millor ponderin per al teu grau. Consulta les taules de ponderacions actualitzades per a cada universitat.</p>
                </div>
              </li>
              
              <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-start">
                <span className="text-xl mr-3 mt-1">✅</span>
                <div>
                  <h3 className="font-bold mb-1">Consulta la nostra calculadora de nota de tall</h3>
                  <p className="text-gray-600">T'ajudarà a planificar la teva estratègia d'estudi i a saber quina nota necessites per accedir al grau que desitges.</p>
                </div>
              </li>
              
              <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-start">
                <span className="text-xl mr-3 mt-1">✅</span>
                <div>
                  <h3 className="font-bold mb-1">Practica amb exàmens dels anys anteriors</h3>
                  <p className="text-gray-600">Familiaritza't amb el format i el tipus de preguntes. Encara que canviï el format, la pràctica sempre és beneficiosa.</p>
                </div>
              </li>
            </ul>
            
            <div className="flex justify-center mb-6">
              <Link 
                href="/calculadora" 
                className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Utilitza la nostra calculadora de notes
              </Link>
            </div>
          </section>
          
          {/* Sección 4: Consulta las notas de corte */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Consulta les notes de tall actualitzades</h2>
            
            <p className="mb-6">
              A SelectiviCat et facilitem un <strong>buscador de notes de tall</strong> perquè puguis veure quina puntuació necessites per accedir a la teva carrera desitjada.
            </p>
            
            <div className="flex justify-center mb-6">
              <Link 
                href="/notes-de-tall" 
                className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Consulta les notes de tall 2025 aquí
              </Link>
            </div>
          </section>
          
          {/* Conclusión */}
          <section className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Conclusió</h2>
            <p className="mb-4">
              Estar informat és clau per aconseguir la millor nota possible! Fes servir les nostres eines i assegura't d'obtenir la puntuació que necessites per a la universitat dels teus somnis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/calculadora" 
                className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Calcula la teva nota
              </Link>
              <Link 
                href="/notes-de-tall" 
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Consulta les notes de tall
              </Link>
            </div>
          </section>
          
          {/* Artículos relacionados */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Articles relacionats</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/calcular-nota-acces-universitat-2025" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">Com calcular la teva nota d'accés a la universitat el 2025?</h3>
                <p className="text-gray-600 text-sm">Descobreix com calcular la teva nota d'accés amb els canvis de la Selectivitat Catalunya 2025.</p>
              </Link>
              
              <Link href="/blog/notes-tall-catalunya-2025" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">Notes de tall a Catalunya 2025</h3>
                <p className="text-gray-600 text-sm">Quins canvis hi haurà amb la nova Selectivitat i com afectaran les notes de tall?</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
      
      <FooterMain />
    </div>
  );
} 