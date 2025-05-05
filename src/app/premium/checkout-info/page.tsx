import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import Link from 'next/link';
import { FaRegClock, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function PremiumCheckoutInfo() {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-50">
      <NavbarMain />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 text-center border-2 border-yellow-200 mt-16">
          <div className="flex justify-center mb-4">
            <FaRegClock size={56} color="#facc15" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-yellow-700">Quasi ho tens! 🚀</h1>
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-end gap-2">
              <span className="text-sm text-gray-400 line-through">24,99 €</span>
              <span className="text-3xl font-extrabold text-selectivi-yellow">9,99 €</span>
            </div>
            <span className="text-base text-yellow-700 font-semibold mt-1">un sol pagament &rarr; <span className="italic">entrar a la carrera dels teus somnis</span></span>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Un cop realitzis el pagament, el teu accés Premium pot trigar <span className="font-semibold text-yellow-700">de 5 minuts a 1 hora</span> en activar-se.
          </p>
          <div className="flex items-center justify-center gap-2 mb-4 text-yellow-700">
            <FaEnvelope size={22} color="#ca8a04" />
            <span className="font-medium">Assegura't d'introduir el <span className="underline">mateix correu electrònic</span> que utilitzes a SelectiviCAT</span>
          </div>
          <p className="text-gray-600 mb-6">
            Així podrem activar el teu compte Premium sense problemes. Si tens qualsevol dubte, escriu-nos i t'ajudarem encantats!
          </p>
          <Link
            href="https://buy.stripe.com/00g15tcjB1rR8DK3ce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-white font-bold rounded-lg text-lg shadow-lg hover:bg-yellow-500 transition mb-2"
          >
            Continuar al pagament
            <span className="ml-2"><FaArrowRight size={20} color="#fff" /></span>
          </Link>
          <p className="text-xs text-gray-400 mt-2">No tanquis aquesta pestanya fins acabar el procés de pagament.</p>
        </div>
      </main>
      <FooterMain />
    </div>
  );
} 