import { Metadata } from 'next';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata: Metadata = {
  title: 'Notes de tall a Catalunya: Les 10 carreres més difícils d\'entrar el 2025 | SelectiviCat',
  description: 'Descobreix quines són les 10 carreres universitàries amb les notes de tall més altes a Catalunya pel 2025 i com millorar les teves possibilitats d\'accés.',
};

export default function BlogNotesTollTop10() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow pt-16">
        <article className="container mx-auto max-w-4xl px-4 py-12">
          {/* Cabecera del artículo */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Notes de tall a Catalunya: Les 10 carreres més difícils d'entrar el 2025</h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span className="mr-4">Publicat: 28 de juny de 2024</span>
              <span>Actualitzat: 28 de juny de 2024</span>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <span className="text-6xl">🎯</span>
            </div>
          </div>
          
          {/* Introducción */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="lead text-xl">
              Cada any, les notes de tall de les universitats catalanes varien en funció de la demanda i el nombre de places ofertades. Si estàs pensant en accedir a una de les carreres amb més competència, aquí tens el rànquing de les 10 més difícils d'entrar el 2025.
            </p>
          </div>
          
          {/* Listado de carreras */}
          <section className="mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🥇</span>
                1. Medicina
              </h2>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Universitats amb notes de tall més altes: UB, UAB, UPF</li>
                <li>Nota de tall esperada: <span className="font-semibold">12,8 - 13,2</span></li>
              </ul>
              <p className="text-sm text-gray-600">
                Medicina continua sent una de les carreres més demandades, amb places limitades i un gran nombre d'aspirants cada any.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🥈</span>
                2. Enginyeria Aeroespacial
              </h2>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Universitats destacades: UPC</li>
                <li>Nota de tall esperada: <span className="font-semibold">12,4 - 12,8</span></li>
              </ul>
              <p className="text-sm text-gray-600">
                L'Enginyeria Aeroespacial a la UPC és una de les més prestigioses d'Espanya, amb una alta demanda i places limitades.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🥉</span>
                3. Matemàtiques
              </h2>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Universitats destacades: UB, UPC</li>
                <li>Nota de tall esperada: <span className="font-semibold">12,3 - 12,7</span></li>
              </ul>
              <p className="text-sm text-gray-600">
                En els últims anys, Matemàtiques ha experimentat un augment significatiu en la seva demanda, elevant considerablement la nota de tall.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">4️⃣</span>
                4. Doble Grau en Matemàtiques i Física
              </h2>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Universitats destacades: UB, UAB</li>
                <li>Nota de tall esperada: <span className="font-semibold">13,5 - 13,7</span></li>
              </ul>
              <p className="text-sm text-gray-600">
                Aquest doble grau sol tenir la nota de tall més alta de tot Catalunya, combinant dues disciplines amb gran demanda.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">5️⃣</span>
                5. Odontologia
              </h2>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Universitats destacades: UB, UIC</li>
                <li>Nota de tall esperada: <span className="font-semibold">12,0 - 12,5</span></li>
              </ul>
              <p className="text-sm text-gray-600">
                Similar a Medicina, Odontologia té un nombre limitat de places i una alta demanda, el que fa que la nota de tall sigui molt elevada.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-2xl mr-3">6️⃣</span>
                  6. Física
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-3 text-sm">
                  <li>Universitats destacades: UB, UAB</li>
                  <li>Nota de tall esperada: <span className="font-semibold">12,0 - 12,4</span></li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-2xl mr-3">7️⃣</span>
                  7. Infermeria
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-3 text-sm">
                  <li>Universitats destacades: UB, UAB, URV</li>
                  <li>Nota de tall esperada: <span className="font-semibold">11,5 - 12,0</span></li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-2xl mr-3">8️⃣</span>
                  8. Enginyeria Biomèdica
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-3 text-sm">
                  <li>Universitats destacades: UPF, UPC</li>
                  <li>Nota de tall esperada: <span className="font-semibold">12,2 - 12,6</span></li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-2xl mr-3">9️⃣</span>
                  9. Biotecnologia
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-3 text-sm">
                  <li>Universitats destacades: UAB, UB</li>
                  <li>Nota de tall esperada: <span className="font-semibold">11,8 - 12,3</span></li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm md:col-span-2">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-2xl mr-3">🔟</span>
                  10. Psicologia
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-3 text-sm">
                  <li>Universitats destacades: UB, UAB</li>
                  <li>Nota de tall esperada: <span className="font-semibold">11,2 - 11,7</span></li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Sección: Cómo mejorar posibilidades */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Com pots millorar les teves possibilitats d'entrada?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <div className="text-center mb-3">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">Escull bé les assignatures</h3>
                <p className="text-sm text-gray-600">
                  Les ponderacions de la fase específica poden donar-te un avantatge significatiu. Tria les que més ponderin per al teu grau.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <div className="text-center mb-3">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">Consulta les notes de tall</h3>
                <p className="text-sm text-gray-600">
                  Utilitza el nostre buscador de notes de tall per conèixer exactament quina puntuació necessites per al teu grau desitjat.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <div className="text-center mb-3">
                  <span className="text-3xl">🧮</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">Calcula la teva nota</h3>
                <p className="text-sm text-gray-600">
                  Amb la nostra calculadora de nota d'accés podràs saber si tens opcions d'entrar al grau que desitges.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link 
                href="/notes-de-tall" 
                className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Consulta les notes de tall 2025
              </Link>
              <Link 
                href="/calculadora" 
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Calcula la teva nota d'accés
              </Link>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="font-medium">Consell important:</p>
              <p>Si el teu objectiu és entrar en una d'aquestes carreres, prepara't bé i fes servir totes les eines disponibles per maximitzar la teva nota!</p>
            </div>
          </section>
          
          {/* Sección: Alternativas */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Què fer si no arribes a la nota de tall?</h2>
            
            <ul className="space-y-4 mb-6">
              <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-start">
                <span className="text-xl mr-3 mt-1">✅</span>
                <div>
                  <h3 className="font-bold mb-1">Considera universities amb notes més baixes</h3>
                  <p className="text-gray-600">La mateixa carrera pot tenir notes de tall diferents segons la universitat. Valora opcions fora de Barcelona.</p>
                </div>
              </li>
              
              <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-start">
                <span className="text-xl mr-3 mt-1">✅</span>
                <div>
                  <h3 className="font-bold mb-1">Explora graus similars</h3>
                  <p className="text-gray-600">Alguns graus relacionats poden tenir notes de tall més accessibles i permetre't especialitzar-te després.</p>
                </div>
              </li>
              
              <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-start">
                <span className="text-xl mr-3 mt-1">✅</span>
                <div>
                  <h3 className="font-bold mb-1">Considera un any preparatori</h3>
                  <p className="text-gray-600">Si et quedes a prop, pot valer la pena preparar-te millor i tornar a intentar-ho l'any següent.</p>
                </div>
              </li>
            </ul>
          </section>
          
          {/* Conclusión */}
          <section className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Conclusió</h2>
            <p className="mb-4">
              Les notes de tall són un reflex de la demanda i les places disponibles, però no determinen el teu futur acadèmic. Amb una bona preparació i estratègia, pots aconseguir entrar al grau que desitges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/notes-de-tall" 
                className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Consulta totes les notes de tall
              </Link>
              <Link 
                href="/blog" 
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Més articles sobre Selectivitat
              </Link>
            </div>
          </section>
          
          {/* Artículos relacionados */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Articles relacionats</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/selectivitat-catalunya-nova-pau" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">Selectivitat a Catalunya: Com afecta la nova PAU?</h3>
                <p className="text-gray-600 text-sm">Descobreix com la reforma de la Selectivitat 2025 afectarà la teva nota final d'accés a la universitat.</p>
              </Link>
              
              <Link href="/blog/calcular-nota-acces-universitat-2025" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">Com calcular la teva nota d'accés a la universitat el 2025?</h3>
                <p className="text-gray-600 text-sm">Descobreix com calcular la teva nota d'accés amb els canvis de la Selectivitat Catalunya 2025.</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
      
      <FooterMain />
    </div>
  );
} 