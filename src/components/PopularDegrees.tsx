import { getPopularDegrees } from '@/data/cutoffScores';
import Link from 'next/link';

export default function PopularDegrees() {
  // Obtener los grados más populares
  const popularDegrees = getPopularDegrees(6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {popularDegrees.map((degree) => (
        <div key={degree.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-bold mb-4 text-gray-800">{degree.name}</h3>
          <div className="space-y-3">
            {degree.scores
              .sort((a, b) => (b.initialScore || b.score) - (a.initialScore || a.score))
              .slice(0, 3) // Mostrar solo las 3 universidades con notas más altas
              .map((score, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{score.university}</span>
                  <div className="text-right">
                    <span className={`font-bold ${getScoreColorClass(score.initialScore || score.score)}`}>
                      {(score.initialScore || score.score).toFixed(3)}
                    </span>
                    <span className="text-xs text-gray-500 block">Juny 2024</span>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link 
              href={`/notes-de-tall?search=${encodeURIComponent(degree.name)}`}
              className="text-selectivi-yellow hover:text-yellow-600 font-medium flex items-center justify-center"
            >
              Veure més universitats
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

// Función para asignar colores según la nota de corte
function getScoreColorClass(score: number): string {
  if (score >= 12) return "text-red-600";
  if (score >= 10) return "text-orange-600";
  if (score >= 8) return "text-yellow-600";
  return "text-green-600";
} 