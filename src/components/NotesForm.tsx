<div className="space-y-6">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Nom del grau</label>
    <input
      type="text"
      placeholder="Ex: Medicina, Dret, Psicologia..."
      className="w-full p-4 rounded-lg bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-selectivi-yellow focus:border-transparent"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Universitat (opcional)</label>
    <select
      className="w-full p-4 rounded-lg bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-selectivi-yellow focus:border-transparent"
    >
      <option value="">Totes les universitats</option>
      {/* opciones */}
    </select>
  </div>

  <button
    type="submit"
    className="w-full py-4 px-6 bg-selectivi-yellow text-white font-medium rounded-lg hover:bg-selectivi-yellow/90 transition-colors"
  >
    Cercar notes de tall
  </button>
</div> 