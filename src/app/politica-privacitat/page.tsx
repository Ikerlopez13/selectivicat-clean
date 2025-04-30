import { Metadata } from 'next';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata: Metadata = {
  title: 'Política de Privacitat | SelectiviCat',
  description: 'Política de privacitat de SelectiviCat. Informació sobre el tractament de les teves dades personals.',
};

export default function PoliticaPrivacitat() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Política de Privacitat
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Última actualització: {new Date().toLocaleDateString('ca-ES')}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Responsable del tractament</h2>
            <p>
              SelectiviCat és el responsable del tractament de les dades personals que ens facilitis a través d'aquest lloc web.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Quines dades recollim?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dades de navegació (cookies tècniques i analítiques)</li>
              <li>Dades que ens proporcionis voluntàriament a través dels formularis</li>
              <li>Informació sobre l'ús del servei</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Amb quina finalitat?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar-te accés als nostres serveis</li>
              <li>Millorar la teva experiència d'usuari</li>
              <li>Analitzar l'ús del lloc web</li>
              <li>Mostrar publicitat personalitzada</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Base legal</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>El teu consentiment exprés</li>
              <li>L'execució de la relació contractual</li>
              <li>El compliment d'obligacions legals</li>
              <li>L'interès legítim del responsable</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Durant quant temps conservem les dades?</h2>
            <p>
              Conservarem les teves dades personals durant el temps necessari per complir amb les finalitats per les quals van ser recollides, 
              mentre no sol·licitis la seva supressió.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Amb qui compartim les teves dades?</h2>
            <p>
              Les teves dades poden ser compartides amb:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics (anàlisi web)</li>
              <li>Google AdSense (publicitat)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Els teus drets</h2>
            <p>
              Tens dret a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accedir a les teves dades personals</li>
              <li>Rectificar les dades inexactes</li>
              <li>Sol·licitar la seva supressió</li>
              <li>Oposar-te al tractament</li>
              <li>Portar les teves dades a un altre responsable</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Contacte</h2>
            <p>
              Per exercir els teus drets o per qualsevol consulta sobre el tractament de les teves dades, pots contactar-nos a través de:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Correu electrònic: catselectivi@gmail.com</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="font-medium">
                Aquesta política de privacitat pot ser actualitzada en qualsevol moment. Et recomanem que la revisis periòdicament.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <FooterMain />
    </div>
  );
} 