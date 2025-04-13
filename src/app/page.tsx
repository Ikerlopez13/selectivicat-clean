import NavbarMain from '@/components/NavbarMain';
import HeroMain from '@/components/HeroMain';
import SectionCategories from '@/components/SectionCategories';
import SectionWhySelectiviCat from '@/components/SectionWhySelectiviCat';
import SectionFeatures from '@/components/SectionFeatures';
import SectionStats from '@/components/SectionStats';
import SectionRecentExams from '@/components/SectionRecentExams';
import FooterMain from '@/components/FooterMain';
import SaasRecommendation from '@/components/SaasRecommendation';
import BannerModels0 from '@/components/BannerModels0';
import { auth } from '@/auth';
import Link from 'next/link';

const MainTools = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Les nostres eines principals</h2>
        
        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
          {/* SeleTest Banner */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-selectivi-yellow/5 rounded-l-full transform translate-x-1/2"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative">
              <div className="md:w-1/2">
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
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-selectivi-yellow/20 to-transparent rounded-lg"></div>
                  <img 
                    src="/images/test.png"
                    alt="Exemple de pregunta a SeleTest"
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full"
                    width="600"
                    height="400"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
            {/* Notes de Tall Card */}
            <div className="group block card bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl overflow-hidden">
              <div className="p-8 relative overflow-hidden h-full flex flex-col">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Notes de Tall</h3>
                <p className="text-gray-600 text-center mb-6 flex-grow">
                  Consulta les notes de tall actualitzades de tots els graus universitaris de Catalunya.
                </p>
                <div className="flex justify-center mt-auto">
                  <Link
                    href="/examens"
                    className="inline-block bg-selectivi-yellow hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                  >
                    Consultar notes
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Calculadora Card */}
              <div className="group block card bg-white hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl overflow-hidden">
                <div className="p-8 relative overflow-hidden h-full flex flex-col">
                  <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">Calculadora</h3>
                  <p className="text-gray-600 text-center mb-6 flex-grow">
                    Calcula la teva nota d'accés a la universitat amb la nostra calculadora personalitzada.
                  </p>
                  <div className="flex justify-center mt-auto">
                    <Link
                      href="/calculadora"
                      className="inline-flex items-center px-6 py-3 text-emerald-500 font-semibold group-hover:translate-x-2 transition-all duration-300"
                    >
                      Calcular nota
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">I molt més...</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/millors-videos" className="badge badge-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full px-6 py-3 transition-colors duration-300">Millors vídeos</a>
            <a href="/blog" className="badge badge-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full px-6 py-3 transition-colors duration-300">Blog</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      <div className="pt-16">
        <HeroMain />
        <MainTools />
        <SectionWhySelectiviCat />
        <BannerModels0 />
        <SectionFeatures />
        <SectionStats />
        <SectionRecentExams />
        <div className="container mx-auto px-4 py-8">
          <SaasRecommendation className="my-8" />
        </div>
        <FooterMain />
      </div>
    </div>
  );
} 