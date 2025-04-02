import FooterMain from '@/components/FooterMain';
import NavbarMain from '@/components/NavbarMain';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8">Política de Privacitat</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introducció</h2>
            <p className="mb-4">
              Aquesta Política de Privacitat explica com SelectiviCAT ("nosaltres", "el nostre", "la nostra") recull, utilitza i protegeix la informació que vostè proporciona quan utiliza el nostre lloc web selectivicat.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Informació que recollim</h2>
            <p className="mb-4">Podem recollir la següent informació:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nom i cognoms</li>
              <li>Adreça de correu electrònic</li>
              <li>Informació del perfil de Google quan s'inicia sessió amb Google</li>
              <li>Informació sobre l'ús del lloc web i preferències</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Com utilitzem la informació</h2>
            <p className="mb-4">Utilitzem aquesta informació per:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Proporcionar i millorar els nostres serveis</li>
              <li>Personalitzar l'experiència d'usuari</li>
              <li>Enviar informació sobre actualitzacions i novetats</li>
              <li>Analitzar i millorar el rendiment del lloc web</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Seguretat</h2>
            <p className="mb-4">
              Ens comprometem a garantir que la seva informació estigui segura. Per evitar l'accés o la divulgació no autoritzats, hem implementat procediments físics, electrònics i administratius adequats per salvaguardar i protegir la informació que recollim en línia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
            <p className="mb-4">
              Utilitzem cookies per millorar l'experiència d'usuari. Les cookies són petits arxius que un lloc web col·loca al seu ordinador per recordar les seves preferències i millorar el rendiment del lloc.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Els seus drets</h2>
            <p className="mb-4">Vostè té dret a:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accedir a la seva informació personal</li>
              <li>Corregir la seva informació personal</li>
              <li>Sol·licitar l'eliminació de la seva informació personal</li>
              <li>Oposar-se al processament de la seva informació personal</li>
              <li>Sol·licitar la portabilitat de les seves dades</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Compartir informació</h2>
            <p className="mb-4">
              No vendrem, distribuirem ni llogarem la seva informació personal a tercers llevat que tinguem el seu permís o ho requereixi la llei. Utilitzem Google Analytics i altres serveis de tercers per analitzar l'ús del lloc web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Canvis en aquesta política</h2>
            <p className="mb-4">
              Podem actualitzar aquesta política de privacitat periòdicament. Li recomanem que revisi aquesta pàgina regularment per estar informat de qualsevol canvi.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contacte</h2>
            <p className="mb-4">
              Si té alguna pregunta sobre aquesta política de privacitat, pot contactar-nos a:
              <br />
              Correu electrònic: info@selectivicat.com
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