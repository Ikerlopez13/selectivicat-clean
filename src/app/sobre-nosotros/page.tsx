import React from "react";
import { AcademicCapIcon, UsersIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function SobreNosotrosPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 mt-16">
      <section className="flex flex-col items-center text-center mb-8">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4">
          <AcademicCapIcon className="w-10 h-10 text-yellow-500" />
        </span>
        <h1 className="text-4xl font-extrabold mb-2">Sobre selectivi.cat</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          selectivi.cat nace con la misión de acompañar a los estudiantes de Cataluña en su camino hacia la Selectivitat, ofreciendo recursos originales, preguntas tipo test, explicaciones detalladas y herramientas interactivas para que cada alumno pueda alcanzar su mejor versión.
        </p>
      </section>

      <section className="bg-white rounded-xl p-6 mb-8 shadow-sm text-gray-800">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><HeartIcon className="w-6 h-6 text-pink-500" /> Nuestra motivación</h2>
        <p>
          Este proyecto surge de la pasión por la educación y la convicción de que el acceso a materiales de calidad debe ser universal. Creemos en el aprendizaje autónomo, la curiosidad y el esfuerzo como motores del éxito académico.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Nuestra misión</h2>
        <p>Facilitar el acceso a materiales de calidad, fomentar el aprendizaje autónomo y ofrecer una experiencia educativa moderna, transparente y adaptada a las necesidades reales del alumnado.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Valores</h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Originalidad y rigor en los contenidos</li>
          <li>Accesibilidad y usabilidad para todos</li>
          <li>Compromiso con la mejora continua</li>
          <li>Transparencia y honestidad</li>
        </ul>
      </section>

      <section className="bg-white rounded-xl p-6 mb-8 shadow-sm text-gray-800">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><UsersIcon className="w-5 h-5 text-blue-500" /> ¿Quién está detrás?</h2>
        <p>
          selectivi.cat es un proyecto colaborativo impulsado por docentes, estudiantes y entusiastas de la educación. Nuestro objetivo es crear una comunidad donde compartir, aprender y mejorar juntos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Contacto</h2>
        <p>¿Tienes dudas, sugerencias o propuestas de colaboración? Escríbenos a <a href="mailto:catselectivi@gmail.com" className="text-blue-600 underline">catselectivi@gmail.com</a>.</p>
      </section>
    </main>
  );
} 