import Link from 'next/link';
import Image from 'next/image';

export default function HeroSeleTest() {
  return (
    <div className="bg-selectivi-yellow min-h-[500px] w-full relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Treu el màxim partit de selectiviCAT,
              <br />
              <span className="text-gray-900">El teu aliat.</span>
            </h1>
            
            <p className="text-xl text-gray-900">
              Treu la teva <span className="font-bold">millor versió</span> a la Selectivitat i aconsegueix anar a la carrera{' '}
              <span className="font-bold">dels teus somnis</span>. 🎓
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link 
                href="/notes-de-tall"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Consulta les notes de tall
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

            <div className="relative mt-8">
              <input
                type="text"
                placeholder="Cerca itinerari"
                className="w-full max-w-md px-4 py-3 pl-10 rounded-lg bg-white border-2 border-transparent focus:border-gray-900 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 text-sm text-gray-600 hover:text-gray-900">
                Filtra
              </button>
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/images/Group10.png"
                alt="Notes baixes"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <p className="text-sm text-gray-900">Notes baixes, nervis i desesperació...</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/Group10.png"
                alt="Estudies amb la nostra app"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <p className="text-sm text-gray-900">Estudies amb la nostra app i ho dones tot!</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/Group10.png"
                alt="Entres a la uni"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <p className="text-sm text-gray-900">Entres a la uni dels teus somnis!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 