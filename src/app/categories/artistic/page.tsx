import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata = {
  title: 'Itinerari Artístic | SelectiviCat',
  description: 'Recursos i materials per a les matèries de l\'itinerari artístic de la selectivitat: Dibuix artístic, Disseny, Arts escèniques i més.',
};

export default function ArtisticPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-[#B5DEFF] py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-3/5">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Artístic</h1>
                <p className="text-xl mb-6">Recursos i materials per a les matèries de l'itinerari artístic.</p>
                <p className="mb-8">Prepara't per a les proves d'accés a la universitat amb els nostres recursos per a les matèries artístiques i creatives.</p>
              </div>
              
              <div className="lg:w-2/5 flex justify-center">
                <div className="bg-white p-8 rounded-full shadow-lg">
                  <span className="text-8xl">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lista de materias */}
        <div className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Assignatures Artístiques</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Anàlisi musical */}
              <Link href="/subjects/analisi-musical" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
                <div className="bg-[#B5DEFF]/20 p-4 rounded-full mb-4">
                  <span className="text-4xl">🎵</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Anàlisi musical</h3>
                <p className="text-gray-600">Estudi de les estructures, formes i elements de les obres musicals.</p>
              </Link>
              
              {/* Arts Escèniques */}
              <Link href="/subjects/arts-esceniques" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
                <div className="bg-[#B5DEFF]/20 p-4 rounded-full mb-4">
                  <span className="text-4xl">🎭</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Arts Escèniques</h3>
                <p className="text-gray-600">Estudi del teatre, la dansa i altres formes d'expressió escènica.</p>
              </Link>
              
              {/* Cultura Audiovisual */}
              <Link href="/subjects/cultura-audiovisual" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
                <div className="bg-[#B5DEFF]/20 p-4 rounded-full mb-4">
                  <span className="text-4xl">🎬</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Cultura Audiovisual</h3>
                <p className="text-gray-600">Anàlisi i creació de continguts audiovisuals i multimèdia.</p>
              </Link>
              
              {/* Dibuix artístic */}
              <Link href="/subjects/dibuix-artistic" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
                <div className="bg-[#B5DEFF]/20 p-4 rounded-full mb-4">
                  <span className="text-4xl">✏️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Dibuix artístic</h3>
                <p className="text-gray-600">Tècniques i mètodes de representació gràfica i expressió visual.</p>
              </Link>
              
              {/* Disseny */}
              <Link href="/subjects/disseny" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
                <div className="bg-[#B5DEFF]/20 p-4 rounded-full mb-4">
                  <span className="text-4xl">🖌️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Disseny</h3>
                <p className="text-gray-600">Principis, processos i metodologies del disseny gràfic, industrial i d'espais.</p>
              </Link>
              
              {/* Fonaments de les arts */}
              <Link href="/subjects/fonaments-arts" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
                <div className="bg-[#B5DEFF]/20 p-4 rounded-full mb-4">
                  <span className="text-4xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Fonaments de les arts</h3>
                <p className="text-gray-600">Estudi dels fonaments teòrics i històrics de les diferents disciplines artístiques.</p>
              </Link>
              
              {/* Història de la Música i de la Dansa */}
              <Link href="/subjects/historia-musica-dansa" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
                <div className="bg-[#B5DEFF]/20 p-4 rounded-full mb-4">
                  <span className="text-4xl">💃</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Història de la Música i de la Dansa</h3>
                <p className="text-gray-600">Evolució històrica de la música i la dansa a través de diferents èpoques i cultures.</p>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Sección de información adicional */}
        <div className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Importància de l'itinerari artístic</h2>
                <p className="mb-4">L'itinerari artístic proporciona una formació integral en les diferents disciplines artístiques, desenvolupant la sensibilitat estètica, la creativitat i la capacitat d'expressió.</p>
                <p>Aquestes assignatures són fonamentals per a carreres relacionades amb les belles arts, el disseny, la música, les arts escèniques i la comunicació audiovisual.</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Com preparar-se per a les proves</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Practica regularment les tècniques artístiques específiques de cada matèria</li>
                  <li>Familiaritza't amb les obres i autors més rellevants de cada disciplina</li>
                  <li>Analitza exemples d'exàmens d'anys anteriors</li>
                  <li>Desenvolupa un portafoli de treballs personals</li>
                  <li>Consulta els recursos disponibles a SelectiviCat</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 