import { Metadata } from 'next';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import SaasRecommendation from '@/components/SaasRecommendation';

export const metadata: Metadata = {
  title: 'Últims canvis a la PAU de Catalunya: Tot el que pares i alumnes han de saber | SelectiviCat',
  description: 'Descobreix els últims canvis a la Selectivitat de Catalunya, estratègies per triar assignatures i consells per maximitzar la nota d\'accés a la universitat.',
};

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="bg-selectivi-yellow py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Últims canvis a la PAU de Catalunya: Tot el que pares i alumnes han de saber
              </h1>
              <p className="text-lg md:text-xl opacity-80 mb-8">
                Informació actualitzada sobre els canvis recents a la Selectivitat i estratègies per maximitzar la nota d'accés
              </p>
              <div className="flex items-center justify-center text-sm text-gray-700">
                <span className="mr-4">Publicat: 15 de maig de 2023</span>
                <span>Temps de lectura: 6 minuts</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="py-12 px-4 md:px-8">
          <div className="container mx-auto max-w-3xl">
            <AnimateOnScroll animation="fadeIn">
              <article className="prose prose-lg max-w-none">
                <p className="lead text-lg mb-8">
                  La <strong>Prova d'Accés a la Universitat (PAU)</strong> a Catalunya, també coneguda com a <strong>Selectivitat</strong>, és un moment crucial en la vida acadèmica dels estudiants. Els recents canvis en el sistema requereixen que tant pares com alumnes estiguin ben informats per prendre les millors decisions estratègiques. A continuació, presentem tota la informació rellevant sobre els últims canvis i les estratègies més efectives.
                </p>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Com es calcularà la nota final el 2025?</h2>
                <p className="text-lg mb-5">
                  El sistema continuarà basant-se en dues fases:
                </p>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-10">
                  <div className="bg-gray-50 p-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold mb-4">1. Nota d'Accés a la Universitat</h3>
                    <ul className="list-disc pl-6 mb-5 space-y-3 text-lg">
                      <li><strong>60%</strong> de la mitjana del Batxillerat.</li>
                      <li><strong>40%</strong> de la fase general de la PAU.</li>
                    </ul>
                    <div className="bg-selectivi-yellow/20 p-5 rounded-lg text-center font-medium text-lg">
                      Nota d'Accés = (<strong>0,6</strong> × Nota Batxillerat) + (<strong>0,4</strong> × Nota Fase General)
                    </div>
                  </div>
                  
                  <div className="bg-white p-6">
                    <h3 className="text-xl font-bold mb-4">2. Nota d'Admissió</h3>
                    <ul className="list-disc pl-6 mb-5 space-y-3 text-lg">
                      <li>Es poden sumar fins a <strong>4 punts addicionals</strong> amb la fase específica.</li>
                      <li>Les assignatures ponderen <strong>0.1</strong> o <strong>0.2</strong> segons la carrera a la qual vulguis accedir.</li>
                    </ul>
                    <div className="bg-selectivi-yellow/20 p-5 rounded-lg text-center font-medium text-lg">
                      Nota d'Admissió = Nota d'Accés + (Millors notes de la fase específica × ponderació)
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Quins canvis introdueix la nova PAU?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-5xl mb-4">📝</div>
                    <h3 className="text-xl font-bold mb-3">Modificació en el format d'exàmens</h3>
                    <p className="text-base">
                      S'espera més <strong>opcionalitat</strong> i menys preguntes memorístiques, amb un enfocament més pràctic i competencial.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-5xl mb-4">⚖️</div>
                    <h3 className="text-xl font-bold mb-3">Revisió de les ponderacions</h3>
                    <p className="text-base">
                      Algunes matèries podrien tenir <strong>més o menys pes</strong> en funció del grau universitari al qual vulguis accedir.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-5xl mb-4">🧠</div>
                    <h3 className="text-xl font-bold mb-3">Major importància de les competències</h3>
                    <p className="text-base">
                      Les proves podrien incloure una <strong>avaluació més aplicada</strong>, valorant la capacitat d'anàlisi i resolució de problemes.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Estratègies per triar assignatures i maximitzar la nota</h2>
                
                <h3 className="text-xl font-bold mt-8 mb-4">1. Prioritza assignatures amb ponderació 0,2</h3>
                <p className="text-lg mb-4">
                  Cada grau universitari assigna diferents ponderacions a les matèries. Les assignatures que ponderen <strong>0,2</strong> et donaran més punts en el còmput final. Alguns exemples:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
                  <li><strong>Matemàtiques</strong> per a Enginyeries</li>
                  <li><strong>Biologia</strong> per a Medicina</li>
                  <li><strong>Economia</strong> per a Administració i Direcció d'Empreses (ADE)</li>
                </ul>
                <p className="text-lg mb-6">
                  És <strong>fonamental</strong> consultar la taula de ponderacions específica per a la carrera que t'interessa.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-8">
                  <p className="font-bold text-blue-700 text-lg mb-2">Consell important</p>
                  <p className="text-blue-600 text-lg">
                    Consulta les ponderacions específiques de cada universitat, ja que poden variar lleugerament entre centres per a un mateix grau.
                  </p>
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4">2. Tria assignatures en les quals tinguis fortaleses</h3>
                <p className="text-lg mb-6">
                  És important seleccionar matèries en les quals tinguis <strong>facilitat o interès</strong>, ja que això augmentarà les teves possibilitats d'obtenir una bona qualificació.
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">3. Equilibra dificultat i estratègia</h3>
                <p className="text-lg mb-6">
                  No es tracta només de triar assignatures amb alta ponderació, sinó també de garantir que puguis obtenir una <strong>bona qualificació</strong>. Si una matèria és molt difícil per a tu, potser sigui millor optar per una en la qual puguis treure una nota més alta encara que ponderi 0,1.
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">4. Revisa les notes de tall d'anys anteriors</h3>
                <p className="text-lg mb-6">
                  Conèixer quina nota necessitaràs t'ajudarà a <strong>planificar millor</strong> quines assignatures triar. Consulta les notes de tall d'anys anteriors per tenir una referència.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 my-8">
                  <p className="font-bold text-yellow-700 text-lg mb-2">Recorda</p>
                  <p className="text-yellow-600 text-lg">
                    Les notes de tall poden variar cada any en funció de la demanda i les places disponibles. Sempre és recomanable apuntar a una nota lleugerament superior a la de l'any anterior.
                  </p>
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4">5. Practica amb exàmens de convocatòries passades</h3>
                <p className="text-lg mb-6">
                  Realitzar <strong>simulacres d'exàmens</strong> t'ajudarà a familiaritzar-te amb el format i guanyar confiança per aconseguir la millor puntuació possible.
                </p>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Últims canvis a la PAU de Catalunya</h2>
                <p className="text-lg mb-4">
                  Els canvis més recents a la PAU de Catalunya inclouen:
                </p>
                <ul className="space-y-3 mb-8 text-lg">
                  <li className="flex items-start">
                    <span className="text-selectivi-yellow mr-2">•</span>
                    <span><strong>Modificació en el sistema de ponderació:</strong> S'ha actualitzat el sistema de ponderacions per a diverses carreres universitàries.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-selectivi-yellow mr-2">•</span>
                    <span><strong>Noves opcions de matèries:</strong> S'han incorporat noves assignatures avaluables a la fase específica.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-selectivi-yellow mr-2">•</span>
                    <span><strong>Canvis en els criteris d'avaluació:</strong> S'han ajustat els criteris d'avaluació en algunes matèries per alinear-los amb els nous currículums.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-selectivi-yellow mr-2">•</span>
                    <span><strong>Adaptacions post-pandèmia:</strong> S'han establert mesures per compensar els efectes de la pandèmia en la preparació dels estudiants.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-selectivi-yellow mr-2">•</span>
                    <span><strong>Calendari d'exàmens:</strong> S'han realitzat ajustos en les dates i horaris de les proves.</span>
                  </li>
                </ul>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Consells per a pares</h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <span className="bg-selectivi-yellow/30 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div className="text-lg">
                        <strong className="text-gray-800">Acompanyament emocional:</strong> Aquest és un període estressant per als estudiants. Proporciona suport emocional sense afegir pressió addicional.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-selectivi-yellow/30 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div className="text-lg">
                        <strong className="text-gray-800">Ajuda en la planificació:</strong> Assisteix al teu fill en l'organització del seu temps d'estudi i en la selecció d'assignatures.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-selectivi-yellow/30 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div className="text-lg">
                        <strong className="text-gray-800">Informació actualitzada:</strong> Mantén-te informat sobre els canvis en el sistema educatiu i en les proves d'accés.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-selectivi-yellow/30 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div className="text-lg">
                        <strong className="text-gray-800">Orientació professional:</strong> Ajuda al teu fill a explorar diferents opcions universitàries i professionals.
                      </div>
                    </li>
                  </ul>
                </div>
                
                <p className="font-semibold bg-gray-50 p-5 rounded-lg text-lg">
                  Seguint aquestes estratègies, tant pares com estudiants podran prendre decisions informades que maximitzin les possibilitats d'accedir a la carrera desitjada.
                </p>
                
                <div className="bg-gray-100 p-7 rounded-lg my-10 shadow-sm">
                  <h3 className="text-2xl font-bold mb-5">Recursos addicionals</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-selectivi-yellow mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Link href="/calculadora" className="text-blue-600 hover:underline text-lg font-medium">Calculadora de nota d'accés</Link>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-selectivi-yellow mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Link href="/notes-de-tall" className="text-blue-600 hover:underline text-lg font-medium">Consulta les notes de tall</Link>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-selectivi-yellow mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Link href="/blog/calcular-nota-acces-universitat-2025" className="text-blue-600 hover:underline text-lg font-medium">Com calcular la teva nota d'accés a la universitat</Link>
                    </li>
                  </ul>
                </div>
              </article>
            </AnimateOnScroll>
            
            {/* Related Articles */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Articles relacionats</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/calcular-nota-acces-universitat-2025" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-selectivi-yellow transition-colors">Com calcular la teva nota d'accés a la universitat 2025</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Guia completa per entendre com es calcula la nota d'accés a la universitat amb la nova Selectivitat.
                      </p>
                      <span className="text-selectivi-yellow font-medium">Llegir més →</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/notes-tall-catalunya-2025" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-selectivi-yellow transition-colors">Notes de tall a Catalunya 2025: Quins canvis hi haurà amb la nova Selectivitat?</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Anàlisi de com la nova Selectivitat pot afectar les notes de tall de les universitats catalanes.
                      </p>
                      <span className="text-selectivi-yellow font-medium">Llegir més →</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mt-16 bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Subscriu-te al nostre butlletí</h2>
              <p className="mb-6">Rep les últimes actualitzacions sobre la Selectivitat, notes de tall i consells d'estudi directament al teu correu.</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="El teu correu electrònic" 
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-selectivi-yellow"
                />
                <button 
                  type="submit" 
                  className="bg-selectivi-yellow text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  Subscriu-me
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-3xl px-4 md:px-8 mb-12">
          <SaasRecommendation />
        </div>
      </main>
      
      <FooterMain />
    </div>
  );
} 