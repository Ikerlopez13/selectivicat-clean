'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SeleTest() {
  const router = useRouter();
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const subjectsByCategory = {
    'Fase General': [
      { id: 'catala', name: 'Llengua Catalana' },
      { id: 'castella', name: 'Llengua Castellana' },
      { id: 'angles', name: 'Anglès' },
      { id: 'historia', name: 'Història' },
      { id: 'filosofia', name: 'Filosofia' },
    ],
    'Científic': [
      { id: 'mates', name: 'Matemàtiques' },
      { id: 'fisica', name: 'Física' },
      { id: 'quimica', name: 'Química' },
      { id: 'biologia', name: 'Biologia' },
      { id: 'tecnologia', name: 'Tecnologia Industrial' },
      { id: 'dibuix', name: 'Dibuix Tècnic' },
    ],
    'Social': [
      { id: 'mates-aplicades', name: 'Matemàtiques Aplicades' },
      { id: 'geografia', name: 'Geografia' },
      { id: 'economia', name: 'Economia' },
      { id: 'literatura', name: 'Literatura' },
      { id: 'llatí', name: 'Llatí' },
    ],
    'Arts': [
      { id: 'historia-art', name: 'Història de l\'Art' },
      { id: 'fonaments-art', name: 'Fonaments de l\'Art' },
      { id: 'disseny', name: 'Disseny' },
      { id: 'cultura-audiovisual', name: 'Cultura Audiovisual' },
    ]
  };

  useEffect(() => {
    if (isStarted) {
      // Aquí cargaríamos las preguntas según las materias seleccionadas
      // Por ahora usaremos las preguntas de ejemplo
      const loadQuestions = async () => {
        try {
          const response = await fetch('/api/questions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              subjects: selectedSubjects
            }),
          });
          
          if (!response.ok) throw new Error('Error cargando preguntas');
          
          const data = await response.json();
          setQuestions(data.questions);
          setIsLoading(false);
        } catch (error) {
          console.error('Error:', error);
          setIsLoading(false);
        }
      };

      loadQuestions();

      // Iniciar el temporizador
      const interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isStarted, selectedSubjects]);

  const handleSubjectToggle = (subjectId) => {
    setSelectedSubjects(prev => 
      prev.includes(subjectId)
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const handleStartTest = () => {
    if (selectedSubjects.length === 0) {
      return;
    }
    setIsStarted(true);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isStarted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-black">Sele</span>
            <span className="text-yellow-500">Test</span>
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            Descobreix com et podria anar a la Selectivitat amb la nostra predicció personalitzada
          </p>
          <p className="text-gray-500">
            Selecciona les assignatures que cursaràs per obtenir una predicció més precisa de la teva nota
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {Object.entries(subjectsByCategory).map(([category, subjects]) => (
            <div key={category} className="mb-8 last:mb-0">
              <h2 className="text-xl font-bold mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subjects.map(subject => (
                  <div
                    key={subject.id}
                    onClick={() => handleSubjectToggle(subject.id)}
                    className="flex items-center p-4 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${
                      selectedSubjects.includes(subject.id)
                        ? 'bg-black border-black'
                        : 'border-gray-300'
                    }`}>
                      {selectedSubjects.includes(subject.id) && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      )}
                    </div>
                    {subject.name}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8 text-center">
            <button
              onClick={handleStartTest}
              disabled={selectedSubjects.length === 0}
              className={`px-8 py-3 rounded-full text-lg font-medium transition-colors ${
                selectedSubjects.length === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              Començar el test
            </button>
            {selectedSubjects.length === 0 && (
              <p className="mt-4 text-red-500">
                Selecciona almenys una assignatura per continuar
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Test en Progrés
        </h2>
        <div className="text-sm text-gray-500">
          Temps: {formatTime(timer)}
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">Pregunta {currentQuestion + 1}/{questions.length}</h3>
          <div className="text-sm text-gray-500">
            {selectedSubjects.map(id => 
              Object.values(subjectsByCategory)
                .flat()
                .find(s => s.id === id)?.name
            ).join(', ')}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-800 mb-4">
            {currentQ?.pregunta || 'Carregant pregunta...'}
          </p>

          <div className="space-y-3">
            {currentQ?.opciones.map((opcion, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(opcion)}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  selectedAnswer === opcion
                    ? opcion === currentQ.respuesta_correcta
                      ? 'bg-green-100 border-green-500'
                      : 'bg-red-100 border-red-500'
                    : 'hover:bg-gray-100'
                }`}
                disabled={showExplanation}
              >
                {['A', 'B', 'C', 'D'][index]}) {opcion}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2">Explicació:</h4>
              <p>{currentQ.explicacion}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsStarted(false)}
          className="text-gray-600 hover:text-gray-800"
        >
          ← Tornar
        </button>
        {showExplanation && (
          <button
            onClick={handleNextQuestion}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
            disabled={currentQuestion >= questions.length - 1}
          >
            Següent →
          </button>
        )}
      </div>
    </div>
  );
} 