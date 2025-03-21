"use client";

import React, { useState } from 'react';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';

// Componentes para cada paso del onboarding
const Step1 = ({ formData, updateFormData, nextStep }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">¿Qué carrera quieres estudiar?</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="carrera" className="block text-sm font-medium text-gray-700 mb-1">
            Carrera deseada
          </label>
          <input
            type="text"
            id="carrera"
            name="carrera"
            placeholder="Ej: Medicina, Ingeniería Informática"
            value={formData.carrera || ''}
            onChange={(e) => updateFormData('carrera', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            required
          />
        </div>
        
        <div>
          <label htmlFor="notaCorte" className="block text-sm font-medium text-gray-700 mb-1">
            Nota de corte requerida
          </label>
          <input
            type="number"
            id="notaCorte"
            name="notaCorte"
            step="0.01"
            min="5"
            max="14"
            placeholder="Ej: 11.25"
            value={formData.notaCorte || ''}
            onChange={(e) => updateFormData('notaCorte', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            required
          />
        </div>
        
        <div>
          <label htmlFor="notaBachillerato" className="block text-sm font-medium text-gray-700 mb-1">
            Nota media de bachillerato actual
          </label>
          <input
            type="number"
            id="notaBachillerato"
            name="notaBachillerato"
            step="0.01"
            min="5"
            max="10"
            placeholder="Ej: 8.5"
            value={formData.notaBachillerato || ''}
            onChange={(e) => updateFormData('notaBachillerato', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            required
          />
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button
          onClick={nextStep}
          className="bg-selectivi-yellow text-gray-800 px-6 py-2 rounded-md hover:bg-opacity-80 transition-colors"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

const Step2 = ({ formData, updateFormData, nextStep, prevStep }) => {
  const faseGeneral = [
    "Català",
    "Castellà",
    "Llengua estrangera",
    "Història",
    "Optativa Fase General"
  ];
  
  const faseEspecifica = [
    "Específica 1",
    "Específica 2"
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">¿Qué nota necesitas?</h2>
      <p className="text-gray-600 mb-6">
        Introduce las notas que crees que necesitas obtener en cada asignatura para alcanzar tu objetivo.
      </p>
      
      {/* Nota de Bachillerato */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Nota de Batxillerat</h3>
        <div className="bg-white border border-gray-300 rounded-md">
          <input
            type="number"
            step="0.01"
            min="5"
            max="10"
            placeholder="Nota de Batxillerat"
            value={formData.notaBachilleratoInput || ''}
            onChange={(e) => updateFormData('notaBachilleratoInput', e.target.value)}
            className="w-full px-4 py-3 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow border-0"
          />
        </div>
      </div>
      
      {/* Fase General */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Fase General</h3>
        <div className="space-y-3">
          {faseGeneral.map((asignatura) => (
            <div key={asignatura} className="w-full">
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                placeholder={asignatura}
                value={formData.faseGeneral?.[asignatura] || ''}
                onChange={(e) => {
                  const updatedFaseGeneral = {
                    ...(formData.faseGeneral || {}),
                    [asignatura]: e.target.value
                  };
                  updateFormData('faseGeneral', updatedFaseGeneral);
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
                aria-label={asignatura}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Fase Específica */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Fase específica</h3>
        <div className="space-y-3">
          {faseEspecifica.map((asignatura, index) => (
            <div key={asignatura} className="flex gap-3">
              <div className="w-1/6 flex items-center justify-center bg-gray-100 text-gray-700 font-semibold rounded-md">
                0,2
              </div>
              <div className="w-5/6">
                <input
                  type="text"
                  placeholder={asignatura}
                  value={formData.faseEspecifica?.[asignatura]?.asignatura || ''}
                  onChange={(e) => {
                    const updatedFaseEspecifica = {
                      ...(formData.faseEspecifica || {}),
                      [asignatura]: {
                        ...(formData.faseEspecifica?.[asignatura] || {}),
                        asignatura: e.target.value,
                        ponderacion: 0.2
                      }
                    };
                    updateFormData('faseEspecifica', updatedFaseEspecifica);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
                  aria-label={`Asignatura ${asignatura}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          Anterior
        </button>
        <button
          onClick={nextStep}
          className="bg-selectivi-yellow text-gray-800 px-6 py-2 rounded-md hover:bg-opacity-80 transition-colors"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

const Step3 = ({ formData, updateFormData, nextStep, prevStep }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Tu modo de estudio</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Dónde prefieres estudiar?
          </label>
          <div className="grid grid-cols-3 gap-4">
            {['Biblioteca', 'Casa', 'Mixto'].map((lugar) => (
              <button
                key={lugar}
                type="button"
                onClick={() => updateFormData('lugarEstudio', lugar)}
                className={`p-4 border rounded-lg flex flex-col items-center transition-colors ${
                  formData.lugarEstudio === lugar 
                    ? 'border-selectivi-yellow bg-selectivi-yellow bg-opacity-10' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="text-3xl mb-2">
                  {lugar === 'Biblioteca' ? '📚' : lugar === 'Casa' ? '🏠' : '🔄'}
                </span>
                <span className="font-medium">{lugar}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿En qué momento del día rindes mejor?
          </label>
          <div className="grid grid-cols-2 gap-4">
            {[
              { valor: 'Mañana', emoji: '🌅' },
              { valor: 'Tarde', emoji: '🌇' }
            ].map((momento) => (
              <button
                key={momento.valor}
                type="button"
                onClick={() => updateFormData('momentoDia', momento.valor)}
                className={`p-4 border rounded-lg flex flex-col items-center transition-colors ${
                  formData.momentoDia === momento.valor 
                    ? 'border-selectivi-yellow bg-selectivi-yellow bg-opacity-10' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="text-3xl mb-2">{momento.emoji}</span>
                <span className="font-medium">{momento.valor}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label htmlFor="horasDiarias" className="block text-sm font-medium text-gray-700 mb-2">
            Horas disponibles por día para estudiar
          </label>
          <input
            type="number"
            id="horasDiarias"
            name="horasDiarias"
            min="1"
            max="12"
            value={formData.horasDiarias || ''}
            onChange={(e) => updateFormData('horasDiarias', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            required
          />
        </div>
        
        <div>
          <label htmlFor="fechaExamen" className="block text-sm font-medium text-gray-700 mb-2">
            Fecha del examen de Selectividad
          </label>
          <input
            type="date"
            id="fechaExamen"
            name="fechaExamen"
            value={formData.fechaExamen || ''}
            onChange={(e) => updateFormData('fechaExamen', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duración de las sesiones de Pomodoro
          </label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 25, label: '25 minutos', desc: 'Clásico' },
              { value: 50, label: '50 minutos', desc: 'Intermedio' },
              { value: 90, label: '90 minutos', desc: 'Deep work' }
            ].map((opcion) => (
              <button
                key={opcion.value}
                type="button"
                onClick={() => updateFormData('duracionPomodoro', opcion.value)}
                className={`p-4 border rounded-lg flex flex-col items-center transition-colors ${
                  formData.duracionPomodoro === opcion.value 
                    ? 'border-selectivi-yellow bg-selectivi-yellow bg-opacity-10' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium">{opcion.label}</span>
                <span className="text-sm text-gray-500">{opcion.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          Anterior
        </button>
        <button
          onClick={nextStep}
          className="bg-selectivi-yellow text-gray-800 px-6 py-2 rounded-md hover:bg-opacity-80 transition-colors"
        >
          Generar mi plan
        </button>
      </div>
    </div>
  );
};

const ResultStep = ({ formData }) => {
  // Función para generar un horario semanal basado en la disponibilidad y preferencias
  const generarHorarioSemanal = () => {
    const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const horario = [];
    
    // Obtener asignaturas de fase general y específica
    const asignaturas = [
      ...Object.keys(formData.faseGeneral || {}).filter(a => formData.faseGeneral[a]),
      ...Object.keys(formData.faseEspecifica || {}).map(k => formData.faseEspecifica[k]?.asignatura).filter(Boolean)
    ];
    
    // Calcular horas disponibles por día
    const horasDiarias = parseInt(formData.horasDiarias) || 4;
    const duracionPomodoro = parseInt(formData.duracionPomodoro) || 25;
    const momentoDia = formData.momentoDia || 'Mañana';
    
    // Crear bloques de estudio basados en la duración de pomodoro
    const bloquesPorDia = Math.floor(horasDiarias * 60 / (duracionPomodoro + 5)); // +5 para descansos
    
    // Para cada día de la semana, asignar bloques de estudio
    diasSemana.forEach((dia, i) => {
      const bloquesDia = [];
      
      // Distribuir asignaturas en los bloques
      for (let bloque = 0; bloque < bloquesPorDia; bloque++) {
        const asignaturaIndex = (i + bloque) % asignaturas.length;
        const asignatura = asignaturas[asignaturaIndex];
        
        // Calcular hora aproximada basada en preferencia (mañana/tarde)
        const horaInicio = momentoDia === 'Mañana' 
          ? 9 + Math.floor(bloque * (duracionPomodoro + 5) / 60)
          : 15 + Math.floor(bloque * (duracionPomodoro + 5) / 60);
          
        const minutoInicio = (bloque * (duracionPomodoro + 5)) % 60;
        const horaFormateada = `${horaInicio}:${minutoInicio < 10 ? '0' + minutoInicio : minutoInicio}`;
        
        bloquesDia.push({
          hora: horaFormateada,
          asignatura,
          duracion: duracionPomodoro
        });
      }
      
      horario.push({
        dia,
        bloques: bloquesDia,
        esFinDeSemana: i > 4 // Sábado y domingo
      });
    });
    
    return horario;
  };
  
  const horarioSemanal = generarHorarioSemanal();
  
  // Función para crear URL de Google Calendar
  const crearEnlaceGoogleCalendar = () => {
    // En una implementación real, aquí generaríamos los enlaces a la API de Google Calendar
    // Para una demostración, simplemente devolvemos la URL de autorización
    return "https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=https://www.googleapis.com/auth/calendar&response_type=code";
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">¡Tu plan personalizado está listo!</h2>
        <p className="text-gray-600">
          Hemos creado un plan de estudios adaptado a tus necesidades para ayudarte a alcanzar el {formData.notaCorte} que necesitas para {formData.carrera}.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Resumen de tu plan</h3>
          
          <div className="space-y-4">
            <div>
              <p className="font-medium">Carrera objetivo:</p>
              <p className="text-lg">{formData.carrera}</p>
            </div>
            
            <div>
              <p className="font-medium">Nota actual de bachillerato:</p>
              <p className="text-lg">{formData.notaBachilleratoInput || formData.notaBachillerato}</p>
            </div>
            
            <div>
              <p className="font-medium">Nota objetivo:</p>
              <p className="text-lg">{formData.notaCorte}</p>
            </div>
            
            <div>
              <p className="font-medium">Días hasta el examen:</p>
              <p className="text-lg">
                {formData.fechaExamen ? Math.max(0, Math.floor((new Date(formData.fechaExamen) - new Date()) / (1000 * 60 * 60 * 24))) : "No especificado"}
              </p>
            </div>
            
            <div>
              <p className="font-medium">Horario preferido:</p>
              <p className="text-lg">{formData.momentoDia || "No especificado"}</p>
            </div>
            
            <div>
              <p className="font-medium">Modo de estudio:</p>
              <p className="text-lg">{formData.lugarEstudio || "No especificado"}</p>
            </div>
            
            <div>
              <p className="font-medium">Duración de Pomodoro:</p>
              <p className="text-lg">{formData.duracionPomodoro ? `${formData.duracionPomodoro} minutos` : "No especificado"}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="bg-selectivi-yellow text-gray-800 px-6 py-3 rounded-md hover:bg-opacity-80 transition-colors w-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar plan completo (PDF)
            </button>
            
            <a 
              href={crearEnlaceGoogleCalendar()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-white border border-selectivi-yellow text-gray-800 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors w-full flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Añadir a Google Calendar
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Tu calendario de estudio</h3>
          
          {/* Calendario semanal */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4 max-h-80 overflow-y-auto">
            {horarioSemanal.map((dia) => (
              <div key={dia.dia} className={`mb-4 ${dia.esFinDeSemana ? 'opacity-75' : ''}`}>
                <h4 className={`font-medium mb-2 pb-1 border-b ${dia.esFinDeSemana ? 'text-purple-700' : 'text-gray-800'}`}>
                  {dia.dia}
                </h4>
                <div className="space-y-2">
                  {dia.bloques.map((bloque, i) => (
                    <div key={i} className="flex p-2 rounded bg-white border border-gray-200">
                      <div className="w-16 text-xs font-medium text-gray-500">{bloque.hora}</div>
                      <div className="flex-grow px-2 py-1 bg-selectivi-yellow bg-opacity-20 rounded">
                        {bloque.asignatura} ({bloque.duracion} min)
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">Notas necesarias para aprobar</h4>
            <div className="space-y-2">
              {Object.entries(formData.faseGeneral || {})
                .filter(([_, nota]) => nota)
                .map(([asignatura, nota]) => (
                  <div key={asignatura} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-selectivi-yellow text-center leading-8 mr-2">
                      {nota}
                    </div>
                    <span className="flex-grow">{asignatura}</span>
                  </div>
                ))}
                
              {Object.entries(formData.faseEspecifica || {})
                .filter(([_, data]) => data?.asignatura)
                .map(([key, data]) => (
                  <div key={key} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-center leading-8 mr-2">
                      {data.ponderacion}
                    </div>
                    <span className="flex-grow">{data.asignatura}</span>
                  </div>
                ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Integración con FocusCircle</h4>
            <p className="text-sm text-gray-600 mb-3">
              Mide tu progreso diario y asegúrate de seguir el plan con herramientas de productividad diseñadas para estudiantes.
            </p>
            <a 
              href="https://focuscircle.net" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
            >
              Conectar con FocusCircle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EstrategiaEstudio() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    carrera: '',
    notaCorte: '',
    notaBachillerato: '',
    notaBachilleratoInput: '',
    faseGeneral: {},
    faseEspecifica: {},
    asignaturas: {},
    lugarEstudio: '',
    horasDiarias: '',
    momentoDia: '', // Mañana o tarde
    fechaExamen: '',
    duracionPomodoro: 25, // Valor por defecto
  });
  
  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <div className="bg-gradient-to-r from-selectivi-yellow to-yellow-300 py-14 px-4 md:px-8 mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan de Estudio Personalizado</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Crea un plan de estudio adaptado a tus necesidades para maximizar tus resultados en Selectividad.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-10 px-4 md:px-8 bg-gray-50 flex-grow">
        <div className="container mx-auto max-w-6xl">
          {/* Indicador de progreso */}
          {step <= 3 && (
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                    Paso {step} de 3
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      {Math.round((step / 3) * 100)}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${(step / 3) * 100}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-selectivi-yellow"
                  ></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Pasos del formulario */}
          {step === 1 && (
            <Step1 
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
            />
          )}
          
          {step === 2 && (
            <Step2 
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          
          {step === 3 && (
            <Step3 
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          
          {step === 4 && (
            <ResultStep formData={formData} />
          )}
        </div>
      </div>
      
      {/* Información adicional si el usuario está en los primeros pasos */}
      {step <= 3 && (
        <div className="py-10 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-xl font-semibold mb-2">Priorización inteligente</h3>
                <p className="text-gray-600">
                  Nuestro algoritmo analiza tus notas y objetivos para priorizar las asignaturas que más impacto tendrán en tu nota final.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">⏱️</div>
                <h3 className="text-xl font-semibold mb-2">Plan adaptado a tu tiempo</h3>
                <p className="text-gray-600">
                  Optimiza tu estudio según el tiempo disponible y tus preferencias de concentración para maximizar resultados.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-xl font-semibold mb-2">Seguimiento y recordatorios</h3>
                <p className="text-gray-600">
                  Recibe recordatorios y haz seguimiento de tu progreso con integración de herramientas de productividad.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <FooterMain />
    </div>
  );
} 