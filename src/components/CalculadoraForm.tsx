'use client';

import { useState, useEffect } from 'react';

export default function CalculadoraForm() {
  // Estado para las notas
  const [notaBachillerato, setNotaBachillerato] = useState<string>('');
  const [notaCatalan, setNotaCatalan] = useState<string>('');
  const [notaCastellano, setNotaCastellano] = useState<string>('');
  const [notaLenguaExtranjera, setNotaLenguaExtranjera] = useState<string>('');
  const [notaHistoria, setNotaHistoria] = useState<string>('');
  const [notaOptativa, setNotaOptativa] = useState<string>('');
  
  // Estado para las ponderaciones de la fase específica
  const [ponderacion1, setPonderacion1] = useState<string>('0.2');
  const [ponderacion2, setPonderacion2] = useState<string>('0.2');
  
  // Estado para las asignaturas específicas
  const [especifica1, setEspecifica1] = useState<string>('');
  const [especifica2, setEspecifica2] = useState<string>('');
  
  // Estado para el resultado
  const [notaFinal, setNotaFinal] = useState<number | null>(null);
  const [notaFaseGeneral, setNotaFaseGeneral] = useState<number | null>(null);
  const [notaFaseEspecifica, setNotaFaseEspecifica] = useState<number | null>(null);

  // Función para validar que un valor sea un número entre 0 y 10
  const validarNota = (valor: string): boolean => {
    if (valor === '') return true;
    const numero = parseFloat(valor);
    return !isNaN(numero) && numero >= 0 && numero <= 10;
  };

  // Función para calcular la nota
  const calcularNota = () => {
    // Validar que todos los campos obligatorios estén completos
    if (
      !notaBachillerato ||
      !notaCatalan ||
      !notaCastellano ||
      !notaLenguaExtranjera ||
      !notaHistoria ||
      !notaOptativa
    ) {
      alert('Por favor, completa todos los campos de la fase general.');
      return;
    }

    // Convertir las notas a números
    const bachillerato = parseFloat(notaBachillerato);
    const catalan = parseFloat(notaCatalan);
    const castellano = parseFloat(notaCastellano);
    const lenguaExtranjera = parseFloat(notaLenguaExtranjera);
    const historia = parseFloat(notaHistoria);
    const optativa = parseFloat(notaOptativa);

    // Calcular la nota de la fase general (media de las 5 asignaturas)
    const mediaFaseGeneral = (catalan + castellano + lenguaExtranjera + historia + optativa) / 5;
    
    // Calcular la nota de acceso a la universidad (60% bachillerato + 40% fase general)
    const notaAcceso = bachillerato * 0.6 + mediaFaseGeneral * 0.4;
    
    setNotaFaseGeneral(parseFloat(notaAcceso.toFixed(3)));

    // Calcular la nota de la fase específica si hay asignaturas
    let notaEspecifica = 0;
    
    if (especifica1 && ponderacion1) {
      notaEspecifica += parseFloat(especifica1) * parseFloat(ponderacion1);
    }
    
    if (especifica2 && ponderacion2) {
      notaEspecifica += parseFloat(especifica2) * parseFloat(ponderacion2);
    }
    
    setNotaFaseEspecifica(parseFloat(notaEspecifica.toFixed(3)));

    // Calcular la nota final (nota de acceso + nota específica)
    const final = notaAcceso + notaEspecifica;
    setNotaFinal(parseFloat(final.toFixed(3)));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Nota de Bachillerato</h2>
        <div className="mb-4">
          <input
            type="number"
            min="0"
            max="10"
            step="0.001"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            placeholder="Nota de Bachillerato"
            value={notaBachillerato}
            onChange={(e) => {
              if (validarNota(e.target.value)) {
                setNotaBachillerato(e.target.value);
              }
            }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Fase General</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="number"
            min="0"
            max="10"
            step="0.001"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            placeholder="Catalán"
            value={notaCatalan}
            onChange={(e) => {
              if (validarNota(e.target.value)) {
                setNotaCatalan(e.target.value);
              }
            }}
          />
          
          <input
            type="number"
            min="0"
            max="10"
            step="0.001"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            placeholder="Castellano"
            value={notaCastellano}
            onChange={(e) => {
              if (validarNota(e.target.value)) {
                setNotaCastellano(e.target.value);
              }
            }}
          />
          
          <input
            type="number"
            min="0"
            max="10"
            step="0.001"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            placeholder="Lengua extranjera"
            value={notaLenguaExtranjera}
            onChange={(e) => {
              if (validarNota(e.target.value)) {
                setNotaLenguaExtranjera(e.target.value);
              }
            }}
          />
          
          <input
            type="number"
            min="0"
            max="10"
            step="0.001"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            placeholder="Historia"
            value={notaHistoria}
            onChange={(e) => {
              if (validarNota(e.target.value)) {
                setNotaHistoria(e.target.value);
              }
            }}
          />
          
          <input
            type="number"
            min="0"
            max="10"
            step="0.001"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            placeholder="Optativa"
            value={notaOptativa}
            onChange={(e) => {
              if (validarNota(e.target.value)) {
                setNotaOptativa(e.target.value);
              }
            }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Fase específica</h2>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="col-span-1">
            <input
              type="number"
              min="0"
              max="1"
              step="0.1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
              placeholder="0.2"
              value={ponderacion1}
              onChange={(e) => setPonderacion1(e.target.value)}
            />
          </div>
          <div className="col-span-3">
            <input
              type="number"
              min="0"
              max="10"
              step="0.001"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
              placeholder="Específica 1"
              value={especifica1}
              onChange={(e) => {
                if (validarNota(e.target.value)) {
                  setEspecifica1(e.target.value);
                }
              }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <input
              type="number"
              min="0"
              max="1"
              step="0.1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
              placeholder="0.2"
              value={ponderacion2}
              onChange={(e) => setPonderacion2(e.target.value)}
            />
          </div>
          <div className="col-span-3">
            <input
              type="number"
              min="0"
              max="10"
              step="0.001"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
              placeholder="Específica 2"
              value={especifica2}
              onChange={(e) => {
                if (validarNota(e.target.value)) {
                  setEspecifica2(e.target.value);
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={calcularNota}
          className="bg-selectivi-yellow hover:bg-amber-500 text-black font-bold py-3 px-6 rounded-md transition duration-300"
        >
          Calcular
        </button>
      </div>

      {notaFinal !== null && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Resultado:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded shadow">
              <p className="text-sm text-gray-600">Nota de acceso:</p>
              <p className="text-xl font-bold text-selectivi-yellow">{notaFaseGeneral?.toFixed(3)}</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="text-sm text-gray-600">Nota fase específica:</p>
              <p className="text-xl font-bold text-selectivi-yellow">{notaFaseEspecifica?.toFixed(3)}</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="text-sm text-gray-600">Nota final:</p>
              <p className="text-xl font-bold text-selectivi-yellow">{notaFinal.toFixed(3)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 