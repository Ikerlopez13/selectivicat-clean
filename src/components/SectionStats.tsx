export default function SectionStats() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Les nostres <span className="text-selectivi-yellow">xifres</span></h2>
        <div className="stats shadow w-full">
          <div className="stat place-items-center">
            <div className="stat-title">Exàmens</div>
            <div className="stat-value text-selectivi-yellow">500+</div>
            <div className="stat-desc">Des de 2010</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Matèries</div>
            <div className="stat-value text-selectivi-yellow">25+</div>
            <div className="stat-desc">Totes les opcions</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Estudiants</div>
            <div className="stat-value text-selectivi-yellow">10,000+</div>
            <div className="stat-desc">Que utilitzen SelectiviCAT</div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button className="btn bg-selectivi-yellow text-white border-none hover:bg-selectivi-yellow/90">
            Uneix-te a la comunitat
          </button>
        </div>
      </div>
    </div>
  );
} 