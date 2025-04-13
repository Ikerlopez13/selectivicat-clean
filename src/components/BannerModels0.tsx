import Link from 'next/link';

export default function BannerModels0() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-selectivi-yellow to-yellow-500 rounded-3xl p-12 text-white shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 rounded-full px-6 py-3 mb-6">
            <span className="text-lg font-semibold tracking-wide">🎯 NOVETAT IMPORTANT</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">Models 0 Selectivitat 2025</h2>
          <p className="text-2xl mb-8 leading-relaxed">
            Ja estan disponibles tots els Models 0 de la nova Selectivitat 2025!<br/>
            Accedeix als exàmens i solucions oficials de totes les matèries.
          </p>
          <Link 
            href="/examenes"
            className="inline-flex items-center bg-white text-selectivi-yellow font-bold px-10 py-5 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-xl"
          >
            Accedeix als Models 0
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 