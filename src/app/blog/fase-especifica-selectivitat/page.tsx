import { Metadata } from 'next';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Com funciona la fase específica de la Selectivitat? | SelectiviCat',
  description: 'Descobreix com funciona la fase específica de la Selectivitat, com es calculen les ponderacions i les millors estratègies per maximitzar la teva nota d\'admissió.',
};

export default function BlogFaseEspecifica() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow pt-16">
        <article className="container mx-auto max-w-4xl px-4 py-12">
          {/* Cabecera del artículo */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Com funciona la fase específica de la Selectivitat? Tot el que has de saber</h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span className="mr-4">Publicat: 30 de juny de 2024</span>
              <span>Actualitzat: 30 de juny de 2024</span>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <span className="text-6xl">📝</span>
            </div>
          </div>
          
          {/* Introducción */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="lead text-xl">
              Si vols millorar la teva nota d'accés a la universitat, la fase específica de la Selectivitat és clau. Aquesta part et permet sumar fins a 4 punts addicionals a la teva nota final, depenent de les assignatures que triïs i la seva ponderació en la carrera que vols estudiar. Aquí t'expliquem com funciona.
            </p>
          </div>
          
          {/* Sección 1: Qué es la fase específica */}
          <AnimateOnScroll animation="fadeIn" className="mb-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">Què és la fase específica?</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <p className="mb-4">
                  És una part voluntària de la Selectivitat que serveix per augmentar la teva nota d'admissió. Pots examinar-te d'un màxim de <strong>quatre assignatures</strong>, però només es comptaran les dues millors notes multiplicades per la seva ponderació.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="font-medium">Recorda:</p>
                  <p>Tot i que pots examinar-te de fins a quatre assignatures, només comptaran les dues amb millor qualificació després d'aplicar la ponderació.</p>
                </div>
              </div>
            </section>
          </AnimateOnScroll>
          
          {/* Sección 2: Cómo se calcula la nota */}
          <AnimateOnScroll animation="fadeIn" className="mb-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">Com es calcula la nota de la fase específica?</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <p className="mb-4">
                  Cada assignatura té una ponderació de <strong>0,1 o 0,2</strong> segons la relació amb la carrera escollida. La fórmula és:
                </p>
                
                <div className="bg-selectivi-yellow/20 p-5 rounded-lg my-6 text-center">
                  <p className="font-bold text-lg">
                    Nota d'Admissió = Nota d'Accés + (Millors notes de la fase específica × Ponderació)
                  </p>
                </div>
                
                <p className="mb-4">
                  La nota d'accés és la que obtens de la fase general (que val fins a 10 punts), mentre que amb la fase específica pots sumar fins a 4 punts més, arribant a un màxim de 14 punts.
                </p>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Exemple pràctic:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nota d'accés: <strong>7,5</strong></li>
                    <li>Nota de Matemàtiques (fase específica): <strong>8,5</strong> × ponderació <strong>0,2</strong> = <strong>1,7</strong></li>
                    <li>Nota de Física (fase específica): <strong>7,0</strong> × ponderació <strong>0,2</strong> = <strong>1,4</strong></li>
                    <li>Nota d'admissió final: <strong>7,5 + 1,7 + 1,4 = 10,6</strong></li>
                  </ul>
                </div>
              </div>
            </section>
          </AnimateOnScroll>
          
          {/* Sección 4: Estrategias */}
          <AnimateOnScroll animation="fadeIn" className="mb-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">Estratègies per treure la millor nota</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <div className="text-center mb-3">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">Tria assignatures amb ponderació 0,2</h3>
                  <p className="text-sm text-gray-600">
                    Prioritza les assignatures que ponderin 0,2 en el grau que vols estudiar per maximitzar els punts addicionals.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <div className="text-center mb-3">
                    <span className="text-3xl">📚</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">Prepara't amb exàmens anteriors</h3>
                  <p className="text-sm text-gray-600">
                    Practica amb exàmens d'anys anteriors per familiaritzar-te amb el format i el tipus de preguntes.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <div className="text-center mb-3">
                    <span className="text-3xl">🧠</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">Diversifica les teves opcions</h3>
                  <p className="text-sm text-gray-600">
                    Si dubtes entre diversos graus, escull assignatures que ponderin bé en tots ells per mantenir les teves opcions obertes.
                  </p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-6">
                <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-start">
                  <span className="text-xl mr-3 mt-1">✅</span>
                  <div>
                    <h3 className="font-bold mb-1">Examina't de més de dues assignatures</h3>
                    <p className="text-gray-600">Tot i que només compten les dues millors, examinar-te de tres o quatre et dona més possibilitats d'obtenir bones notes.</p>
                  </div>
                </li>
                
                <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-start">
                  <span className="text-xl mr-3 mt-1">✅</span>
                  <div>
                    <h3 className="font-bold mb-1">Consulta les notes de tall</h3>
                    <p className="text-gray-600">Conèixer la nota de tall del grau que t'interessa t'ajudarà a planificar quina nota necessites a la fase específica.</p>
                  </div>
                </li>
                
                <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-start">
                  <span className="text-xl mr-3 mt-1">✅</span>
                  <div>
                    <h3 className="font-bold mb-1">Utilitza la nostra calculadora</h3>
                    <p className="text-gray-600">Amb la calculadora de SelectiviCat podràs simular diferents escenaris i veure quina seria la teva nota final.</p>
                  </div>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <Link 
                  href="/notes-de-tall" 
                  className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                >
                  Consulta les ponderacions oficials
                </Link>
                <Link 
                  href="/calculadora" 
                  className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                >
                  Calcula la teva nota d'admissió
                </Link>
              </div>
            </section>
          </AnimateOnScroll>
          
          {/* Conclusión */}
          <AnimateOnScroll animation="fadeIn">
            <section className="bg-gray-100 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Conclusió</h2>
              <p className="mb-4">
                La fase específica és una oportunitat excel·lent per millorar la teva nota d'admissió i augmentar les teves possibilitats d'accedir al grau que desitges. Amb una bona planificació, la tria adequada d'assignatures i una preparació sòlida, podràs aconseguir la nota necessària per estudiar el que realment t'apassiona.
              </p>
              <p className="mb-4">
                Recorda que a SelectiviCat tens a la teva disposició totes les eines necessàries per preparar-te per a la Selectivitat i planificar el teu futur universitari.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/calculadora" 
                  className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                >
                  Utilitza la nostra calculadora
                </Link>
                <Link 
                  href="/blog" 
                  className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                >
                  Més articles sobre Selectivitat
                </Link>
              </div>
            </section>
          </AnimateOnScroll>
          
          {/* Artículos relacionados */}
          <AnimateOnScroll animation="fadeIn">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Articles relacionats</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/selectivitat-catalunya-nova-pau" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow block">
                  <h3 className="font-bold mb-2">Selectivitat a Catalunya: Com afecta la nova PAU?</h3>
                  <p className="text-gray-600 text-sm">Descobreix com la reforma de la Selectivitat 2025 afectarà la teva nota final d'accés a la universitat.</p>
                </Link>
                
                <Link href="/blog/calcular-nota-acces-universitat-2025" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow block">
                  <h3 className="font-bold mb-2">Com calcular la teva nota d'accés a la universitat el 2025?</h3>
                  <p className="text-gray-600 text-sm">Descobreix com calcular la teva nota d'accés amb els canvis de la Selectivitat Catalunya 2025.</p>
                </Link>
              </div>
            </section>
          </AnimateOnScroll>
        </article>
      </main>
      
      <FooterMain />
    </div>
  );
} 