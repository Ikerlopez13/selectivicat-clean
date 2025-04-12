import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function HeroSeleTest() {
  const { data: session } = useSession();

  return (
    <div className="bg-selectivi-yellow min-h-[500px] w-full relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Prepara't per la
              <br />
              <span className="text-gray-900">Selectivitat 2025</span>
            </h1>
            
            <p className="text-xl text-gray-900">
              Practica amb més de 500 preguntes reals i millora la teva nota amb el nostre simulador personalitzat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link 
                href="/seletest"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                {session ? 'Accedeix al teu SeleTest' : 'Prova SeleTest Gratis'}
                <span className="ml-2 text-xs font-bold bg-selectivi-yellow text-white px-2 py-0.5 rounded">Nou!</span>
              </Link>
              <Link
                href="/calculadora"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Calcula la teva nota
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
                  <Image
                    src="/images/Group10.png"
                    alt="Preguntes il·limitades"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <p className="text-sm text-gray-900 font-medium">Preguntes il·limitades</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
                  <Image
                    src="/images/Group10.png"
                    alt="Seguiment del teu progrés"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <p className="text-sm text-gray-900 font-medium">Seguiment del teu progrés</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
                  <Image
                    src="/images/Group10.png"
                    alt="Atenció Premium 24/7"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <p className="text-sm text-gray-900 font-medium">Atenció Premium 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 