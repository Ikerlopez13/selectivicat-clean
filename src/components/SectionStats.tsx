export default function SectionStats() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Les nostres <span className="text-selectivi-yellow">xifres</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-3 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-600 font-medium">Exàmens disponibles</h3>
            <p className="text-4xl font-bold text-selectivi-yellow">500+</p>
            <p className="text-sm text-gray-500">Des de 2010 fins l'actualitat</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-3 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-600 font-medium">Matèries diferents</h3>
            <p className="text-4xl font-bold text-selectivi-yellow">25+</p>
            <p className="text-sm text-gray-500">Totes les assignatures de Selectivitat</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-3 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-600 font-medium">Estudiants actius</h3>
            <p className="text-4xl font-bold text-selectivi-yellow">10,000+</p>
            <p className="text-sm text-gray-500">Preparant-se amb SelectiviCAT</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn bg-selectivi-yellow text-white border-none hover:bg-selectivi-yellow/90">
            Uneix-te a la comunitat
          </button>
        </div>
      </div>
    </div>
  );
} 