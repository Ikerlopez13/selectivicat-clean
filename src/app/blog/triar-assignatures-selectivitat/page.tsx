import { Metadata } from 'next';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Com triar assignatures per pujar nota a la Selectivitat? | SelectiviCat',
  description: 'Descobreix les millors estratègies per triar assignatures a la fase específica de la Selectivitat i maximitzar la teva nota d\'admissió a la universitat.',
};

export default function BlogTriarAssignatures() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow pt-16">
        <article className="container mx-auto max-w-4xl px-4 py-12">
          {/* Cabecera del artículo */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Com triar assignatures per pujar nota a la Selectivitat? Estratègies clau</h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span className="mr-4">Publicat: 1 de juliol de 2024</span>
              <span>Actualitzat: 1 de juliol de 2024</span>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <span className="text-6xl">📚</span>
            </div>
          </div>
          
          {/* Introducción */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="lead text-xl">
              Si vols accedir a la carrera dels teus somnis, escollir bé les assignatures de la fase específica pot marcar la diferència. Aquí tens algunes estratègies per maximitzar la teva nota d'admissió.
            </p>
          </div>
          
          {/* Estrategia 1 */}
          <AnimateOnScroll animation="fadeIn" className="mb-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">1. Prioritza assignatures amb ponderació 0,2</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <p className="mb-4">
                  Cada grau universitari estableix ponderacions diferents per a cada matèria. Les assignatures que ponderen <strong>0,2</strong> et donaran més punts en el còmput final. Per exemple:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Matemàtiques per Enginyeries</li>
                  <li>Biologia per Medicina</li>
                  <li>Economia per ADE</li>
                </ul>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="font-medium">Consell important:</p>
                  <p>Consulta la taula de ponderacions per la teva carrera! Les ponderacions poden canviar cada any, així que assegura't de tenir la informació actualitzada.</p>
                </div>
                
                <div className="flex justify-center mt-6">
                  <Link 
                    href="/notes-de-tall" 
                    className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Consulta les ponderacions oficials
                  </Link>
                </div>
              </div>
            </section>
          </AnimateOnScroll>
          
          {/* Estrategia 2 */}
          <AnimateOnScroll animation="fadeIn" className="mb-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">2. Tria assignatures on siguis fort</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <p className="mb-4">
                  És important seleccionar matèries en què tinguis facilitat o interès, ja que això augmentarà les teves possibilitats d'obtenir una bona nota.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-center text-green-700">✓ Recomanat</h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Assignatures on has tret bones notes durant el batxillerat</li>
                      <li>Matèries que t'agraden i et motiven</li>
                      <li>Temes en què tens coneixements previs sòlids</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-center text-red-700">✗ Evita</h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Assignatures que t'han resultat difícils durant el curs</li>
                      <li>Matèries que no t'interessen només perquè ponderen alt</li>
                      <li>Temes en què tens llacunes importants de coneixement</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 italic">
                  Recorda que una nota alta en una assignatura amb ponderació 0,1 pot ser millor que una nota baixa en una assignatura amb ponderació 0,2.
                </p>
              </div>
            </section>
          </AnimateOnScroll>
          
          {/* Estrategia 3 */}
          <AnimateOnScroll animation="fadeIn" className="mb-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">3. Equilibra dificultat i estratègia</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <p className="mb-4">
                  No només es tracta d'escollir assignatures amb ponderació alta, sinó també de garantir que podràs obtenir una bona qualificació. Si una matèria és molt difícil per a tu, potser és millor optar per una en què puguis treure una nota més alta encara que ponderi 0,1.
                </p>
                
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="font-bold mb-2">Exemple comparatiu:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Opció A:</p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Física (difícil per a tu): <strong>6,0</strong> × 0,2 = <strong>1,2</strong></li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Opció B:</p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Economia (fàcil per a tu): <strong>9,0</strong> × 0,1 = <strong>0,9</strong></li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-2 text-sm">En aquest cas, l'opció A et donaria més punts, però la diferència no és tan gran. Si no estàs segur de poder treure un 6 en Física, l'opció B podria ser més segura.</p>
                </div>
                
                <p className="font-medium">
                  La clau és trobar l'equilibri entre:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Assignatures amb alta ponderació per al teu grau</li>
                  <li>Matèries en què puguis obtenir una bona qualificació</li>
                  <li>Diversificar per tenir més opcions (examinar-te de 3-4 assignatures)</li>
                </ul>
              </div>
            </section>
          </AnimateOnScroll>
          
          {/* Estrategia 4 */}
          <AnimateOnScroll animation="fadeIn" className="mb-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">4. Consulta notes de tall d'anys anteriors</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <p className="mb-4">
                  Saber quina nota necessites et pot ajudar a planificar millor quines assignatures escollir. Conèixer la nota de tall del grau que t'interessa t'ajudarà a establir un objectiu clar.
                </p>
                
                <div className="bg-selectivi-yellow/20 p-4 rounded-lg mb-6">
                  <h3 className="font-bold mb-2 text-center">Per què és important conèixer les notes de tall?</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Et permet calcular quants punts necessites sumar amb la fase específica</li>
                    <li>Pots prioritzar millor les assignatures segons la nota que necessitis</li>
                    <li>T'ajuda a valorar opcions alternatives si la nota és molt alta</li>
                  </ul>
                </div>
                
                <div className="flex justify-center">
                  <Link 
                    href="/notes-de-tall" 
                    className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Consulta les notes de tall
                  </Link>
                </div>
              </div>
            </section>
          </AnimateOnScroll>
          
          {/* Estrategia 5 */}
          <AnimateOnScroll animation="fadeIn" className="mb-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">5. Practica amb exàmens d'anys anteriors</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <p className="mb-4">
                  Fer simulacres d'exàmens t'ajudarà a familiaritzar-te amb el format i guanyar confiança per aconseguir la millor puntuació possible.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="text-center mb-3">
                      <span className="text-3xl">🔍</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center">Analitza l'estructura</h3>
                    <p className="text-sm text-gray-600">
                      Familiaritza't amb el format de les preguntes i la distribució de punts.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="text-center mb-3">
                      <span className="text-3xl">⏱️</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center">Controla el temps</h3>
                    <p className="text-sm text-gray-600">
                      Practica resolent els exàmens en el temps establert per millorar la teva gestió.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="text-center mb-3">
                      <span className="text-3xl">📈</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center">Identifica punts febles</h3>
                    <p className="text-sm text-gray-600">
                      Detecta els temes on necessites reforç i centra't en millorar-los.
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">
                  Pots trobar exàmens d'anys anteriors al web del Departament d'Educació o a la pàgina del Consell Interuniversitari de Catalunya.
                </p>
              </div>
            </section>
          </AnimateOnScroll>
          
          {/* Conclusión */}
          <AnimateOnScroll animation="fadeIn">
            <section className="bg-gray-100 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Conclusió</h2>
              <p className="mb-4">
                Amb aquestes estratègies podràs prendre una decisió intel·ligent i optimitzar les teves opcions d'accés a la universitat. Recorda que la clau està en trobar l'equilibri entre les assignatures que ponderen més per al teu grau i aquelles en què pots obtenir millors qualificacions.
              </p>
              <p className="mb-4">
                A SelectiviCat t'oferim totes les eines necessàries per ajudar-te a prendre la millor decisió i maximitzar la teva nota d'admissió.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/calculadora" 
                  className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                >
                  Calcula la teva nota d'admissió
                </Link>
                <Link 
                  href="/notes-de-tall" 
                  className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                >
                  Consulta les notes de tall
                </Link>
              </div>
            </section>
          </AnimateOnScroll>
          
          {/* Artículos relacionados */}
          <AnimateOnScroll animation="fadeIn">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Articles relacionats</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/fase-especifica-selectivitat" className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow block">
                  <h3 className="font-bold mb-2">Com funciona la fase específica de la Selectivitat?</h3>
                  <p className="text-gray-600 text-sm">Tot el que has de saber sobre la fase específica i com maximitzar la teva nota d'admissió.</p>
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