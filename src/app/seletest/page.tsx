"use client"

import React, { useState, useEffect } from 'react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import Image from 'next/image';

// Definición de interfaces y tipos
interface Question {
  id: number;
  pregunta: string;
  opciones: string[];
  respuesta_correcta: string;
  categoria: string;
}

interface QuestionProps {
  question?: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
  hasAnswered: boolean;
}

interface Subject {
  id: string;
  name: string;
  category: string;
}

// Lista de asignaturas disponibles
const availableSubjects: Subject[] = [
  // Fase General
  { id: 'catalan', name: 'Llengua Catalana i Literatura', category: 'Fase General' },
  { id: 'spanish', name: 'Llengua Castellana i Literatura', category: 'Fase General' },
  { id: 'english', name: 'Llengua Estrangera (Anglès)', category: 'Fase General' },
  { id: 'history', name: 'Història', category: 'Fase General' },
  
  // Fase Específica - Ciencias
  { id: 'math', name: 'Matemàtiques', category: 'Científic' },
  { id: 'physics', name: 'Física', category: 'Científic' },
  { id: 'chemistry', name: 'Química', category: 'Científic' },
  { id: 'biology', name: 'Biologia', category: 'Científic' },
  
  // Fase Específica - Humanidades
  { id: 'mathSocials', name: 'Matemàtiques Aplicades', category: 'Social' },
  { id: 'geography', name: 'Geografia', category: 'Social' },
  { id: 'economics', name: 'Economia de l\'Empresa', category: 'Social' },
  { id: 'philosophy', name: 'Filosofia', category: 'Humanístic' },
  { id: 'literature', name: 'Literatura', category: 'Humanístic' },
  { id: 'artHistory', name: 'Història de l\'Art', category: 'Humanístic' },
];

// Datos iniciales de preguntas
const initialQuestions: Question[] = [
  {
    "id": 1,
    "pregunta": "¿Cuál fue la división territorial de cada provincia en la Hispana romana?",
    "opciones": ["Diócesis", "Demarcaciones", "Fronteras", "Civitates"],
    "respuesta_correcta": "Civitates",
    "categoria": "Historia"
  },
  {
    "id": 2,
    "pregunta": "¿Las reuniones de los reyes visigodos con los obispos se denominaban...?",
    "opciones": ["Aula regia", "Concilios de León", "Tribunal del Libro", "Concilios de Toledo"],
    "respuesta_correcta": "Concilios de Toledo",
    "categoria": "Historia"
  },
  {
    "id": 3,
    "pregunta": "¿Qué rey visigodo se convirtió al cristianismo?",
    "opciones": ["Leovigildo", "Recaredo", "Wamba", "Recesvinto"],
    "respuesta_correcta": "Recaredo",
    "categoria": "Historia"
  },
  {
    "id": 4,
    "pregunta": "¿En qué período histórico español se crearon los condados y ducados?",
    "opciones": ["Romano", "Visigodo", "Musulmán", "Alto Medievo"],
    "respuesta_correcta": "Visigodo",
    "categoria": "Historia"
  },
  {
    "id": 5,
    "pregunta": "¿A qué personaje histórico se debe la conquista del litoral valenciano?",
    "opciones": ["Jaime I de Aragón", "El conde Ramón Berenguer IV de Cataluña", "Alfonso X el Sabio de Castilla", "Fernando III el Santo de Castilla"],
    "respuesta_correcta": "Jaime I de Aragón",
    "categoria": "Historia"
  },
  {
    "id": 6,
    "pregunta": "¿Qué rey castellano fomentó la Escuela de Traductores de Toledo?",
    "opciones": ["Alfonso V", "Juan II", "Alfonso IX", "Alfonso X"],
    "respuesta_correcta": "Alfonso X",
    "categoria": "Historia"
  },
  {
    "id": 7,
    "pregunta": "¿Qué tratado dividió el territorio americano tras la conquista?",
    "opciones": ["Tratado de Sutri", "Tratado de Letrán", "Tratado de Tordesillas", "Tratado de Versalles"],
    "respuesta_correcta": "Tratado de Tordesillas",
    "categoria": "Historia"
  },
  {
    "id": 8,
    "pregunta": "¿Desde qué ciudad trasladó la capitalidad a Madrid Felipe II?",
    "opciones": ["Toledo", "Valladolid", "Lisboa", "Burgos"],
    "respuesta_correcta": "Toledo",
    "categoria": "Historia"
  },
  {
    "id": 9,
    "pregunta": "¿Qué rey expulsó a los moriscos de España?",
    "opciones": ["Felipe II", "Felipe III", "Carlos II", "Carlos III"],
    "respuesta_correcta": "Felipe III",
    "categoria": "Historia"
  },
  {
    "id": 10,
    "pregunta": "¿Qué rey expulsó a los jesuitas de España?",
    "opciones": ["Felipe II", "Felipe IV", "Carlos III", "Felipe V"],
    "respuesta_correcta": "Carlos III",
    "categoria": "Historia"
  },
  {
    "id": 11,
    "pregunta": "¿Qué rey propició las ideas ilustradas en España?",
    "opciones": ["Felipe V", "Isabel II", "Carlos III", "Alfonso XIII"],
    "respuesta_correcta": "Carlos III",
    "categoria": "Historia"
  },
  {
    "id": 12,
    "pregunta": "¿Cuál fue la Constitución del llamado período canovista?",
    "opciones": ["La de 1812", "La de 1845", "La de 1876", "La de 1931"],
    "respuesta_correcta": "La de 1876",
    "categoria": "Historia"
  },
  {
    "id": 13,
    "pregunta": "¿Qué ilustrado español inspiró la Constitución de 1812?",
    "opciones": ["Cea Bermúdez", "Argüelles", "Quintana", "Donoso Cortés"],
    "respuesta_correcta": "Argüelles",
    "categoria": "Historia"
  },
  {
    "id": 14,
    "pregunta": "¿Qué intelectual español fue exiliado durante la dictadura de Primo de Rivera?",
    "opciones": ["Donoso Cortés", "Miguel de Unamuno", "Ortega y Gasset", "Manuel Azaña"],
    "respuesta_correcta": "Miguel de Unamuno",
    "categoria": "Historia"
  },
  {
    "id": 15,
    "pregunta": "¿Quién fue el líder de la CEDA durante la II República?",
    "opciones": ["Manuel Azaña", "Calvo Sotelo", "Gil Robles", "Indalecio Prieto"],
    "respuesta_correcta": "Gil Robles",
    "categoria": "Historia"
  },
  {
    "id": 16,
    "pregunta": "¿Quién dirigió al ejército republicano durante la Guerra Civil?",
    "opciones": ["El General Yagüe", "El General Rojo", "Largo Caballero", "El General Espartero"],
    "respuesta_correcta": "El General Rojo",
    "categoria": "Historia"
  },
  {
    "id": 17,
    "pregunta": "¿Qué régimen económico se dio en los años 40 y 50 tras la Guerra Civil?",
    "opciones": ["Capitalista", "Autarquía", "Sindical-socialista", "Social-cristiano"],
    "respuesta_correcta": "Autarquía",
    "categoria": "Historia"
  },
  {
    "id": 18,
    "pregunta": "¿Qué figura eclesiástica propició la transición de la Iglesia a la democracia?",
    "opciones": ["El cardenal Gomá", "El cardenal Tarancón", "El cardenal Guerra Campos", "El cardenal Rouco Varela"],
    "respuesta_correcta": "El cardenal Tarancón",
    "categoria": "Historia"
  },
  {
    "id": 19,
    "pregunta": "¿Quién fue el primer presidente de gobierno después de la muerte de Franco?",
    "opciones": ["Carrero Blanco", "Manuel Fraga", "Arias Navarro", "Adolfo Suárez"],
    "respuesta_correcta": "Arias Navarro",
    "categoria": "Historia"
  },
  {
    "id": 20,
    "pregunta": "¿Quién fue elegido presidente del gobierno tras la dimisión de Adolfo Suárez?",
    "opciones": ["Felipe González", "Torcuato Fernández Miranda", "Leopoldo Calvo-Sotelo", "Manuel Fraga Iribarne"],
    "respuesta_correcta": "Leopoldo Calvo-Sotelo",
    "categoria": "Historia"
  },
  {
    "id": 21,
    "pregunta": "¿Quién escribió 'El contrato social'?",
    "opciones": ["Kant", "Rousseau", "Hobbes", "Locke"],
    "respuesta_correcta": "Rousseau",
    "categoria": "Filosofía"
  },
  {
    "id": 22,
    "pregunta": "¿Qué fuerza actúa sobre un objeto de masa 5 kg en caída libre en la Tierra?",
    "opciones": ["49 N", "5 N", "9.8 N", "0 N"],
    "respuesta_correcta": "49 N",
    "categoria": "Física"
  },
  {
    "id": 23,
    "pregunta": "¿Cuál es la ecuación de la Ley de Ohm?",
    "opciones": ["V = IR", "P = IV", "F = ma", "E = mc^2"],
    "respuesta_correcta": "V = IR",
    "categoria": "Física"
  },
  {
    "id": 24,
    "pregunta": "¿Cuál es el tema central del libro 'Nada' de Carmen Laforet?",
    "opciones": ["La libertad", "El destino", "La justicia", "El amor"],
    "respuesta_correcta": "La libertad",
    "categoria": "Libro obligatorio (Lengua Castellana)"
  },
  {
    "id": 25,
    "pregunta": "¿Qué tipo de enlace rompe la enzima lactasa?",
    "opciones": ["O-glucosídico", "Peptídico", "Fosfodiéster", "Puente de hidrógeno"],
    "respuesta_correcta": "O-glucosídico",
    "categoria": "Biología"
  },
  {
    "id": 26,
    "pregunta": "¿Qué tipo de aminoácidos pueden ser sintetizados por nuestro organismo a partir de reacciones anabólicas?",
    "opciones": ["Aminoácidos no esenciales", "Aminoácidos esenciales", "Aminoácidos aromáticos", "Aminoácidos básicos"],
    "respuesta_correcta": "Aminoácidos no esenciales",
    "categoria": "Biología"
  },
  {
    "id": 27,
    "pregunta": "¿Cuál es el componente principal de la fibra alimentaria?",
    "opciones": ["Celulosa", "Almidón", "Glucógeno", "Quitina"],
    "respuesta_correcta": "Celulosa",
    "categoria": "Biología"
  },
  {
    "id": 28,
    "pregunta": "¿Con qué componentes de la célula se tiene que asociar el ARNm terapéutico para que se sintetice una proteína?",
    "opciones": ["Ribosomas", "Mitocondrias", "Núcleo", "Aparato de Golgi"],
    "respuesta_correcta": "Ribosomas",
    "categoria": "Biología"
  },
  {
    "id": 29,
    "pregunta": "¿Cómo se llaman las secuencias del ADN que se transcriben pero no se traducen posteriormente?",
    "opciones": ["Intrones", "Exones", "Promotores", "Telómeros"],
    "respuesta_correcta": "Intrones",
    "categoria": "Biología"
  },
  {
    "id": 30,
    "pregunta": "¿Cómo se llama el complejo proteico que permite el paso de ARN mensajero desde el núcleo al citoplasma?",
    "opciones": ["Complejo de poro nuclear", "Complejo de Golgi", "Complejo ribosomal", "Complejo de membrana"],
    "respuesta_correcta": "Complejo de poro nuclear",
    "categoria": "Biología"
  },
  {
    "id": 31,
    "pregunta": "¿Qué proceso celular representa una única duplicación de ADN seguida de dos divisiones?",
    "opciones": ["Meiosis", "Mitosis", "Interfase", "Citocinesis"],
    "respuesta_correcta": "Meiosis",
    "categoria": "Biología"
  },
  {
    "id": 32,
    "pregunta": "¿En qué células del organismo tiene lugar la meiosis?",
    "opciones": ["Células germinales", "Células somáticas", "Células epiteliales", "Células musculares"],
    "respuesta_correcta": "Células germinales",
    "categoria": "Biología"
  },
  {
    "id": 33,
    "pregunta": "¿Cuál es el objetivo central del catabolismo?",
    "opciones": ["Obtener energía", "Sintetizar proteínas", "Almacenar nutrientes", "Formar estructuras celulares"],
    "respuesta_correcta": "Obtener energía",
    "categoria": "Biología"
  },
  {
    "id": 34,
    "pregunta": "¿Qué vía metabólica se utiliza principalmente en una competición de 100 metros lisos?",
    "opciones": ["Vía anaeróbica", "Vía aeróbica", "Respiración celular", "Fotosíntesis"],
    "respuesta_correcta": "Vía anaeróbica",
    "categoria": "Biología"
  }
];

// Componente para mostrar una pregunta individual
const Question: React.FC<QuestionProps> = ({ 
  question, 
  selectedAnswer, 
  onSelectAnswer, 
  hasAnswered 
}) => {
  if (!question) return null;

  const formatText = (text: string) => {
    // Implementar el formateo de texto si es necesario
    return text;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">{formatText(question.pregunta)}</h3>
      <div className="space-y-3">
        {question.opciones.map((opcion, index) => (
          <button
            key={index}
            onClick={() => !hasAnswered && onSelectAnswer(opcion)}
            className={`w-full text-left p-4 rounded-lg transition-colors ${
              hasAnswered
                ? opcion === question.respuesta_correcta
                  ? 'bg-green-100 border-green-500'
                  : opcion === selectedAnswer
                  ? 'bg-red-100 border-red-500'
                  : 'bg-gray-50'
                : selectedAnswer === opcion
                ? 'bg-selectivi-yellow/20 border-selectivi-yellow'
                : 'bg-gray-50 hover:bg-gray-100'
            } border`}
            disabled={hasAnswered}
          >
            {formatText(opcion)}
          </button>
        ))}
      </div>
    </div>
  );
};

// Componente de Onboarding
const Onboarding: React.FC<{
  onComplete: (selectedSubjects: string[]) => void;
}> = ({ onComplete }) => {
  // Verificar si question es undefined o null
  if (!question) {
    return (
      <div className="rounded-xl bg-white shadow-lg p-6 md:p-8 mb-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-medium text-gray-700 mb-2">Cargando pregunta...</h3>
        <p className="text-gray-500">Por favor, espera un momento</p>
      </div>
    );
  }

  const isCorrect = hasAnswered && selectedAnswer === question.respuesta_correcta;
  const isIncorrect = hasAnswered && selectedAnswer && selectedAnswer !== question.respuesta_correcta;
  
  // Función para formatear el texto y detectar si hay fórmulas matemáticas
  const formatText = (text: string) => {
    if (question.categoria === "Física" && text.includes("$")) {
      const parts = text.split(/(\$.*?\$)/g);
      return parts.map((part: string, index: number) => {
        if (part.startsWith("$") && part.endsWith("$")) {
          const formula = part.slice(1, -1);
          return <InlineMath key={index} math={formula} />;
        }
        return part;
      });
    }
    return text;
  };

  return (
    <div className="rounded-xl bg-white shadow-lg p-6 md:p-8 mb-6">
      <div className="flex items-center mb-4">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
          question.categoria === "Historia" ? "bg-red-100 text-red-800" :
          question.categoria === "Filosofía" ? "bg-purple-100 text-purple-800" :
          question.categoria === "Física" ? "bg-blue-100 text-blue-800" :
          "bg-green-100 text-green-800"
        }`}>
          {question.categoria}
        </span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">{formatText(question.pregunta)}</h3>
      
      <div className="space-y-3">
        {question.opciones.map((option: string, index: number) => (
          <button
            key={index}
            onClick={() => !hasAnswered && onSelectAnswer(option)}
            disabled={hasAnswered}
            className={`w-full text-left p-4 rounded-lg border transition-all ${
              selectedAnswer === option && isCorrect ? "bg-green-100 border-green-500 text-green-800" :
              selectedAnswer === option && isIncorrect ? "bg-red-100 border-red-500 text-red-800" :
              selectedAnswer === option ? "bg-gray-100 border-gray-300" :
              hasAnswered && option === question.respuesta_correcta ? "bg-green-50 border-green-300 text-green-800" :
              "hover:bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex items-center">
              <span className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 ${
                selectedAnswer === option && isCorrect ? "bg-green-500 text-white" :
                selectedAnswer === option && isIncorrect ? "bg-red-500 text-white" :
                selectedAnswer === option ? "bg-gray-300" :
                hasAnswered && option === question.respuesta_correcta ? "bg-green-500 text-white" :
                "bg-gray-200"
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-grow text-gray-700">{formatText(option)}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Componente de Onboarding
const Onboarding: React.FC<{
  onComplete: (selectedSubjects: string[]) => void;
}> = ({ onComplete }) => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [step, setStep] = useState(1);

  const handleSubjectToggle = (subjectId: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const handleComplete = () => {
    if (selectedSubjects.length > 0) {
      onComplete(selectedSubjects);
    }
  };

  const groupedSubjects = availableSubjects.reduce((acc, subject) => {
    if (!acc[subject.category]) {
      acc[subject.category] = [];
    }
    acc[subject.category].push(subject);
    return acc;
  }, {} as Record<string, Subject[]>);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Image 
            src="/images/logo/icon.png"
            alt="SeleTest Logo"
            width={40}
            height={40}
            className="w-10 h-10"
            priority
          />
          <h2 className="text-3xl font-bold text-gray-900">¡Bienvenido/a a SeleTest!</h2>
        </div>
        <p className="text-gray-600 mb-2">Descubre cómo te iría en la Selectividad con nuestra predicción personalizada</p>
        <p className="text-sm text-gray-500">Selecciona las asignaturas que cursarás para obtener una predicción más precisa de tu nota</p>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedSubjects).map(([category, subjects]) => (
          <div key={category} className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-3 text-gray-900">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {subjects.map(subject => (
                <label
                  key={subject.id}
                  className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedSubjects.includes(subject.id)
                      ? 'border-selectivi-yellow bg-selectivi-yellow/10'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedSubjects.includes(subject.id)}
                    onChange={() => handleSubjectToggle(subject.id)}
                    className="w-4 h-4 bg-white border-gray-300 rounded text-selectivi-yellow focus:ring-selectivi-yellow"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    {subject.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleComplete}
          disabled={selectedSubjects.length === 0}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedSubjects.length > 0
              ? 'bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-white'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Comenzar el test
        </button>
        {selectedSubjects.length === 0 && (
          <p className="text-sm text-red-500 mt-2">
            Selecciona al menos una asignatura para continuar
          </p>
        )}
      </div>
    </div>
  );
};

// Componente principal de la página SeleTest
export default function SeleTest() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [selectedSubjectsFromOnboarding, setSelectedSubjectsFromOnboarding] = useState<string[]>([]);
  
  // Obtener todas las categorías únicas de preguntas
  const categoriesSet = new Set(initialQuestions.map(q => q.categoria));
  const categories = Array.from(categoriesSet);
  
  // Asegurarnos de que initialQuestions tiene contenido
  useEffect(() => {
    console.log('Verificando datos iniciales', { 
      initialQuestionsLength: initialQuestions.length 
    });
    
    // Si por alguna razón initialQuestions está vacío, usamos datos de respaldo
    if (initialQuestions.length === 0) {
      console.error('Error: No hay preguntas iniciales disponibles, usando datos de respaldo');
      const backupQuestions: Question[] = [
        {
          id: 999,
          pregunta: "¿Cuál es la capital de Cataluña?",
          opciones: ["Barcelona", "Tarragona", "Girona", "Lleida"],
          respuesta_correcta: "Barcelona",
          categoria: "General"
        }
      ];
      setQuestions(backupQuestions);
    }
    
    setIsLoading(false);
  }, []);
  
  // Inicializar preguntas (con orden aleatorio si es necesario)
  useEffect(() => {
    console.log('useEffect triggered', { selectedCategory, showTimer });
    
    let filteredQuestions = [...initialQuestions];
    console.log('Initial questions length:', initialQuestions.length);
    
    // Filtrar por categoría si hay una seleccionada
    if (selectedCategory) {
      filteredQuestions = filteredQuestions.filter(q => q.categoria === selectedCategory);
      console.log('Filtered by category:', selectedCategory, 'Questions remaining:', filteredQuestions.length);
    }
    
    // Mezclar preguntas para orden aleatorio
    const shuffledQuestions = filteredQuestions.sort(() => Math.random() - 0.5);
    console.log('Final questions length:', shuffledQuestions.length);
    setQuestions(shuffledQuestions);
    
    // Reiniciar el juego
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setGameOver(false);
    setScore(0);
    setTimeLeft(30);
    
    // Limpiar el temporizador anterior si existe
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
    
    // Iniciar temporizador si está activado
    if (showTimer) {
      const id = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleNextQuestion();
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
      setTimerId(id);
    }
    
    // Limpiar temporizador al desmontar
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [selectedCategory, showTimer]);
  
  // Manejar la selección de respuesta
  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setHasAnswered(true);
    
    // Actualizar puntuación
    if (answer === questions[currentQuestionIndex].respuesta_correcta) {
      setScore(prev => prev + 1);
    }
    
    // Pasar a la siguiente pregunta automáticamente después de 1.5 segundos
    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  };
  
  // Pasar a la siguiente pregunta
  const handleNextQuestion = () => {
    console.log('handleNextQuestion called', { 
      currentIndex: currentQuestionIndex, 
      totalQuestions: questions.length
    });
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
      setTimeLeft(30); // Reiniciar temporizador
      console.log('Moving to next question');
    } else {
      // Finalizar juego
      setGameOver(true);
      console.log('Game over reached');
      if (timerId) {
        clearInterval(timerId);
        setTimerId(null);
      }
    }
  };
  
  // Reiniciar el juego
  const handleRestart = () => {
    // Mezclar preguntas de nuevo para un nuevo orden
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
    
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setGameOver(false);
    setScore(0);
    setTimeLeft(30);
    
    // Reiniciar temporizador si está activado
    if (showTimer) {
      if (timerId) clearInterval(timerId);
      const id = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleNextQuestion();
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
      setTimerId(id);
    }
  };
  
  const handleOnboardingComplete = (selectedSubjects: string[]) => {
    console.log('Selected subjects:', selectedSubjects);
    setSelectedSubjectsFromOnboarding(selectedSubjects);
    setHasCompletedOnboarding(true);
    
    // Filtrar las preguntas basadas en las asignaturas seleccionadas
    const filteredQuestions = initialQuestions.filter(question => {
      // Mapear las categorías de las preguntas a los IDs de las asignaturas
      const categoryToSubjectId: Record<string, string[]> = {
        'Historia': ['history'],
        'Física': ['physics'],
        'Filosofía': ['philosophy'],
        'Libro obligatorio (Lengua Castellana)': ['spanish'],
        'Biología': ['biology']
      };
      
      const relevantSubjects = categoryToSubjectId[question.categoria] || [];
      console.log('Question category:', question.categoria, 'Relevant subjects:', relevantSubjects);
      return relevantSubjects.some(subjectId => selectedSubjects.includes(subjectId));
    });
    
    console.log('Filtered questions:', filteredQuestions);
    setQuestions(filteredQuestions.sort(() => Math.random() - 0.5));
  };

  if (!hasCompletedOnboarding) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <NavbarMain />
        <div className="pt-24 pb-16 px-4 md:px-8 flex-grow">
          <Onboarding onComplete={handleOnboardingComplete} />
        </div>
        <FooterMain />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavbarMain />
      
      <div className="pt-24 pb-16 px-4 md:px-8 flex-grow">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center bg-white">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col items-center mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Image
                      src="/images/logo/icon.png"
                      alt="SeleTest Logo"
                      width={45}
                      height={45}
                      priority
                      className="w-auto h-auto"
                    />
                    <h1 className="text-3xl md:text-4xl font-bold">
                      <span className="text-gray-900">Sele</span>
                      <span className="text-[#FFB800]">Test</span>
                    </h1>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">¡Bienvenido/a a SeleTest!</h2>
                  <p className="text-lg text-gray-600 text-center mb-2">Descubre cómo te iría en la Selectividad con nuestra predicción personalizada</p>
                  <p className="text-base text-gray-500 text-center">Selecciona las asignaturas que cursarás para obtener una predicción más precisa de tu nota</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contenido principal */}
          <div className="mb-12">
            {isLoading ? (
              <div className="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-12 w-12 mx-auto text-selectivi-yellow mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <h3 className="text-xl font-medium text-base-content mb-2">Iniciando SeleTest...</h3>
                <p className="text-base-content/80">Estamos preparando todo para ti</p>
              </div>
            ) : questions.length === 0 ? (
              <div className="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium text-base-content mb-2">No hay preguntas disponibles</h3>
                <p className="text-base-content/80">Selecciona otra categoría o inténtalo de nuevo</p>
              </div>
            ) : gameOver ? (
              <div className="text-center bg-white rounded-xl shadow-lg p-8 md:p-12">
                <div className="inline-flex justify-center items-center p-4 bg-selectivi-yellow/20 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-selectivi-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4">¡Juego completado!</h2>
                <div className="space-y-4 mb-8">
                  <p className="text-xl">
                    Tu puntuación: <span className="font-bold text-selectivi-yellow">{score}</span> de {questions.length}
                  </p>
                  {(() => {
                    // Calcular la nota proyectada sobre 14 usando regla de tres
                    const notaProyectada = (score / questions.length) * 14;
                    const notaRedondeada = Math.round(notaProyectada * 100) / 100;
                    
                    let mensaje = '';
                    let colorClase = '';
                    let emoji = '';
                    
                    if (notaRedondeada >= 13) {
                      mensaje = '¡Excelente! Vas muy bien preparado/a para la Selectividad. ¡Sigue así!';
                      colorClase = 'text-green-600';
                      emoji = '🏆';
                    } else if (notaRedondeada >= 11) {
                      mensaje = '¡Muy bien! Estás en buen camino. Sigue practicando para mejorar aún más.';
                      colorClase = 'text-green-500';
                      emoji = '🌟';
                    } else if (notaRedondeada >= 9) {
                      mensaje = 'Vas por buen camino, pero aún hay margen de mejora. ¡No dejes de practicar!';
                      colorClase = 'text-yellow-600';
                      emoji = '💪';
                    } else if (notaRedondeada >= 7) {
                      mensaje = 'Necesitas repasar un poco más. ¡Con práctica lo conseguirás!';
                      colorClase = 'text-orange-500';
                      emoji = '📚';
                    } else {
                      mensaje = 'Te recomendamos dedicar más tiempo al estudio. ¡No te desanimes, con esfuerzo lo lograrás!';
                      colorClase = 'text-red-500';
                      emoji = '✍️';
                    }

                    const handleShare = () => {
                      // Array de mensajes de urgencia/escasez
                      const urgencyMessages = [
                        "🔥 Més de 1000 estudiants ja han provat el seu nivell!",
                        "⚡️ Falten menys de 100 dies per la Selectivitat!",
                        "🎯 Descobreix el teu potencial ara!",
                        "📊 Uneix-te als estudiants més preparats!"
                      ];

                      // Array de llamadas a la acción
                      const ctaMessages = [
                        "No esperis més! Descobreix la teva predicció 👇",
                        "És el moment de preparar-te! Fes el test ara 👇",
                        "Comprova el teu nivell abans que sigui tard! 👇",
                        "La Selectivitat s'acosta! Prepara't ara 👇"
                      ];

                      // Seleccionar mensajes aleatorios
                      const randomUrgency = urgencyMessages[Math.floor(Math.random() * urgencyMessages.length)];
                      const randomCta = ctaMessages[Math.floor(Math.random() * ctaMessages.length)];

                      const shareText = `${emoji} He aconseguit un ${notaRedondeada.toFixed(2)}/14 a SeleTest!\n\n${mensaje}\n\n${randomUrgency}\n${randomCta}\n\nhttps://selectivicat-clean.vercel.app/seletest`;
                      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
                      window.open(whatsappUrl, '_blank');
                    };
                    
                    return (
                      <>
                        <p className="text-lg font-semibold">
                          Proyección para Selectividad:{' '}
                          <span className={colorClase}>{notaRedondeada.toFixed(2)}</span> / 14
                        </p>
                        <p className={`text-base ${colorClase}`}>
                          {mensaje}
                        </p>
                        <div className="mt-6 space-y-4">
                          <button 
                            onClick={handleShare}
                            className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                          >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Compartir en WhatsApp
                          </button>
                        </div>
                      </>
                    );
                  })()}
                </div>
                
                <button 
                  onClick={handleRestart}
                  className="btn btn-warning btn-lg"
                >
                  Jugar de nuevo
                </button>
              </div>
            ) : (
              (() => {
                console.log('Rendering Question component with:', {
                  hasQuestion: Boolean(questions[currentQuestionIndex]),
                  questionsLength: questions.length,
                  currentIndex: currentQuestionIndex
                });
                return (
                  <Question 
                    question={questions.length > 0 && currentQuestionIndex < questions.length ? questions[currentQuestionIndex] : undefined}
                    selectedAnswer={selectedAnswer}
                    onSelectAnswer={handleSelectAnswer}
                    hasAnswered={hasAnswered}
                  />
                );
              })()
            )}
          </div>
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 