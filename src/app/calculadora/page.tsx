import CalculadoraForm from '@/components/CalculadoraForm';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import SaasRecommendation from '@/components/SaasRecommendation';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora Notes de Tall 2024 | Calcula la teva Nota d\'Accés | SelectiviCAT',
  description: 'Calcula la teva nota d\'accés a la universitat amb la nostra calculadora de notes de tall. Descobreix si pots accedir al grau que vols amb la millor eina de càlcul de Catalunya.',
  openGraph: {
    title: 'Calculadora Notes de Tall 2024 | SelectiviCAT',
    description: 'Calcula la teva nota d\'accés a la universitat amb la nostra calculadora de notes de tall. Eina gratuïta i actualitzada.',
    images: ['/images/og-calculadora.jpg'],
    locale: 'ca_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora Notes de Tall 2024 | SelectiviCAT',
    description: 'Calcula la teva nota d\'accés a la universitat amb la nostra calculadora de notes de tall.',
    images: ['/images/og-calculadora.jpg'],
  },
  alternates: {
    canonical: 'https://selectivi.cat/calculadora',
  },
};

// Schema.org JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Calculadora Notes de Tall SelectiviCAT",
  "description": "Calculadora per determinar la nota d'accés a la universitat i comparar-la amb les notes de tall dels graus.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

export default function CalculadoraPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <NavbarMain />
      
      <main>
        {/* Hero Section */}
        <header className="bg-selectivi-yellow py-16 px-4 md:px-8 pt-20">
          <div className="container mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm">
                <li><a href="/" className="hover:underline">Inici</a></li>
                <li><span className="mx-2">›</span></li>
                <li><span className="font-semibold">Calculadora Notes de Tall</span></li>
              </ol>
            </nav>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-3/5">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Calculadora de Notes de Tall 2024</h1>
                <p className="text-xl mb-6">Calcula la teva nota d'accés a la universitat.</p>
                <p className="mb-8">Omple els següents camps (les notes són sobre 10) i podràs preveure la nota del teu expedient de batxillerat.</p>
                <div className="flex justify-center lg:justify-start">
                  <Link 
                    href="/examens"
                    className="btn bg-white text-selectivi-yellow hover:bg-white/90 border-2 border-selectivi-yellow font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Accedeix als exàmens
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-2/5 flex justify-center">
                <img 
                  src="/images/Group11.png" 
                  alt="Estudiant calculant la seva nota" 
                  className="w-s max-w-sm h-auto"
                />
              </div>
            </div>
          </div>
        </header>
        
        {/* Sección del formulario de calculadora */}
        <section className="py-16 px-4 md:px-8 bg-gray-50" id="calculadora">
          <div className="container mx-auto max-w-4xl">
            <h2 className="sr-only">Calculadora de Notes de Tall</h2>
            <CalculadoraForm />
          </div>
        </section>
        
        {/* Sección de información adicional */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Com es calcula la nota d'accés?</h2>
                <p className="mb-4">La nota d'accés a la universitat es calcula seguint una fórmula específica que té en compte diversos factors:</p>
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <p className="font-semibold text-lg mb-2">Nota d'accés = 0,6 × NMB + 0,4 × CFG</p>
                  <p className="text-sm mt-2 font-medium">On:</p>
                  <ul className="text-sm list-disc pl-6 space-y-1">
                    <li>NMB = Nota mitjana del batxillerat</li>
                    <li>CFG = Qualificació de la fase general de les PAU</li>
                  </ul>
                </div>
                <p className="mb-4">A aquesta nota se li poden sumar les qualificacions de les matèries específiques (fins a 4 punts addicionals) segons les ponderacions de cada grau universitari.</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Fase específica: Millora la teva nota</h2>
                <p className="mb-4">La fase específica et permet millorar la nota d'admissió fins a un màxim de 4 punts addicionals. Aspectes clau:</p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li>Pots examinar-te d'un màxim de 3 matèries de modalitat</li>
                  <li>Cada matèria es pondera segons el grau universitari (0.1 o 0.2)</li>
                  <li>Es consideren les dues millors qualificacions ponderades</li>
                  <li>La nota mínima necessària és un 5</li>
                </ul>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="font-semibold text-lg mb-2">Nota d'admissió = Nota d'accés + a×M1 + b×M2</p>
                  <p className="text-sm mt-2 font-medium">On:</p>
                  <ul className="text-sm list-disc pl-6 space-y-1">
                    <li>M1, M2 = Qualificacions de les dues millors matèries específiques</li>
                    <li>a, b = Paràmetres de ponderació segons el grau (0.1 o 0.2)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Preguntes freqüents sobre notes de tall</h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold cursor-pointer">Què és una nota de tall?</summary>
                <p className="mt-4">La nota de tall és la puntuació mínima amb la qual l'últim estudiant va accedir a un determinat grau universitari el curs anterior. Aquesta nota varia cada any segons la demanda i les places disponibles.</p>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold cursor-pointer">Com puc millorar la meva nota d'accés?</summary>
                <p className="mt-4">Pots millorar la teva nota d'accés de diverses maneres:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Preparant bé les matèries de la fase general</li>
                  <li>Escollint estratèlelament les matèries de la fase específica</li>
                  <li>Mantenint una bona mitjana de batxillerat</li>
                  <li>Estudiant les ponderacions dels graus que t'interessen</li>
                </ul>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold cursor-pointer">Quan es publiquen les notes de tall?</summary>
                <p className="mt-4">Les notes de tall definitives es publiquen després del procés de matriculació universitària, normalment a finals de juliol. Les notes provisionals es poden consultar durant el procés d'assignació de places.</p>
              </details>
            </div>
          </div>
        </section>
        
        {/* SeleTest Banner */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-selectivi-yellow/10 to-yellow-100">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-selectivi-yellow/5 rounded-l-full transform translate-x-1/2"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8 relative">
                <div className="md:w-2/3">
                  <div className="inline-block bg-selectivi-yellow/10 rounded-full px-4 py-2 mb-4">
                    <span className="text-sm font-semibold text-selectivi-yellow">✨ PRACTICA ARA</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Posa a prova els teus coneixements amb SeleTest
                  </h2>
                  <p className="text-lg mb-6 text-gray-600">
                    Més de 500 preguntes reals de selectivitat amb explicacions detallades. 
                    Practica amb el nostre simulador i millora la teva nota!
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="/seletest" 
                      className="inline-flex items-center px-6 py-3 bg-selectivi-yellow text-white font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                      Comença a practicar
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="/images/test.png"
                    alt="Exemple de pregunta a SeleTest"
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    width="400"
                    height="300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Prepara't per a la Selectivitat</h2>
            <p className="text-xl mb-8">Descobreix tots els recursos que tenim per ajudar-te a preparar els exàmens</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/examens" className="btn bg-selectivi-yellow hover:bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Accedeix als exàmens
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Recomendación de FocusCircle */}
      <aside className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SaasRecommendation />
        </div>
      </aside>
      
      <FooterMain />
    </div>
  );
} 