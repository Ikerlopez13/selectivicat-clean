import React from "react";
import FooterMain from '@/components/FooterMain';
import NavbarMain from '@/components/NavbarMain';

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Responsable del tratamiento</h2>
            <p className="mb-4">Responsable: selectivi.cat<br/>Email: catselectivi@gmail.com</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Datos que recopilamos</h2>
            <p className="mb-4">Podem recollir la següent informació:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Datos de navegación (cookies, dirección IP, tipo de dispositivo, etc.)</li>
              <li>Datos proporcionados voluntariamente (por ejemplo, al contactar por email)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Finalidad del tratamiento</h2>
            <p className="mb-4">Utilitzem aquesta información per:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Mejorar la experiència d'usuari</li>
              <li>Responder a consultas i solicituds</li>
              <li>Cumplir amb obligacions legals</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Drets dels usuaris</h2>
            <p className="mb-4">
              Vostè té dret a:
              <br />
              Accedir a la seva informació personal
              <br />
              Corregir la seva informació personal
              <br />
              Sol·licitar l'eliminació de la seva informació personal
              <br />
              Oposar-se al processament de la seva informació personal
              <br />
              Sol·licitar la portabilitat de les seves dades
              <br />
              Pot exercir aquests drets escrivint a <a href="mailto:catselectivi@gmail.com" className="text-blue-600 underline">catselectivi@gmail.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
            <p className="mb-4">
              Utilitzem cookies per millorar l'experiència d'usuari. Les cookies són petits arxius que un lloc web col·loca al seu ordinador per recordar les seves preferències i millorar el rendiment del lloc.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cambios en la política</h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar esta política para adaptarla a novedades legislativas o mejoras del sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contacte</h2>
            <p className="mb-4">
              Si té alguna pregunta sobre aquesta política de privacitat, pot contactar-nos a:
              <br />
              Correu electrònic: <a href="mailto:catselectivi@gmail.com" className="text-blue-600 underline">catselectivi@gmail.com</a>
            </p>
          </section>

          <div className="text-sm text-gray-600 mt-8">
            Última actualització: {new Date().toLocaleDateString('ca-ES')}
          </div>
        </div>
      </main>

      <FooterMain />
    </div>
  );
} 