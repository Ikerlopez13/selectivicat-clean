import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata = {
  title: 'Itinerari Social | SelectiviCat',
  description: 'Recursos i materials per a les matèries de l\'itinerari social de la selectivitat: Geografia, Economia de l\'empresa, Història de l\'art i més.',
};

export default function SocialPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      {/* Hero Section */}
      <div className="bg-[#FFB7B2] py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Social</h1>
              <p className="text-xl mb-6">Recursos i materials per a les matèries de l'itinerari social.</p>
              <p className="mb-8">Prepara't per a les proves d'accés a la universitat amb els nostres recursos per a les matèries socials i humanístiques.</p>
            </div>
            
            <div className="lg:w-2/5 flex justify-center">
              <div className="bg-white p-8 rounded-full shadow-lg">
                <span className="text-8xl">⚖️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lista de materias */}
      <div className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Assignatures Socials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Geografia */}
            <Link href="/subjects/geografia" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#FFB7B2]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Geografia</h3>
              <p className="text-gray-600">Estudi de l'espai geogràfic, els territoris i les relacions entre societat i medi.</p>
            </Link>
            
            {/* Economia de l'empresa */}
            <Link href="/subjects/economia-empresa" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#FFB7B2]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Economia de l'empresa</h3>
              <p className="text-gray-600">Estudi de l'organització i funcionament de les empreses i els mercats.</p>
            </Link>
            
            {/* Història de l'art */}
            <Link href="/subjects/historia-art" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#FFB7B2]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🖼️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Història de l'art</h3>
              <p className="text-gray-600">Estudi de les manifestacions artístiques al llarg de la història.</p>
            </Link>
            
            {/* Literatura castellana */}
            <Link href="/subjects/literatura-castellana" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#FFB7B2]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Literatura castellana</h3>
              <p className="text-gray-600">Estudi de les obres i autors més rellevants de la literatura en llengua castellana.</p>
            </Link>
            
            {/* Literatura catalana */}
            <Link href="/subjects/literatura-catalana" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#FFB7B2]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">📖</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Literatura catalana</h3>
              <p className="text-gray-600">Estudi de les obres i autors més rellevants de la literatura en llengua catalana.</p>
            </Link>
            
            {/* Matemàtiques CCSS */}
            <Link href="/subjects/matematiques-ccss" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#FFB7B2]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Matemàtiques CCSS</h3>
              <p className="text-gray-600">Matemàtiques aplicades a les ciències socials, amb èmfasi en l'estadística i la probabilitat.</p>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Sección de información adicional */}
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Importància de l'itinerari social</h2>
              <p className="mb-4">L'itinerari social proporciona una formació integral en les ciències socials i humanístiques, desenvolupant habilitats d'anàlisi, interpretació i pensament crític.</p>
              <p>Aquestes assignatures són fonamentals per a carreres relacionades amb el dret, l'economia, l'educació, la sociologia, la història, el periodisme i la gestió cultural.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Com preparar-se per a les proves</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Practica la redacció i l'argumentació</li>
                <li>Familiaritza't amb els conceptes clau de cada matèria</li>
                <li>Relaciona els continguts amb l'actualitat</li>
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