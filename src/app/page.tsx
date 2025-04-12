import NavbarMain from '@/components/NavbarMain';
import HeroMain from '@/components/HeroMain';
import SectionCategories from '@/components/SectionCategories';
import SectionWhySelectiviCat from '@/components/SectionWhySelectiviCat';
import CardSubjectGrid from '@/components/CardSubjectGrid';
import SectionFeatures from '@/components/SectionFeatures';
import SectionStats from '@/components/SectionStats';
import SectionRecentExams from '@/components/SectionRecentExams';
import FooterMain from '@/components/FooterMain';
import SaasRecommendation from '@/components/SaasRecommendation';
import { auth } from '@/auth';
import SearchInput from '@/components/SearchInput';

const MainTools = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Les nostres eines principals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* SeleTest Card */}
          <a 
            href="/seletest" 
            className="group block card bg-white hover:bg-yellow-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl overflow-hidden"
          >
            <div className="p-8 relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-40 h-40 bg-selectivi-yellow/5 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-selectivi-yellow/5 rounded-full -ml-20 -mb-20"></div>
              
              <div className="w-20 h-20 bg-selectivi-yellow/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-selectivi-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">SeleTest</h3>
              <p className="text-gray-600 text-center mb-6 flex-grow">
                Practica amb més de 500 preguntes reals i millora la teva nota amb el nostre simulador personalitzat.
              </p>
              <div className="flex justify-center mt-auto">
                <span className="inline-flex items-center px-6 py-3 bg-selectivi-yellow text-black font-semibold rounded-full group-hover:translate-x-2 transition-all duration-300 group-hover:shadow-lg">
                  Començar ara
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </a>

          {/* Notes de Tall Card */}
          <a 
            href="/notes-de-tall" 
            className="group block card bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl overflow-hidden"
          >
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
                <span className="inline-flex items-center px-6 py-3 text-blue-500 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Consultar notes
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </a>

          {/* Calculadora Card */}
          <a 
            href="/calculadora" 
            className="group block card bg-white hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl overflow-hidden"
          >
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
                <span className="inline-flex items-center px-6 py-3 text-emerald-500 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Calcular nota
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Additional Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">I molt més...</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/millors-videos" className="badge badge-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full px-6 py-3 transition-colors duration-300">Millors vídeos</a>
            <a href="/blog" className="badge badge-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full px-6 py-3 transition-colors duration-300">Blog</a>
            <a href="/recursos" className="badge badge-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full px-6 py-3 transition-colors duration-300">Recursos</a>
            <a href="/consells" className="badge badge-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full px-6 py-3 transition-colors duration-300">Consells</a>
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
        <CardSubjectGrid />
        <SectionFeatures />
        <SectionStats />
        <SectionRecentExams />
        <div className="container mx-auto px-4 py-8">
          <SaasRecommendation className="my-8" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchInput />
        </div>
        <FooterMain />
      </div>
    </div>
  );
} 