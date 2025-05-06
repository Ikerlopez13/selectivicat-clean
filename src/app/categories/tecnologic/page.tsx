import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata = {
  title: 'Itinerari Tecnològic i Científic | SelectiviCat',
  description: 'Recursos i materials per a les matèries de l\'itinerari tecnològic i científic de la selectivitat: Matemàtiques, Física, Química, Biologia i més.',
};

export default function TecnologicPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      {/* Hero Section */}
      <div className="bg-[#A8E6CF] py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Tecnològic i Científic</h1>
              <p className="text-xl mb-6">Recursos i materials per a les matèries de l'itinerari tecnològic i científic.</p>
              <p className="mb-8">Prepara't per a les proves d'accés a la universitat amb els nostres recursos per a les matèries científiques i tecnològiques.</p>
            </div>
            
            <div className="lg:w-2/5 flex justify-center">
              <div className="bg-white p-8 rounded-full shadow-lg">
                <span className="text-8xl">🏗️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lista de materias */}
      <div className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Assignatures Tecnològiques i Científiques</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ciències Generals */}
            <Link href="/subjects/ciencies-generals" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#A8E6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Ciències Generals</h3>
              <p className="text-gray-600">Conceptes bàsics i fonamentals de les ciències experimentals.</p>
            </Link>
            
            {/* Biologia */}
            <Link href="/subjects/biologia" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#A8E6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🧬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Biologia</h3>
              <p className="text-gray-600">Estudi dels éssers vius i els processos biològics.</p>
            </Link>
            
            {/* Ciències de la terra */}
            <Link href="/subjects/ciencies-terra" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#A8E6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Ciències de la terra</h3>
              <p className="text-gray-600">Estudi de la Terra, la seva estructura, composició i processos.</p>
            </Link>
            
            {/* Dibuix tècnic */}
            <Link href="/subjects/dibuix-tecnic" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#A8E6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">📐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Dibuix tècnic</h3>
              <p className="text-gray-600">Representació gràfica i tècnica d'objectes i espais.</p>
            </Link>
            
            {/* Física */}
            <Link href="/subjects/fisica" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#A8E6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">⚛️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Física</h3>
              <p className="text-gray-600">Estudi de la matèria, l'energia i les seves interaccions.</p>
            </Link>
            
            {/* Matemàtiques */}
            <Link href="/subjects/matematiques" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#A8E6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">√x</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Matemàtiques</h3>
              <p className="text-gray-600">Estudi de les propietats i relacions entre nombres, figures i estructures.</p>
            </Link>
            
            {/* Electrotècnia */}
            <Link href="/subjects/electrotecnia" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#A8E6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Electrotècnia</h3>
              <p className="text-gray-600">Aplicació pràctica de l'electricitat i els circuits elèctrics.</p>
            </Link>
            
            {/* Química */}
            <Link href="/subjects/quimica" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#A8E6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🧪</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Química</h3>
              <p className="text-gray-600">Estudi de la composició, estructura i propietats de la matèria.</p>
            </Link>
            
            {/* Tecnologia Industrial */}
            <Link href="/subjects/tecnologia-industrial" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-[#A8E6CF]/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Tecnologia Industrial</h3>
              <p className="text-gray-600">Estudi dels processos industrials i tecnològics.</p>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Sección de información adicional */}
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Importància de l'itinerari tecnològic i científic</h2>
              <p className="mb-4">L'itinerari tecnològic i científic proporciona una base sòlida per a carreres en enginyeria, medicina, ciències experimentals i altres camps relacionats amb la tecnologia i la ciència.</p>
              <p>Aquestes assignatures desenvolupen habilitats analítiques, de resolució de problemes i de pensament lògic, essencials per a l'èxit en molts àmbits professionals.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Com preparar-se per a les proves</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Practica amb exàmens d'anys anteriors</li>
                <li>Resol problemes i exercicis regularment</li>
                <li>Comprèn els conceptes teòrics i les seves aplicacions pràctiques</li>
                <li>Utilitza recursos visuals i esquemes per organitzar la informació</li>
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