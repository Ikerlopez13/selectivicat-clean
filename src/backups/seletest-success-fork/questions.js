// Preguntas disponibles para usuarios standard
export const standardQuestions = [
  {
    id: "s1",
    categoria: "Matemáticas",
    pregunta: "Calcula la derivada de f(x) = x² + 3x + 2",
    opciones: [
      "f'(x) = 2x + 3",
      "f'(x) = x + 3",
      "f'(x) = 2x + 1",
      "f'(x) = x² + 3"
    ],
    respuestaCorrecta: 0,
    explicacion: "La derivada de x² es 2x, y la derivada de 3x es 3. La derivada de una constante es 0."
  },
  {
    id: "s2",
    categoria: "Física",
    pregunta: "¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional?",
    opciones: [
      "Kilogramo (kg)",
      "Newton (N)",
      "Julio (J)",
      "Pascal (Pa)"
    ],
    respuestaCorrecta: 1,
    explicacion: "La unidad de fuerza en el SI es el Newton (N), que equivale a kg⋅m/s²"
  },
  {
    id: "s3",
    categoria: "Química",
    pregunta: "¿Cuál es el número atómico del oxígeno?",
    opciones: [
      "6",
      "7",
      "8",
      "9"
    ],
    respuestaCorrecta: 2,
    explicacion: "El oxígeno tiene 8 protones en su núcleo, por lo tanto su número atómico es 8."
  },
  // Geografía
  {
    id: "s4",
    categoria: "Geografia",
    pregunta: "¿Cuál de los siguientes problemas NO está directamente asociado a la pérdida de cobertura vegetal?",
    opciones: [
      "Erosión del suelo",
      "Aumento de la biodiversidad",
      "Inundaciones",
      "Pérdida de hábitats para especies animales"
    ],
    respuestaCorrecta: 1,
    explicacion: "La pérdida de cobertura vegetal generalmente reduce la biodiversidad al destruir hábitats y alterar ecosistemas, no aumenta."
  },
  {
    id: "s5",
    categoria: "Geografia",
    pregunta: "Según el documento, ¿qué caracteriza el clima mediterráneo semiárido de Lleida?",
    opciones: [
      "Precipitaciones abundantes todo el año",
      "Ausencia total de sequía estival",
      "Inviernos húmedos y muy fríos, veranos cálidos",
      "Amplitud térmica muy baja"
    ],
    respuestaCorrecta: 2,
    explicacion: "El clima de Lleida se describe con inviernos fríos y húmedos, veranos cálidos, y una precipitación anual escasa (340 mm)."
  },
  {
    id: "s6",
    categoria: "Geografia",
    pregunta: "¿Cuál de estas provincias españolas se menciona como ejemplo de área con escaso dinamismo económico y fuerte emigración?",
    opciones: [
      "Valencia",
      "Barcelona",
      "Madrid",
      "Ourense"
    ],
    respuestaCorrecta: 3,
    explicacion: "Ourense, en el noroeste peninsular, es citada como ejemplo de provincia con bajo dinamismo económico y históricas migraciones."
  },
  {
    id: "s7",
    categoria: "Geografia",
    pregunta: "¿Qué consecuencia demográfica se deriva de la emigración juvenil en zonas rurales?",
    opciones: [
      "Aumento de la natalidad",
      "Acentuación del envejecimiento poblacional",
      "Rejuvenecimiento de la población",
      "Equilibrio entre grupos de edad"
    ],
    respuestaCorrecta: 1,
    explicacion: "La emigración de jóvenes agrava el envejecimiento demográfico, ya que reduce la población en edad reproductiva y laboral."
  },
  // Historia
  {
    id: "s8",
    categoria: "Historia",
    pregunta: "Durante la Segunda República española (1931-1936), ¿qué derecho fundamental se reconoció por primera vez a las mujeres?",
    opciones: [
      "Derecho a la propiedad privada",
      "Derecho al voto",
      "Derecho a la educación superior",
      "Derecho al divorcio"
    ],
    respuestaCorrecta: 1,
    explicacion: "La Constitución de 1931 reconoció el sufragio universal femenino, permitiendo a las mujeres votar por primera vez en las elecciones de 1933."
  },
  {
    id: "s9",
    categoria: "Historia",
    pregunta: "¿Qué caracterizó el papel de la mujer durante el franquismo (1939-1975)?",
    opciones: [
      "Igualdad legal y participación política activa",
      "Libertad para ejercer cualquier profesión",
      "Rol doméstico y sumisión al género masculino",
      "Acceso prioritario a la educación universitaria"
    ],
    respuestaCorrecta: 2,
    explicacion: "El franquismo promovió un modelo de mujer centrado en la familia y la sumisión al hombre, eliminando derechos como el divorcio y restringiendo su participación pública."
  },
  // Física
  {
    id: "s10",
    categoria: "Física",
    pregunta: "Un satélite orbita Mercurio a una distancia de 3.36 × 10⁶ m de su centro. Si la masa de Mercurio es 3.285 × 10²³ kg, ¿cuál es la velocidad orbital del satélite? (Dato: G = 6.67 × 10⁻¹¹ N·m²/kg²)",
    opciones: [
      "4.92 × 10³ m/s",
      "1.23 × 10³ m/s",
      "2.55 × 10³ m/s",
      "3.78 × 10³ m/s"
    ],
    respuestaCorrecta: 2,
    explicacion: "La velocidad orbital se calcula con la fórmula $v = \\sqrt{\\frac{G M}{r}}$. Sustituyendo los valores: $v = \\sqrt{\\frac{6.67 \\times 10^{-11} \\times 3.285 \\times 10^{23}}{3.36 \\times 10^6}} = 2.55 \\times 10^3 \\, \\text{m/s}$."
  },
  {
    id: "s11",
    categoria: "Física",
    pregunta: "Para que un satélite escape del campo gravitatorio de Mercurio, su energía mecánica debe ser:",
    opciones: [
      "Positiva",
      "Igual a su energía cinética",
      "Negativa",
      "Cero"
    ],
    respuestaCorrecta: 3,
    explicacion: "La energía mecánica mínima para escapar de un campo gravitatorio es cero (Em ≥ 0). Esto implica que la energía cinética debe ser suficiente para superar la energía potencial gravitatoria negativa."
  },
  // Química
  {
    id: "s12",
    categoria: "Química",
    pregunta: "Un elemento con configuración electrónica 1s² 2s² 2p⁶ 3s¹ pertenece al:",
    opciones: [
      "Período 2, grupo 1, bloque p",
      "Período 3, grupo 17, bloque p",
      "Período 4, grupo 1, bloque d",
      "Período 3, grupo 1, bloque s"
    ],
    respuestaCorrecta: 3,
    explicacion: "El último electrón está en el nivel 3 (período 3), en el orbital s con 1 electrón (grupo 1, alcalinos). Los elementos del bloque s tienen su electrón diferencial en orbitales s."
  },
  {
    id: "s13",
    categoria: "Química",
    pregunta: "¿Qué energía tiene un fotón de luz con λ = 6 × 10⁻¹¹ m? (Datos: h = 6.63 × 10⁻³⁴ J·s; c = 3 × 10⁸ m/s)",
    opciones: [
      "2.189 × 10⁻¹⁸ J",
      "3.315 × 10⁻¹⁵ J",
      "1.326 × 10⁻¹⁷ J",
      "5.521 × 10⁻¹⁶ J"
    ],
    respuestaCorrecta: 1,
    explicacion: "Usando $E = h\\cdot c/\\lambda$: $(6.63 × 10^{-34} × 3 × 10^8) / 6 × 10^{-11} = 3.315 × 10^{-15}$ J."
  },
  // Biología
  {
    id: "s14",
    categoria: "Biología",
    pregunta: "¿Cuál es la diferencia principal entre el azúcar del DNA y el del RNA?",
    opciones: [
      "El DNA tiene desoxiribosa y el RNA ribosa",
      "El DNA tiene ribosa y el RNA desoxiribosa",
      "Ambos tienen glucosa pero en configuraciones diferentes",
      "El DNA tiene fructosa y el RNA sacarosa"
    ],
    respuestaCorrecta: 0,
    explicacion: "La pentosa en el DNA es desoxiribosa (falta un grupo OH en el carbono 2'), mientras que en el RNA es ribosa. Esta diferencia afecta a la estabilidad de las moléculas."
  },
  {
    id: "s15",
    categoria: "Biología",
    pregunta: "Si la secuencia de DNA transcrito es TAA-GCA-CTC, ¿cuál será la secuencia de RNA resultante?",
    opciones: [
      "TAA-GCA-CTC",
      "UAA-GCA-CUC",
      "ATT-CGT-GAG",
      "AUU-CGU-GAG"
    ],
    respuestaCorrecta: 3,
    explicacion: "En la transcripción, el DNA (TAA-GCA-CTC) se convierte en RNA sustituyendo timina (T) por uracilo (U). Por tanto, T → A, A → U, G → C, C → G."
  },
  // Filosofía
  {
    id: "s16",
    categoria: "Filosofía",
    pregunta: "¿Qué entiende Platón por 'mundo de las ideas'?",
    opciones: [
      "El mundo de los sueños y la imaginación",
      "El mundo de las opiniones personales",
      "El mundo de las formas perfectas e inmutables",
      "El mundo de los sentidos y la experiencia"
    ],
    respuestaCorrecta: 2,
    explicacion: "Para Platón, el mundo de las ideas es el reino de las formas perfectas, eternas e inmutables, que son la verdadera realidad de la que el mundo físico es solo una copia imperfecta."
  },
  {
    id: "s17",
    categoria: "Filosofía",
    pregunta: "¿Cuál es la principal diferencia entre el racionalismo de Descartes y el empirismo de Hume?",
    opciones: [
      "Sus creencias religiosas",
      "La fuente del conocimiento: razón vs. experiencia sensorial",
      "El idioma en que escribieron",
      "La época en que vivieron"
    ],
    respuestaCorrecta: 1,
    explicacion: "Descartes defendía que el conocimiento verdadero proviene de la razón pura, mientras que Hume sostenía que todo conocimiento deriva de la experiencia sensorial."
  },
  // Matemáticas
  {
    id: "s18",
    categoria: "Matemáticas",
    pregunta: "La tarifa de la companyia A segueix la funció $f(x) = 0.4x + 20$, mientras que la companyia B té la tarifa $g(x) = 0.01x^2 + 0.1x + 10$. Si un usuari recorre 10 km, ¿quánt més cara és la tarifa A respecte a la B?",
    opciones: ["12 euros", "24 euros", "10 euros", "5 euros"],
    respuestaCorrecta: 0,
    explicacion: "Per a $x = 10$, $f(10) = 24$ i $g(10) = 12$. La diferència és $24 - 12 = 12$ euros."
  },
  {
    id: "s19",
    categoria: "Matemáticas",
    pregunta: "En el mateix context de les tarifes de les companyies A i B, ¿per a quina distància les dues tarifes coincideixen?",
    opciones: ["20 km", "50 km", "15 km", "30 km"],
    respuestaCorrecta: 1,
    explicacion: "Resolent l'equació $0.4x + 20 = 0.01x^2 + 0.1x + 10$, s'obté $x = 50$ km (la solució negativa es descarta)."
  },
  {
    id: "s20",
    categoria: "Matemáticas",
    pregunta: "En un sistema de ecuaciones lineales con matriz ampliada $\\overline{M} = \\begin{pmatrix} 4 & 2 & -1 & 4 \\\\ 1 & -1 & k & 3 \\\\ 3 & 3 & 0 & 1 \\end{pmatrix}$, ¿para qué valor de $k$ el sistema es compatible indeterminado?",
    opciones: [
      "0",
      "-1",
      "1",
      "2"
    ],
    respuestaCorrecta: 1,
    explicacion: "El sistema es compatible indeterminado cuando el determinante de la matriz de coeficientes es cero. Resolviendo $\\det(M) = -6k - 6 = 0$, se obtiene $k = -1$."
  },
  {
    id: "s21",
    categoria: "Matemáticas",
    pregunta: "En una urna con 2 bolas 'A', 2 bolas 'S' y 5 bolas con otras letras, ¿cuál es la probabilidad de sacar dos bolas con letras diferentes en dos extracciones sin reemplazo?",
    opciones: [
      "$ \\frac{1}{36}$",
      "$ \\frac{17}{18}$",
      "$ \\frac{5}{9}$",
      "$ \\frac{7}{8}$"
    ],
    respuestaCorrecta: 1,
    explicacion: "La probabilidad de que ambas letras sean iguales es $2 \\times \\left(\\frac{2}{9} \\times \\frac{1}{8}\\right) = \\frac{1}{36}$. Por lo tanto, la probabilidad de que sean diferentes es $1 - \\frac{1}{36} = \\frac{35}{36}$."
  },
  {
    id: "s22",
    categoria: "Matemáticas",
    pregunta: "Dados los puntos $A(1, 2, 3)$ y $B(-3, -2, 3)$, ¿cuál es la ecuación del plano mediador (equidistante a ambos puntos)?",
    opciones: [
      "$x + y + 1 = 0$",
      "$x - y + 1 = 0$",
      "$x + z + 1 = 0$",
      "$y - z + 1 = 0$"
    ],
    respuestaCorrecta: 0,
    explicacion: "El vector $\\overrightarrow{AB} = (-4, -4, 0)$ es normal al plano. Usando el punto medio $(-1, 0, 3)$, la ecuación es $-4(x + 1) - 4(y - 0) + 0(z - 3) = 0$, que simplifica a $x + y + 1 = 0$."
  },
  {
    id: "s23",
    categoria: "Matemáticas",
    pregunta: "Para la función $f(x) = \\frac{2 \\ln x}{x}$, ¿en qué valor de $x$ se alcanza el máximo absoluto?",
    opciones: [
      "$x = 1$",
      "$x = e$",
      "$x = 2$",
      "$x = 0.5$"
    ],
    respuestaCorrecta: 1,
    explicacion: "La derivada $f'(x) = \\frac{2(1 - \\ln x)}{x^2}$ se anula en $\\ln x = 1$, es decir, $x = e$. La segunda derivada $f''(e) < 0$ confirma que es un máximo."
  },
  // Matemáticas CCSS
  {
    id: "s24",
    categoria: "Matemáticas CCSS",
    pregunta: "La tarifa de la companyia A segueix la funció $f(x) = 0.4x + 20$, mientras que la companyia B té la tarifa $g(x) = 0.01x^2 + 0.1x + 10$. Si un usuari recorre 10 km, ¿quánt més cara és la tarifa A respecte a la B?",
    opciones: ["12 euros", "24 euros", "10 euros", "5 euros"],
    respuestaCorrecta: 0,
    explicacion: "Per a $x = 10$, $f(10) = 24$ i $g(10) = 12$. La diferència és $24 - 12 = 12$ euros."
  },
  {
    id: "s25",
    categoria: "Matemáticas CCSS",
    pregunta: "En el mateix context de les tarifes de les companyies A i B, ¿per a quina distància les dues tarifes coincideixen?",
    opciones: ["20 km", "50 km", "15 km", "30 km"],
    respuestaCorrecta: 1,
    explicacion: "Resolent l'equació $0.4x + 20 = 0.01x^2 + 0.1x + 10$, s'obté $x = 50$ km (la solució negativa es descarta)."
  },
  {
    id: "s26",
    categoria: "Matemáticas CCSS",
    pregunta: "En un sistema de producció de sofàs, si s'afegeix l'equació $0.1x + 0.3y + 0.2z = 284$ al sistema inicial, ¿quina és la producció de la tercera fàbrica (z)?",
    opciones: ["310", "630", "320", "284"],
    respuestaCorrecta: 2,
    explicacion: "Resolent el sistema ampliat pel mètode de Gauss, s'obté $z = 320$ sofàs."
  },
  {
    id: "s27",
    categoria: "Matemáticas CCSS",
    pregunta: "En una enquesta, 218 de 350 persones estan a favor d'una proposta. Quin és l'interval de confiança del 95% per a la proporció poblacional?",
    opciones: ["[50%, 60%]", "[57.21%, 67.37%]", "[55%, 65%]", "[60%, 70%]"],
    respuestaCorrecta: 1,
    explicacion: "Utilitzant la fórmula $\\hat{p} \\pm z_{\\gamma} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$, amb $\\hat{p} = 0.6229$, l'interval és [57.21%, 67.37%]."
  },
  {
    id: "s28",
    categoria: "Matemáticas CCSS",
    pregunta: "Si un conductor té una probabilitat de $\\frac{1}{3}$ d'aturar-se en cada àrea de servei, ¿quina és la probabilitat que s'aturi exactamente dues vegades en tres àrees?",
    opciones: ["0.2222", "0.2963", "0.3333", "0.1481"],
    respuestaCorrecta: 0,
    explicacion: "Usant la distribució binomial: $P(X=2) = \\binom{3}{2} \\left(\\frac{1}{3}\\right)^2 \\left(\\frac{2}{3}\\right) = 0.2222$."
  },
  // Filosofía adicional
  {
    id: "s29",
    categoria: "Filosofía",
    pregunta: "¿Qué significa el 'imperativo categórico' de Kant?",
    opciones: [
      "Una orden militar absoluta",
      "Un principio moral universal y necesario",
      "Una ley física inmutable",
      "Una regla de etiqueta social"
    ],
    respuestaCorrecta: 1,
    explicacion: "El imperativo categórico de Kant es un principio ético que establece que debemos actuar solo según aquella máxima por la cual podamos querer que al mismo tiempo se convierta en ley universal."
  },
  {
    id: "s30",
    categoria: "Filosofía",
    pregunta: "¿Qué concepto es fundamental en la filosofía existencialista de Sartre?",
    opciones: [
      "La existencia precede a la esencia",
      "La esencia precede a la existencia",
      "El determinismo absoluto",
      "La predestinación divina"
    ],
    respuestaCorrecta: 0,
    explicacion: "Sartre afirma que primero existimos y luego, a través de nuestras acciones y decisiones, creamos nuestra esencia, lo que implica una libertad radical y responsabilidad total."
  },
  {
    id: "s31",
    categoria: "Filosofía",
    pregunta: "¿Qué propone Nietzsche con su concepto del 'eterno retorno'?",
    opciones: [
      "Un ciclo literal de reencarnaciones",
      "Una prueba existencial de afirmación de la vida",
      "Una teoría astronómica",
      "Un concepto religioso tradicional"
    ],
    respuestaCorrecta: 1,
    explicacion: "El eterno retorno es una prueba hipotética: si cada momento de tu vida se repitiera eternamente, ¿lo aceptarías? Es una forma de evaluar nuestra actitud hacia la vida y promover su afirmación plena."
  },
  {
    id: "s32",
    categoria: "Filosofía",
    pregunta: "¿Qué es la 'dialéctica' según Hegel?",
    opciones: [
      "Un método de debate político",
      "Un proceso de tesis, antítesis y síntesis",
      "Una forma de argumentación lógica",
      "Un tipo de retórica antigua"
    ],
    respuestaCorrecta: 1,
    explicacion: "Para Hegel, la dialéctica es el proceso por el cual una idea (tesis) genera su opuesto (antítesis), y de su conflicto surge una resolución superior (síntesis) que conserva elementos de ambas."
  },
  {
    id: "s33",
    categoria: "Filosofía",
    pregunta: "¿Qué caracteriza al 'mito de la caverna' de Platón?",
    opciones: [
      "Es una historia de aventuras",
      "Es una alegoría sobre la ignorancia y el conocimiento",
      "Es un relato sobre la creación del mundo",
      "Es una descripción geológica"
    ],
    respuestaCorrecta: 1,
    explicacion: "El mito de la caverna ilustra cómo los humanos pueden estar encadenados a una realidad ilusoria (las sombras) y el proceso de liberación hacia el verdadero conocimiento (la luz del sol)."
  }
];

// Preguntas exclusivas para usuarios premium
export const premiumOnlyQuestions = [
  {
    id: "p1",
    categoria: "Matemáticas",
    pregunta: "Resuelve la ecuación compleja: z² + 2z + 2 = 0",
    opciones: [
      "z = -1 ± i",
      "z = -1 ± √2i",
      "z = 1 ± i",
      "z = -1 ± 2i"
    ],
    respuestaCorrecta: 0,
    explicacion: "Usando la fórmula cuadrática y completando el cuadrado: z = -1 ± i"
  },
  {
    id: "p2",
    categoria: "Física",
    pregunta: "En el efecto fotoeléctrico, ¿qué sucede si la frecuencia de la luz incidente es menor que la frecuencia umbral?",
    opciones: [
      "Los electrones son emitidos con mayor energía cinética",
      "No se emiten electrones",
      "Se emiten más electrones",
      "La energía cinética de los electrones es cero"
    ],
    respuestaCorrecta: 1,
    explicacion: "Si la frecuencia es menor que la umbral, los fotones no tienen suficiente energía para liberar electrones."
  },
  {
    id: "p3",
    categoria: "Química",
    pregunta: "Explica el efecto del ion común en el equilibrio de solubilidad",
    opciones: [
      "Aumenta la solubilidad",
      "Disminuye la solubilidad",
      "No afecta la solubilidad",
      "Elimina el equilibrio"
    ],
    respuestaCorrecta: 1,
    explicacion: "El ion común disminuye la solubilidad debido al principio de Le Châtelier."
  },
  {
    id: "p4",
    categoria: "Biología",
    pregunta: "¿Qué es la fosforilación oxidativa?",
    opciones: [
      "Un proceso de fermentación",
      "La síntesis de ATP en la membrana mitocondrial",
      "La degradación de glucosa",
      "La síntesis de proteínas"
    ],
    respuestaCorrecta: 1,
    explicacion: "Es el proceso de síntesis de ATP que ocurre en la membrana mitocondrial interna usando la cadena de transporte de electrones."
  }
];

// Exportar las preguntas premium (que ahora son solo las exclusivas)
export const premiumQuestions = premiumOnlyQuestions;

// Función para obtener preguntas según el estado premium
export function getQuestions(isPremium = false) {
  return isPremium ? premiumQuestions : standardQuestions;
} 