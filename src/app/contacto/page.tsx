import React from "react";

export default function ContactoPage() {
  return (
    <main className="max-w-lg mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p className="mb-6">¿Tienes alguna pregunta, sugerencia o propuesta? Puedes ponerte en contacto con nosotros a través del siguiente correo electrónico:</p>
      <div className="bg-base-200 rounded-lg p-4 text-center">
        <a href="mailto:info@selectivi.cat" className="text-blue-600 underline text-lg font-semibold">info@selectivi.cat</a>
      </div>
    </main>
  );
} 