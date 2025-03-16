import { Metadata } from 'next';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata: Metadata = {
  title: 'Notes de tall a Catalunya 2025: Quins canvis hi haurà amb la nova Selectivitat? | SelectiviCat',
  description: 'Descobreix com afectaran els canvis de la nova Selectivitat a les notes de tall 2025 a Catalunya. Guia completa i estratègies per accedir a la teva carrera desitjada.',
};

export default function BlogNotesTall2025() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow pt-16">
        <article className="container mx-auto max-w-4xl px-4 py-12">
          {/* Cabecera del artículo */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Notes de tall a Catalunya 2025: Quins canvis hi haurà amb la nova Selectivitat?</h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span className="mr-4">Publicat: 20 de juny de 2024</span>
              <span>Actualitzat: 20 de juny de 2024</span>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <span className="text-6xl">🎯</span>
            </div>
          </div>
          
          {/* Introducción */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="lead text-xl">
              L'any 2025 porta canvis importants en les Proves d'Accés a la Universitat (PAU) a Catalunya, i amb ells, moltes preguntes sobre com afectaran les notes de tall. Si ets estudiant de segon de batxillerat i vols saber com es calcularan les notes i quines estratègies seguir per accedir a la teva carrera desitjada, aquesta guia és per a tu.
            </p>
          </div>
          
          {/* Sección 1: Cómo se calcularán las notas de corte */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Com es calcularan les notes de tall el 2025?</h2>
            <p className="mb-4">
              La nota d'accés a la universitat continuarà determinant-se per:
            </p>
            <div className="bg-selectivi-yellow/20 p-4 rounded-lg mb-6">
              <p className="font-bold text-center">
                Nota d'Accés = (60% Nota de Batxillerat) + (40% Nota de la Fase General de la PAU)
              </p>
            </div>
            <p className="mb-4">
              Però el veritable factor diferencial és la fase específica, on es poden sumar fins a 4 punts addicionals:
            </p>
            <div className="bg-selectivi-yellow/20 p-4 rounded-lg mb-6">
              <p className="font-bold text-center">
                Nota d'Admissió = Nota d'Accés + (Millors notes de la fase específica x ponderació)
              </p>
            </div>
            <p>
              Les assignatures de modalitat tenen coeficients de ponderació de 0.1 o 0.2 segons la carrera a la qual vulguis accedir. Tria-les estratègicament per optimitzar la teva puntuació!
            </p>
          </section>
          
          {/* Sección 2: Cambios en las PAU 2025 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Quins canvis hi haurà a les PAU 2025?</h2>
            <p className="mb-4">
              Segons el Departament d'Educació, s'introdueixen modificacions en el format i contingut dels exàmens:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Més opcionalitat</strong>: Els enunciats permetran una major flexibilitat en les respostes.</li>
              <li><strong>Canvis en el model d'examen de Llengua Catalana i Castellana</strong>: S'espera un enfocament més competencial i menys memorístic.</li>
              <li><strong>Possible variació en les ponderacions</strong>: Algunes matèries podrien veure ajustada la seva importància per a determinats graus universitaris.</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="font-medium">Nota important:</p>
              <p>Aquests canvis busquen avaluar millor les competències reals dels estudiants i adaptar-se a les necessitats actuals del sistema universitari.</p>
            </div>
          </section>
          
          {/* Sección 3: Dónde consultar las notas de corte */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">On consultar les notes de tall actualitzades?</h2>
            <p className="mb-6">
              Cada any, les notes de tall es publiquen després de la primera adjudicació de places. Però a SelectiviCat t'oferim un <strong>buscador de notes de tall</strong> per accedir a les dades més recents i veure si compleixes els requisits.
            </p>
            <div className="flex justify-center mb-6">
              <Link 
                href="/notes-de-tall" 
                className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Consulta les notes de tall 2025 aquí
              </Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Graus amb notes de tall més altes (previsió 2025)</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Grau</th>
                      <th className="text-left py-2">Universitat</th>
                      <th className="text-left py-2">Nota 2024</th>
                      <th className="text-left py-2">Previsió 2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Medicina</td>
                      <td className="py-2">UB</td>
                      <td className="py-2">12,876</td>
                      <td className="py-2">12,9+</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Biomedicina</td>
                      <td className="py-2">UB</td>
                      <td className="py-2">12,654</td>
                      <td className="py-2">12,7</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Enginyeria Biomèdica</td>
                      <td className="py-2">UPC</td>
                      <td className="py-2">12,124</td>
                      <td className="py-2">12,2</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Medicina</td>
                      <td className="py-2">UAB</td>
                      <td className="py-2">12,735</td>
                      <td className="py-2">12,8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          {/* Sección 4: Qué hacer si tu nota no llega */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Què fer si la teva nota no arriba a la de tall?</h2>
            <p className="mb-4">
              Si et quedes a prop, encara tens opcions:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Repetir la fase específica</strong> en la convocatòria extraordinària.</li>
              <li><strong>Explorar graus similars</strong> amb notes de tall lleugerament inferiors.</li>
              <li><strong>Considerar opcions en universitats privades o d'altres comunitats autònomes.</strong></li>
            </ul>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Exemple d'alternatives</h3>
              <p className="mb-4">Si no arribes a la nota per a Medicina (12,9), pots considerar:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Infermeria (10,5-11,2)</li>
                <li>Fisioteràpia (10,2-10,8)</li>
                <li>Ciències Biomèdiques (11,8-12,2)</li>
                <li>Farmàcia (10,5-11,0)</li>
                <li>Medicina en universitats privades (proves d'admissió específiques)</li>
              </ul>
            </div>
          </section>
          
          {/* Sección 5: Preguntas frecuentes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Preguntes freqüents</h2>
            
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">Quan es publiquen les notes de tall definitives?</h3>
                <p>Normalment al juliol, després de la primera adjudicació de places.</p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">Les ponderacions seran les mateixes per a totes les universitats?</h3>
                <p>No, cada universitat pot aplicar ajustos segons la seva oferta acadèmica.</p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">Quant dura la fase específica?</h3>
                <p>Cada prova té una durada de 90 minuts, amb 30 minuts de descans entre exàmens.</p>
              </div>
            </div>
          </section>
          
          {/* Conclusión */}
          <section className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Conclusió</h2>
            <p className="mb-4">
              Amb aquests canvis, és fonamental estar informat i planificar bé la teva estratègia per conseguir la nota necessària. No oblidis consultar la nostra calculadora de notes i el buscador de notes de tall per preparar-te millor per a la Selectivitat 2025!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/calculadora" 
                className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Calcula la teva nota
              </Link>
              <Link 
                href="/notes-de-tall" 
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Consulta les notes de tall
              </Link>
            </div>
          </section>
        </article>
      </main>
      
      <FooterMain />
    </div>
  );
} 