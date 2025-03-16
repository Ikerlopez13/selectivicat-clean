import Link from 'next/link';
import { Metadata } from 'next';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata: Metadata = {
  title: 'Pàgina no trobada | SelectiviCat',
  description: 'La pàgina que estàs buscant no existeix o ha estat moguda.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-3xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-selectivi-yellow">404</h1>
            <div className="h-2 w-24 bg-selectivi-yellow mx-auto my-6"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Aquesta pàgina ha decidit fer campana avui.
          </h2>
          
          <p className="text-xl mb-10 text-gray-600">
            Sembla que has trobat una pàgina que no existeix, com aquella pregunta d'examen que mai vas estudiar.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="px-8 py-4 bg-selectivi-yellow text-gray-900 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Tornar a l'inici
            </Link>
            
            <Link 
              href="/blog" 
              className="px-8 py-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Visitar el blog
            </Link>
          </div>
          
          <div className="mt-16 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Consell d'estudiant</h3>
            <p className="italic">
              "Si et perds a la Selectivitat com t'has perdut aquí, respira fons i recorda: 
              sempre pots tornar a l'inici i començar de nou."
            </p>
          </div>
        </div>
      </main>
      
      <FooterMain />
    </div>
  );
} 