'use client';

import { useState, useEffect, useRef } from 'react';
import { searchDegrees, universities, degrees } from '@/data/cutoffScores';
import type { Degree } from '@/data/cutoffScores';

interface SearchNotesFormProps {
  initialSearchTerm?: string;
  initialUniversity?: string;
}

export default function SearchNotesForm({ initialSearchTerm = '', initialUniversity = '' }: SearchNotesFormProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [university, setUniversity] = useState(initialUniversity);
  const [results, setResults] = useState<Degree[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Realizar búsqueda automática si hay términos iniciales
  useEffect(() => {
    if (initialSearchTerm || initialUniversity) {
      const searchResults = searchDegrees(initialSearchTerm, initialUniversity);
      setResults(searchResults);
      setHasSearched(true);
    }
  }, [initialSearchTerm, initialUniversity]);

  // Manejar clics fuera del componente de sugerencias para cerrarlo
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Actualizar sugerencias cuando cambia el término de búsqueda
  useEffect(() => {
    if (searchTerm.length > 1) {
      // Obtener nombres únicos de grados que coincidan con el término de búsqueda
      const matchingDegrees = degrees
        .filter(degree => 
          degree.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(degree => degree.name);
      
      // Eliminar duplicados y limitar a 5 sugerencias
      const uniqueSuggestions = Array.from(new Set(matchingDegrees)).slice(0, 5);
      setSuggestions(uniqueSuggestions);
      setShowSuggestions(uniqueSuggestions.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchResults = searchDegrees(searchTerm, university);
    setResults(searchResults);
    setHasSearched(true);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    // Realizar búsqueda automática al seleccionar una sugerencia
    const searchResults = searchDegrees(suggestion, university);
    setResults(searchResults);
    setHasSearched(true);
  };

  // Función para asignar colores según la nota de corte
  function getScoreColorClass(score: number): string {
    if (score >= 12) return "text-red-600";
    if (score >= 10) return "text-orange-600";
    if (score >= 8) return "text-yellow-600";
    return "text-green-600";
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700 mb-1">
            Nom del grau
          </label>
          <input
            type="text"
            id="searchTerm"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            placeholder="Ex: Medicina, Dret, Psicologia..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => searchTerm.length > 1 && setShowSuggestions(true)}
            autoComplete="off"
          />
          
          {/* Lista de sugerencias */}
          {showSuggestions && (
            <div 
              ref={suggestionsRef}
              className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
            >
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
            Universitat (opcional)
          </label>
          <select
            id="university"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          >
            <option value="">Totes les universitats</option>
            {universities.map((uni) => (
              <option key={uni.code} value={uni.code}>
                {uni.name} ({uni.code})
              </option>
            ))}
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full bg-selectivi-yellow hover:bg-yellow-500 text-white font-bold py-3 px-4 rounded-md transition duration-300"
        >
          Cercar notes de tall
        </button>
      </form>

      {/* Resultados de la búsqueda */}
      {hasSearched && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Resultats de la cerca</h3>
          
          {results.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No s'han trobat resultats per a la teva cerca.</p>
              <p className="text-gray-500 mt-2">Prova amb un altre terme o universitat.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {results.map((degree) => (
                <div key={degree.id} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-bold mb-3">{degree.name}</h4>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Universitat
                          </th>
                          <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nota 2023
                          </th>
                          <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-amber-50">
                            Juny 2024 (inici)
                          </th>
                          <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-amber-50">
                            Juny 2024 (final)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {degree.scores
                          .filter(score => !university || score.university === university)
                          .sort((a, b) => (b.initialScore || b.score) - (a.initialScore || a.score))
                          .map((score, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                {score.university}
                              </td>
                              <td className="px-3 py-2 whitespace-nowrap text-sm">
                                <span className={`font-bold ${getScoreColorClass(score.score)}`}>
                                  {score.score.toFixed(3)}
                                </span>
                              </td>
                              <td className="px-3 py-2 whitespace-nowrap text-sm bg-amber-50">
                                {score.initialScore ? (
                                  <span className={`font-bold ${getScoreColorClass(score.initialScore)}`}>
                                    {score.initialScore.toFixed(3)}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">N/D</span>
                                )}
                              </td>
                              <td className="px-3 py-2 whitespace-nowrap text-sm bg-amber-50">
                                {score.finalScore ? (
                                  <span className={`font-bold ${getScoreColorClass(score.finalScore)}`}>
                                    {score.finalScore.toFixed(3)}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">N/D</span>
                                )}
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-3 text-xs text-gray-500">
                    <p>N/D: No disponible</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
} 