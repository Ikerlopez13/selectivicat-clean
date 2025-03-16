import { Metadata } from 'next';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

export const metadata: Metadata = {
  title: 'Com calcular la teva nota d\'accés a la universitat el 2025? Guia ràpida i calculadora | SelectiviCat',
  description: 'Descobreix com calcular la teva nota d\'accés a la universitat amb els canvis de la Selectivitat Catalunya 2025. Guia completa i calculadora de notes de tall.',
};

export default function BlogNotaAcces2025() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow pt-16">
        <article className="container mx-auto max-w-4xl px-4 py-12">
          {/* Cabecera del artículo */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Com calcular la teva nota d'accés a la universitat el 2025? Guia ràpida i calculadora</h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span className="mr-4">Publicat: 15 de juny de 2024</span>
              <span>Actualitzat: 15 de juny de 2024</span>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <span className="text-6xl">📊</span>
            </div>
          </div>
          
          {/* Introducción */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="lead text-xl">
              La Selectivitat a Catalunya canviarà el 2025 i amb ella sorgeixen molts dubtes sobre com calcular la nota d'accés a la universitat. Si et preocupa quant necessites per entrar a la carrera dels teus somnis, en aquesta guia ràpida t'expliquem fàcilment el procés i et deixem una <strong>calculadora de nota de tall</strong> perquè ho facis en segons.
            </p>
          </div>
          
          {/* Sección 1: Cómo se calcula la nota */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Com es calcula la nota de Selectivitat el 2025?</h2>
            <p className="mb-4">
              La nota d'accés a la universitat s'obté de la següent manera:
            </p>
            <div className="bg-selectivi-yellow/20 p-4 rounded-lg mb-6">
              <p className="font-bold text-center">
                Nota d'Accés = (60% Nota de Batxillerat) + (40% Nota de la Fase General de la PAU)
              </p>
            </div>
            <p className="mb-4">
              A més, pots sumar fins a 4 punts addicionals amb la fase específica:
            </p>
            <div className="bg-selectivi-yellow/20 p-4 rounded-lg mb-6">
              <p className="font-bold text-center">
                Nota d'Admissió = Nota d'Accés + (Millors notes de la fase específica x ponderació)
              </p>
            </div>
            <p>
              Les assignatures de la fase específica tenen ponderacions de 0.1 o 0.2 segons la carrera a la qual vulguis accedir. Per això, triar bé aquestes matèries pot marcar la diferència.
            </p>
          </section>
          
          {/* Sección 2: Dónde consultar las notas de corte */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">On consultar les notes de tall de 2025?</h2>
            <p className="mb-6">
              Les notes de tall canvien cada any segons la demanda de les carreres. A SelectiviCat hem creat un <strong>cercador de notes de tall</strong> perquè puguis veure les més recents i comprovar si compleixes els requisits.
            </p>
            <div className="flex justify-center mb-6">
              <Link 
                href="/notes-de-tall" 
                className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Consulta les notes de tall 2025 aquí
              </Link>
            </div>
          </section>
          
          {/* Sección 3: Qué pasa si mi nota no llega */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Què passa si la meva nota no arriba a la de tall?</h2>
            <p className="mb-4">
              Si et falta poc, pots:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Repetir la fase específica</strong> a la convocatòria extraordinària.</li>
              <li><strong>Sol·licitar un grau amb nota més baixa</strong> i després intentar canviar-te.</li>
              <li><strong>Buscar opcions a universitats privades o a altres comunitats.</strong></li>
            </ul>
          </section>
          
          {/* Sección 4: Calculadora */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Calcula la teva nota d'accés fàcilment</h2>
            <p className="mb-6">
              Per evitar errors i càlculs complicats, hem dissenyat una <strong>calculadora de nota de tall</strong> que et dirà ràpidament quina és la teva puntuació i quines opcions tens.
            </p>
            <div className="flex justify-center mb-6">
              <Link 
                href="/calculadora" 
                className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Prova la calculadora de nota de tall
              </Link>
            </div>
          </section>
          
          {/* Sección 5: Preguntas frecuentes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Preguntes freqüents</h2>
            
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">Quant dura la fase específica?</h3>
                <p>Cada examen sol durar 90 minuts amb 30 minuts de descans entre proves.</p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">Les notes de tall són les mateixes a totes les universitats?</h3>
                <p>No, cada universitat té els seus propis criteris i la nota de tall depèn de la demanda.</p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">Quan es publiquen les notes de tall definitives?</h3>
                <p>Solen publicar-se després de la primera adjudicació de places al juliol.</p>
              </div>
            </div>
          </section>
          
          {/* Conclusión */}
          <section className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Conclusió</h2>
            <p className="mb-4">
              Amb aquesta informació i les nostres eines, podràs planificar millor el teu accés a la universitat. No oblidis calcular la teva nota i comprovar les notes de tall actualitzades a SelectiviCat!
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