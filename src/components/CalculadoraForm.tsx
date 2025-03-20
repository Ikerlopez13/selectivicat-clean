'use client';

import { useState, useEffect } from 'react';

export default function CalculadoraForm() {
  // Estado para las notas
  const [notaBatxillerat, setNotaBatxillerat] = useState<string>('');
  const [notaCatala, setNotaCatala] = useState<string>('');
  const [notaCastella, setNotaCastella] = useState<string>('');
  const [notaLlenguaEstrangera, setNotaLlenguaEstrangera] = useState<string>('');
  const [notaHistoria, setNotaHistoria] = useState<string>('');
  const [notaOptativa, setNotaOptativa] = useState<string>('');
  
  // Estado para las ponderaciones de la fase específica
  const [ponderacio1, setPonderacio1] = useState<string>('0.2');
  const [ponderacio2, setPonderacio2] = useState<string>('0.2');
  
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
      !notaBatxillerat ||
      !notaCatala ||
      !notaCastella ||
      !notaLlenguaEstrangera ||
      !notaHistoria ||
      !notaOptativa
    ) {
      alert('Si us plau, completa tots els camps de la fase general.');
      return;
    }

    // Convertir las notas a números
    const batxillerat = parseFloat(notaBatxillerat);
    const catala = parseFloat(notaCatala);
    const castella = parseFloat(notaCastella);
    const llenguaEstrangera = parseFloat(notaLlenguaEstrangera);
    const historia = parseFloat(notaHistoria);
    const optativa = parseFloat(notaOptativa);

    // Calcular la nota de la fase general (media de las 5 asignaturas)
    const mediaFaseGeneral = (catala + castella + llenguaEstrangera + historia + optativa) / 5;
    
    // Calcular la nota de acceso a la universidad (60% bachillerato + 40% fase general)
    const notaAcces = batxillerat * 0.6 + mediaFaseGeneral * 0.4;
    
    setNotaFaseGeneral(parseFloat(notaAcces.toFixed(3)));

    // Calcular la nota de la fase específica si hay asignaturas
    let notaEspecifica = 0;
    
    if (especifica1 && ponderacio1) {
      notaEspecifica += parseFloat(especifica1) * parseFloat(ponderacio1);
    }
    
    if (especifica2 && ponderacio2) {
      notaEspecifica += parseFloat(especifica2) * parseFloat(ponderacio2);
    }
    
    setNotaFaseEspecifica(parseFloat(notaEspecifica.toFixed(3)));

    // Calcular la nota final (nota de acceso + nota específica)
    const final = notaAcces + notaEspecifica;
    setNotaFinal(parseFloat(final.toFixed(3)));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Nota de Batxillerat</h2>
        <div className="mb-4">
          <input
            type="number"
            min="0"
            max="10"
            step="0.001"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            placeholder="Nota de Batxillerat"
            value={notaBatxillerat}
            onChange={(e) => {
              if (validarNota(e.target.value)) {
                setNotaBatxillerat(e.target.value);
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
            placeholder="Català"
            value={notaCatala}
            onChange={(e) => {
              if (validarNota(e.target.value)) {
                setNotaCatala(e.target.value);
              }
            }}
          />
          
          <input
            type="number"
            min="0"
            max="10"
            step="0.001"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            placeholder="Castellà"
            value={notaCastella}
            onChange={(e) => {
              if (validarNota(e.target.value)) {
                setNotaCastella(e.target.value);
              }
            }}
          />
          
          <input
            type="number"
            min="0"
            max="10"
            step="0.001"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            placeholder="Llengua estrangera"
            value={notaLlenguaEstrangera}
            onChange={(e) => {
              if (validarNota(e.target.value)) {
                setNotaLlenguaEstrangera(e.target.value);
              }
            }}
          />
          
          <input
            type="number"
            min="0"
            max="10"
            step="0.001"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-selectivi-yellow focus:border-selectivi-yellow"
            placeholder="Història"
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
              value={ponderacio1}
              onChange={(e) => setPonderacio1(e.target.value)}
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
              value={ponderacio2}
              onChange={(e) => setPonderacio2(e.target.value)}
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
          className="px-6 py-3 bg-selectivi-yellow text-black rounded-md font-medium hover:bg-opacity-90 transition-colors"
        >
          Calcular nota
        </button>
      </div>

      {notaFinal !== null && (
        <div className="mt-8 p-6 bg-selectivi-yellow/10 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Resultats</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Nota de fase general:</p>
              <p className="text-2xl font-bold">{notaFaseGeneral}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Punts fase específica:</p>
              <p className="text-2xl font-bold">{notaFaseEspecifica}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Nota final d'admissió:</p>
              <p className="text-2xl font-bold">{notaFinal}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 