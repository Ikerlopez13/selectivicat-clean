import React from "react";
import { Metadata } from 'next';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata: Metadata = {
  title: 'Política de Cookies | SelectiviCat',
  description: 'Informació sobre l\'ús de cookies a SelectiviCat.',
};

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>
          <p className="mb-4">En selectivi.cat utilizamos cookies para mejorar la experiencia de usuario y analizar el uso de la web. A continuación te explicamos qué son las cookies, qué tipos utilizamos y cómo puedes gestionarlas.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. ¿Qué son las cookies?</h2>
          <p className="mb-4">Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas una web. Sirven para recordar tus preferencias y facilitar la navegación.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Tipos de cookies que utilizamos</h2>
          <ul className="list-disc ml-6 mb-4">
            <li><b>Cookies técnicas:</b> necesarias para el funcionamiento básico de la web.</li>
            <li><b>Cookies analíticas:</b> nos ayudan a entender cómo se usa la web y mejorarla (por ejemplo, Google Analytics).</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Gestión de cookies</h2>
          <p className="mb-4">Puedes configurar tu navegador para aceptar o rechazar cookies, así como para eliminarlas en cualquier momento. Ten en cuenta que bloquear algunas cookies puede afectar al funcionamiento de la web.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Cambios en la política de cookies</h2>
          <p>Nos reservamos el derecho de modificar esta política para adaptarla a cambios legislativos o mejoras del sitio.</p>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="font-medium">
              Si continues navegant pel nostre lloc web sense canviar la configuració de cookies, 
              entendrem que acceptes l'ús de cookies segons aquesta política.
            </p>
          </div>
        </div>
      </main>
      
      <FooterMain />
    </div>
  );
} 