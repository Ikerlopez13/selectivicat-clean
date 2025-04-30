import { Metadata } from 'next';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata: Metadata = {
  title: 'Política de Cookies | SelectiviCat',
  description: 'Informació sobre l\'ús de cookies a SelectiviCat.',
};

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">Què són les cookies?</h2>
            <p>
              Les cookies són petits arxius de text que els llocs web guarden al teu dispositiu quan els visites. 
              S'utilitzen àmpliament per fer que els llocs web funcionin de manera més eficient i proporcionar informació als propietaris del lloc.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Quines cookies utilitzem?</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Cookies essencials:</strong> Necessàries per al funcionament bàsic del lloc web.
              </li>
              <li>
                <strong>Cookies analítiques:</strong> Utilitzem Google Analytics per entendre com els usuaris interactuen amb el nostre lloc web.
              </li>
              <li>
                <strong>Cookies de publicitat:</strong> Utilitzem Google AdSense per mostrar anuncis rellevants.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Com gestionar les cookies?</h2>
            <p>
              Pots gestionar les cookies a través de la configuració del teu navegador. Tingues en compte que la desactivació 
              de certes cookies pot afectar la funcionalitat del lloc web.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cookies de tercers</h2>
            <p>
              Alguns dels nostres serveis utilitzen cookies de tercers:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Google Analytics:</strong> Per analitzar l'ús del lloc web.
              </li>
              <li>
                <strong>Google AdSense:</strong> Per mostrar anuncis personalitzats.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Més informació</h2>
            <p>
              Per a més informació sobre com utilitzem les cookies i les teves dades personals, consulta la nostra{' '}
              <a href="/politica-privacitat" className="text-selectivi-yellow hover:underline">
                política de privacitat
              </a>.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="font-medium">
                Si continues navegant pel nostre lloc web sense canviar la configuració de cookies, 
                entendrem que acceptes l'ús de cookies segons aquesta política.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <FooterMain />
    </div>
  );
} 