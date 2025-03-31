"use client"

import React, { useState, useEffect } from 'react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import Image from 'next/image';
import HeroSeleTest from '@/components/HeroSeleTest';

// Definición de interfaces y tipos
interface Question {
  id: number;
  pregunta: string;
  opciones: string[];
  respuesta_correcta: string;
  categoria: string;
  explicacion?: string;
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

// Lista de asignaturas disponibles (solo las que tienen preguntas)
const availableSubjects: Subject[] = [
  // Fase General
  { id: 'history', name: 'Història', category: 'Fase General' },
  { id: 'philosophy', name: 'Filosofia', category: 'Fase General' },
  
  // Fase Específica - Ciencias
  { id: 'math', name: 'Matemàtiques', category: 'Científic' },
  { id: 'physics', name: 'Física', category: 'Científic' },
  { id: 'chemistry', name: 'Química', category: 'Científic' },
  { id: 'biology', name: 'Biologia', category: 'Científic' },
  
  // Fase Específica - Humanidades y Ciencias Sociales
  { id: 'mathSocials', name: 'Matemàtiques Aplicades', category: 'Social' },
  { id: 'geography', name: 'Geografia', category: 'Social' }
];

// Banco de preguntas
const initialQuestions: Question[] = [
  // Geografía y Medio Ambiente
  {
    "id": 14,
    "pregunta": "¿Cuál de los siguientes problemas NO está directamente asociado a la pérdida de cobertura vegetal?",
    "opciones": [
      "Erosión del suelo",
      "Inundaciones",
      "Aumento de la biodiversidad",
      "Pérdida de hábitats para especies animales"
    ],
    "respuesta_correcta": "Aumento de la biodiversidad",
    "explicacion": "La pérdida de cobertura vegetal generalmente reduce la biodiversidad al destruir hábitats y alterar ecosistemas, no aumenta.",
    "categoria": "Geografia"
  },
  {
    "id": 15,
    "pregunta": "Según el documento, ¿qué caracteriza el clima mediterráneo semiárido de Lleida?",
    "opciones": [
      "Precipitaciones abundantes todo el año",
      "Inviernos húmedos y muy fríos, veranos cálidos",
      "Ausencia total de sequía estival",
      "Amplitud térmica muy baja"
    ],
    "respuesta_correcta": "Inviernos húmedos y muy fríos, veranos cálidos",
    "explicacion": "El clima de Lleida se describe con inviernos fríos y húmedos, veranos cálidos, y una precipitación anual escasa (340 mm).",
    "categoria": "Geografia"
  },
  {
    "id": 16,
    "pregunta": "¿Qué efecto del cambio climático se menciona específicamente para la costa catalana?",
    "opciones": [
      "Disminución del nivel del mar",
      "Reducción de la intensidad de los temporales",
      "Litoral amenazado por el aumento del nivel del mar",
      "Aumento de la vegetación costera"
    ],
    "respuesta_correcta": "Litoral amenazado por el aumento del nivel del mar",
    "explicacion": "El documento destaca que el litoral catalán está amenazado por el incremento del nivel del mar y el mayor embate de temporales debido al cambio climático.",
    "categoria": "Geografia"
  },
  {
    "id": 17,
    "pregunta": "En los Pirineos, ¿qué tipo de vegetación predomina en el piso alpino (2,400-3,000 m)?",
    "opciones": [
      "Bosques de coníferas",
      "Prados alpinos",
      "Selva tropical",
      "Cultivos agrícolas"
    ],
    "respuesta_correcta": "Prados alpinos",
    "explicacion": "En el piso alpino, la vegetación está dominada por prados alpinos debido a las condiciones extremas y la cobertura de nieve durante gran parte del año.",
    "categoria": "Geografia"
  },
  {
    "id": 18,
    "pregunta": "¿Qué define un 'paisaje cultural' según el documento?",
    "opciones": [
      "Áreas naturales sin intervención humana",
      "Resultado de la interacción entre actividades humanas y el medio natural a lo largo del tiempo",
      "Zonas exclusivamente urbanas",
      "Espacios protegidos sin valor histórico"
    ],
    "respuesta_correcta": "Resultado de la interacción entre actividades humanas y el medio natural a lo largo del tiempo",
    "explicacion": "Un paisaje cultural surge de la modificación humana del paisaje natural, reflejando identidad comunitaria y procesos económicos, sociales y culturales.",
    "categoria": "Geografia"
  },
  {
    "id": 19,
    "pregunta": "¿Cuál de estas provincias españolas se menciona como ejemplo de área con escaso dinamismo económico y fuerte emigración?",
    "opciones": [
      "Barcelona",
      "Madrid",
      "Ourense",
      "Valencia"
    ],
    "respuesta_correcta": "Ourense",
    "explicacion": "Ourense, en el noroeste peninsular, es citada como ejemplo de provincia con bajo dinamismo económico y históricas migraciones.",
    "categoria": "Geografia"
  },
  {
    "id": 20,
    "pregunta": "¿Qué consecuencia demográfica se deriva de la emigración juvenil en zonas rurales?",
    "opciones": [
      "Aumento de la natalidad",
      "Rejuvenecimiento de la población",
      "Acentuación del envejecimiento poblacional",
      "Equilibrio entre grupos de edad"
    ],
    "respuesta_correcta": "Acentuación del envejecimiento poblacional",
    "explicacion": "La emigración de jóvenes agrava el envejecimiento demográfico, ya que reduce la población en edad reproductiva y laboral.",
    "categoria": "Geografia"
  },

  // Historia
  {
    "id": 14,
    "pregunta": "Durante la Segunda República española (1931-1936), ¿qué derecho fundamental se reconoció por primera vez a las mujeres?",
    "opciones": [
      "Derecho al voto",
      "Derecho a la propiedad privada",
      "Derecho a la educación superior",
      "Derecho al divorcio"
    ],
    "respuesta_correcta": "Derecho al voto",
    "explicacion": "La Constitución de 1931 reconoció el sufragio universal femenino, permitiendo a las mujeres votar por primera vez en las elecciones de 1933.",
    "categoria": "Historia"
  },
  {
    "id": 15,
    "pregunta": "¿Qué caracterizó el papel de la mujer durante el franquismo (1939-1975)?",
    "opciones": [
      "Igualdad legal y participación política activa",
      "Rol doméstico y sumisión al género masculino",
      "Libertad para ejercer cualquier profesión",
      "Acceso prioritario a la educación universitaria"
    ],
    "respuesta_correcta": "Rol doméstico y sumisión al género masculino",
    "explicacion": "El franquismo promovió un modelo de mujer centrado en la familia y la sumisión al hombre, eliminando derechos como el divorcio y restringiendo su participación pública.",
    "categoria": "Historia"
  },
  {
    "id": 16,
    "pregunta": "La Semana Trágica de Barcelona (1909) fue un conflicto provocado principalmente por:",
    "opciones": [
      "La industrialización acelerada",
      "El embarque de reservistas para la Guerra de Melilla",
      "La prohibición del catalán",
      "La influencia del anarquismo internacional"
    ],
    "respuesta_correcta": "El embarque de reservistas para la Guerra de Melilla",
    "explicacion": "El malestar social estalló por el reclutamiento forzoso de reservistas para la guerra en Marruecos, llevando a protestas, barricadas y una fuerte represión.",
    "categoria": "Historia"
  },
  {
    "id": 17,
    "pregunta": "¿Qué reivindicaciones promovió la Assemblea de Catalunya durante el franquismo?",
    "opciones": [
      "Amnistía para presos políticos y autonomía para Cataluña",
      "Restauración de la monarquía borbónica",
      "Adhesión a la OTAN",
      "Liberalización económica"
    ],
    "respuesta_correcta": "Amnistía para presos políticos y autonomía para Cataluña",
    "explicacion": "Esta plataforma unitaria antifranquista buscaba libertades políticas, la liberación de presos y el restablecimiento del Estatut d'Autonomia de 1932.",
    "categoria": "Historia"
  },
  {
    "id": 18,
    "pregunta": "¿Qué grupo guerrillero antifranquista operó en zonas rurales después de la Guerra Civil?",
    "opciones": [
      "Los maquis",
      "Los tercios de Flandes",
      "Las Brigadas Internacionales",
      "La Falange"
    ],
    "respuesta_correcta": "Los maquis",
    "explicacion": "Los maquis fueron guerrilleros republicanos que continuaron la resistencia armada contra el régimen franquista hasta los años 50, especialmente en áreas montañosas.",
    "categoria": "Historia"
  },
  {
    "id": 19,
    "pregunta": "La 'Vaga de La Canadenca' (1919) en Barcelona fue un hito del movimiento obrero porque:",
    "opciones": [
      "Logró la jornada laboral de 8 horas",
      "Derrocó al gobierno central",
      "Impulsó el sufragio femenino",
      "Promovió la independencia de Cataluña"
    ],
    "respuesta_correcta": "Logró la jornada laboral de 8 horas",
    "explicacion": "Esta huelga general, liderada por anarquistas, obligó al gobierno a decretar la jornada de 8 horas, siendo una de las primeras conquistas laborales en Europa.",
    "categoria": "Historia"
  },
  {
    "id": 20,
    "pregunta": "¿Qué caracterizó al sistema político de la Restauración borbónica (1874-1923)?",
    "opciones": [
      "Democracia participativa y pluralismo",
      "Alternancia pactada entre conservadores y liberales (turnismo)",
      "Gobierno militar permanente",
      "Federalismo descentralizado"
    ],
    "respuesta_correcta": "Alternancia pactada entre conservadores y liberales (turnismo)",
    "explicacion": "El sistema se basaba en el turno pacífico de partidos (conservadores y liberales) mediante elecciones amañadas, excluyendo a otras fuerzas políticas.",
    "categoria": "Historia"
  },

  // Física
  {
    "id": 14,
    "pregunta": "Un satélite orbita Mercurio a una distancia de 3.36 × 10⁶ m de su centro. Si la masa de Mercurio es 3.285 × 10²³ kg, ¿cuál es la velocidad orbital del satélite? (Dato: G = 6.67 × 10⁻¹¹ N·m²/kg²)",
    "opciones": [
      "1.23 × 10³ m/s",
      "2.55 × 10³ m/s",
      "3.78 × 10³ m/s",
      "4.92 × 10³ m/s"
    ],
    "respuesta_correcta": "2.55 × 10³ m/s",
    "explicacion": "La velocidad orbital se calcula con la fórmula $v = \\sqrt{\\frac{G M}{r}}$. Sustituyendo los valores: $v = \\sqrt{\\frac{6.67 \\times 10^{-11} \\times 3.285 \\times 10^{23}}{3.36 \\times 10^6}} = 2.55 \\times 10^3 \\, \\text{m/s}$.",
    "categoria": "Física"
  },
  {
    "id": 15,
    "pregunta": "Para que un satélite escape del campo gravitatorio de Mercurio, su energía mecánica debe ser:",
    "opciones": [
      "Negativa",
      "Cero",
      "Positiva",
      "Igual a su energía cinética"
    ],
    "respuesta_correcta": "Cero",
    "explicacion": "La energía mecánica mínima para escapar de un campo gravitatorio es cero (Em ≥ 0). Esto implica que la energía cinética debe ser suficiente para superar la energía potencial gravitatoria negativa.",
    "categoria": "Física"
  },
  {
    "id": 16,
    "pregunta": "Un rayo produce una corriente máxima de 10⁵ A. ¿Cuál es el campo magnético a 0.1 m del rayo? (Dato: μ₀ = 4π × 10⁻⁷ T·m/A)",
    "opciones": [
      "0.1 T",
      "0.2 T",
      "0.3 T",
      "0.4 T"
    ],
    "respuesta_correcta": "0.2 T",
    "explicacion": "El campo magnético alrededor de un conductor rectilíneo se calcula con $B = \\frac{\\mu_0 I}{2 \\pi r}$. Sustituyendo: $B = \\frac{4\\pi \\times 10^{-7} \\times 10^5}{2 \\pi \\times 0.1} = 0.2 \\, \\text{T}$.",
    "categoria": "Física"
  },
  {
    "id": 17,
    "pregunta": "Un electrón se mueve a 10³ m/s perpendicularmente a un campo magnético de 0.2 T. ¿Cuál es la fuerza magnética sobre el electrón? (Dato: q = 1.602 × 10⁻¹⁹ C)",
    "opciones": [
      "3.2 × 10⁻¹⁷ N",
      "1.6 × 10⁻¹⁹ N",
      "6.4 × 10⁻²⁰ N",
      "8.0 × 10⁻¹⁸ N"
    ],
    "respuesta_correcta": "3.2 × 10⁻¹⁷ N",
    "explicacion": "La fuerza magnética es $F = q v B$. Sustituyendo: $F = 1.602 \\times 10^{-19} \\times 10^3 \\times 0.2 = 3.2 \\times 10^{-17} \\, \\text{N}$.",
    "categoria": "Física"
  },
  {
    "id": 18,
    "pregunta": "Un objeto de 0.5 kg oscila con un MAS de amplitud 0.19 m y frecuencia angular 6.41 rad/s. ¿Cuál es su energía mecánica total?",
    "opciones": [
      "0.186 J",
      "0.371 J",
      "0.742 J",
      "1.112 J"
    ],
    "respuesta_correcta": "0.371 J",
    "explicacion": "La energía mecánica en un MAS es $E_m = \\frac{1}{2} k A^2$. Primero calculamos $k = m \\omega^2 = 0.5 \\times (6.41)^2 = 20.54 \\, \\text{N/m}$. Luego, $E_m = \\frac{1}{2} \\times 20.54 \\times (0.19)^2 = 0.371 \\, \\text{J}$.",
    "categoria": "Física"
  },
  {
    "id": 19,
    "pregunta": "El polonio-210 (²¹⁰Po) se desintegra emitiendo una partícula alfa. ¿Cuál es el núcleo resultante?",
    "opciones": [
      "²⁰⁶Pb",
      "²¹⁰Bi",
      "²⁰⁸Hg",
      "²¹⁰At"
    ],
    "respuesta_correcta": "²⁰⁶Pb",
    "explicacion": "La desintegración alfa reduce el número atómico en 2 y el número másico en 4: $^{210}_{84}Po \\rightarrow ^{4}_{2}He + ^{206}_{82}Pb$.",
    "categoria": "Física"
  },
  {
    "id": 20,
    "pregunta": "En el efecto fotoeléctrico, si la longitud de onda umbral es 650 nm, ¿cuál es el trabajo de extracción del material? (Datos: h = 6.626 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, 1 eV = 1.602 × 10⁻¹⁹ J)",
    "opciones": [
      "1.91 eV",
      "2.45 eV",
      "3.06 eV",
      "4.12 eV"
    ],
    "respuesta_correcta": "1.91 eV",
    "explicacion": "El trabajo de extracción es $W_0 = h f_0 = \\frac{h c}{\\lambda_0}$. Calculamos $W_0 = \\frac{6.626 \\times 10^{-34} \\times 3 \\times 10^8}{650 \\times 10^{-9}} = 3.06 \\times 10^{-19} \\, \\text{J} = 1.91 \\, \\text{eV}$.",
    "categoria": "Física"
  },

  // Química
  {
    "id": 14,
    "pregunta": "Un elemento con configuración electrónica 1s² 2s² 2p⁶ 3s¹ pertenece al:",
    "opciones": [
      "Período 3, grupo 1, bloque s",
      "Período 2, grupo 1, bloque p",
      "Período 3, grupo 17, bloque p",
      "Período 4, grupo 1, bloque d"
    ],
    "respuesta_correcta": "Período 3, grupo 1, bloque s",
    "explicacion": "El último electrón está en el nivel 3 (período 3), en el orbital s con 1 electrón (grupo 1, alcalinos). Los elementos del bloque s tienen su electrón diferencial en orbitales s.",
    "categoria": "Química"
  },
  {
    "id": 15,
    "pregunta": "¿Qué energía tiene un fotón de luz con λ = 6 × 10⁻¹¹ m? (Datos: h = 6.63 × 10⁻³⁴ J·s; c = 3 × 10⁸ m/s)",
    "opciones": [
      "3.315 × 10⁻¹⁵ J",
      "2.189 × 10⁻¹⁸ J",
      "1.326 × 10⁻¹⁷ J",
      "5.521 × 10⁻¹⁶ J"
    ],
    "respuesta_correcta": "3.315 × 10⁻¹⁵ J",
    "explicacion": "Usando $E = h\\cdot c/\\lambda$: $(6.63 × 10^{-34} × 3 × 10^8) / 6 × 10^{-11} = 3.315 × 10^{-15}$ J.",
    "categoria": "Química"
  },
  {
    "id": 16,
    "pregunta": "Para la reacción CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O, si en el equilibrio hay 0.15 mol de ácido acético y inicialmente había 1 mol, ¿cuál es el valor de Kc?",
    "opciones": [
      "1.25",
      "4.19",
      "0.85",
      "2.50"
    ],
    "respuesta_correcta": "4.19",
    "explicacion": "x = moles consumidos = 1 - 0.15 = 0.85 mol. Kc = [Éster][Agua]/[Ácido][Alcohol] = (0.85 × 0.85)/(0.15 × 1.15) = 4.19. Los volúmenes se cancelan al ser constantes.",
    "categoria": "Química"
  },
  {
    "id": 17,
    "pregunta": "Según Le Châtelier, ¿cómo afecta un exceso de etanol al rendimiento de la formación de acetato de etilo?",
    "opciones": [
      "Disminuye el rendimiento",
      "No tiene efecto",
      "Aumenta el rendimiento",
      "Solo acelera la reacción"
    ],
    "respuesta_correcta": "Aumenta el rendimiento",
    "explicacion": "Un exceso de reactivo (etanol) desplaza el equilibrio hacia los productos (acetato de etilo + agua), aumentando el rendimiento según el principio de Le Châtelier.",
    "categoria": "Química"
  },
  {
    "id": 18,
    "pregunta": "¿Cuál es la relación entre butan-1-ol (CH₃CH₂CH₂CH₂OH) y dietiléter (CH₃CH₂OCH₂CH₃)?",
    "opciones": [
      "Isómeros geométricos",
      "Isómeros de cadena",
      "Isómeros de grupo funcional",
      "El mismo compuesto"
    ],
    "respuesta_correcta": "Isómeros de grupo funcional",
    "explicacion": "Ambos tienen fórmula C₄H₁₀O pero difieren en su grupo funcional: alcohol (-OH) vs. éter (-O-). Son isómeros constitucionales de grupo funcional.",
    "categoria": "Química"
  },
  {
    "id": 19,
    "pregunta": "¿Por qué el ciclohexanol es más soluble en agua que el ciclohexeno?",
    "opciones": [
      "Tiene menor masa molar",
      "Puede formar puentes de hidrógeno",
      "Es un compuesto iónico",
      "Tiene más átomos de carbono"
    ],
    "respuesta_correcta": "Puede formar puentes de hidrógeno",
    "explicacion": "El grupo -OH del ciclohexanol forma puentes de hidrógeno con el agua, mientras que el ciclohexeno (hidrocarburo apolar) solo tiene interacciones débiles de London.",
    "categoria": "Química"
  },
  {
    "id": 20,
    "pregunta": "En la electrólisis del agua acidulada, ¿qué gas se produce en el cátodo?",
    "opciones": [
      "Oxígeno",
      "Hidrógeno",
      "Dióxido de carbono",
      "Cloro"
    ],
    "respuesta_correcta": "Hidrógeno",
    "explicacion": "En el cátodo ocurre la reducción: 2H⁺ + 2e⁻ → H₂(g). El oxígeno se genera en el ánodo por oxidación del agua.",
    "categoria": "Química"
  },

  // Biología
  {
    "id": 14,
    "pregunta": "¿Cuál es la diferencia principal entre el azúcar del DNA y el del RNA?",
    "opciones": [
      "El DNA tiene ribosa y el RNA desoxiribosa",
      "El DNA tiene desoxiribosa y el RNA ribosa",
      "Ambos tienen glucosa pero en configuraciones diferentes",
      "El DNA tiene fructosa y el RNA sacarosa"
    ],
    "respuesta_correcta": "El DNA tiene desoxiribosa y el RNA ribosa",
    "explicacion": "La pentosa en el DNA es desoxiribosa (falta un grupo OH en el carbono 2'), mientras que en el RNA es ribosa. Esta diferencia afecta a la estabilidad de las moléculas.",
    "categoria": "Biología"
  },
  {
    "id": 15,
    "pregunta": "Si la secuencia de DNA transcrito es TAA-GCA-CTC, ¿cuál será la secuencia de RNA resultante?",
    "opciones": [
      "AUU-CGU-GAG",
      "ATT-CGT-GAG",
      "UAA-GCA-CUC",
      "TAA-GCA-CTC"
    ],
    "respuesta_correcta": "AUU-CGU-GAG",
    "explicacion": "En la transcripción, el DNA (TAA-GCA-CTC) se convierte en RNA sustituyendo timina (T) por uracilo (U). Por tanto, T → A, A → U, G → C, C → G.",
    "categoria": "Biología"
  },
  {
    "id": 16,
    "pregunta": "La enfermedad de Stargardt, que requiere heredar dos alelos defectuosos del gen ABCA4, tiene un patrón de herencia:",
    "opciones": [
      "Dominante y ligado al sexo",
      "Recesivo y autosómico",
      "Dominante y autosómico",
      "Recesivo y ligado al sexo"
    ],
    "respuesta_correcta": "Recesivo y autosómico",
    "explicacion": "Es recesiva porque se necesitan dos copias del alelo defectuoso, y autosómica porque el gen ABCA4 está en el cromosoma 1 (no sexual). Afecta por igual a hombres y mujeres.",
    "categoria": "Biología"
  },
  {
    "id": 17,
    "pregunta": "En terapia génica para la enfermedad de Stargardt, ¿qué función cumple el virus modificado?",
    "opciones": [
      "Destruir células defectuosas",
      "Actuar como vector para introducir el gen funcional",
      "Producir anticuerpos contra el gen mutado",
      "Estimular la división celular"
    ],
    "respuesta_correcta": "Actuar como vector para introducir el gen funcional",
    "explicacion": "Los virus modificados se usan como vectores para transportar e insertar el gen terapéutico (ABCA4 funcional) en las células de la retina.",
    "categoria": "Biología"
  },
  {
    "id": 18,
    "pregunta": "¿Qué enzima es esencial para cortar y unir fragmentos de DNA en la creación de DNA recombinante?",
    "opciones": [
      "ADN polimerasa y helicasa",
      "Enzimas de restricción y ligasas",
      "Transcriptasa inversa y primasa",
      "Amilasas y proteasas"
    ],
    "respuesta_correcta": "Enzimas de restricción y ligasas",
    "explicacion": "Las enzimas de restricción cortan el DNA en secuencias específicas, y las ligasas unen los fragmentos para formar el DNA recombinante.",
    "categoria": "Biología"
  },
  {
    "id": 19,
    "pregunta": "El herbicida Paraquat® inhibe la fotofosforilación. ¿En qué orgánulo y estructura celular actúa?",
    "opciones": [
      "Mitocondria - Crestas mitocondriales",
      "Cloroplasto - Membrana tilacoidal",
      "Núcleo - Cromatina",
      "Retículo endoplasmático - Membrana rugosa"
    ],
    "respuesta_correcta": "Cloroplasto - Membrana tilacoidal",
    "explicacion": "La fotofosforilación ocurre en los tilacoides de los cloroplastos durante la fase luminosa de la fotosíntesis. Paraquat® bloquea esta cadena de transporte de electrones.",
    "categoria": "Biología"
  },
  {
    "id": 20,
    "pregunta": "¿Por qué el calentamiento global podría aumentar las infecciones fúngicas en mamíferos?",
    "opciones": [
      "Los hongos desarrollan paredes celulares más resistentes",
      "Mutaciones aleatorias permiten a los hongos tolerar temperaturas corporales más altas",
      "Los mamíferos pierden inmunidad con el calor",
      "Los hongos se vuelven fotosintéticos"
    ],
    "respuesta_correcta": "Mutaciones aleatorias permiten a los hongos tolerar temperaturas corporales más altas",
    "explicacion": "El aumento de temperaturas selecciona hongos con mutaciones que les permiten sobrevivir en ambientes más cálidos, incluyendo el cuerpo de mamíferos (selección natural).",
    "categoria": "Biología"
  },

  // Matemáticas
  {
    "id": 14,
    "pregunta": "La tarifa de la companyia A segueix la funció $f(x) = 0.4x + 20$, mentre que la companyia B té la tarifa $g(x) = 0.01x^2 + 0.1x + 10$. Si un usuari recorre 10 km, ¿quánt més cara és la tarifa A respecte a la B?",
    "opciones": ["12 euros", "24 euros", "10 euros", "5 euros"],
    "respuesta_correcta": "12 euros",
    "explicacion": "Per a $x = 10$, $f(10) = 24$ i $g(10) = 12$. La diferència és $24 - 12 = 12$ euros.",
    "categoria": "Matemáticas"
  },
  {
    "id": 15,
    "pregunta": "En el mateix context de les tarifes de les companyies A i B, ¿per a quina distància les dues tarifes coincideixen?",
    "opciones": ["20 km", "50 km", "15 km", "30 km"],
    "respuesta_correcta": "50 km",
    "explicacion": "Resolent l'equació $0.4x + 20 = 0.01x^2 + 0.1x + 10$, s'obté $x = 50$ km (la solució negativa es descarta).",
    "categoria": "Matemáticas"
  },
  {
    "id": 16,
    "pregunta": "En un sistema de ecuaciones lineales con matriz ampliada $\\overline{M} = \\begin{pmatrix} 4 & 2 & -1 & 4 \\\\ 1 & -1 & k & 3 \\\\ 3 & 3 & 0 & 1 \\end{pmatrix}$, ¿para qué valor de $k$ el sistema es compatible indeterminado?",
    "opciones": [
      "0",
      "-1",
      "1",
      "2"
    ],
    "respuesta_correcta": "-1",
    "explicacion": "El sistema es compatible indeterminado cuando el determinante de la matriz de coeficientes es cero. Resolviendo $\\det(M) = -6k - 6 = 0$, se obtiene $k = -1$.",
    "categoria": "Matemáticas"
  },
  {
    "id": 17,
    "pregunta": "En una urna con 2 bolas 'A', 2 bolas 'S' y 5 bolas con otras letras, ¿cuál es la probabilidad de sacar dos bolas con letras diferentes en dos extracciones sin reemplazo?",
    "opciones": [
      "$ \\frac{1}{36}$",
      "$ \\frac{17}{18}$",
      "$ \\frac{5}{9}$",
      "$ \\frac{7}{8}$"
    ],
    "respuesta_correcta": "$ \\frac{17}{18}$",
    "explicacion": "La probabilidad de que ambas letras sean iguales es $2 \\times \\left(\\frac{2}{9} \\times \\frac{1}{8}\\right) = \\frac{1}{36}$. Por lo tanto, la probabilidad de que sean diferentes es $1 - \\frac{1}{36} = \\frac{35}{36}$.",
    "categoria": "Matemáticas"
  },
  {
    "id": 18,
    "pregunta": "Dados los puntos $A(1, 2, 3)$ y $B(-3, -2, 3)$, ¿cuál es la ecuación del plano mediador (equidistante a ambos puntos)?",
    "opciones": [
      "$x + y + 1 = 0$",
      "$x - y + 1 = 0$",
      "$x + z + 1 = 0$",
      "$y - z + 1 = 0$"
    ],
    "respuesta_correcta": "$x + y + 1 = 0$",
    "explicacion": "El vector $\\overrightarrow{AB} = (-4, -4, 0)$ es normal al plano. Usando el punto medio $(-1, 0, 3)$, la ecuación es $-4(x + 1) - 4(y - 0) + 0(z - 3) = 0$, que simplifica a $x + y + 1 = 0$.",
    "categoria": "Matemáticas"
  },
  {
    "id": 19,
    "pregunta": "Para la función $f(x) = \\frac{2 \\ln x}{x}$, ¿en qué valor de $x$ se alcanza el máximo absoluto?",
    "opciones": [
      "$x = 1$",
      "$x = e$",
      "$x = 2$",
      "$x = 0.5$"
    ],
    "respuesta_correcta": "$x = e$",
    "explicacion": "La derivada $f'(x) = \\frac{2(1 - \\ln x)}{x^2}$ se anula en $\\ln x = 1$, es decir, $x = e$. La segunda derivada $f''(e) < 0$ confirma que es un máximo.",
    "categoria": "Matemáticas"
  },

  // Matemáticas CCSS
  {
    "id": 14,
    "pregunta": "La tarifa de la companyia A segueix la funció $f(x) = 0.4x + 20$, mentre que la companyia B té la tarifa $g(x) = 0.01x^2 + 0.1x + 10$. Si un usuari recorre 10 km, ¿quánt més cara és la tarifa A respecte a la B?",
    "opciones": ["12 euros", "24 euros", "10 euros", "5 euros"],
    "respuesta_correcta": "12 euros",
    "explicacion": "Per a $x = 10$, $f(10) = 24$ i $g(10) = 12$. La diferència és $24 - 12 = 12$ euros.",
    "categoria": "Matemáticas CCSS"
  },
  {
    "id": 15,
    "pregunta": "En el mateix context de les tarifes de les companyies A i B, ¿per a quina distància les dues tarifes coincideixen?",
    "opciones": ["20 km", "50 km", "15 km", "30 km"],
    "respuesta_correcta": "50 km",
    "explicacion": "Resolent l'equació $0.4x + 20 = 0.01x^2 + 0.1x + 10$, s'obté $x = 50$ km (la solució negativa es descarta).",
    "categoria": "Matemáticas CCSS"
  },
  {
    "id": 16,
    "pregunta": "En un sistema de producció de sofàs, si s'afegeix l'equació $0.1x + 0.3y + 0.2z = 284$ al sistema inicial, ¿quina és la producció de la tercera fàbrica (z)?",
    "opciones": ["310", "630", "320", "284"],
    "respuesta_correcta": "320",
    "explicacion": "Resolent el sistema ampliat pel mètode de Gauss, s'obté $z = 320$ sofàs.",
    "categoria": "Matemáticas CCSS"
  },
  {
    "id": 17,
    "pregunta": "En una enquesta, 218 de 350 persones estan a favor d'una proposta. Quin és l'interval de confiança del 95% per a la proporció poblacional?",
    "opciones": ["[50%, 60%]", "[57.21%, 67.37%]", "[55%, 65%]", "[60%, 70%]"],
    "respuesta_correcta": "[57.21%, 67.37%]",
    "explicacion": "Utilitzant la fórmula $\\hat{p} \\pm z_{\\gamma} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$, amb $\\hat{p} = 0.6229$, l'interval és [57.21%, 67.37%].",
    "categoria": "Matemáticas CCSS"
  },
  {
    "id": 18,
    "pregunta": "Si un conductor té una probabilitat de $\\frac{1}{3}$ d'aturar-se en cada àrea de servei, ¿quina és la probabilitat que s'aturi exactamente dues vegades en tres àrees?",
    "opciones": ["0.2222", "0.2963", "0.3333", "0.1481"],
    "respuesta_correcta": "0.2222",
    "explicacion": "Usant la distribució binomial: $P(X=2) = \\binom{3}{2} \\left(\\frac{1}{3}\\right)^2 \\left(\\frac{2}{3}\\right) = 0.2222$.",
    "categoria": "Matemáticas CCSS"
  },

  // Filosofía
  {
    "id": 14,
    "pregunta": "¿Qué entiende Platón por 'mundo de las ideas'?",
    "opciones": [
      "El mundo de los sueños y la imaginación",
      "El mundo de las formas perfectas e inmutables",
      "El mundo de las opiniones personales",
      "El mundo de los sentidos y la experiencia"
    ],
    "respuesta_correcta": "El mundo de las formas perfectas e inmutables",
    "explicacion": "Para Platón, el mundo de las ideas es el reino de las formas perfectas, eternas e inmutables, que son la verdadera realidad de la que el mundo físico es solo una copia imperfecta.",
    "categoria": "Filosofía"
  },
  {
    "id": 15,
    "pregunta": "¿Cuál es la principal diferencia entre el racionalismo de Descartes y el empirismo de Hume?",
    "opciones": [
      "El idioma en que escribieron",
      "La fuente del conocimiento: razón vs. experiencia sensorial",
      "La época en que vivieron",
      "Sus creencias religiosas"
    ],
    "respuesta_correcta": "La fuente del conocimiento: razón vs. experiencia sensorial",
    "explicacion": "Descartes defendía que el conocimiento verdadero proviene de la razón pura, mientras que Hume sostenía que todo conocimiento deriva de la experiencia sensorial.",
    "categoria": "Filosofía"
  },
  {
    "id": 16,
    "pregunta": "¿Qué significa el 'imperativo categórico' de Kant?",
    "opciones": [
      "Una orden militar absoluta",
      "Un principio moral universal y necesario",
      "Una ley física inmutable",
      "Una regla de etiqueta social"
    ],
    "respuesta_correcta": "Un principio moral universal y necesario",
    "explicacion": "El imperativo categórico de Kant es un principio ético que establece que debemos actuar solo según aquella máxima por la cual podamos querer que al mismo tiempo se convierta en ley universal.",
    "categoria": "Filosofía"
  },
  {
    "id": 17,
    "pregunta": "¿Qué concepto es fundamental en la filosofía existencialista de Sartre?",
    "opciones": [
      "La existencia precede a la esencia",
      "La esencia precede a la existencia",
      "El determinismo absoluto",
      "La predestinación divina"
    ],
    "respuesta_correcta": "La existencia precede a la esencia",
    "explicacion": "Sartre afirma que primero existimos y luego, a través de nuestras acciones y decisiones, creamos nuestra esencia, lo que implica una libertad radical y responsabilidad total.",
    "categoria": "Filosofía"
  },
  {
    "id": 18,
    "pregunta": "¿Qué propone Nietzsche con su concepto del 'eterno retorno'?",
    "opciones": [
      "Un ciclo literal de reencarnaciones",
      "Una prueba existencial de afirmación de la vida",
      "Una teoría astronómica",
      "Un concepto religioso tradicional"
    ],
    "respuesta_correcta": "Una prueba existencial de afirmación de la vida",
    "explicacion": "El eterno retorno es una prueba hipotética: si cada momento de tu vida se repitiera eternamente, ¿lo aceptarías? Es una forma de evaluar nuestra actitud hacia la vida y promover su afirmación plena.",
    "categoria": "Filosofía"
  },
  {
    "id": 19,
    "pregunta": "¿Qué es la 'dialéctica' según Hegel?",
    "opciones": [
      "Un método de debate político",
      "Un proceso de tesis, antítesis y síntesis",
      "Una forma de argumentación lógica",
      "Un tipo de retórica antigua"
    ],
    "respuesta_correcta": "Un proceso de tesis, antítesis y síntesis",
    "explicacion": "Para Hegel, la dialéctica es el proceso por el cual una idea (tesis) genera su opuesto (antítesis), y de su conflicto surge una resolución superior (síntesis) que conserva elementos de ambas.",
    "categoria": "Filosofía"
  },
  {
    "id": 20,
    "pregunta": "¿Qué caracteriza al 'mito de la caverna' de Platón?",
    "opciones": [
      "Es una historia de aventuras",
      "Es una alegoría sobre la ignorancia y el conocimiento",
      "Es un relato sobre la creación del mundo",
      "Es una descripción geológica"
    ],
    "respuesta_correcta": "Es una alegoría sobre la ignorancia y el conocimiento",
    "explicacion": "El mito de la caverna ilustra cómo los humanos pueden estar encadenados a una realidad ilusoria (las sombras) y el proceso de liberación hacia el verdadero conocimiento (la luz del sol).",
    "categoria": "Filosofía"
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
    if (text.includes("$")) {
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

  const isCorrect = hasAnswered && selectedAnswer === question.respuesta_correcta;
  const isIncorrect = hasAnswered && selectedAnswer && selectedAnswer !== question.respuesta_correcta;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
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

      {hasAnswered && (
        <div className="mt-6 space-y-4">
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
            <h4 className="font-semibold mb-2">Explicación:</h4>
            <p className="text-gray-700">
              {question.explicacion || "La respuesta correcta es: " + formatText(question.respuesta_correcta)}
            </p>
          </div>
          <button
            onClick={() => onSelectAnswer('next')}
            className="w-full bg-selectivi-yellow text-white py-3 rounded-lg hover:bg-selectivi-yellow/90 transition-colors"
          >
            Siguiente pregunta
          </button>
        </div>
      )}
    </div>
  );
};

// Componente de Onboarding
const Onboarding: React.FC<{
  onComplete: (selectedSubjects: string[], totalQuestions: number) => void;
}> = ({ onComplete }) => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [totalQuestions, setTotalQuestions] = useState<number>(10);
  const [maxQuestions, setMaxQuestions] = useState<number>(10);

  const handleSubjectToggle = (subjectId: string) => {
    setSelectedSubjects(prev => {
      const newSelection = prev.includes(subjectId)
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId];
      
      const categoryToSubjectId: Record<string, string> = {
        'Matemáticas': 'math',
        'Física': 'physics',
        'Filosofía': 'philosophy',
        'Química': 'chemistry',
        'Biología': 'biology',
        'Matemáticas CCSS': 'mathSocials',
        'Geografia': 'geography',
        'Historia': 'history'
      };

      const availableQuestions = initialQuestions.filter(q => {
        const subjectId = categoryToSubjectId[q.categoria];
        return newSelection.includes(subjectId);
      });

      const newMaxQuestions = availableQuestions.length;
      setMaxQuestions(newMaxQuestions);
      setTotalQuestions(Math.min(totalQuestions, newMaxQuestions));
      return newSelection;
    });
  };

  const handleComplete = () => {
    if (selectedSubjects.length > 0) {
      onComplete(selectedSubjects, totalQuestions);
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
    <div className="space-y-8">
      {/* Selector de asignaturas */}
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl font-bold">
              <span className="text-selectivi-blue">Sele</span>
              <span className="text-selectivi-yellow">Test</span>
            </h2>
          </div>
          <p className="text-gray-600 mb-2">Descobreix com et podria anar a la Selectivitat amb la nostra predicció personalitzada</p>
          <p className="text-sm text-gray-500">Selecciona les assignatures que cursaràs per obtenir una predicció més precisa de la teva nota</p>
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
                      className="w-4 h-4 rounded accent-selectivi-yellow focus:ring-selectivi-yellow focus:ring-2 focus:ring-offset-2"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      {subject.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {selectedSubjects.length > 0 && (
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Número de preguntes</h3>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max={maxQuestions}
                  value={totalQuestions}
                  onChange={(e) => setTotalQuestions(parseInt(e.target.value))}
                  className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-selectivi-yellow [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:bg-selectivi-yellow [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:bg-selectivi-yellow [&::-ms-thumb]:border-0 [&::-ms-thumb]:w-4 [&::-ms-thumb]:h-4 [&::-ms-thumb]:rounded-full [&::-ms-thumb]:cursor-pointer"
                />
                <span className="text-gray-700 font-medium">{totalQuestions}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Màxim disponible: {maxQuestions} preguntes
              </p>
            </div>
          )}
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
            Començar el test
          </button>
          {selectedSubjects.length === 0 && (
            <p className="text-sm text-red-500 mt-2">
              Selecciona almenys una assignatura per continuar
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente principal SeleTest
export default function SeleTest() {
  const [questions, setQuestions] = useState<Question[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('seletest_questions');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('seletest_currentIndex');
      return saved ? parseInt(saved) : 0;
    }
    return 0;
  });
  
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('seletest_selectedAnswer');
      return saved || null;
    }
    return null;
  });
  
  const [hasAnswered, setHasAnswered] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('seletest_hasAnswered');
      return saved === 'true';
    }
    return false;
  });
  
  const [gameOver, setGameOver] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('seletest_gameOver');
      return saved === 'true';
    }
    return false;
  });
  
  const [score, setScore] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('seletest_score');
      return saved ? parseInt(saved) : 0;
    }
    return 0;
  });
  
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('seletest_hasCompletedOnboarding');
      return saved === 'true';
    }
    return false;
  });
  
  const [selectedSubjectsFromOnboarding, setSelectedSubjectsFromOnboarding] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('seletest_selectedSubjects');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  
  const [totalQuestionsRequested, setTotalQuestionsRequested] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('seletest_totalQuestions');
      return saved ? parseInt(saved) : 10;
    }
    return 10;
  });

  // Guardar estados en localStorage cuando cambien
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('seletest_questions', JSON.stringify(questions));
      localStorage.setItem('seletest_currentIndex', currentQuestionIndex.toString());
      localStorage.setItem('seletest_selectedAnswer', selectedAnswer || '');
      localStorage.setItem('seletest_hasAnswered', hasAnswered.toString());
      localStorage.setItem('seletest_gameOver', gameOver.toString());
      localStorage.setItem('seletest_score', score.toString());
      localStorage.setItem('seletest_hasCompletedOnboarding', hasCompletedOnboarding.toString());
      localStorage.setItem('seletest_selectedSubjects', JSON.stringify(selectedSubjectsFromOnboarding));
      localStorage.setItem('seletest_totalQuestions', totalQuestionsRequested.toString());
    }
  }, [
    questions,
    currentQuestionIndex,
    selectedAnswer,
    hasAnswered,
    gameOver,
    score,
    hasCompletedOnboarding,
    selectedSubjectsFromOnboarding,
    totalQuestionsRequested
  ]);

  // Efecto para cargar las preguntas iniciales solo si no hay preguntas guardadas
  useEffect(() => {
    if (hasCompletedOnboarding && selectedSubjectsFromOnboarding.length > 0 && questions.length === 0) {
      const categoryToSubjectId: Record<string, string> = {
        'Matemáticas': 'math',
        'Física': 'physics',
        'Filosofía': 'philosophy',
        'Química': 'chemistry',
        'Biología': 'biology',
        'Matemáticas CCSS': 'mathSocials',
        'Geografia': 'geography',
        'Historia': 'history'
      };

      const filteredQuestions = initialQuestions.filter(question => {
        const subjectId = categoryToSubjectId[question.categoria];
        return selectedSubjectsFromOnboarding.includes(subjectId);
      });

      const shuffledQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5);
      setQuestions(shuffledQuestions.slice(0, totalQuestionsRequested));
    }
  }, [hasCompletedOnboarding, selectedSubjectsFromOnboarding, totalQuestionsRequested, questions.length]);

  const handleSelectAnswer = (answer: string) => {
    if (answer === 'next') {
      handleNextQuestion();
      return;
    }

    setSelectedAnswer(answer);
    setHasAnswered(true);
    if (answer === questions[currentQuestionIndex].respuesta_correcta) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
    } else {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('seletest_questions');
      localStorage.removeItem('seletest_currentIndex');
      localStorage.removeItem('seletest_selectedAnswer');
      localStorage.removeItem('seletest_hasAnswered');
      localStorage.removeItem('seletest_gameOver');
      localStorage.removeItem('seletest_score');
      localStorage.removeItem('seletest_hasCompletedOnboarding');
      localStorage.removeItem('seletest_selectedSubjects');
      localStorage.removeItem('seletest_totalQuestions');
    }

    setHasCompletedOnboarding(false);
    setSelectedSubjectsFromOnboarding([]);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setGameOver(false);
    setScore(0);
    setTotalQuestionsRequested(10);
  };

  const handleOnboardingComplete = (selectedSubjects: string[], totalQuestions: number) => {
    setSelectedSubjectsFromOnboarding(selectedSubjects);
    setTotalQuestionsRequested(totalQuestions);
    setHasCompletedOnboarding(true);
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
          {!gameOver ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">
                    Pregunta {currentQuestionIndex + 1} de {questions.length}
                  </h2>
                  <span className="text-gray-500">
                    Puntuación: {score}/{currentQuestionIndex + (hasAnswered ? 1 : 0)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-selectivi-yellow h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestionIndex + (hasAnswered ? 1 : 0)) / questions.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <Question
                question={questions[currentQuestionIndex]}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={handleSelectAnswer}
                hasAnswered={hasAnswered}
              />
            </>
          ) : (
            <div className="text-center bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="inline-flex justify-center items-center p-4 bg-selectivi-yellow/20 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-selectivi-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">¡Test completado!</h2>
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
                    const urgencyMessages = [
                      "🔥 Més de 1000 estudiants ja han provat el seu nivell!",
                      "⚡️ Falten menys de 100 dies per la Selectivitat!",
                      "🎯 Descobreix el teu potencial ara!",
                      "📊 Uneix-te als estudiants més preparats!"
                    ];

                    const ctaMessages = [
                      "No esperis més! Descobreix la teva predicció 👇",
                      "És el moment de preparar-te! Fes el test ara 👇",
                      "Comprova el teu nivell abans que sigui tard! 👇",
                      "La Selectivitat s'acosta! Prepara't ara 👇"
                    ];

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
                className="px-6 py-3 rounded-lg font-medium bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-white transition-all"
              >
                Volver a intentar
              </button>
            </div>
          )}
        </div>
      </div>
      <FooterMain />
    </div>
  );
} 