import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata = {
  title: 'Matèries Comunes | SelectiviCat',
  description: 'Recursos i materials per a les matèries comunes de la selectivitat: Història de la filosofia, Anglès, Llengua catalana, Història i Llengua castellana.',
};

export default function ComunesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      {/* Hero Section */}
      <div className="bg-selectivi-yellow py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Matèries Comunes</h1>
              <p className="text-xl mb-6">Recursos i materials per a les matèries comunes de la selectivitat.</p>
              <p className="mb-8">Prepara't per a les proves d'accés a la universitat amb els nostres recursos per a les matèries comunes.</p>
            </div>
            
            <div className="lg:w-2/5 flex justify-center">
              <img 
                src="/images/📚.png" 
                alt="Llibres de matèries comunes" 
                className="w-md
                 max-w-sm h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Lista de materias */}
      <div className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Assignatures Comunes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Història de la filosofia */}
            <Link href="/subjects/historia-filosofia" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-selectivi-yellow/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Història de la filosofia</h3>
              <p className="text-gray-600">Estudia els principals corrents filosòfics i els seus representants al llarg de la història.</p>
            </Link>
            
            {/* Anglès */}
            <Link href="/subjects/angles" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-selectivi-yellow/20 p-4 rounded-full mb-4">
                <span className="text-4xl">🇬🇧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Anglès</h3>
              <p className="text-gray-600">Comprensió lectora i expressió escrita en llengua anglesa.</p>
            </Link>
            
            {/* Llengua catalana */}
            <Link href="/subjects/llengua-catalana" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-selectivi-yellow/20 p-4 rounded-full mb-4">
                <span className="text-4xl">📝</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Llengua catalana</h3>
              <p className="text-gray-600">Comprensió lectora, expressió escrita i literatura en llengua catalana.</p>
            </Link>
            
            {/* Història */}
            <Link href="/subjects/historia" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-selectivi-yellow/20 p-4 rounded-full mb-4">
                <span className="text-4xl">📜</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Història</h3>
              <p className="text-gray-600">Història contemporània d'Espanya i Catalunya.</p>
            </Link>
            
            {/* Llengua castellana */}
            <Link href="/subjects/llengua-castellana" className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all flex flex-col items-center text-center">
              <div className="bg-selectivi-yellow/20 p-4 rounded-full mb-4">
                <span className="text-4xl">✍️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Llengua castellana</h3>
              <p className="text-gray-600">Comprensió lectora, expressió escrita i literatura en llengua castellana.</p>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Sección de información adicional */}
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Importància de les matèries comunes</h2>
              <p className="mb-4">Les matèries comunes són fonamentals per a la formació integral de l'estudiant i representen una part important de la nota final de la selectivitat.</p>
              <p>Aquestes assignatures avaluen competències bàsiques com la comprensió lectora, l'expressió escrita i el pensament crític, habilitats essencials per a qualsevol estudi universitari.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Com preparar-se per a les proves</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Practica amb exàmens d'anys anteriors</li>
                <li>Revisa els criteris de correcció</li>
                <li>Treballa la comprensió lectora i l'expressió escrita</li>
                <li>Organitza el temps d'estudi per a cada matèria</li>
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