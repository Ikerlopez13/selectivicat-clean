import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quan és la Selectivitat 2025 a Catalunya? Dates oficials | SelectiviCat',
  description: 'Dates oficials de la Selectivitat 2025 a Catalunya. Calendari complet de la PAU 2025, convocatòria ordinària i extraordinària. Informació actualitzada i oficial.',
  alternates: {
    canonical: 'https://selectivi.cat/blog/quan-es-selectivitat-2025-catalunya',
  },
  openGraph: {
    title: 'Quan és la Selectivitat 2025 a Catalunya? Dates oficials',
    description: 'Dates oficials de la Selectivitat 2025 a Catalunya. Calendari complet de la PAU 2025.',
    url: 'https://selectivi.cat/blog/quan-es-selectivitat-2025-catalunya',
    siteName: 'SelectiviCat',
    locale: 'ca_ES',
    type: 'article',
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarMain />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li>
              <Link href="/blog" className="hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>•</li>
            <li>Dates Selectivitat 2025</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quan és la Selectivitat 2025 a Catalunya? Dates, fases i tot el que has de saber
          </h1>
          <div className="flex items-center gap-4 text-gray-500">
            <time>Actualitzat: 15 de febrer de 2024</time>
            <span>•</span>
            <span>8 min de lectura</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
          <Image
            src="/blog/selectivitat-dates.webp"
            alt="Calendari Selectivitat 2025"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl mb-8">
            Si et preguntes <strong>quan és la Selectivitat 2025 a Catalunya</strong>, ets al lloc adequat. En aquest article t'expliquem de forma clara i actualitzada les <strong>dates clau de la PAU 2025 (Prova d'Accés a la Universitat)</strong>, tant per a la convocatòria ordinària com l'extraordinària. A més, repassem informació essencial perquè arribis als exàmens ben preparat.
          </p>

          <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-3xl mr-2">📅</span> Dates oficials de la Selectivitat 2025 a Catalunya
            </h2>
            
            <p className="mb-6">
              El <strong>Departament d'Educació</strong> de la Generalitat de Catalunya estableix cada any el calendari de les PAU. Tot i que les dates definitives solen publicar-se a finals de l'any anterior, et compartim el calendari previst per 2025:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-2">📆</span> Convocatòria ordinària (juny 2025)
                </h3>
                <ul className="space-y-2">
                  <li><strong>Dates dels exàmens:</strong> del 3 al 5 de juny de 2025 (per confirmar oficialment)</li>
                  <li><strong>Publicació de notes:</strong> 18 de juny de 2025 (aproximat)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-2">📝</span> Convocatòria extraordinària (juliol 2025)
                </h3>
                <ul className="space-y-2">
                  <li><strong>Dates dels exàmens:</strong> del 2 al 4 de juliol de 2025</li>
                  <li><strong>Publicació de notes:</strong> 12 de juliol de 2025 (aproximat)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="flex items-center text-yellow-800">
                <span className="text-xl mr-2">⚠️</span>
                <strong>Atenció:</strong> Aquestes dates poden variar lleugerament. Et recomanem consultar habitualment el portal oficial d'Universitats i Recerca de la Generalitat.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-2">📈</span> Com s'estructura la Selectivitat el 2025
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">1. Fase General (obligatòria)</h3>
              <ul className="space-y-2">
                <li>• Català</li>
                <li>• Castellà</li>
                <li>• Llengua estrangera</li>
                <li>• Història d'Espanya</li>
                <li>• Una matèria comuna de modalitat (a escollir)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">2. Fase Específica (voluntària)</h3>
              <p>Fins a tres matèries addicionals per pujar la nota d'admissió</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-2">✅</span> Consells per preparar la Selectivitat 2025
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <strong>Organitza un pla d'estudi:</strong> Comença a repassar amb mesos d'antelació
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <strong>Consulta les ponderacions</strong> segons la carrera que vols estudiar
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <strong>Fes simulacres d'examen</strong> reals d'anys anteriors
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <strong>Utilitza eines com Selectivicat</strong> per practicar amb més de 500 preguntes
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-2">🔹</span> Preguntes freqüents
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Quan es publiquen les notes de la Selectivitat?</h3>
              <p>Les notes de la convocatòria ordinària solen publicar-se a mitjans de juny, mentre que les de l'extraordinària surten al juliol.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Puc repetir la Selectivitat si no estic conforme amb la meva nota?</h3>
              <p>Sí. Pots presentar-te de nou a la fase general o específica per pujar nota. Es conserva la millor puntuació.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">On puc veure les ponderacions per carrera?</h3>
              <p>A la web d'Accés Universitat o en eines especialitzades com Selectivicat.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-2">✨</span> Conclusió
          </h2>

          <p className="mb-8">
            La <strong>Selectivitat 2025 a Catalunya</strong> és una etapa crucial per al teu accés a la universitat. Saber <strong>quan són els exàmens</strong>, <strong>com s'estructuren</strong> i <strong>quines són les claus per preparar-te bé</strong>, pot marcar la diferència.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-12">
            <p className="text-center text-lg">
              📅 Guarda aquest article i comparteix-lo amb els teus companys.
            </p>
            <p className="text-center mt-2">
              ▶️ Per a més informació actualitzada, visita el nostre{' '}
              <Link href="/blog" className="text-blue-600 hover:underline">
                blog de Selectivicat
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Comparteix aquest article
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                const text = encodeURIComponent('Dates oficials i informació important sobre la Selectivitat 2025 a Catalunya!');
                window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Compartir per WhatsApp
            </button>
          </div>
        </div>
      </article>

      <FooterMain />
    </div>
  );
} 