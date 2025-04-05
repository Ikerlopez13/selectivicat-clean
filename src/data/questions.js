// Preguntas estándar disponibles para todos los usuarios
export const standardQuestions = [
  // Geografía
  {
    id: 14,
    pregunta: "¿Cuál de los siguientes problemas NO está directamente asociado a la pérdida de cobertura vegetal?",
    opciones: [
      "Erosión del suelo",
      "Aumento de la biodiversidad",
      "Inundaciones",
      "Pérdida de hábitats para especies animales"
    ],
    respuesta_correcta: "Aumento de la biodiversidad",
    explicacion: "La pérdida de cobertura vegetal generalmente reduce la biodiversidad al destruir hábitats y alterar ecosistemas, no aumenta.",
    categoria: "geografia"
  },
  {
    id: 15,
    pregunta: "Según el documento, ¿qué caracteriza el clima mediterráneo semiárido de Lleida?",
    opciones: [
      "Precipitaciones abundantes todo el año",
      "Ausencia total de sequía estival",
      "Inviernos húmedos y muy fríos, veranos cálidos",
      "Amplitud térmica muy baja"
    ],
    respuesta_correcta: "Inviernos húmedos y muy fríos, veranos cálidos",
    explicacion: "El clima de Lleida se describe con inviernos fríos y húmedos, veranos cálidos, y una precipitación anual escasa (340 mm).",
    categoria: "geografia"
  },
  // ... resto de preguntas estándar que me mostraste ...
];

// Preguntas premium que incluyen las estándar más adicionales
export const premiumQuestions = [
  ...standardQuestions,
  // Preguntas adicionales solo para usuarios premium
  {
    id: 101,
    pregunta: "En un circuito eléctrico con una resistencia de 100Ω, si la intensidad es de 0.5A, ¿cuál es el voltaje según la ley de Ohm?",
    opciones: [
      "25V",
      "50V",
      "75V",
      "100V"
    ],
    respuesta_correcta: "50V",
    explicacion: "Según la ley de Ohm (V = I × R), el voltaje es V = 0.5A × 100Ω = 50V",
    categoria: "fisica"
  },
  {
    id: 102,
    pregunta: "¿Qué filósofo es conocido por su frase 'Pienso, luego existo'?",
    opciones: [
      "Platón",
      "Aristóteles",
      "Descartes",
      "Kant"
    ],
    respuesta_correcta: "Descartes",
    explicacion: "René Descartes formuló esta frase ('Cogito, ergo sum' en latín) como base de su filosofía racionalista, estableciendo la certeza del pensamiento como fundamento del conocimiento.",
    categoria: "filosofia"
  },
  {
    id: 103,
    pregunta: "¿Cuál es la derivada de f(x) = x·ln(x)?",
    opciones: [
      "ln(x)",
      "1 + ln(x)",
      "x/ln(x)",
      "x + 1/x"
    ],
    respuesta_correcta: "1 + ln(x)",
    explicacion: "Usando la regla del producto: f'(x) = 1·ln(x) + x·(1/x) = ln(x) + 1",
    categoria: "mates"
  }
  // Aquí puedes seguir añadiendo más preguntas premium
]; 