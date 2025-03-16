import Link from 'next/link';

export default function SectionFeatures() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Per què utilitzar <span className="text-selectivi-yellow">SelectiviCAT</span>?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card bg-white shadow-xl hover:shadow-2xl transition-all hover:border-selectivi-yellow hover:border-2">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-4 text-selectivi-yellow">📚</div>
              <h3 className="card-title">Tots els exàmens</h3>
              <p>Accedeix a tots els exàmens de selectivitat dels últims anys organitzats per matèria i convocatòria.</p>
              <div className="card-actions mt-4">
                <button className="btn btn-sm bg-selectivi-yellow text-white border-none hover:bg-selectivi-yellow/90">Veure exàmens</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-white shadow-xl hover:shadow-2xl transition-all hover:border-selectivi-yellow hover:border-2">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-4 text-selectivi-yellow">✅</div>
              <h3 className="card-title">Solucions detallades</h3>
              <p>Consulta les solucions oficials i explicacions detallades per entendre millor cada problema.</p>
              <div className="card-actions mt-4">
                <button className="btn btn-sm bg-selectivi-yellow text-white border-none hover:bg-selectivi-yellow/90">Veure solucions</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-white shadow-xl hover:shadow-2xl transition-all hover:border-selectivi-yellow hover:border-2">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-4 text-selectivi-yellow">🎬</div>
              <h3 className="card-title">Millors vídeos educatius</h3>
              <p>Accedeix a una selecció dels millors vídeos explicatius per preparar-te per a la selectivitat.</p>
              <div className="card-actions mt-4">
                <Link href="/millors-videos" className="btn btn-sm bg-selectivi-yellow text-white border-none hover:bg-selectivi-yellow/90">
                  Veure vídeos
                </Link>
              </div>
            </div>
          </div>
          
          <div className="card bg-white shadow-xl hover:shadow-2xl transition-all hover:border-selectivi-yellow hover:border-2">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-4 text-selectivi-yellow">📊</div>
              <h3 className="card-title">Notes de Tall</h3>
              <p>Consulta les notes de tall de totes les universitats catalanes i planifica el teu futur acadèmic.</p>
              <div className="card-actions mt-4">
                <Link href="/notes-de-tall" className="btn btn-sm bg-selectivi-yellow text-white border-none hover:bg-selectivi-yellow/90">
                  Consultar notes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 