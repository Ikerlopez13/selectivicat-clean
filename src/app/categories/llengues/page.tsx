import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata = {
  title: 'Itinerari Llengües | SelectiviCat',
  description: 'Recursos i materials per a les matèries de l\'itinerari de llengües de la selectivitat: Llatí, Italià, Francès, Grec, Alemany i més.',
};

export default function LlenguesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      {/* Hero Section */}
      <div className="bg-[#E2B6CF] py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Llengües</h1>
              <p className="text-xl mb-6">Recursos i materials per a les matèries de l'itinerari de llengües.</p>
              <p className="mb-8">Prepara't per a les proves d'accés a la universitat amb els nostres recursos per a les diferents llengües i literatura.</p>
            </div>
            
            <div className="lg:w-2/5 flex justify-center">
              <div className="bg-white p-8 rounded-full shadow-lg">
                <span className="text-8xl">💬</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lista de materias */}
      <div className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Assignatures de Llengües</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Llatí */}
            <Link href="/subjects/llati" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#E2B6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Llatí</h3>
              <p className="text-gray-600">Estudi de la llengua, literatura i cultura de l'antiga Roma.</p>
            </Link>
            
            {/* Italià */}
            <Link href="/subjects/italia" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#E2B6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🇮🇹</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Italià</h3>
              <p className="text-gray-600">Estudi de la llengua italiana i la seva cultura.</p>
            </Link>
            
            {/* Francès */}
            <Link href="/subjects/frances" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#E2B6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🇫🇷</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Francès</h3>
              <p className="text-gray-600">Estudi de la llengua francesa i la seva cultura.</p>
            </Link>
            
            {/* Grec */}
            <Link href="/subjects/grec" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#E2B6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🏺</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Grec</h3>
              <p className="text-gray-600">Estudi de la llengua, literatura i cultura de l'antiga Grècia.</p>
            </Link>
            
            {/* Alemany */}
            <Link href="/subjects/alemany" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#E2B6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🇩🇪</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Alemany</h3>
              <p className="text-gray-600">Estudi de la llengua alemanya i la seva cultura.</p>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Sección de información adicional */}
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Importància de l'itinerari de llengües</h2>
              <p className="mb-4">L'itinerari de llengües proporciona una formació sòlida en diferents idiomes i cultures, desenvolupant habilitats comunicatives, de comprensió i d'expressió.</p>
              <p>Aquestes assignatures són fonamentals per a carreres relacionades amb la traducció, la interpretació, la filologia, les relacions internacionals i el turisme.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Com preparar-se per a les proves</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Practica regularment la lectura i l'escriptura en l'idioma que estudies</li>
                <li>Familiaritza't amb les obres literàries més rellevants</li>
                <li>Reforça el vocabulari i la gramàtica</li>
                <li>Analitza exemples d'exàmens d'anys anteriors</li>
                <li>Consulta els recursos disponibles a SelectiviCat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 