import { Metadata } from 'next';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import SaasRecommendation from '@/components/SaasRecommendation';

export const metadata: Metadata = {
  title: 'Hauré de memoritzar més o raonar més? Canvis en la metodologia d\'avaluació de la nova PAU | SelectiviCat',
  description: 'Descobreix com la nova PAU a Catalunya canvia el model d\'avaluació cap a un enfocament més competencial i menys memorístic. Estratègies i consells per adaptar-te.',
  keywords: 'selectivitat, PAU, competències, memorització, raonament, avaluació, catalunya, nova selectivitat 2025',
  openGraph: {
    title: 'Hauré de memoritzar més o raonar més? Canvis en la metodologia d\'avaluació de la nova PAU',
    description: 'Descobreix com la nova PAU a Catalunya canvia el model d\'avaluació cap a un enfocament més competencial i menys memorístic.',
    url: 'https://selectivicat.cat/blog/memoritzar-raonar-nova-pau',
    siteName: 'SelectiviCat',
    locale: 'ca_ES',
    type: 'article',
  },
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
                Hauré de memoritzar més o raonar més? Canvis en la metodologia d'avaluació de la nova PAU
              </h1>
              <p className="text-lg md:text-xl opacity-80 mb-8">
                Descobreix com la nova Selectivitat a Catalunya prioritza les competències sobre la memorització i com adaptar els teus mètodes d'estudi
              </p>
              <div className="flex items-center justify-center text-sm text-gray-700">
                <span className="mr-4">Publicat: 15 de maig de 2023</span>
                <span>Temps de lectura: 8 minuts</span>
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
                  Una de les principals inquietuds que sorgeix entre els estudiants davant el nou model de la Prova d'Accés a la Universitat (PAU) a Catalunya és si hauran de centrar-se més en la memorització de continguts o en el desenvolupament d'habilitats de raonament. La resposta, segons les directrius que s'estan perfilant, apunta clarament cap a un <strong>canvi de paradigma que afavoreix el raonament sobre la memorització</strong>.
                </p>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">El nou enfocament competencial</h2>
                <p className="text-lg mb-6">
                  El canvi més significatiu en la nova PAU catalana és la <strong>transició cap a un model d'avaluació per competències</strong>. Això suposa un allunyament del sistema tradicional basat principalment en la reproducció de coneixements memoritzats, per donar pas a un model que valora més la capacitat d'aplicar coneixements en contextos diversos i resoldre problemes complexos.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-8">
                  <p className="font-bold text-blue-700 text-lg mb-2">Què significa avaluar per competències?</p>
                  <ul className="text-blue-600 text-lg space-y-2">
                    <li><strong>Aplicació pràctica del coneixement:</strong> No n'hi haurà prou amb saber definicions o dates, sinó que hauràs de demostrar com utilitzes aquest coneixement per resoldre situacions.</li>
                    <li><strong>Connexió entre matèries:</strong> Els exàmens inclouran més preguntes interdisciplinàries que requereixen relacionar conceptes de diferents àrees.</li>
                    <li><strong>Anàlisi de casos i problemes reals:</strong> S'avaluarà la teva capacitat per transferir el que has après a situacions de la vida real o professional.</li>
                  </ul>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Canvis específics per àrees de coneixement</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Ciències</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Abans:</p>
                        <p>Predominaven problemes tipus amb solucions mecàniques i definicions teòriques.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Ara:</p>
                        <p>Augmentaran els problemes contextualitzats on hauràs de seleccionar quines fórmules aplicar segons cada situació.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Exemple:</p>
                        <p>En lloc de resoldre equacions aïllades, podries enfrontar-te a un problema sobre sostenibilitat energètica on necessitis aplicar conceptes de física i química per proposar solucions.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Humanitats</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Abans:</p>
                        <p>Es valorava la reproducció de dades històriques, moviments literaris i característiques artístiques.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Ara:</p>
                        <p>Guanyaran pes l'anàlisi crítica de textos, la interpretació d'obres artístiques i la connexió d'esdeveniments històrics amb l'actualitat.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Exemple:</p>
                        <p>En comptes d'enumerar característiques del Romanticisme, podries haver d'analitzar un text desconegut identificant elements romàntics i explicant la seva rellevància cultural.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Ciències Socials</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Abans:</p>
                        <p>Predominava la memorització de teories, models econòmics i estructures polítiques.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Ara:</p>
                        <p>S'avaluarà més la capacitat d'analitzar dades estadístiques, interpretar gràfics i proposar solucions a problemes socials.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Exemple:</p>
                        <p>Podries enfrontar-te a l'anàlisi de dades demogràfiques reals per extreure conclusions sobre tendències socials i proposar mesures polítiques.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Llengües</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Abans:</p>
                        <p>El pes requeia en l'anàlisi sintàctica, morfològica i coneixements literaris.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Ara:</p>
                        <p>Es reforçarà l'avaluació de la comprensió lectora, capacitat argumentativa i producció de textos coherents.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Exemple:</p>
                        <p>En lloc d'analitzar oracions aïllades, podries haver de redactar un text argumentatiu sobre un tema d'actualitat, demostrant coherència i cohesió.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Tècniques d'estudi que hauràs d'adaptar</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-red-600">El que perd rellevància</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span><strong>Memorització pura:</strong> Dedicar llargues hores a memoritzar continguts sense comprendre'ls serà menys eficaç.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span><strong>Esquemes rígids:</strong> Els models de resposta predefinits perdran utilitat davant preguntes més variables.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span><strong>Exercicis repetitius:</strong> Practicar molts exercicis del mateix tipus tindrà menor impacte.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-green-600">El que guanya importància</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span><strong>Comprensió profunda:</strong> Entendre els principis fonamentals de cada matèria serà crucial.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span><strong>Pensament crític:</strong> Desenvolupar la capacitat de qüestionar, comparar i avaluar informació.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span><strong>Resolució creativa:</strong> Buscar solucions originals a problemes complexos.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span><strong>Connexió d'idees:</strong> Establir relacions entre conceptes de diferents assignatures.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span><strong>Expressió clara:</strong> Millorar la capacitat de comunicar idees de manera efectiva, tant per escrit com oralment.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Com preparar-te per al nou model</h2>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Estratègies d'estudi efectives</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="text-3xl text-selectivi-yellow mr-3">1</div>
                      <div>
                        <p className="font-semibold">Aprenentatge basat en problemes</p>
                        <p>Practica amb casos reals que t'obliguin a aplicar coneixements.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-3xl text-selectivi-yellow mr-3">2</div>
                      <div>
                        <p className="font-semibold">Lectura crítica</p>
                        <p>Llegeix textos diversos i qüestiona els seus arguments, fonts i conclusions.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-3xl text-selectivi-yellow mr-3">3</div>
                      <div>
                        <p className="font-semibold">Debats i discussions</p>
                        <p>Participa en intercanvis d'idees que t'obliguin a defensar postures amb arguments sòlids.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-3xl text-selectivi-yellow mr-3">4</div>
                      <div>
                        <p className="font-semibold">Mapes conceptuals</p>
                        <p>Crea esquemes que relacionin conceptes de diferents matèries per veure connexions.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-3xl text-selectivi-yellow mr-3">5</div>
                      <div>
                        <p className="font-semibold">Projectes interdisciplinaris</p>
                        <p>Treballa en temes que requereixin aplicar coneixements de diverses assignatures.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Recursos recomanats</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-selectivi-yellow mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Exàmens tipus competencial:</strong> Busca models d'exàmens basats en competències d'altres sistemes educatius.</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-selectivi-yellow mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Plataformes d'aprenentatge adaptatiu:</strong> Utilitza aplicacions que et plantegin reptes progressivament més complexos.</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-selectivi-yellow mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Grups d'estudi col·laboratiu:</strong> Forma equips on cada membre aporti perspectives diferents.</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-selectivi-yellow mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Tutorials sobre pensament crític:</strong> Aprèn tècniques específiques per analitzar informació i argumentar.</span>
                    </li>
                  </ul>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">L'equilibri ideal: memòria + raonament</h2>
                <p className="text-lg mb-6">
                  Tot i que el nou model afavoreix el raonament, seria un error abandonar completament la memorització. El que canvia és l'<strong>enfocament</strong>: la memòria ha d'estar al servei del raonament, no al revés.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Coneixements base necessaris</h3>
                    <p>Necessitaràs memoritzar conceptes fonamentals, dates clau, fórmules essencials i vocabulari específic.</p>
                    <p className="mt-2">Aquest coneixement base és el que et permetrà desenvolupar un pensament més complex.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">La memòria comprensiva</h3>
                    <p>La clau està en la <strong>memorització comprensiva</strong>: entendre el que memoritzes i saber per què és rellevant.</p>
                    <p className="mt-2">Relacionar el nou amb el que ja saps facilita tant la memorització com la seva aplicació posterior.</p>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Testimonis de professors i experts</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-selectivi-yellow">
                  <p className="italic mb-4">
                    "No volem estudiants que reprodueixin informació, sinó joves capaços d'utilitzar el que saben per afrontar els reptes complexos de la nostra societat."
                  </p>
                  <p className="font-semibold">— Maria Fernández, coordinadora de la PAU a Barcelona</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-selectivi-yellow">
                  <p className="italic mb-4">
                    "Els alumnes que ja estudien comprenent en lloc de memoritzant tindran avantatge. La clau està en preguntar-se sempre 'per a què serveix això que estic aprenent?'"
                  </p>
                  <p className="font-semibold">— Jordi Martínez, professor de secundària amb 20 anys d'experiència</p>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Conclusió: preparant-te per al futur, no només per a l'examen</h2>
                <p className="text-lg mb-6">
                  El canvi en la metodologia d'avaluació de la PAU reflecteix una transformació més àmplia en la concepció de l'educació. No es tracta només d'aprovar un examen, sinó de desenvolupar capacitats que seran útils a la universitat i a la vida professional.
                </p>
                
                <p className="text-lg mb-6">
                  La bona notícia és que, tot i que requereix adaptar els teus mètodes d'estudi, aquest enfocament té més sentit per al teu futur: <strong>estar preparat per raonar, analitzar i resoldre problemes complexos et serà més útil que ser capaç de reproduir informació que avui està a l'abast d'un clic</strong>.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 my-8">
                  <p className="font-bold text-yellow-700 text-lg mb-2">Consell final</p>
                  <p className="text-yellow-600 text-lg">
                    No abandonis la memorització, però assegura't que el que memoritzes ho comprens, ho relaciones amb altres coneixements i saps aplicar-ho en diferents contextos. Així estaràs preparat no només per a la nova PAU, sinó per als desafiaments que vindran després.
                  </p>
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
                
                <Link href="/blog/modificacions-ponderacions-nova-selectivitat" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-selectivi-yellow transition-colors">Es modificaran les ponderacions d'assignatures a la nova selectivitat?</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Descobreix com podrien canviar les ponderacions d'assignatures a la nova PAU i com això afectarà l'accés a diferents carreres.
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
                  aria-label="El teu correu electrònic"
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