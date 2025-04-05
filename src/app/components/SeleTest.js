'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SeleTest() {
  const router = useRouter();
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [numQuestions, setNumQuestions] = useState(10);
  const [isStarted, setIsStarted] = useState(false);

  const subjects = [
    { id: 'mates', name: 'Matemàtiques' },
    { id: 'fisica', name: 'Física' },
    { id: 'quimica', name: 'Química' },
    { id: 'bio', name: 'Biologia' },
    { id: 'catala', name: 'Llengua Catalana' },
    { id: 'castella', name: 'Llengua Castellana' },
    { id: 'angles', name: 'Anglès' },
    { id: 'historia', name: 'Història' }
  ];

  const handleSubjectToggle = (subjectId) => {
    setSelectedSubjects(prev => 
      prev.includes(subjectId)
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const handleStartTest = () => {
    if (selectedSubjects.length === 0) {
      alert('Selecciona almenys una matèria');
      return;
    }
    setIsStarted(true);
  };

  if (!isStarted) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Configura el teu test</h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Selecciona les matèries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {subjects.map(subject => (
              <button
                key={subject.id}
                onClick={() => handleSubjectToggle(subject.id)}
                className={`p-3 rounded-lg border transition-colors ${
                  selectedSubjects.includes(subject.id)
                    ? 'bg-yellow-500 text-white border-yellow-600'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-yellow-50'
                }`}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Nombre de preguntes</h3>
          <select
            value={numQuestions}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
            className="w-full md:w-auto px-4 py-2 border rounded-lg"
          >
            <option value={10}>10 preguntes</option>
            <option value={20}>20 preguntes</option>
            <option value={30}>30 preguntes</option>
            <option value={40}>40 preguntes</option>
            <option value={50}>50 preguntes</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleStartTest}
            className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Començar Test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Test en Progrés
        </h2>
        <div className="text-sm text-gray-500">
          Temps: 00:00
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">Pregunta 1/{numQuestions}</h3>
          <div className="text-sm text-gray-500">
            {selectedSubjects.map(id => 
              subjects.find(s => s.id === id)?.name
            ).join(', ')}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-800 mb-4">
            Aquí apareixerà la pregunta del test...
          </p>

          <div className="space-y-3">
            {['A', 'B', 'C', 'D'].map((letter) => (
              <button
                key={letter}
                className="w-full text-left p-4 rounded-lg border hover:bg-yellow-50 transition-colors"
              >
                {letter}) Opció de resposta
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsStarted(false)}
          className="text-gray-600 hover:text-gray-800"
        >
          ← Tornar
        </button>
        <button
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600"
        >
          Següent →
        </button>
      </div>
    </div>
  );
} 