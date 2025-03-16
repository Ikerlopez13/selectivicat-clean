import { Metadata } from 'next';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import SaasRecommendation from '@/components/SaasRecommendation';

export const metadata: Metadata = {
  title: 'Es modificaran les ponderacions d\'assignatures a la nova selectivitat? Anàlisi per carreres | SelectiviCat',
  description: 'Descobreix com podrien canviar les ponderacions d\'assignatures a la nova PAU de Catalunya i com això afectarà l\'accés a diferents carreres universitàries.',
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
                Es modificaran les ponderacions d'assignatures a la nova selectivitat? Anàlisi per carreres
              </h1>
              <p className="text-lg md:text-xl opacity-80 mb-8">
                Informació actualitzada sobre possibles canvis en les ponderacions i estratègies per adaptar-te a la nova PAU
              </p>
              <div className="flex items-center justify-center text-sm text-gray-700">
                <span className="mr-4">Publicat: 20 de maig de 2023</span>
                <span>Temps de lectura: 7 minuts</span>
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
                  L'anunci del nou model de la <strong>Prova d'Accés a la Universitat (PAU)</strong> a Catalunya ha generat nombrosos dubtes entre els estudiants, sent una de les principals preocupacions si canviaran les ponderacions de les assignatures que determinen l'accés a les diferents carreres universitàries. Aquest canvi podria tenir un <strong>impacte significatiu</strong> en les estratègies de preparació i en les possibilitats d'accés als graus més demandats.
                </p>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Què sabem fins ara sobre els canvis en les ponderacions?</h2>
                <p className="text-lg mb-6">
                  Segons la informació disponible, s'estan revisant les ponderacions actuals per adaptar-les al nou model educatiu. Aquesta revisió busca <strong>alinear millor les competències</strong> avaluades a la selectivitat amb les requerides a cada titulació universitària. No obstant això, les autoritats educatives han comunicat que qualsevol modificació serà anunciada amb suficient antelació perquè els estudiants puguin adaptar les seves estratègies.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-8">
                  <p className="font-bold text-blue-700 text-lg mb-2">Informació important</p>
                  <p className="text-blue-600 text-lg">
                    Les universitats catalanes han promès mantenir la coherència amb els itineraris formatius actuals per evitar sorpreses d'última hora. Qualsevol canvi serà comunicat amb temps suficient per adaptar-s'hi.
                  </p>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Anàlisi per àrees de coneixement</h2>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Ciències de la Salut</h3>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                  <h4 className="text-lg font-bold mb-3">Medicina i Infermeria:</h4>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Situació actual:</strong> Biologia i Química ponderen 0,2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Canvis previstos:</strong> Es mantindrà l'alta ponderació d'aquestes assignatures, però podria augmentar la valoració de les Matemàtiques Aplicades a les Ciències Socials per a Infermeria</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Recomanació:</strong> Mantenir el focus en Biologia i Química, però estar atent a possibles canvis en matèries complementàries</span>
                    </li>
                  </ul>
                  
                  <h4 className="text-lg font-bold mb-3 mt-6">Psicologia:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Situació actual:</strong> Biologia i Matemàtiques ponderen 0,2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Canvis previstos:</strong> Podria incrementar-se la ponderació de Ciències Socials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Recomanació:</strong> Diversificar la preparació incloent continguts de Ciències Socials</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Enginyeries i Arquitectura</h3>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                  <h4 className="text-lg font-bold mb-3">Enginyeries:</h4>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Situació actual:</strong> Matemàtiques i Física ponderen 0,2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Canvis previstos:</strong> S'espera que mantinguin el mateix pes, però amb major èmfasi en competències pràctiques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Recomanació:</strong> Reforçar aspectes pràctics i resolució de problemes aplicats</span>
                    </li>
                  </ul>
                  
                  <h4 className="text-lg font-bold mb-3 mt-6">Arquitectura:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Situació actual:</strong> Dibuix Tècnic i Matemàtiques ponderen 0,2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Canvis previstos:</strong> Podria incloure's una major valoració d'assignatures artístiques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Recomanació:</strong> Mantenir preparació en les assignatures tècniques però desenvolupar també habilitats artístiques</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Ciències Socials i Jurídiques</h3>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                  <h4 className="text-lg font-bold mb-3">Dret:</h4>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Situació actual:</strong> Història, Llatí i Economia ponderen 0,2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Canvis previstos:</strong> Major pes d'assignatures que desenvolupin el pensament crític</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Recomanació:</strong> Reforçar capacitats analítiques i argumentatives</span>
                    </li>
                  </ul>
                  
                  <h4 className="text-lg font-bold mb-3 mt-6">Administració i Direcció d'Empreses:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Situació actual:</strong> Economia i Matemàtiques Aplicades ponderen 0,2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Canvis previstos:</strong> Possible incorporació de noves matèries relacionades amb la digitalització</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Recomanació:</strong> Complementar coneixements amb aspectes digitals i tecnològics</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Arts i Humanitats</h3>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                  <h4 className="text-lg font-bold mb-3">Filologies:</h4>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Situació actual:</strong> Literatura i Llengües Estrangeres ponderen 0,2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Canvis previstos:</strong> Major valoració de la competència comunicativa global</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Recomanació:</strong> Desenvolupar capacitats comunicatives en diversos contextos</span>
                    </li>
                  </ul>
                  
                  <h4 className="text-lg font-bold mb-3 mt-6">Belles Arts:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Situació actual:</strong> Dibuix Artístic i Fonaments de l'Art ponderen 0,2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Canvis previstos:</strong> Possible incorporació de tècniques digitals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-selectivi-yellow mr-2">•</span>
                      <span><strong>Recomanació:</strong> Equilibrar formació tradicional amb eines digitals</span>
                    </li>
                  </ul>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Estratègies per afrontar la incertesa</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-5xl mb-4">📊</div>
                    <h3 className="text-xl font-bold mb-3">Mantén-te informat</h3>
                    <p className="text-base">
                      Consulta regularment les pàgines oficials de la Generalitat i les universitats catalanes per conèixer les últimes actualitzacions sobre les ponderacions.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-5xl mb-4">🔄</div>
                    <h3 className="text-xl font-bold mb-3">Diversifica la teva preparació</h3>
                    <p className="text-base">
                      No apostis tot a una o dues assignatures. Prepara un ventall més ampli de matèries per adaptar-te a possibles canvis.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-5xl mb-4">🧠</div>
                    <h3 className="text-xl font-bold mb-3">Desenvolupa competències transversals</h3>
                    <p className="text-base">
                      El nou model de selectivitat posarà més èmfasi en competències com el pensament crític, la resolució de problemes i la comunicació.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-5xl mb-4">👨‍🏫</div>
                    <h3 className="text-xl font-bold mb-3">Consulta amb orientadors</h3>
                    <p className="text-base">
                      Els professionals d'orientació educativa al teu centre poden tenir informació privilegiada sobre els canvis que s'apropen.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-5xl mb-4">📈</div>
                    <h3 className="text-xl font-bold mb-3">Analitza les tendències</h3>
                    <p className="text-base">
                      Les modificacions solen seguir les tendències del mercat laboral i els canvis socials. Observa cap a on es dirigeixen els sectors professionals del teu interès.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Quan tindrem informació definitiva?</h2>
                <p className="text-lg mb-6">
                  S'espera que durant el <strong>primer trimestre del curs escolar</strong> es publiquin les noves taules de ponderacions perquè tant estudiants com docents puguin adaptar la seva planificació. Les universitats catalanes han promès mantenir la coherència amb els itineraris formatius actuals per evitar sorpreses d'última hora.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 my-8">
                  <p className="font-bold text-yellow-700 text-lg mb-2">Recorda</p>
                  <p className="text-yellow-600 text-lg">
                    Per a consultes específiques sobre carreres concretes, et recomanem contactar directament amb les facultats i departaments d'admissió de les universitats catalanes, que podran proporcionar-te informació més detallada sobre els seus criteris específics.
                  </p>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Conclusió: Preparar-se per al canvi sense alarmisme</h2>
                <p className="text-lg mb-6">
                  Encara que els canvis en les ponderacions generen incertesa, és important afrontar-los amb serenitat. L'experiència de modificacions anteriors mostra que les variacions solen ser graduals i amb períodes d'adaptació. El més important és mantenir una <strong>preparació sòlida</strong> en les matèries fonamentals del teu àmbit d'interès, mentre desenvolupes capacitats adaptatives que et permetran respondre amb èxit a qualsevol canvi en el sistema avaluatiu.
                </p>
                
                <p className="font-semibold bg-gray-50 p-5 rounded-lg text-lg">
                  La clau de l'èxit en aquest període de transició serà la flexibilitat i la capacitat d'adaptació. Mantén-te informat, prepara't de manera integral i consulta regularment amb els teus professors i orientadors per assegurar-te que estàs en el camí correcte.
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
                      <Link href="/blog/ultims-canvis-pau-catalunya" className="text-blue-600 hover:underline text-lg font-medium">Últims canvis a la PAU de Catalunya</Link>
                    </li>
                  </ul>
                </div>
              </article>
            </AnimateOnScroll>
            
            {/* Related Articles */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Articles relacionats</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/ultims-canvis-pau-catalunya" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-selectivi-yellow transition-colors">Últims canvis a la PAU de Catalunya: Tot el que pares i alumnes han de saber</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Informació actualitzada sobre els canvis recents a la Selectivitat i estratègies per maximitzar la nota d'accés.
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
              <p className="mb-6 text-lg">Rep les últimes actualitzacions sobre la Selectivitat, notes de tall i consells d'estudi directament al teu correu.</p>
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