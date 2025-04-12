// Preguntes disponibles per a usuaris standard
export const standardQuestions = [
  {
    id: "s14",
    categoria: "Biologia",
    pregunta: "Quina és la diferència principal entre el sucre del DNA i el del RNA?",
    opciones: [
      "El DNA té desoxiribosa i el RNA ribosa",
      "El DNA té ribosa i el RNA desoxiribosa",
      "Ambdós tenen glucosa però en configuracions diferents",
      "El DNA té fructosa i el RNA sacarosa",
    ],
    respuestaCorrecta: 0,
    explicacion: "La pentosa en el DNA és desoxiribosa (falta un grup OH en el carboni 2'), mentre que en el RNA és ribosa. Aquesta diferència afecta l'estabilitat de les molècules."
  },
  {
    id: "s15",
    categoria: "Biologia",
    pregunta: "Si la seqüència de DNA transcrit és TAA-GCA-CTC, quina serà la seqüència de RNA resultant?",
    opciones: [
      "TAA-GCA-CTC",
      "UAA-GCA-CUC",
      "ATT-CGT-GAG",
      "AUU-CGU-GAG",
    ],
    respuestaCorrecta: 3,
    explicacion: "En la transcripció, el DNA (TAA-GCA-CTC) es converteix en RNA substituint timina (T) per uracil (U). Per tant, T → A, A → U, G → C, C → G."
  },
  {
    id: "s40",
    categoria: "Biologia",
    pregunta: "Llegiu el text següent i responeu:\\n\\n'Cal admetre que pot semblar una mica exagerat fer de la figura del llop un emblema contra el canvi climàtic. El plantejament és molt senzill i evident. Els llops s'alimenten d'altres animals; de fet, principalment de grans herbívors. Els cérvols i cabirols, que constitueixen el 75% de les seves preses, tenen una dieta totalment vegetariana. Això vol dir que, en digerir la vegetació que ingereixen, aquests mamífers processen i descomponen gran part de la matèria consumida en CO₂ i aigua. La desaparició de grans depredadors com els llops causa canvis significatius en els ecosistemes. El nombre de depredadors de mida més petita, com ara guineus o coiots, augmenta. Aquest fet no és gens sorprenent, ja que en condicions normals serien preses dels llops i, ocasionalment, s'alimenten del mateix que ells.'\\n\\nBasant-vos en el text, quina de les següents afirmacions és correcta sobre la xarxa tròfica descrita?",
    opciones: [
      "Els llops regulen les poblacions de cérvols i cabirols, que al seu torn controlen la vegetació, afectant així el cicle del carboni.",
      "La presència de llops augmenta les poblacions de guineus i coiots, ja que comparteixen les mateixes preses.",
      "Els cérvols i cabirols són els principals reguladors de l'ecosistema perquè processen la matèria vegetal en CO₂.",
      "La desaparició dels llops no té efecte sobre les poblacions de depredadors més petits com guineus i coiots.",
    ],
    respuestaCorrecta: 0,
    explicacion: "El text descriu una xarxa tròfica on els llops, com a depredadors superiors, regulen directament les poblacions d'herbívors (cérvols i cabirols) i indirectament les poblacions de depredadors més petits. Això té un efecte en cascada sobre la vegetació i el cicle del carboni, ja que els herbívors transformen la matèria vegetal en CO₂. A més, la desaparició dels llops permet l'augment de depredadors més petits que normalment serien les seves preses."
  },
  {
    id: "s41",
    categoria: "Biologia",
    pregunta: "En relació amb el text anterior sobre els llops i la xarxa tròfica, quin nivell tròfic no està representat explícitament en la xarxa però és fonamental per al funcionament de l'ecosistema descrit?",
    opciones: [
      "Els descomponedors, que reciclen la matèria orgànica morta",
      "Els productors primaris, que són la base de la cadena alimentària",
      "Els consumidors terciaris, que s'alimenten dels depredadors",
      "Els consumidors omnívors, que tenen una dieta mixta",
    ],
    respuestaCorrecta: 0,
    explicacion: "Tot i que el text menciona la descomposició de matèria en CO₂ i aigua, no es fa referència explícita als descomponedors, que són fonamentals en el reciclatge de la matèria orgànica morta i el tancament dels cicles biogeoquímics. Els productors primaris (vegetació) i els consumidors (herbívors i carnívors) sí que estan clarament representats en la xarxa tròfica descrita."
  },
  {
    id: "s42",
    categoria: "Biologia",
    pregunta: "Quines vies metabòliques intervenen en la descomposició completa de la glucosa en els cèrvols i cabirols?",
    opciones: [
      "Glicòlisi, cicle de Krebs i cadena respiratòria",
      "Només glicòlisi i cicle de Krebs",
      "Fermentació làctica i cicle de Krebs",
      "Glicòlisi i fermentació alcohòlica",
    ],
    respuestaCorrecta: 0,
    explicacion: "La descomposició completa de la glucosa en organismes aerobis com els cèrvols i cabirols requereix tres processos: la glicòlisi (que converteix glucosa en piruvat), el cicle de Krebs (que oxida l'acetil-CoA) i la cadena respiratòria (que genera la major part de l'ATP i l'aigua)."
  },
  {
    id: "s43",
    categoria: "Biologia",
    pregunta: "En quin procés metabòlic es genera principalment el CO₂ durant la respiració cel·lular?",
    opciones: [
      "Al cicle de Krebs",
      "A la glicòlisi",
      "A la cadena respiratòria",
      "A la fermentació",
    ],
    respuestaCorrecta: 0,
    explicacion: "El CO₂ es genera principalment al cicle de Krebs (també anomenat cicle dels àcids tricarboxílics o cicle de l'àcid cítric) mitjançant les reaccions de descarboxilació que oxiden completament l'acetil-CoA."
  },
  {
    id: "s44",
    categoria: "Biologia",
    pregunta: "On es genera l'aigua durant el procés de respiració cel·lular?",
    opciones: [
      "A la cadena respiratòria, en la reducció de l'O₂",
      "Al cicle de Krebs",
      "A la glicòlisi",
      "En totes les fases per igual",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'aigua es genera a la cadena respiratòria (també anomenada fosforilació oxidativa o transport electrònic) quan els electrons i protons són transferits a l'oxigen molecular (O₂) en l'últim complex de la cadena, formant H₂O."
  },
  {
    id: "s45",
    categoria: "Biologia",
    pregunta: "Quin és el balanç energètic aproximat en molècules d'ATP que s'obtenen de l'oxidació completa d'una molècula de glucosa?",
    opciones: [
      "De 30 a 38 ATP",
      "De 20 a 25 ATP",
      "De 40 a 45 ATP",
      "De 15 a 20 ATP",
    ],
    respuestaCorrecta: 0,
    explicacion: "El balanç energètic de l'oxidació completa d'una molècula de glucosa és d'entre 30 i 38 ATP. La variació depèn de l'eficiència del transport de protons i de l'ús de llançadores per transferir els electrons del NADH citosòlic al mitocondri."
  },
  {
    id: "s14",
    categoria: "Biologia",
    pregunta: "Quina és la diferència principal entre el sucre del DNA i el del RNA?",
    opciones: [
      "El DNA té desoxiribosa i el RNA ribosa",
      "El DNA té ribosa i el RNA desoxiribosa",
      "Ambdós tenen glucosa però en configuracions diferents",
      "El DNA té fructosa i el RNA sacarosa",
    ],
    respuestaCorrecta: 0,
    explicacion: "La pentosa en el DNA és desoxiribosa (falta un grup OH en el carboni 2'), mentre que en el RNA és ribosa. Aquesta diferència afecta l'estabilitat de les molècules."
  },
  {
    id: "s15",
    categoria: "Biologia",
    pregunta: "Si la seqüència de DNA transcrit és TAA-GCA-CTC, quina serà la seqüència de RNA resultant?",
    opciones: [
      "TAA-GCA-CTC",
      "UAA-GCA-CUC",
      "ATT-CGT-GAG",
      "AUU-CGU-GAG",
    ],
    respuestaCorrecta: 3,
    explicacion: "En la transcripció, el DNA (TAA-GCA-CTC) es converteix en RNA substituint timina (T) per uracil (U). Per tant, T → A, A → U, G → C, C → G."
  },
  {
    id: "s40",
    categoria: "Biologia",
    pregunta: "Llegiu el text següent i responeu:\\n\\n'Cal admetre que pot semblar una mica exagerat fer de la figura del llop un emblema contra el canvi climàtic. El plantejament és molt senzill i evident. Els llops s'alimenten d'altres animals; de fet, principalment de grans herbívors. Els cérvols i cabirols, que constitueixen el 75% de les seves preses, tenen una dieta totalment vegetariana. Això vol dir que, en digerir la vegetació que ingereixen, aquests mamífers processen i descomponen gran part de la matèria consumida en CO₂ i aigua. La desaparició de grans depredadors com els llops causa canvis significatius en els ecosistemes. El nombre de depredadors de mida més petita, com ara guineus o coiots, augmenta. Aquest fet no és gens sorprenent, ja que en condicions normals serien preses dels llops i, ocasionalment, s'alimenten del mateix que ells.'\\n\\nBasant-vos en el text, quina de les següents afirmacions és correcta sobre la xarxa tròfica descrita?",
    opciones: [
      "Els llops regulen les poblacions de cérvols i cabirols, que al seu torn controlen la vegetació, afectant així el cicle del carboni.",
      "La presència de llops augmenta les poblacions de guineus i coiots, ja que comparteixen les mateixes preses.",
      "Els cérvols i cabirols són els principals reguladors de l'ecosistema perquè processen la matèria vegetal en CO₂.",
      "La desaparició dels llops no té efecte sobre les poblacions de depredadors més petits com guineus i coiots.",
    ],
    respuestaCorrecta: 0,
    explicacion: "El text descriu una xarxa tròfica on els llops, com a depredadors superiors, regulen directament les poblacions d'herbívors (cérvols i cabirols) i indirectament les poblacions de depredadors més petits. Això té un efecte en cascada sobre la vegetació i el cicle del carboni, ja que els herbívors transformen la matèria vegetal en CO₂. A més, la desaparició dels llops permet l'augment de depredadors més petits que normalment serien les seves preses."
  },
  {
    id: "s41",
    categoria: "Biologia",
    pregunta: "En relació amb el text anterior sobre els llops i la xarxa tròfica, quin nivell tròfic no està representat explícitament en la xarxa però és fonamental per al funcionament de l'ecosistema descrit?",
    opciones: [
      "Els descomponedors, que reciclen la matèria orgànica morta",
      "Els productors primaris, que són la base de la cadena alimentària",
      "Els consumidors terciaris, que s'alimenten dels depredadors",
      "Els consumidors omnívors, que tenen una dieta mixta",
    ],
    respuestaCorrecta: 0,
    explicacion: "Tot i que el text menciona la descomposició de matèria en CO₂ i aigua, no es fa referència explícita als descomponedors, que són fonamentals en el reciclatge de la matèria orgànica morta i el tancament dels cicles biogeoquímics. Els productors primaris (vegetació) i els consumidors (herbívors i carnívors) sí que estan clarament representats en la xarxa tròfica descrita."
  },
  {
    id: "s42",
    categoria: "Biologia",
    pregunta: "Quines vies metabòliques intervenen en la descomposició completa de la glucosa en els cèrvols i cabirols?",
    opciones: [
      "Glicòlisi, cicle de Krebs i cadena respiratòria",
      "Només glicòlisi i cicle de Krebs",
      "Fermentació làctica i cicle de Krebs",
      "Glicòlisi i fermentació alcohòlica",
    ],
    respuestaCorrecta: 0,
    explicacion: "La descomposició completa de la glucosa en organismes aerobis com els cèrvols i cabirols requereix tres processos: la glicòlisi (que converteix glucosa en piruvat), el cicle de Krebs (que oxida l'acetil-CoA) i la cadena respiratòria (que genera la major part de l'ATP i l'aigua)."
  },
  {
    id: "s43",
    categoria: "Biologia",
    pregunta: "En quin procés metabòlic es genera principalment el CO₂ durant la respiració cel·lular?",
    opciones: [
      "Al cicle de Krebs",
      "A la glicòlisi",
      "A la cadena respiratòria",
      "A la fermentació",
    ],
    respuestaCorrecta: 0,
    explicacion: "El CO₂ es genera principalment al cicle de Krebs (també anomenat cicle dels àcids tricarboxílics o cicle de l'àcid cítric) mitjançant les reaccions de descarboxilació que oxiden completament l'acetil-CoA."
  },
  {
    id: "s44",
    categoria: "Biologia",
    pregunta: "On es genera l'aigua durant el procés de respiració cel·lular?",
    opciones: [
      "A la cadena respiratòria, en la reducció de l'O₂",
      "Al cicle de Krebs",
      "A la glicòlisi",
      "En totes les fases per igual",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'aigua es genera a la cadena respiratòria (també anomenada fosforilació oxidativa o transport electrònic) quan els electrons i protons són transferits a l'oxigen molecular (O₂) en l'últim complex de la cadena, formant H₂O."
  },
  {
    id: "s45",
    categoria: "Biologia",
    pregunta: "Quin és el balanç energètic aproximat en molècules d'ATP que s'obtenen de l'oxidació completa d'una molècula de glucosa?",
    opciones: [
      "De 30 a 38 ATP",
      "De 20 a 25 ATP",
      "De 40 a 45 ATP",
      "De 15 a 20 ATP",
    ],
    respuestaCorrecta: 0,
    explicacion: "El balanç energètic de l'oxidació completa d'una molècula de glucosa és d'entre 30 i 38 ATP. La variació depèn de l'eficiència del transport de protons i de l'ús de llançadores per transferir els electrons del NADH citosòlic al mitocondri."
  },
  {
    id: "s16",
    categoria: "Filosofia",
    pregunta: "Què entén Plató per 'món de les idees'?",
    opciones: [
      "El món dels somnis i la imaginació",
      "El món de les opinions personals",
      "El món de les formes perfectes i immutables",
      "El món dels sentits i l'experiència",
    ],
    respuestaCorrecta: 2,
    explicacion: "Per a Plató, el món de les idees és el regne de les formes perfectes, eternes i immutables, que són la veritable realitat de la qual el món físic és només una còpia imperfecta."
  },
  {
    id: "s17",
    categoria: "Filosofia",
    pregunta: "Quina és la principal diferència entre el racionalisme de Descartes i l'empirisme de Hume?",
    opciones: [
      "Les seves creences religioses",
      "La font del coneixement: raó vs. experiència sensorial",
      "L'idioma en què van escriure",
      "L'època en què van viure",
    ],
    respuestaCorrecta: 1,
    explicacion: "Descartes defensava que el coneixement veritable prové de la raó pura, mentre que Hume sostenia que tot coneixement deriva de l'experiència sensorial."
  },
  {
    id: "s65",
    categoria: "Filosofia",
    pregunta: "Segons Plató, quina és la funció de la part irascible (fogosa) de l'ànima?",
    opciones: [
      "Ajudar a la part racional a controlar els desitjos de la part concupiscible",
      "Governar sobre les altres parts",
      "Satisfer els desitjos i plaers",
      "Actuar independentment de les altres parts",
    ],
    respuestaCorrecta: 0,
    explicacion: "La part irascible o fogosa té la funció d'ajudar a la part racional a controlar els desitjos de la part concupiscible, actuant com un aliat de la raó en el govern de l'ànima."
  },
  {
    id: "s66",
    categoria: "Filosofia",
    pregunta: "Quina és la virtut pròpia de la part irascible de l'ànima segons Plató?",
    opciones: [
      "La fortalesa o el coratge",
      "La saviesa",
      "La temprança",
      "La justícia",
    ],
    respuestaCorrecta: 0,
    explicacion: "La fortalesa o el coratge és la virtut pròpia de la part irascible, que li permet complir la seva funció d'ajudar a la raó a controlar els desitjos."
  },
  {
    id: "s67",
    categoria: "Filosofia",
    pregunta: "Segons Plató, què passa quan la part concupiscible domina sobre les altres parts de l'ànima?",
    opciones: [
      "L'ànima es torna esclava dels desitjos i perd el control racional",
      "L'ànima assoleix la felicitat",
      "L'ànima troba l'equilibri perfecte",
      "L'ànima desenvolupa millor les seves capacitats",
    ],
    respuestaCorrecta: 0,
    explicacion: "Quan la part concupiscible domina, l'ànima es torna esclava dels seus desitjos i perd el control racional, portant al desordre i la infelicitat."
  },
  {
    id: "s68",
    categoria: "Filosofia",
    pregunta: "Com defineix Plató la justícia en l'ànima individual?",
    opciones: [
      "Que cada part de l'ànima compleixi la seva funció pròpia sota el govern de la raó",
      "Que totes les parts tinguin el mateix poder",
      "Que la part concupiscible domini sobre les altres",
      "Que no hi hagi jerarquia entre les parts",
    ],
    respuestaCorrecta: 0,
    explicacion: "La justícia en l'ànima consisteix en que cada part compleixi la seva funció natural sota el govern de la part racional, establint així l'harmonia interna."
  },
  {
    id: "s69",
    categoria: "Filosofia",
    pregunta: "Per què Plató considera que la raó ha de governar l'ànima?",
    opciones: [
      "Perquè és l'única part que pot conèixer el que convé a cada part i al conjunt",
      "Perquè és la part més forta",
      "Perquè és la part més gran",
      "Perquè és la part més antiga",
    ],
    respuestaCorrecta: 0,
    explicacion: "La raó ha de governar perquè és l'única part capaç de conèixer el que convé a cada part i al conjunt de l'ànima, tenint la saviesa necessària per prendre les millors decisions."
  },
  {
    id: "s29",
    categoria: "Filosofia",
    pregunta: "¿Qué significa el 'imperativo categórico' de Kant?",
    opciones: [
      "Una orden militar absoluta",
      "Un principio moral universal y necesario",
      "Una ley física inmutable",
      "Una regla de etiqueta social",
    ],
    respuestaCorrecta: 1,
    explicacion: "El imperativo categórico de Kant es un principio ético que establece que debemos actuar solo según aquella máxima por la cual podamos querer que al mismo tiempo se convierta en ley universal."
  },
  {
    id: "s30",
    categoria: "Filosofia",
    pregunta: "¿Qué concepto es fundamental en la filosofía existencialista de Sartre?",
    opciones: [
      "La existencia precede a la esencia",
      "La esencia precede a la existencia",
      "El determinismo absoluto",
      "La predestinación divina",
    ],
    respuestaCorrecta: 0,
    explicacion: "Sartre afirma que primero existimos y luego, a través de nuestras acciones y decisiones, creamos nuestra esencia, lo que implica una libertad radical y responsabilidad total."
  },
  {
    id: "s31",
    categoria: "Filosofia",
    pregunta: "¿Qué propone Nietzsche con su concepto del 'eterno retorno'?",
    opciones: [
      "Un ciclo literal de reencarnaciones",
      "Una prueba existencial de afirmación de la vida",
      "Una teoría astronómica",
      "Un concepto religioso tradicional",
    ],
    respuestaCorrecta: 1,
    explicacion: "El eterno retorno es una prueba hipotética: si cada momento de tu vida se repitiera eternamente, ¿lo aceptarías? Es una forma de evaluar nuestra actitud hacia la vida y promover su afirmación plena."
  },
  {
    id: "s32",
    categoria: "Filosofia",
    pregunta: "¿Qué es la 'dialéctica' según Hegel?",
    opciones: [
      "Un método de debate político",
      "Un proceso de tesis, antítesis y síntesis",
      "Una forma de argumentación lógica",
      "Un tipo de retórica antigua",
    ],
    respuestaCorrecta: 1,
    explicacion: "Para Hegel, la dialéctica es el proceso por el cual una idea (tesis) genera su opuesto (antítesis), y de su conflicto surge una resolución superior (síntesis) que conserva elementos de ambas."
  },
  {
    id: "s33",
    categoria: "Filosofia",
    pregunta: "¿Qué caracteriza al 'mito de la caverna' de Plató?",
    opciones: [
      "Es una historia de aventuras",
      "Es una alegoría sobre la ignorancia y el conocimiento",
      "Es un relato sobre la creación del mundo",
      "Es una descripción geológica",
    ],
    respuestaCorrecta: 1,
    explicacion: "El mito de la caverna ilustra cómo los humanos pueden estar encadenados a una realidad ilusoria (las sombras) y el proceso de liberación hacia el verdadero conocimiento (la luz del sol)."
  },
  {
    id: "b94",
    categoria: "Filosofia",
    subTema: "Plató",
    pregunta: "Segons Plató, què caracteritza la part concupiscible de l'ànima?",
    opciones: [
      "És naturalment insaciable de béns i ocupa l'espai més gran de l'ànima",
      "És la part racional que governa",
      "És la part que dona coratge",
      "És la part que busca la veritat",
    ],
    respuestaCorrecta: 0,
    explicacion: "Segons el text, la part concupiscible ocupa l'espai més gran de l'ànima i és naturalment insaciable de béns, necessitant ser controlada per la part racional."
  },
  {
    id: "s16",
    categoria: "Filosofia",
    pregunta: "Què entén Plató per 'món de les idees'?",
    opciones: [
      "El món dels somnis i la imaginació",
      "El món de les opinions personals",
      "El món de les formes perfectes i immutables",
      "El món dels sentits i l'experiència",
    ],
    respuestaCorrecta: 2,
    explicacion: "Per a Plató, el món de les idees és el regne de les formes perfectes, eternes i immutables, que són la veritable realitat de la qual el món físic és només una còpia imperfecta."
  },
  {
    id: "s17",
    categoria: "Filosofia",
    pregunta: "Quina és la principal diferència entre el racionalisme de Descartes i l'empirisme de Hume?",
    opciones: [
      "Les seves creences religioses",
      "La font del coneixement: raó vs. experiència sensorial",
      "L'idioma en què van escriure",
      "L'època en què van viure",
    ],
    respuestaCorrecta: 1,
    explicacion: "Descartes defensava que el coneixement veritable prové de la raó pura, mentre que Hume sostenia que tot coneixement deriva de l'experiència sensorial."
  },
  {
    id: "s65",
    categoria: "Filosofia",
    pregunta: "Segons Plató, quina és la funció de la part irascible (fogosa) de l'ànima?",
    opciones: [
      "Ajudar a la part racional a controlar els desitjos de la part concupiscible",
      "Governar sobre les altres parts",
      "Satisfer els desitjos i plaers",
      "Actuar independentment de les altres parts",
    ],
    respuestaCorrecta: 0,
    explicacion: "La part irascible o fogosa té la funció d'ajudar a la part racional a controlar els desitjos de la part concupiscible, actuant com un aliat de la raó en el govern de l'ànima."
  },
  {
    id: "s66",
    categoria: "Filosofia",
    pregunta: "Quina és la virtut pròpia de la part irascible de l'ànima segons Plató?",
    opciones: [
      "La fortalesa o el coratge",
      "La saviesa",
      "La temprança",
      "La justícia",
    ],
    respuestaCorrecta: 0,
    explicacion: "La fortalesa o el coratge és la virtut pròpia de la part irascible, que li permet complir la seva funció d'ajudar a la raó a controlar els desitjos."
  },
  {
    id: "s67",
    categoria: "Filosofia",
    pregunta: "Segons Plató, què passa quan la part concupiscible domina sobre les altres parts de l'ànima?",
    opciones: [
      "L'ànima es torna esclava dels desitjos i perd el control racional",
      "L'ànima assoleix la felicitat",
      "L'ànima troba l'equilibri perfecte",
      "L'ànima desenvolupa millor les seves capacitats",
    ],
    respuestaCorrecta: 0,
    explicacion: "Quan la part concupiscible domina, l'ànima es torna esclava dels seus desitjos i perd el control racional, portant al desordre i la infelicitat."
  },
  {
    id: "s68",
    categoria: "Filosofia",
    pregunta: "Com defineix Plató la justícia en l'ànima individual?",
    opciones: [
      "Que cada part de l'ànima compleixi la seva funció pròpia sota el govern de la raó",
      "Que totes les parts tinguin el mateix poder",
      "Que la part concupiscible domini sobre les altres",
      "Que no hi hagi jerarquia entre les parts",
    ],
    respuestaCorrecta: 0,
    explicacion: "La justícia en l'ànima consisteix en que cada part compleixi la seva funció natural sota el govern de la part racional, establint així l'harmonia interna."
  },
  {
    id: "s69",
    categoria: "Filosofia",
    pregunta: "Per què Plató considera que la raó ha de governar l'ànima?",
    opciones: [
      "Perquè és l'única part que pot conèixer el que convé a cada part i al conjunt",
      "Perquè és la part més forta",
      "Perquè és la part més gran",
      "Perquè és la part més antiga",
    ],
    respuestaCorrecta: 0,
    explicacion: "La raó ha de governar perquè és l'única part capaç de conèixer el que convé a cada part i al conjunt de l'ànima, tenint la saviesa necessària per prendre les millors decisions."
  },
  {
    id: "s29",
    categoria: "Filosofia",
    pregunta: "¿Qué significa el 'imperativo categórico' de Kant?",
    opciones: [
      "Una orden militar absoluta",
      "Un principio moral universal y necesario",
      "Una ley física inmutable",
      "Una regla de etiqueta social",
    ],
    respuestaCorrecta: 1,
    explicacion: "El imperativo categórico de Kant es un principio ético que establece que debemos actuar solo según aquella máxima por la cual podamos querer que al mismo tiempo se convierta en ley universal."
  },
  {
    id: "s30",
    categoria: "Filosofia",
    pregunta: "¿Qué concepto es fundamental en la filosofía existencialista de Sartre?",
    opciones: [
      "La existencia precede a la esencia",
      "La esencia precede a la existencia",
      "El determinismo absoluto",
      "La predestinación divina",
    ],
    respuestaCorrecta: 0,
    explicacion: "Sartre afirma que primero existimos y luego, a través de nuestras acciones y decisiones, creamos nuestra esencia, lo que implica una libertad radical y responsabilidad total."
  },
  {
    id: "s31",
    categoria: "Filosofia",
    pregunta: "¿Qué propone Nietzsche con su concepto del 'eterno retorno'?",
    opciones: [
      "Un ciclo literal de reencarnaciones",
      "Una prueba existencial de afirmación de la vida",
      "Una teoría astronómica",
      "Un concepto religioso tradicional",
    ],
    respuestaCorrecta: 1,
    explicacion: "El eterno retorno es una prueba hipotética: si cada momento de tu vida se repitiera eternamente, ¿lo aceptarías? Es una forma de evaluar nuestra actitud hacia la vida y promover su afirmación plena."
  },
  {
    id: "s32",
    categoria: "Filosofia",
    pregunta: "¿Qué es la 'dialéctica' según Hegel?",
    opciones: [
      "Un método de debate político",
      "Un proceso de tesis, antítesis y síntesis",
      "Una forma de argumentación lógica",
      "Un tipo de retórica antigua",
    ],
    respuestaCorrecta: 1,
    explicacion: "Para Hegel, la dialéctica es el proceso por el cual una idea (tesis) genera su opuesto (antítesis), y de su conflicto surge una resolución superior (síntesis) que conserva elementos de ambas."
  },
  {
    id: "s33",
    categoria: "Filosofia",
    pregunta: "¿Qué caracteriza al 'mito de la caverna' de Plató?",
    opciones: [
      "Es una historia de aventuras",
      "Es una alegoría sobre la ignorancia y el conocimiento",
      "Es un relato sobre la creación del mundo",
      "Es una descripción geológica",
    ],
    respuestaCorrecta: 1,
    explicacion: "El mito de la caverna ilustra cómo los humanos pueden estar encadenados a una realidad ilusoria (las sombras) y el proceso de liberación hacia el verdadero conocimiento (la luz del sol)."
  },
  {
    id: "b94",
    categoria: "Filosofia",
    subTema: "Plató",
    pregunta: "Segons Plató, què caracteritza la part concupiscible de l'ànima?",
    opciones: [
      "És naturalment insaciable de béns i ocupa l'espai més gran de l'ànima",
      "És la part racional que governa",
      "És la part que dona coratge",
      "És la part que busca la veritat",
    ],
    respuestaCorrecta: 0,
    explicacion: "Segons el text, la part concupiscible ocupa l'espai més gran de l'ànima i és naturalment insaciable de béns, necessitant ser controlada per la part racional."
  },
  {
    id: "b95",
    categoria: "Filosofia",
    subTema: "Plató",
    pregunta: "Quina relació estableix Plató entre la part racional i les altres parts de l'ànima?",
    opciones: [
      "La part racional ha de governar i les altres parts han de ser súbdites i aliades",
      "Totes les parts tenen el mateix poder i importància",
      "La part concupiscible ha de governar sobre les altres",
      "La part fogosa ha de dominar la part racional",
    ],
    respuestaCorrecta: 0,
    explicacion: "Plató estableix una jerarquia on la part racional ha de governar per ser sàvia i tenir previsió sobre tota l'ànima, mentre que les altres parts (fogosa i concupiscible) han de ser súbdites i aliades de la part racional."
  },
  {
    id: "b96",
    categoria: "Filosofia",
    subTema: "Plató",
    pregunta: "Segons el text, què és necessari per aconseguir la temperança?",
    opciones: [
      "La unanimitat i harmonia entre les tres parts de l'ànima, acceptant el govern de la raó",
      "El domini absolut de la part fogosa",
      "L'eliminació de la part concupiscible",
      "La supressió de tots els desitjos",
    ],
    respuestaCorrecta: 0,
    explicacion: "La temperança s'aconsegueix quan hi ha unanimitat i harmonia entre les tres parts de l'ànima, sense conflictes entre l'element que mana (la raó) i els dos que obeeixen, estant tots d'acord que la raó ha de governar."
  },
  {
    id: "b97",
    categoria: "Filosofia",
    subTema: "Plató",
    pregunta: "Quina és la relació entre la justícia individual i la justícia a la ciutat segons el text?",
    opciones: [
      "No hi ha cap punt borrós entre la visió de la justícia individual i la de la ciutat",
      "Són conceptes totalment diferents i incompatibles",
      "La justícia individual és més important que la de la ciutat",
      "La justícia de la ciutat no té relació amb la individual",
    ],
    respuestaCorrecta: 0,
    explicacion: "Segons el text, no hi ha cap punt borrós entre la visió de la justícia que es troba en l'individu i la que es troba a la ciutat, suggerint que són el mateix tipus de justícia aplicat a diferents escales."
  },
  {
    id: "b98",
    categoria: "Filosofia",
    subTema: "Plató",
    pregunta: "Com defineix Plató la saviesa en relació amb les parts de l'ànima?",
    opciones: [
      "Com el coneixement del que convé a cadascuna de les tres parts i a totes en conjunt",
      "Com el domini exclusiu de la part racional",
      "Com l'absència de conflictes entre les parts",
      "Com la supressió de la part concupiscible",
    ],
    respuestaCorrecta: 0,
    explicacion: "La saviesa, segons Plató, consisteix en posseir el coneixement del que convé a cadascuna de les tres parts de l'ànima (racional, fogosa i concupiscible) i a totes elles en conjunt."
  },
  {
    id: "s21",
    categoria: "Filosofia",
    pregunta: "Segons Plató, quina és la característica principal de la part concupiscible de l'ànima?",
    opciones: [
      "És insaciable de béns i ocupa el major espai en l'ànima",
      "És la part racional que governa",
      "És la part irascible que defensa",
      "És la més petita de les tres parts",
    ],
    respuestaCorrecta: 0,
    explicacion: "La part concupiscible és la més gran de l'ànima i es caracteritza per ser insaciable de béns i plaers."
  },
  {
    id: "s22",
    categoria: "Filosofia",
    pregunta: "Quina relació ha d'existir entre la part racional i les altres parts de l'ànima segons Plató?",
    opciones: [
      "La part racional ha de governar perquè és sàvia i té previsió",
      "La part irascible ha de governar perquè és forta",
      "La part concupiscible ha de governar perquè és majoritària",
      "No hi ha d'haver jerarquia entre les parts",
    ],
    respuestaCorrecta: 0,
    explicacion: "Segons Plató, la part racional ha de governar les altres parts perquè té la saviesa i la capacitat de previsió necessàries."
  },
  {
    id: "s23",
    categoria: "Filosofia",
    pregunta: "Què és necessari per aconseguir la temprança segons Plató?",
    opciones: [
      "Que les parts inferior i superior de l'ànima estiguin d'acord sobre qui ha de manar",
      "Que la part irascible domini a la racional",
      "Que la part concupiscible sigui la més forta",
      "Que no hi hagi jerarquia entre les parts",
    ],
    respuestaCorrecta: 0,
    explicacion: "La temprança s'aconsegueix quan hi ha acord entre les parts superior i inferior de l'ànima sobre qui ha de governar."
  },
  {
    id: "s24",
    categoria: "Filosofia",
    pregunta: "Quina relació estableix Plató entre la justícia individual i la justícia a la ciutat?",
    opciones: [
      "Són anàlogues: cada part ha de complir la seva funció pròpia",
      "No tenen cap relació entre elles",
      "La justícia individual és més important",
      "La justícia de la ciutat és més important",
    ],
    respuestaCorrecta: 0,
    explicacion: "Plató estableix una analogia entre l'ànima individual i la ciutat: en ambdós casos, la justícia consisteix en que cada part compleixi la seva funció pròpia."
  },
  {
    id: "s25",
    categoria: "Filosofia",
    pregunta: "Com defineix Plató la saviesa en relació amb les parts de l'ànima?",
    opciones: [
      "És la virtut de la part racional que permet governar amb previsió",
      "És la virtut de la part irascible",
      "És la virtut de la part concupiscible",
      "És independent de les parts de l'ànima",
    ],
    respuestaCorrecta: 0,
    explicacion: "La saviesa és la virtut pròpia de la part racional de l'ànima, que li permet governar amb previsió sobre les altres parts."
  },
  {
    id: "s70",
    categoria: "Filosofia",
    pregunta: "Quina és la distinció fonamental que fa Plató entre el món sensible i el món intel·ligible?",
    opciones: [
      "El món sensible conté còpies imperfectes de les Formes o Idees que existeixen en el món intel·ligible",
      "El món sensible és més real que el món intel·ligible",
      "No hi ha connexió entre els dos mons",
      "Els dos mons són idèntics en naturalesa",
    ],
    respuestaCorrecta: 0,
    explicacion: "Segons Plató, el món sensible conté objectes que són còpies imperfectes de les Formes o Idees perfectes que existeixen en el món intel·ligible. Aquesta distinció és fonamental en la seva teoria del coneixement."
  },
  {
    id: "s71",
    categoria: "Filosofia",
    pregunta: "Segons Plató, quina és la diferència entre opinió i ciència?",
    opciones: [
      "L'opinió es basa en les aparences sensibles mentre que la ciència busca el coneixement de les essències",
      "L'opinió és més fiable que la ciència",
      "No hi ha diferència entre opinió i ciència",
      "La ciència es basa en les aparences i l'opinió en les essències",
    ],
    respuestaCorrecta: 0,
    explicacion: "Per a Plató, l'opinió (doxa) es basa en el coneixement del món sensible i les aparences, mentre que la ciència (episteme) busca el coneixement veritable de les essències i les Idees."
  },
  {
    id: "s72",
    categoria: "Filosofia",
    pregunta: "Quin paper juga la dialèctica en la teoria del coneixement de Plató?",
    opciones: [
      "És el mètode per elevar-se des de les aparences fins a l'essència i la Idea del Bé",
      "És només una tècnica de discussió",
      "No té cap relació amb el coneixement",
      "Serveix només per formar opinions",
    ],
    respuestaCorrecta: 0,
    explicacion: "La dialèctica és el mètode filosòfic que permet elevar-se gradualment des del coneixement de les aparences sensibles fins al coneixement de les essències i, finalment, de la Idea del Bé."
  },
  {
    id: "s73",
    categoria: "Filosofia",
    pregunta: "Per què la Idea del Bé és suprema en la filosofia de Plató?",
    opciones: [
      "Perquè és el fonament últim de tot coneixement i de tota realitat",
      "Perquè és la més fàcil de conèixer",
      "Perquè pertany al món sensible",
      "Perquè no requereix la dialèctica per ser coneguda",
    ],
    respuestaCorrecta: 0,
    explicacion: "La Idea del Bé és suprema perquè és el fonament últim de tot coneixement i de tota realitat. Sense conèixer la Idea del Bé, no es pot tenir un coneixement complet de res."
  },
  {
    id: "s74",
    categoria: "Filosofia",
    pregunta: "Quina relació estableix Plató entre el coneixement del Bé i l'acció moral?",
    opciones: [
      "Per obrar bé cal conèixer què és el Bé, ja que sense aquest coneixement no podem saber què és bo",
      "No hi ha relació entre el coneixement del Bé i l'acció moral",
      "Es pot obrar bé sense conèixer el Bé",
      "El coneixement del Bé impedeix l'acció moral",
    ],
    respuestaCorrecta: 0,
    explicacion: "Segons Plató, per poder obrar bé és necessari conèixer la Idea del Bé. Sense aquest coneixement, no podem saber què és veritablement bo i, per tant, no podem actuar correctament."
  },
  {
    id: "s75",
    categoria: "Filosofia",
    pregunta: "Què defensa Locke sobre l'origen de les idees?",
    opciones: [
      "La ment és una 'taula rasa' que s'omple mitjançant l'experiència sensorial",
      "Totes les idees són innates",
      "Les idees provenen de Déu",
      "Només coneixem les idees matemàtiques",
    ],
    respuestaCorrecta: 0,
    explicacion: "Locke rebutja les idees innates i defensa que la ment és com un paper en blanc (tabula rasa) que s'omple mitjançant l'experiència sensorial."
  },
  {
    id: "s76",
    categoria: "Filosofia",
    pregunta: "Segons Locke, quina és la font principal del coneixement?",
    opciones: [
      "L'experiència sensorial i la reflexió sobre aquesta",
      "La raó pura sense experiència",
      "Les idees innates",
      "La revelació divina",
    ],
    respuestaCorrecta: 0,
    explicacion: "Per a Locke, tot el coneixement prové de l'experiència sensorial i la reflexió que fem sobre aquesta experiència, rebutjant l'existència d'idees innates."
  },
  {
    id: "s77",
    categoria: "Filosofia",
    pregunta: "Quina és la postura de Locke sobre el poder polític?",
    opciones: [
      "Ha de basar-se en el consentiment dels governats i respectar els drets naturals",
      "Ha de ser absolut i provenir directament de Déu",
      "No ha d'existir cap tipus de govern",
      "Ha de ser exercit només per l'aristocràcia",
    ],
    respuestaCorrecta: 0,
    explicacion: "Locke defensa que el poder polític ha de basar-se en el consentiment dels governats i ha de respectar els drets naturals (vida, llibertat i propietat), rebutjant l'absolutisme."
  },
  {
    id: "s78",
    categoria: "Filosofia",
    pregunta: "Com classifica Locke les idees segons el seu origen?",
    opciones: [
      "En idees de sensació (experiència externa) i idees de reflexió (experiència interna)",
      "En idees innates i idees adquirides",
      "En idees simples i idees complexes només",
      "En idees verdaderes i idees falses",
    ],
    respuestaCorrecta: 0,
    explicacion: "Locke distingeix entre idees de sensació, que provenen de l'experiència externa a través dels sentits, i idees de reflexió, que provenen de l'experiència interna de la nostra ment."
  },
  {
    id: "s79",
    categoria: "Filosofia",
    pregunta: "Quina és la teoria de Locke sobre la propietat?",
    opciones: [
      "S'adquireix pel treball i té límits basats en l'ús i la necessitat",
      "Ha de ser comuna i no pot ser privada",
      "Només pot ser atorgada per l'Estat",
      "És un dret diví sense límits",
    ],
    respuestaCorrecta: 0,
    explicacion: "Locke argumenta que la propietat s'adquireix quan barregem el nostre treball amb els recursos naturals, però amb límits: no podem acumular més del que podem utilitzar ni privar altres de recursos necessaris."
  },
  {
    id: "p80",
    categoria: "Filosofia",
    subTema: "Locke",
    pregunta: "Segons Locke, quan entra el poder legislatiu en estat de guerra amb el poble?",
    opciones: [
      "Quan actua d'una forma que no respecta ni la propietat ni la llibertat del poble",
      "Quan estableix noves lleis",
      "Quan augmenta els impostos",
      "Quan declara la guerra a altres nacions",
    ],
    respuestaCorrecta: 0,
    explicacion: "Segons el text, quan els legisladors intenten arrabassar i destruir la propietat del poble o reduir els homes a la condició d'esclaus sota un poder arbitrari, entren en estat de guerra amb el poble."
  },
  {
    id: "p81",
    categoria: "Filosofia",
    subTema: "Locke",
    pregunta: "Què defensa Locke sobre el dret de rebel·lió?",
    opciones: [
      "És una doctrina que serveix per prevenir la rebel·lió mostrant els seus perills als governants",
      "És un dret absolut que es pot exercir en qualsevol moment",
      "És una doctrina que promou la violència contra l'autoritat",
      "És un dret que només poden exercir els governants",
    ],
    respuestaCorrecta: 0,
    explicacion: "Segons el text, aquesta doctrina del poder en mans del poble per recuperar la seguretat serveix com a defensa contra la rebel·lió i és el mitjà més eficaç per evitar-la, ja que mostra els perills als governants que podrien estar temptats a abusar del poder."
  },
  {
    id: "p82",
    categoria: "Filosofia",
    subTema: "Locke",
    pregunta: "Segons Locke, quan es pot considerar algú com a rebel?",
    opciones: [
      "Quan usa la força per oposar-se a les lleis després d'haver-se unit a la societat civil",
      "Quan s'oposa a qualsevol decisió del govern",
      "Quan defensa els seus drets naturals",
      "Quan critica les decisions dels governants",
    ],
    respuestaCorrecta: 0,
    explicacion: "El text explica que qui usa la força per oposar-se a les lleis després d'haver-se unit a la societat civil i haver acceptat les lleis per a la defensa de la propietat, pau i unitat, es converteix en un veritable rebel."
  },
  {
    id: "p83",
    categoria: "Filosofia",
    subTema: "Locke",
    pregunta: "Quina és la base del poder polític legítim segons Locke?",
    opciones: [
      "El consentiment del poble i el respecte als drets naturals",
      "La força militar i el control del territori",
      "El dret diví dels governants",
      "La tradició històrica",
    ],
    respuestaCorrecta: 0,
    explicacion: "Segons el text, el poder polític legítim es basa en el consentiment del poble i el respecte als seus drets (propietat, llibertat). Quan els governants violen aquests principis, perden la seva legitimitat."
  },
  {
    id: "p84",
    categoria: "Filosofia",
    subTema: "Locke",
    pregunta: "Per què Locke considera que mostrar els perills de l'abús de poder als governants serveix per prevenir la rebel·lió?",
    opciones: [
      "Perquè els fa conscients que si abusen del poder, el poble pot legítimament resistir-s'hi",
      "Perquè els atemoreix amb càstigs divins",
      "Perquè promou la violència contra ells",
      "Perquè els obliga a dimitir",
    ],
    respuestaCorrecta: 0,
    explicacion: "El text indica que mostrar als governants que si actuen com a rebels contra el poble, aquest pot resistir-s'hi legítimament, serveix per dissuadir-los d'abusar del poder que se'ls ha concedit."
  },
  {
    id: "b74",
    categoria: "Física",
    subTema: "MAS",
    pregunta: "En un moviment harmònic simple (MHS), quina relació hi ha entre el període (T) i la freqüència angular (ω)?",
    opciones: [
      "T = 2π/ω",
      "T = ω/2π",
      "T = ω²/2π",
      "T = 2π·ω",
    ],
    respuestaCorrecta: 0,
    explicacion: "En el MHS, el període T és el temps que triga en completar una oscil·lació completa. La relació amb la freqüència angular és T = 2π/ω, ja que ω representa els radians per unitat de temps."
  },
  {
    id: "b75",
    categoria: "Física",
    subTema: "MAS",
    pregunta: "Una massa de 0,5 kg oscil·la en MHS amb una amplitud de 10 cm i una freqüència de 2 Hz. Quina és la seva energia mecànica total?",
    opciones: [
      "0,789 J",
      "1,578 J",
      "0,394 J",
      "3,156 J",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'energia mecànica en un MHS és E = ½kA². Com k = mω² = m(2πf)² = 0,5·(2π·2)² = 79,0 N/m, tenim E = ½·79,0·(0,1)² = 0,789 J. L'energia es conserva durant el moviment."
  },
  {
    id: "b76",
    categoria: "Física",
    subTema: "MAS",
    pregunta: "En un MHS, quan és màxima l'energia cinètica?",
    opciones: [
      "Quan la partícula passa per la posició d'equilibri",
      "Quan la partícula està en els extrems del recorregut",
      "L'energia cinètica és constant durant tot el moviment",
      "Quan l'acceleració és màxima",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'energia cinètica és màxima quan la partícula passa per la posició d'equilibri (x = 0), ja que en aquest punt la velocitat és màxima i l'energia potencial elàstica és zero."
  },
  {
    id: "b77",
    categoria: "Física",
    subTema: "MAS",
    pregunta: "Una molla té una constant elàstica k = 200 N/m. Si hi pengem una massa de 2 kg, quina serà la freqüència d'oscil·lació?",
    opciones: [
      "1,59 Hz",
      "2,00 Hz",
      "3,18 Hz",
      "0,79 Hz",
    ],
    respuestaCorrecta: 0,
    explicacion: "La freqüència d'oscil·lació ve donada per f = (1/2π)·√(k/m) = (1/2π)·√(200/2) = 1,59 Hz. Aquesta és la freqüència natural del sistema massa-molla."
  },
  {
    id: "b78",
    categoria: "Física",
    subTema: "MAS",
    pregunta: "En un MHS, si doblem l'amplitud, com canvia l'energia mecànica total?",
    opciones: [
      "Es quadruplica",
      "Es duplica",
      "No canvia",
      "Es redueix a la meitat",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'energia mecànica total és E = ½kA². Si doblem l'amplitud (A), l'energia es quadruplica perquè depèn del quadrat de l'amplitud: E₂ = ½k(2A)² = 2kA² = 4(½kA²) = 4E₁."
  },
  {
    id: "b85",
    categoria: "Física",
    subTema: "MAS",
    pregunta: "En un experiment amb dues masses que fan MHS, si una massa està penjada d'una molla vertical i l'altra gira en un disc a 19 cm del centre amb $\\omega = 6,41$ rad/s, per què les seves ombres segueixen el mateix moviment?",
    opciones: [
      "Perquè la projecció del MCU és un MHS amb la mateixa freqüència angular",
      "Perquè tenen la mateixa massa",
      "Perquè estan a la mateixa altura",
      "Perquè tenen la mateixa energia",
    ],
    respuestaCorrecta: 0,
    explicacion: "La projecció d'un MCU sobre un eix és un MHS. Com ambdues masses tenen la mateixa $\\omega$, les seves ombres descriuen el mateix moviment harmònic simple."
  },
  {
    id: "b74",
    categoria: "Física",
    subTema: "MAS",
    pregunta: "En un moviment harmònic simple (MHS), quina relació hi ha entre el període (T) i la freqüència angular (ω)?",
    opciones: [
      "T = 2π/ω",
      "T = ω/2π",
      "T = ω²/2π",
      "T = 2π·ω",
    ],
    respuestaCorrecta: 0,
    explicacion: "En el MHS, el període T és el temps que triga en completar una oscil·lació completa. La relació amb la freqüència angular és T = 2π/ω, ja que ω representa els radians per unitat de temps."
  },
  {
    id: "b75",
    categoria: "Física",
    subTema: "MAS",
    pregunta: "Una massa de 0,5 kg oscil·la en MHS amb una amplitud de 10 cm i una freqüència de 2 Hz. Quina és la seva energia mecànica total?",
    opciones: [
      "0,789 J",
      "1,578 J",
      "0,394 J",
      "3,156 J",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'energia mecànica en un MHS és E = ½kA². Com k = mω² = m(2πf)² = 0,5·(2π·2)² = 79,0 N/m, tenim E = ½·79,0·(0,1)² = 0,789 J. L'energia es conserva durant el moviment."
  },
  {
    id: "b76",
    categoria: "Física",
    subTema: "MAS",
    pregunta: "En un MHS, quan és màxima l'energia cinètica?",
    opciones: [
      "Quan la partícula passa per la posició d'equilibri",
      "Quan la partícula està en els extrems del recorregut",
      "L'energia cinètica és constant durant tot el moviment",
      "Quan l'acceleració és màxima",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'energia cinètica és màxima quan la partícula passa per la posició d'equilibri (x = 0), ja que en aquest punt la velocitat és màxima i l'energia potencial elàstica és zero."
  },
  {
    id: "b77",
    categoria: "Física",
    subTema: "MAS",
    pregunta: "Una molla té una constant elàstica k = 200 N/m. Si hi pengem una massa de 2 kg, quina serà la freqüència d'oscil·lació?",
    opciones: [
      "1,59 Hz",
      "2,00 Hz",
      "3,18 Hz",
      "0,79 Hz",
    ],
    respuestaCorrecta: 0,
    explicacion: "La freqüència d'oscil·lació ve donada per f = (1/2π)·√(k/m) = (1/2π)·√(200/2) = 1,59 Hz. Aquesta és la freqüència natural del sistema massa-molla."
  },
  {
    id: "b78",
    categoria: "Física",
    subTema: "MAS",
    pregunta: "En un MHS, si doblem l'amplitud, com canvia l'energia mecànica total?",
    opciones: [
      "Es quadruplica",
      "Es duplica",
      "No canvia",
      "Es redueix a la meitat",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'energia mecànica total és E = ½kA². Si doblem l'amplitud (A), l'energia es quadruplica perquè depèn del quadrat de l'amplitud: E₂ = ½k(2A)² = 2kA² = 4(½kA²) = 4E₁."
  },
  {
    id: "b85",
    categoria: "Física",
    subTema: "MAS",
    pregunta: "En un experiment amb dues masses que fan MHS, si una massa està penjada d'una molla vertical i l'altra gira en un disc a 19 cm del centre amb $\\omega = 6,41$ rad/s, per què les seves ombres segueixen el mateix moviment?",
    opciones: [
      "Perquè la projecció del MCU és un MHS amb la mateixa freqüència angular",
      "Perquè tenen la mateixa massa",
      "Perquè estan a la mateixa altura",
      "Perquè tenen la mateixa energia",
    ],
    respuestaCorrecta: 0,
    explicacion: "La projecció d'un MCU sobre un eix és un MHS. Com ambdues masses tenen la mateixa $\\omega$, les seves ombres descriuen el mateix moviment harmònic simple."
  },
  {
    id: "s4",
    categoria: "Geografia",
    pregunta: "Quin dels següents problemes NO està directament associat a la pèrdua de cobertura vegetal?",
    opciones: [
      "Erosió del sòl",
      "Augment de la biodiversitat",
      "Inundacions",
      "Pèrdua d'hàbitats per a espècies animals",
    ],
    respuestaCorrecta: 1,
    explicacion: "La pèrdua de cobertura vegetal generalment redueix la biodiversitat en destruir hàbitats i alterar ecosistemes, no l'augment."
  },
  {
    id: "s5",
    categoria: "Geografia",
    pregunta: "Segons el document, què caracteritza el clima mediterrani semiàrid de Lleida?",
    opciones: [
      "Precipitacions abundants tot l'any",
      "Absència total de sequera estival",
      "Hiverns humits i molt freds, estius càlids",
      "Amplitud tèrmica molt baixa",
    ],
    respuestaCorrecta: 2,
    explicacion: "El clima de Lleida es descriu amb hiverns freds i humits, estius càlids, i una precipitació anual escassa (340 mm)."
  },
  {
    id: "s6",
    categoria: "Geografia",
    pregunta: "Quina d'aquestes províncies espanyoles es menciona com a exemple d'àrea amb escàs dinamisme econòmic i forta emigració?",
    opciones: [
      "València",
      "Barcelona",
      "Madrid",
      "Ourense",
    ],
    respuestaCorrecta: 3,
    explicacion: "Ourense, al nord-oest peninsular, és citada com a exemple de província amb baix dinamisme econòmic i històriques migracions."
  },
  {
    id: "s7",
    categoria: "Geografia",
    pregunta: "Quina conseqüència demogràfica es deriva de l'emigració juvenil en zones rurals?",
    opciones: [
      "Augment de la natalitat",
      "Accentuació de l'envelliment poblacional",
      "Rejoveniment de la població",
      "Equilibri entre grups d'edat",
    ],
    respuestaCorrecta: 1,
    explicacion: "L'emigració de joves agreuja l'envelliment demogràfic, ja que redueix la població en edat reproductiva i laboral."
  },
  {
    id: "s4",
    categoria: "Geografia",
    pregunta: "Quin dels següents problemes NO està directament associat a la pèrdua de cobertura vegetal?",
    opciones: [
      "Erosió del sòl",
      "Augment de la biodiversitat",
      "Inundacions",
      "Pèrdua d'hàbitats per a espècies animals",
    ],
    respuestaCorrecta: 1,
    explicacion: "La pèrdua de cobertura vegetal generalment redueix la biodiversitat en destruir hàbitats i alterar ecosistemes, no l'augment."
  },
  {
    id: "s5",
    categoria: "Geografia",
    pregunta: "Segons el document, què caracteritza el clima mediterrani semiàrid de Lleida?",
    opciones: [
      "Precipitacions abundants tot l'any",
      "Absència total de sequera estival",
      "Hiverns humits i molt freds, estius càlids",
      "Amplitud tèrmica molt baixa",
    ],
    respuestaCorrecta: 2,
    explicacion: "El clima de Lleida es descriu amb hiverns freds i humits, estius càlids, i una precipitació anual escassa (340 mm)."
  },
  {
    id: "s6",
    categoria: "Geografia",
    pregunta: "Quina d'aquestes províncies espanyoles es menciona com a exemple d'àrea amb escàs dinamisme econòmic i forta emigració?",
    opciones: [
      "València",
      "Barcelona",
      "Madrid",
      "Ourense",
    ],
    respuestaCorrecta: 3,
    explicacion: "Ourense, al nord-oest peninsular, és citada com a exemple de província amb baix dinamisme econòmic i històriques migracions."
  },
  {
    id: "s7",
    categoria: "Geografia",
    pregunta: "Quina conseqüència demogràfica es deriva de l'emigració juvenil en zones rurals?",
    opciones: [
      "Augment de la natalitat",
      "Accentuació de l'envelliment poblacional",
      "Rejoveniment de la població",
      "Equilibri entre grups d'edat",
    ],
    respuestaCorrecta: 1,
    explicacion: "L'emigració de joves agreuja l'envelliment demogràfic, ja que redueix la població en edat reproductiva i laboral."
  },
  {
    id: "s8",
    categoria: "Història",
    pregunta: "Durant la Segona República espanyola (1931-1936), quin dret fonamental es va reconèixer per primera vegada a les dones?",
    opciones: [
      "Dret a la propietat privada",
      "Dret al vot",
      "Dret a l'educació superior",
      "Dret al divorci",
    ],
    respuestaCorrecta: 1,
    explicacion: "La Constitució de 1931 va reconèixer el sufragi universal femení, permetent a les dones votar per primera vegada a les eleccions de 1933."
  },
  {
    id: "s9",
    categoria: "Història",
    pregunta: "Què va caracteritzar el paper de la dona durant el franquisme (1939-1975)?",
    opciones: [
      "Igualtat legal i participació política activa",
      "Llibertat per exercir qualsevol professió",
      "Rol domèstic i submissió al gènere masculí",
      "Accés prioritari a l'educació universitària",
    ],
    respuestaCorrecta: 2,
    explicacion: "El franquisme va promoure un model de dona centrat en la família i la submissió a l'home, eliminant drets com el divorci i restringint la seva participació pública."
  },
  {
    id: "s26",
    categoria: "Història",
    pregunta: "Quin dels següents esdeveniments NO forma part de l'evolució de l'obrerisme a Espanya entre els processos de Montjuïc i la fundació de la CNT?",
    opciones: [
      "La vaga general de 1902",
      "La formació de Solidaritat Obrera el 1907",
      "La Setmana Tràgica de juliol de 1909",
      "La Revolució de 1868",
    ],
    respuestaCorrecta: 3,
    explicacion: "La Revolució de 1868 (La Gloriosa) és anterior als processos de Montjuïc (1896). Els altres esdeveniments sí que formen part de l'evolució de l'obrerisme en el període especificat."
  },
  {
    id: "s27",
    categoria: "Història",
    pregunta: "Quin va ser l'impacte principal de la Primera Guerra Mundial en la conflictivitat social a Espanya?",
    opciones: [
      "La reducció de les tensions socials",
      "L'enduriment de les condicions de vida i l'augment de la conflictivitat",
      "La millora dels salaris dels treballadors",
      "La disminució de l'atur",
    ],
    respuestaCorrecta: 1,
    explicacion: "La Primera Guerra Mundial va provocar un enduriment de les condicions de vida a Espanya que va desembocar en la crisi de 1917 i la vaga general revolucionària de l'agost d'aquell any."
  },
  {
    id: "s28",
    categoria: "Història",
    pregunta: "Quin fenomen va caracteritzar la lluita obrera durant el trienni bolxevic (1918-1920)?",
    opciones: [
      "El pistolerisme i l'enfrontament entre la CNT i la patronal",
      "La col·laboració entre patrons i obrers",
      "La desaparició dels sindicats",
      "La fi de les vagues obreres",
    ],
    respuestaCorrecta: 0,
    explicacion: "El trienni bolxevic es va caracteritzar per l'augment de la violència social, especialment el pistolerisme, amb enfrontaments entre la CNT i la patronal, i entre la CNT i els Sindicats Lliures."
  },
  {
    id: "s29",
    categoria: "Història",
    pregunta: "Què va ser la vaga de La Canadenca de 1919?",
    opciones: [
      "Una vaga de minaires asturians",
      "Una vaga que va deixar Barcelona sense electricitat i va aconseguir la jornada de 8 hores",
      "Una vaga del sector tèxtil",
      "Una vaga dels treballadors del port",
    ],
    respuestaCorrecta: 1,
    explicacion: "La vaga de La Canadenca va ser una vaga a l'empresa d'electricitat de Barcelona que va paralitzar la ciutat i va aconseguir la implantació de la jornada laboral de 8 hores a Espanya."
  },
  {
    id: "b29",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Quin paper van tenir les dones durant la rereguarda de la Guerra Civil a Catalunya?",
    opciones: [
      "Es van incorporar a la indústria de guerra i van tenir cura dels refugiats",
      "Van romandre exclusivament en tasques domèstiques",
      "No van participar en cap activitat relacionada amb la guerra",
      "Només van treballar en tasques agrícoles",
    ],
    respuestaCorrecta: 0,
    explicacion: "Les dones van tenir un paper fonamental durant la rereguarda: es van incorporar a la indústria de guerra substituint els homes que anaven al front, i van tenir un paper clau en l'acollida i cura dels refugiats, especialment dones, avis i nens."
  },
  {
    id: "b30",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Quina va ser una de les conseqüències més greus dels bombardeigs a Catalunya durant la Guerra Civil?",
    opciones: [
      "L'erosió de les condicions de vida i la mort de població civil",
      "La destrucció exclusiva d'objectius militars",
      "L'augment de la producció industrial",
      "La millora de les infraestructures de defensa",
    ],
    respuestaCorrecta: 0,
    explicacion: "Els bombardeigs van tenir un impacte devastador en la població civil, causant nombroses víctimes i deteriorant severament les condicions de vida a la rereguarda, especialment en ciutats com Barcelona."
  },
  {
    id: "b31",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Què va caracteritzar la revolució política i econòmica a Catalunya durant la Guerra Civil?",
    opciones: [
      "La formació del Comitè de Milícies Antifeixistes i les col·lectivitzacions",
      "El manteniment de l'estructura econòmica anterior",
      "L'absència de canvis en l'organització política",
      "La privatització de les indústries",
    ],
    respuestaCorrecta: 0,
    explicacion: "La revolució es va caracteritzar per la formació del Comitè de Milícies Antifeixistes, que va assumir el poder real, i per les col·lectivitzacions d'empreses i terres, transformant l'estructura econòmica tradicional."
  },
  {
    id: "b32",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Quin document oficial de 1937 mostra l'acollida de refugiats durant la Guerra Civil?",
    opciones: [
      "El text oficial de l'ajuntament de Ripoll autoritzant el trasllat de refugiats",
      "El manifest del Comitè de Milícies Antifeixistes",
      "La declaració d'independència de Catalunya",
      "L'ordre de mobilització general",
    ],
    respuestaCorrecta: 0,
    explicacion: "El text oficial emès per l'ajuntament de Ripoll el 18 d'agost de 1937 autoritzant el trasllat de refugiats a la població és un exemple de com els municipis catalans van gestionar l'acollida massiva de refugiats durant la guerra."
  },
  {
    id: "b33",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Com va evolucionar la guerra a Catalunya fins al seu final?",
    opciones: [
      "Del fracàs del cop d'Estat a la batalla de l'Ebre i l'acabament de la guerra",
      "Amb una ràpida victòria republicana",
      "Sense grans operacions militars",
      "Amb una rendició immediata",
    ],
    respuestaCorrecta: 0,
    explicacion: "La guerra a Catalunya va evolucionar des del fracàs inicial del cop d'Estat, passant per la guerra de columnes al front d'Aragó, fins a la batalla decisiva de l'Ebre i l'acabament final de la guerra amb la victòria franquista."
  },
  {
    id: "b34",
    categoria: "Història",
    subTema: "Restauració Borbònica",
    pregunta: "Quin va ser el principal èxit electoral del catalanisme conservador a principis del segle XX?",
    opciones: [
      "El triomf de la candidatura dels quatre presidents a les eleccions de 1901",
      "La victòria a les eleccions municipals de 1899",
      "L'obtenció de la majoria al Congrés dels Diputats",
      "La formació del primer govern català",
    ],
    respuestaCorrecta: 0,
    explicacion: "El triomf de la candidatura dels quatre presidents a les eleccions generals de 1901 va marcar l'inici de l'hegemonia del catalanisme polític conservador, representat per la Lliga Regionalista."
  },
  {
    id: "b35",
    categoria: "Història",
    subTema: "Restauració Borbònica",
    pregunta: "Qui va ser el principal dirigent de la Lliga Regionalista i quina era la seva doctrina?",
    opciones: [
      "Enric Prat de la Riba amb la doctrina de la 'Nacionalitat catalana'",
      "Francesc Macià amb el separatisme català",
      "Valentí Almirall amb el federalisme",
      "Alejandro Lerroux amb el republicanisme radical",
    ],
    respuestaCorrecta: 0,
    explicacion: "Enric Prat de la Riba va ser el principal dirigent de la Lliga Regionalista i va exposar la seva doctrina del catalanisme conservador en l'obra 'La Nacionalitat catalana', que defensava l'autonomia de Catalunya dins d'Espanya."
  },
  {
    id: "b36",
    categoria: "Història",
    subTema: "Restauració Borbònica",
    pregunta: "Quina va ser l'oposició principal a la Lliga Regionalista entre 1901 i 1914?",
    opciones: [
      "El catalanisme d'esquerres i el republicanisme lerrouxista",
      "El carlisme i el tradicionalisme",
      "El moviment obrer anarquista",
      "Els partits dinàstics espanyols",
    ],
    respuestaCorrecta: 0,
    explicacion: "La principal oposició a la Lliga Regionalista va venir del catalanisme d'esquerres i del republicanisme lerrouxista, que competien per l'hegemonia política a Catalunya amb projectes alternatius al conservadorisme de la Lliga."
  },
  {
    id: "b37",
    categoria: "Història",
    subTema: "Restauració Borbònica",
    pregunta: "Com es va crear la Mancomunitat de Catalunya?",
    opciones: [
      "Mitjançant un decret que permetia la unió de les quatre diputacions provincials catalanes",
      "Per una revolució popular",
      "Per la proclamació unilateral del Parlament de Catalunya",
      "Per un acord amb el govern republicà",
    ],
    respuestaCorrecta: 0,
    explicacion: "La Mancomunitat de Catalunya es va crear el 1914 mitjançant un decret que autoritzava la unió de les quatre diputacions provincials catalanes, després d'anys de negociacions amb el govern espanyol."
  },
  {
    id: "b38",
    categoria: "Història",
    subTema: "Restauració Borbònica",
    pregunta: "Quina va ser l'obra principal de la Mancomunitat durant la seva existència (1914-1925)?",
    opciones: [
      "La modernització d'infraestructures i la promoció de la cultura i l'educació catalanes",
      "La independència de Catalunya",
      "La revolució social i econòmica",
      "L'establiment d'un exèrcit català",
    ],
    respuestaCorrecta: 0,
    explicacion: "La Mancomunitat va dur a terme una important tasca de modernització d'infraestructures (carreteres, telèfons) i va promoure la cultura i l'educació catalanes a través de la creació d'escoles, biblioteques i institucions culturals."
  },
  {
    id: "b39",
    categoria: "Història",
    subTema: "Franquisme",
    pregunta: "Com va evolucionar la relació del règim franquista amb l'Alemanya nazi i la Itàlia feixista?",
    opciones: [
      "Va passar de la identificació ideològica i el suport militar a l'aïllament internacional",
      "Va mantenir una relació neutral durant tota la Segona Guerra Mundial",
      "Va trencar relacions des del principi del règim",
      "Va augmentar la col·laboració després de la Segona Guerra Mundial",
    ],
    respuestaCorrecta: 0,
    explicacion: "El règim franquista es va identificar ideològicament amb l'Alemanya nazi i la Itàlia feixista, donant suport militar a través de la División Azul, però després de la seva derrota a la Segona Guerra Mundial, Espanya va quedar aïllada internacionalment."
  },
  {
    id: "b40",
    categoria: "Història",
    subTema: "Franquisme",
    pregunta: "Com va canviar la relació d'Espanya amb els Estats Units i Europa occidental durant la Guerra Freda?",
    opciones: [
      "Es va passar de l'aïllament al reconeixement internacional gràcies al context de la Guerra Freda",
      "Es va mantenir l'aïllament internacional fins al final del règim",
      "Es van trencar les relacions diplomàtiques",
      "No hi va haver canvis significatius en les relacions internacionals",
    ],
    respuestaCorrecta: 0,
    explicacion: "El clima de la Guerra Freda va propiciar la incorporació d'Espanya al reconeixement internacional, restablint relacions diplomàtiques amb els EE.UU. i els països de l'Europa occidental, culminant amb l'entrada a l'ONU."
  },
  {
    id: "b41",
    categoria: "Història",
    subTema: "Franquisme",
    pregunta: "Quina llei va establir les bases jurídiques del règim franquista durant la seva primera etapa?",
    opciones: [
      "La Ley de Responsabilidades Políticas de 1939",
      "El Fuero de los Españoles de 1945",
      "La Ley de Sucesión de 1947",
      "La Ley de Principios del Movimiento Nacional de 1958",
    ],
    respuestaCorrecta: 0,
    explicacion: "La Ley de Responsabilidades Políticas de 1939 va ser una de les primeres lleis fonamentals del règim, establint la repressió dels vençuts i l'articulació institucional del nou estat franquista."
  },
  {
    id: "b42",
    categoria: "Història",
    subTema: "Franquisme",
    pregunta: "Quin va ser l'objectiu principal del Decreto de Unificación de 1937?",
    opciones: [
      "Unificar totes les forces polítiques que donaven suport a Franco en un únic partit",
      "Establir relacions diplomàtiques amb altres països",
      "Regular l'economia de guerra",
      "Organitzar l'administració territorial",
    ],
    respuestaCorrecta: 0,
    explicacion: "El Decreto de Unificación de 1937 va unificar totes les forces polítiques que donaven suport a Franco (falangistes, carlins i altres grups dretans) en un únic partit: FET y de las JONS."
  },
  {
    id: "b43",
    categoria: "Història",
    subTema: "Franquisme",
    pregunta: "Quina característica va definir l'estructura de l'estat franquista?",
    opciones: [
      "La concentració de tots els poders en la figura de Franco com a Cap d'Estat, Govern i Exèrcit",
      "La separació de poders entre executiu, legislatiu i judicial",
      "Un sistema federal amb autonomies",
      "Un sistema parlamentari amb diversos partits",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'estat franquista es va caracteritzar per la concentració de tots els poders en la figura de Franco, que era Cap d'Estat, Cap de Govern, Cap del Movimiento Nacional i Generalíssim dels Exèrcits, establint així un règim dictatorial personalista."
  },
  {
    id: "s50",
    categoria: "Història",
    subTema: "Restauració Borbònica",
    pregunta: "Quina va ser la causa immediata de l'arribada al poder de Primo de Rivera el 1923?",
    opciones: [
      "L'Expedient Picasso i el problema del Marroc",
      "La crisi econòmica de postguerra",
      "L'agitació social a Catalunya",
      "La crisi del sistema parlamentari",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'Expedient Picasso, que investigava les responsabilitats del desastre d'Annual al Marroc, va ser la causa immediata que va precipitar el cop d'estat de Primo de Rivera el 1923."
  },
  {
    id: "s51",
    categoria: "Història",
    subTema: "Restauració Borbònica",
    pregunta: "Quina va ser una de les primeres mesures repressives de la dictadura de Primo de Rivera?",
    opciones: [
      "La supressió de la Mancomunitat de Catalunya",
      "La creació de la Unión Patriótica",
      "El Directori Civil",
      "La reforma agrària",
    ],
    respuestaCorrecta: 0,
    explicacion: "Una de les primeres mesures repressives va ser la supressió de la Mancomunitat de Catalunya, com a part de la seva política contra el catalanisme i les institucions d'autogovern."
  },
  {
    id: "s52",
    categoria: "Història",
    subTema: "Restauració Borbònica",
    pregunta: "Quin organisme va crear Primo de Rivera per governar durant la primera etapa de la dictadura?",
    opciones: [
      "El Directori Militar",
      "El Directori Civil",
      "La Unión Patriótica",
      "El Consell d'Estat",
    ],
    respuestaCorrecta: 0,
    explicacion: "Primo de Rivera va establir inicialment un Directori Militar format per generals que va substituir el govern civil, marcant el caràcter autoritari i militar del règim."
  },
  {
    id: "s53",
    categoria: "Història",
    subTema: "Restauració Borbònica",
    pregunta: "Quins components formaven la triple crisi de 1917?",
    opciones: [
      "Crisi militar, política i social",
      "Crisi econòmica, social i internacional",
      "Crisi agrària, industrial i financera",
      "Crisi monàrquica, militar i econòmica",
    ],
    respuestaCorrecta: 0,
    explicacion: "La crisi de 1917 va tenir tres components principals: la crisi militar (Juntes de Defensa), la crisi política (Assemblea de Parlamentaris) i la crisi social (vaga general revolucionària)."
  },
  {
    id: "s54",
    categoria: "Història",
    subTema: "Restauració Borbònica",
    pregunta: "Quin va ser l'impacte econòmic de la Primera Guerra Mundial a Espanya que va contribuir a la crisi de 1917?",
    opciones: [
      "L'enduriment de les condicions de vida i l'augment dels preus",
      "El creixement de les exportacions i la millora salarial",
      "La disminució de l'atur i l'augment del consum",
      "L'estabilitat dels preus i els salaris",
    ],
    respuestaCorrecta: 0,
    explicacion: "La Primera Guerra Mundial va provocar un enduriment de les condicions de vida a Espanya, amb un augment dels preus que no va anar acompanyat d'un increment salarial equivalent, generant malestar social."
  },
  {
    id: "s55",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Quin organisme va assumir el poder real a Catalunya a l'inici de la Guerra Civil?",
    opciones: [
      "El Comitè de Milícies Antifeixistes",
      "La Generalitat de Catalunya",
      "El govern de la República",
      "L'exèrcit regular",
    ],
    respuestaCorrecta: 0,
    explicacion: "El Comitè de Milícies Antifeixistes va assumir el poder real a Catalunya després del fracàs del cop d'estat, controlant l'ordre públic i organitzant les milícies populars."
  },
  {
    id: "s56",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Quin canvi econòmic fonamental es va produir a Catalunya durant els primers mesos de la Guerra Civil?",
    opciones: [
      "Les col·lectivitzacions d'empreses i terres",
      "La privatització de les indústries",
      "La nacionalització estatal",
      "El manteniment de l'estructura anterior",
    ],
    respuestaCorrecta: 0,
    explicacion: "Durant els primers mesos de la guerra es va produir un procés revolucionari que va portar a la col·lectivització d'empreses i terres, transformant l'estructura econòmica tradicional."
  },
  {
    id: "s57",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Què van ser els Fets de Maig de 1937 a Catalunya?",
    opciones: [
      "Un enfrontament entre forces republicanes per el control polític",
      "Una victòria de l'exèrcit franquista",
      "Una revolta popular contra el govern",
      "Una vaga general de treballadors",
    ],
    respuestaCorrecta: 0,
    explicacion: "Els Fets de Maig van ser enfrontaments armats a Barcelona entre les forces anarquistes i el POUM contra les forces governamentals i el PSUC, que van marcar el final del procés revolucionari."
  },
  {
    id: "s58",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Com va evolucionar la situació política a Catalunya després dels Fets de Maig de 1937?",
    opciones: [
      "El govern central va recuperar competències de la Generalitat",
      "Es va intensificar el procés revolucionari",
      "La Generalitat va obtenir més autonomia",
      "Es va mantenir l'statu quo anterior",
    ],
    respuestaCorrecta: 0,
    explicacion: "Després dels Fets de Maig, el govern central va recuperar competències que havia perdut, especialment en ordre públic i defensa, debilitant l'autonomia de la Generalitat."
  },
  {
    id: "s59",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Quina va ser la principal batalla de la Guerra Civil a Catalunya?",
    opciones: [
      "La batalla de l'Ebre",
      "La batalla de Madrid",
      "La batalla de Terol",
      "La batalla de Guadalajara",
    ],
    respuestaCorrecta: 0,
    explicacion: "La batalla de l'Ebre (juliol-novembre 1938) va ser la batalla més important de la Guerra Civil a Catalunya i va suposar un punt d'inflexió decisiu cap a la derrota republicana."
  },
  {
    id: "b64",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Com es va proclamar la República a Catalunya l'abril de 1931?",
    opciones: [
      "Macià va proclamar la República Catalana dins la Federació Ibèrica abans que Companys proclamés la República a Barcelona",
      "Es va esperar a la proclamació de Madrid per fer-ho",
      "Es va fer mitjançant un referèndum popular",
      "Va ser una decisió del govern provisional de Madrid",
    ],
    respuestaCorrecta: 0,
    explicacion: "Francesc Macià va proclamar la República Catalana com a Estat integrant de la Federació Ibèrica des del balcó de la Diputació, abans fins i tot que Lluís Companys proclamés la República des de l'Ajuntament de Barcelona i que es proclamés a Madrid."
  },
  {
    id: "b65",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Com es va resoldre la tensió entre el govern provisional de la República i Macià després de la proclamació de la República Catalana?",
    opciones: [
      "Amb la negociació que va convertir la República Catalana en la Generalitat de Catalunya",
      "Amb la intervenció militar del govern central",
      "Amb la declaració d'independència de Catalunya",
      "Amb la dissolució del govern català",
    ],
    respuestaCorrecta: 0,
    explicacion: "Tres ministres del govern provisional (Domingo, Nicolau i De los Ríos) van negociar amb Macià, qui va acceptar substituir la República Catalana per la Generalitat de Catalunya, recuperant així la institució històrica d'autogovern."
  },
  {
    id: "b66",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quin procés es va seguir per aprovar l'Estatut d'Autonomia de 1932?",
    opciones: [
      "Redacció a Núria, plebiscit català, negociació i aprovació a les Corts",
      "Imposició directa del govern central",
      "Acord entre partits sense consulta popular",
      "Aplicació automàtica de l'Estatut de 1931",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'Estatut es va redactar a Núria, va ser aprovat en plebiscit pels catalans, després va ser negociat i modificat a les Corts espanyoles i finalment aprovat el setembre de 1932, amb retallades respecte al text original."
  },
  {
    id: "b67",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quines competències principals va obtenir la Generalitat amb l'Estatut de 1932?",
    opciones: [
      "Ordre públic, justícia, ensenyament i legislació social, amb el català com a cooficial",
      "Totes les competències excepte defensa i relacions internacionals",
      "Només competències administratives sense capacitat legislativa",
      "Les mateixes que la Mancomunitat",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'Estatut de 1932 va concedir a la Generalitat competències en ordre públic (creació dels Mossos), justícia, ensenyament i legislació social, establint també la cooficialitat del català, tot i que amb limitacions respecte al projecte inicial."
  },
  {
    id: "b68",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quin paper va tenir Lluís Companys durant la presidència de Macià (1931-1933)?",
    opciones: [
      "Va ser el primer president del Parlament de Catalunya i governador civil de Barcelona",
      "Va ser només diputat a les Corts espanyoles",
      "Va ser ministre del govern espanyol",
      "Va ser conseller en cap de la Generalitat",
    ],
    respuestaCorrecta: 0,
    explicacion: "Companys va ser escollit primer president del Parlament de Catalunya quan aquest es va constituir el 1932, i anteriorment havia estat governador civil de Barcelona, càrrecs des dels quals va donar suport a la política de Macià."
  },
  {
    id: "b69",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quin partit va ser hegemònic a Catalunya durant la Segona República?",
    opciones: [
      "Esquerra Republicana de Catalunya (ERC)",
      "Lliga Regionalista",
      "Partit Radical",
      "PSOE",
    ],
    respuestaCorrecta: 0,
    explicacion: "ERC va ser el partit hegemònic a Catalunya durant la Segona República, guanyant totes les eleccions importants des de 1931. Sota el lideratge de Macià i després Companys, va governar la Generalitat durant tot el període republicà."
  },
  {
    id: "b70",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quins eren els principals sindicats a Catalunya durant la Segona República?",
    opciones: [
      "CNT, UGT i Unió de Rabassaires",
      "CCOO i UGT",
      "CNT i FAI només",
      "UGT i PSOE",
    ],
    respuestaCorrecta: 0,
    explicacion: "Els principals sindicats eren la CNT (anarcosindicalista i majoritària), la UGT (socialista) i la Unió de Rabassaires (sindicat agrari proper a ERC). La CNT tenia especial força en el sector industrial."
  },
  {
    id: "b71",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quina va ser la principal força d'oposició conservadora a ERC durant la Segona República?",
    opciones: [
      "La Lliga Catalana (antiga Lliga Regionalista)",
      "El Partit Radical",
      "La CEDA",
      "El Partit Tradicionalista",
    ],
    respuestaCorrecta: 0,
    explicacion: "La Lliga Catalana (evolució de la Lliga Regionalista) va ser la principal força conservadora d'oposició, representant els interessos de la burgesia catalana i defensant un catalanisme més moderat que ERC."
  },
  {
    id: "b72",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quin paper va tenir la Unió de Rabassaires durant el govern de Companys?",
    opciones: [
      "Va donar suport a la Llei de Contractes de Conreu i va ser un aliat clau d'ERC",
      "Es va oposar a les reformes agràries",
      "Va donar suport a la Lliga Catalana",
      "Va mantenir una posició neutral",
    ],
    respuestaCorrecta: 0,
    explicacion: "La Unió de Rabassaires va ser un aliat fonamental d'ERC i va donar suport a la Llei de Contractes de Conreu de 1934, que buscava millorar les condicions dels rabassaires (pagesos) i va generar un fort conflicte amb els propietaris agraris."
  },
  {
    id: "b73",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Com va evolucionar el PSUC durant la Segona República?",
    opciones: [
      "Es va fundar el 1936 per la unificació de diversos partits marxistes catalans",
      "Ja existia abans de la República",
      "Era una branca del PSOE",
      "Va desaparèixer durant la República",
    ],
    respuestaCorrecta: 0,
    explicacion: "El Partit Socialista Unificat de Catalunya (PSUC) es va fundar el juliol de 1936 per la unificació de quatre partits marxistes catalans: Unió Socialista de Catalunya, Partit Comunista de Catalunya, Partit Català Proletari i la Federació Catalana del PSOE."
  },
  {
    id: "h10",
    categoria: "Història",
    subTema: "Història de l'Art",
    pregunta: "On es troben les pintures rupestres d'Altamira?",
    opciones: [
      "Andalusia",
      "Cantàbria",
      "Castella i Lleó",
      "Aragó",
    ],
    respuestaCorrecta: 1,
    explicacion: "Descobertes el 1879 a Santillana del Mar (Cantàbria), són considerades la 'Capella Sixtina' de l'art paleolític."
  },
  {
    id: "s8",
    categoria: "Història",
    pregunta: "Durant la Segona República espanyola (1931-1936), quin dret fonamental es va reconèixer per primera vegada a les dones?",
    opciones: [
      "Dret a la propietat privada",
      "Dret al vot",
      "Dret a l'educació superior",
      "Dret al divorci",
    ],
    respuestaCorrecta: 1,
    explicacion: "La Constitució de 1931 va reconèixer el sufragi universal femení, permetent a les dones votar per primera vegada a les eleccions de 1933."
  },
  {
    id: "s9",
    categoria: "Història",
    pregunta: "Què va caracteritzar el paper de la dona durant el franquisme (1939-1975)?",
    opciones: [
      "Igualtat legal i participació política activa",
      "Llibertat per exercir qualsevol professió",
      "Rol domèstic i submissió al gènere masculí",
      "Accés prioritari a l'educació universitària",
    ],
    respuestaCorrecta: 2,
    explicacion: "El franquisme va promoure un model de dona centrat en la família i la submissió a l'home, eliminant drets com el divorci i restringint la seva participació pública."
  },
  {
    id: "s26",
    categoria: "Història",
    pregunta: "Quin dels següents esdeveniments NO forma part de l'evolució de l'obrerisme a Espanya entre els processos de Montjuïc i la fundació de la CNT?",
    opciones: [
      "La vaga general de 1902",
      "La formació de Solidaritat Obrera el 1907",
      "La Setmana Tràgica de juliol de 1909",
      "La Revolució de 1868",
    ],
    respuestaCorrecta: 3,
    explicacion: "La Revolució de 1868 (La Gloriosa) és anterior als processos de Montjuïc (1896). Els altres esdeveniments sí que formen part de l'evolució de l'obrerisme en el període especificat."
  },
  {
    id: "s27",
    categoria: "Història",
    pregunta: "Quin va ser l'impacte principal de la Primera Guerra Mundial en la conflictivitat social a Espanya?",
    opciones: [
      "La reducció de les tensions socials",
      "L'enduriment de les condicions de vida i l'augment de la conflictivitat",
      "La millora dels salaris dels treballadors",
      "La disminució de l'atur",
    ],
    respuestaCorrecta: 1,
    explicacion: "La Primera Guerra Mundial va provocar un enduriment de les condicions de vida a Espanya que va desembocar en la crisi de 1917 i la vaga general revolucionària de l'agost d'aquell any."
  },
  {
    id: "s28",
    categoria: "Història",
    pregunta: "Quin fenomen va caracteritzar la lluita obrera durant el trienni bolxevic (1918-1920)?",
    opciones: [
      "El pistolerisme i l'enfrontament entre la CNT i la patronal",
      "La col·laboració entre patrons i obrers",
      "La desaparició dels sindicats",
      "La fi de les vagues obreres",
    ],
    respuestaCorrecta: 0,
    explicacion: "El trienni bolxevic es va caracteritzar per l'augment de la violència social, especialment el pistolerisme, amb enfrontaments entre la CNT i la patronal, i entre la CNT i els Sindicats Lliures."
  },
  {
    id: "s29",
    categoria: "Història",
    pregunta: "Què va ser la vaga de La Canadenca de 1919?",
    opciones: [
      "Una vaga de minaires asturians",
      "Una vaga que va deixar Barcelona sense electricitat i va aconseguir la jornada de 8 hores",
      "Una vaga del sector tèxtil",
      "Una vaga dels treballadors del port",
    ],
    respuestaCorrecta: 1,
    explicacion: "La vaga de La Canadenca va ser una vaga a l'empresa d'electricitat de Barcelona que va paralitzar la ciutat i va aconseguir la implantació de la jornada laboral de 8 hores a Espanya."
  },
  {
    id: "b29",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Quin paper van tenir les dones durant la rereguarda de la Guerra Civil a Catalunya?",
    opciones: [
      "Es van incorporar a la indústria de guerra i van tenir cura dels refugiats",
      "Van romandre exclusivament en tasques domèstiques",
      "No van participar en cap activitat relacionada amb la guerra",
      "Només van treballar en tasques agrícoles",
    ],
    respuestaCorrecta: 0,
    explicacion: "Les dones van tenir un paper fonamental durant la rereguarda: es van incorporar a la indústria de guerra substituint els homes que anaven al front, i van tenir un paper clau en l'acollida i cura dels refugiats, especialment dones, avis i nens."
  },
  {
    id: "b30",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Quina va ser una de les conseqüències més greus dels bombardeigs a Catalunya durant la Guerra Civil?",
    opciones: [
      "L'erosió de les condicions de vida i la mort de població civil",
      "La destrucció exclusiva d'objectius militars",
      "L'augment de la producció industrial",
      "La millora de les infraestructures de defensa",
    ],
    respuestaCorrecta: 0,
    explicacion: "Els bombardeigs van tenir un impacte devastador en la població civil, causant nombroses víctimes i deteriorant severament les condicions de vida a la rereguarda, especialment en ciutats com Barcelona."
  },
  {
    id: "b31",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Què va caracteritzar la revolució política i econòmica a Catalunya durant la Guerra Civil?",
    opciones: [
      "La formació del Comitè de Milícies Antifeixistes i les col·lectivitzacions",
      "El manteniment de l'estructura econòmica anterior",
      "L'absència de canvis en l'organització política",
      "La privatització de les indústries",
    ],
    respuestaCorrecta: 0,
    explicacion: "La revolució es va caracteritzar per la formació del Comitè de Milícies Antifeixistes, que va assumir el poder real, i per les col·lectivitzacions d'empreses i terres, transformant l'estructura econòmica tradicional."
  },
  {
    id: "b32",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Quin document oficial de 1937 mostra l'acollida de refugiats durant la Guerra Civil?",
    opciones: [
      "El text oficial de l'ajuntament de Ripoll autoritzant el trasllat de refugiats",
      "El manifest del Comitè de Milícies Antifeixistes",
      "La declaració d'independència de Catalunya",
      "L'ordre de mobilització general",
    ],
    respuestaCorrecta: 0,
    explicacion: "El text oficial emès per l'ajuntament de Ripoll el 18 d'agost de 1937 autoritzant el trasllat de refugiats a la població és un exemple de com els municipis catalans van gestionar l'acollida massiva de refugiats durant la guerra."
  },
  {
    id: "b33",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Com va evolucionar la guerra a Catalunya fins al seu final?",
    opciones: [
      "Del fracàs del cop d'Estat a la batalla de l'Ebre i l'acabament de la guerra",
      "Amb una ràpida victòria republicana",
      "Sense grans operacions militars",
      "Amb una rendició immediata",
    ],
    respuestaCorrecta: 0,
    explicacion: "La guerra a Catalunya va evolucionar des del fracàs inicial del cop d'Estat, passant per la guerra de columnes al front d'Aragó, fins a la batalla decisiva de l'Ebre i l'acabament final de la guerra amb la victòria franquista."
  },
  {
    id: "b34",
    categoria: "Història",
    subTema: "Restauració Borbònica",
    pregunta: "Quina va ser la principal batalla de la Guerra Civil a Catalunya?",
    opciones: [
      "La batalla de l'Ebre",
      "La batalla de Madrid",
      "La batalla de Terol",
      "La batalla de Guadalajara",
    ],
    respuestaCorrecta: 0,
    explicacion: "La batalla de l'Ebre (juliol-novembre 1938) va ser la batalla més important de la Guerra Civil a Catalunya i va suposar un punt d'inflexió decisiu cap a la derrota republicana."
  },
  {
    id: "b64",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Com es va proclamar la República a Catalunya l'abril de 1931?",
    opciones: [
      "Macià va proclamar la República Catalana dins la Federació Ibèrica abans que Companys proclamés la República a Barcelona",
      "Es va esperar a la proclamació de Madrid per fer-ho",
      "Es va fer mitjançant un referèndum popular",
      "Va ser una decisió del govern provisional de Madrid",
    ],
    respuestaCorrecta: 0,
    explicacion: "Francesc Macià va proclamar la República Catalana com a Estat integrant de la Federació Ibèrica des del balcó de la Diputació, abans fins i tot que Lluís Companys proclamés la República des de l'Ajuntament de Barcelona i que es proclamés a Madrid."
  },
  {
    id: "b65",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Com es va resoldre la tensió entre el govern provisional de la República i Macià després de la proclamació de la República Catalana?",
    opciones: [
      "Amb la negociació que va convertir la República Catalana en la Generalitat de Catalunya",
      "Amb la intervenció militar del govern central",
      "Amb la declaració d'independència de Catalunya",
      "Amb la dissolució del govern català",
    ],
    respuestaCorrecta: 0,
    explicacion: "Tres ministres del govern provisional (Domingo, Nicolau i De los Ríos) van negociar amb Macià, qui va acceptar substituir la República Catalana per la Generalitat de Catalunya, recuperant així la institució històrica d'autogovern."
  },
  {
    id: "b66",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quin procés es va seguir per aprovar l'Estatut d'Autonomia de 1932?",
    opciones: [
      "Redacció a Núria, plebiscit català, negociació i aprovació a les Corts",
      "Imposició directa del govern central",
      "Acord entre partits sense consulta popular",
      "Aplicació automàtica de l'Estatut de 1931",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'Estatut es va redactar a Núria, va ser aprovat en plebiscit pels catalans, després va ser negociat i modificat a les Corts espanyoles i finalment aprovat el setembre de 1932, amb retallades respecte al text original."
  },
  {
    id: "b67",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quines competències principals va obtenir la Generalitat amb l'Estatut de 1932?",
    opciones: [
      "Ordre públic, justícia, ensenyament i legislació social, amb el català com a cooficial",
      "Totes les competències excepte defensa i relacions internacionals",
      "Només competències administratives sense capacitat legislativa",
      "Les mateixes que la Mancomunitat",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'Estatut de 1932 va concedir a la Generalitat competències en ordre públic (creació dels Mossos), justícia, ensenyament i legislació social, establint també la cooficialitat del català, tot i que amb limitacions respecte al projecte inicial."
  },
  {
    id: "b68",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quin paper va tenir Lluís Companys durant la presidència de Macià (1931-1933)?",
    opciones: [
      "Va ser el primer president del Parlament de Catalunya i governador civil de Barcelona",
      "Va ser només diputat a les Corts espanyoles",
      "Va ser ministre del govern espanyol",
      "Va ser conseller en cap de la Generalitat",
    ],
    respuestaCorrecta: 0,
    explicacion: "Companys va ser escollit primer president del Parlament de Catalunya quan aquest es va constituir el 1932, i anteriorment havia estat governador civil de Barcelona, càrrecs des dels quals va donar suport a la política de Macià."
  },
  {
    id: "b69",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quin partit va ser hegemònic a Catalunya durant la Segona República?",
    opciones: [
      "Esquerra Republicana de Catalunya (ERC)",
      "Lliga Regionalista",
      "Partit Radical",
      "PSOE",
    ],
    respuestaCorrecta: 0,
    explicacion: "ERC va ser el partit hegemònic a Catalunya durant la Segona República, guanyant totes les eleccions importants des de 1931. Sota el lideratge de Macià i després Companys, va governar la Generalitat durant tot el període republicà."
  },
  {
    id: "b70",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quins eren els principals sindicats a Catalunya durant la Segona República?",
    opciones: [
      "CNT, UGT i Unió de Rabassaires",
      "CCOO i UGT",
      "CNT i FAI només",
      "UGT i PSOE",
    ],
    respuestaCorrecta: 0,
    explicacion: "Els principals sindicats eren la CNT (anarcosindicalista i majoritària), la UGT (socialista) i la Unió de Rabassaires (sindicat agrari proper a ERC). La CNT tenia especial força en el sector industrial."
  },
  {
    id: "b71",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quina va ser la principal força d'oposició conservadora a ERC durant la Segona República?",
    opciones: [
      "La Lliga Catalana (antiga Lliga Regionalista)",
      "El Partit Radical",
      "La CEDA",
      "El Partit Tradicionalista",
    ],
    respuestaCorrecta: 0,
    explicacion: "La Lliga Catalana (evolució de la Lliga Regionalista) va ser la principal força conservadora d'oposició, representant els interessos de la burgesia catalana i defensant un catalanisme més moderat que ERC."
  },
  {
    id: "b72",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quin paper va tenir la Unió de Rabassaires durant el govern de Companys?",
    opciones: [
      "Va donar suport a la Llei de Contractes de Conreu i va ser un aliat clau d'ERC",
      "Es va oposar a les reformes agràries",
      "Va donar suport a la Lliga Catalana",
      "Va mantenir una posició neutral",
    ],
    respuestaCorrecta: 0,
    explicacion: "La Unió de Rabassaires va ser un aliat fonamental d'ERC i va donar suport a la Llei de Contractes de Conreu de 1934, que buscava millorar les condicions dels rabassaires (pagesos) i va generar un fort conflicte amb els propietaris agraris."
  },
  {
    id: "b73",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Com va evolucionar el PSUC durant la Segona República?",
    opciones: [
      "Es va fundar el 1936 per la unificació de diversos partits marxistes catalans",
      "Ja existia abans de la República",
      "Era una branca del PSOE",
      "Va desaparèixer durant la República",
    ],
    respuestaCorrecta: 0,
    explicacion: "El Partit Socialista Unificat de Catalunya (PSUC) es va fundar el juliol de 1936 per la unificació de quatre partits marxistes catalans: Unió Socialista de Catalunya, Partit Comunista de Catalunya, Partit Català Proletari i la Federació Catalana del PSOE."
  },
  {
    id: "h10",
    categoria: "Història",
    subTema: "Història de l'Art",
    pregunta: "On es troben les pintures rupestres d'Altamira?",
    opciones: [
      "Andalusia",
      "Cantàbria",
      "Castella i Lleó",
      "Aragó",
    ],
    respuestaCorrecta: 1,
    explicacion: "Descobertes el 1879 a Santillana del Mar (Cantàbria), són considerades la 'Capella Sixtina' de l'art paleolític."
  },
  {
    id: "s8",
    categoria: "Història",
    pregunta: "Durant la Segona República espanyola (1931-1936), quin dret fonamental es va reconèixer per primera vegada a les dones?",
    opciones: [
      "Dret a la propietat privada",
      "Dret al vot",
      "Dret a l'educació superior",
      "Dret al divorci",
    ],
    respuestaCorrecta: 1,
    explicacion: "La Constitució de 1931 va reconèixer el sufragi universal femení, permetent a les dones votar per primera vegada a les eleccions de 1933."
  },
  {
    id: "s9",
    categoria: "Història",
    pregunta: "Què va caracteritzar el paper de la dona durant el franquisme (1939-1975)?",
    opciones: [
      "Igualtat legal i participació política activa",
      "Llibertat per exercir qualsevol professió",
      "Rol domèstic i submissió al gènere masculí",
      "Accés prioritari a l'educació universitària",
    ],
    respuestaCorrecta: 2,
    explicacion: "El franquisme va promoure un model de dona centrat en la família i la submissió a l'home, eliminant drets com el divorci i restringint la seva participació pública."
  },
  {
    id: "s26",
    categoria: "Història",
    pregunta: "Quin dels següents esdeveniments NO forma part de l'evolució de l'obrerisme a Espanya entre els processos de Montjuïc i la fundació de la CNT?",
    opciones: [
      "La vaga general de 1902",
      "La formació de Solidaritat Obrera el 1907",
      "La Setmana Tràgica de juliol de 1909",
      "La Revolució de 1868",
    ],
    respuestaCorrecta: 3,
    explicacion: "La Revolució de 1868 (La Gloriosa) és anterior als processos de Montjuïc (1896). Els altres esdeveniments sí que formen part de l'evolució de l'obrerisme en el període especificat."
  },
  {
    id: "s27",
    categoria: "Història",
    pregunta: "Quin va ser l'impacte principal de la Primera Guerra Mundial en la conflictivitat social a Espanya?",
    opciones: [
      "La reducció de les tensions socials",
      "L'enduriment de les condicions de vida i l'augment de la conflictivitat",
      "La millora dels salaris dels treballadors",
      "La disminució de l'atur",
    ],
    respuestaCorrecta: 1,
    explicacion: "La Primera Guerra Mundial va provocar un enduriment de les condicions de vida a Espanya que va desembocar en la crisi de 1917 i la vaga general revolucionària de l'agost d'aquell any."
  },
  {
    id: "s28",
    categoria: "Història",
    pregunta: "Quin fenomen va caracteritzar la lluita obrera durant el trienni bolxevic (1918-1920)?",
    opciones: [
      "El pistolerisme i l'enfrontament entre la CNT i la patronal",
      "La col·laboració entre patrons i obrers",
      "La desaparició dels sindicats",
      "La fi de les vagues obreres",
    ],
    respuestaCorrecta: 0,
    explicacion: "El trienni bolxevic es va caracteritzar per l'augment de la violència social, especialment el pistolerisme, amb enfrontaments entre la CNT i la patronal, i entre la CNT i els Sindicats Lliures."
  },
  {
    id: "s29",
    categoria: "Història",
    pregunta: "Què va ser la vaga de La Canadenca de 1919?",
    opciones: [
      "Una vaga de minaires asturians",
      "Una vaga que va deixar Barcelona sense electricitat i va aconseguir la jornada de 8 hores",
      "Una vaga del sector tèxtil",
      "Una vaga dels treballadors del port",
    ],
    respuestaCorrecta: 1,
    explicacion: "La vaga de La Canadenca va ser una vaga a l'empresa d'electricitat de Barcelona que va paralitzar la ciutat i va aconseguir la implantació de la jornada laboral de 8 hores a Espanya."
  },
  {
    id: "b29",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Quin paper van tenir les dones durant la rereguarda de la Guerra Civil a Catalunya?",
    opciones: [
      "Es van incorporar a la indústria de guerra i van tenir cura dels refugiats",
      "Van romandre exclusivament en tasques domèstiques",
      "No van participar en cap activitat relacionada amb la guerra",
      "Només van treballar en tasques agrícoles",
    ],
    respuestaCorrecta: 0,
    explicacion: "Les dones van tenir un paper fonamental durant la rereguarda: es van incorporar a la indústria de guerra substituint els homes que anaven al front, i van tenir un paper clau en l'acollida i cura dels refugiats, especialment dones, avis i nens."
  },
  {
    id: "b30",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Quina va ser una de les conseqüències més greus dels bombardeigs a Catalunya durant la Guerra Civil?",
    opciones: [
      "L'erosió de les condicions de vida i la mort de població civil",
      "La destrucció exclusiva d'objectius militars",
      "L'augment de la producció industrial",
      "La millora de les infraestructures de defensa",
    ],
    respuestaCorrecta: 0,
    explicacion: "Els bombardeigs van tenir un impacte devastador en la població civil, causant nombroses víctimes i deteriorant severament les condicions de vida a la rereguarda, especialment en ciutats com Barcelona."
  },
  {
    id: "b31",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Què va caracteritzar la revolució política i econòmica a Catalunya durant la Guerra Civil?",
    opciones: [
      "La formació del Comitè de Milícies Antifeixistes i les col·lectivitzacions",
      "El manteniment de l'estructura econòmica anterior",
      "L'absència de canvis en l'organització política",
      "La privatització de les indústries",
    ],
    respuestaCorrecta: 0,
    explicacion: "La revolució es va caracteritzar per la formació del Comitè de Milícies Antifeixistes, que va assumir el poder real, i per les col·lectivitzacions d'empreses i terres, transformant l'estructura econòmica tradicional."
  },
  {
    id: "b32",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Quin document oficial de 1937 mostra l'acollida de refugiats durant la Guerra Civil?",
    opciones: [
      "El text oficial de l'ajuntament de Ripoll autoritzant el trasllat de refugiats",
      "El manifest del Comitè de Milícies Antifeixistes",
      "La declaració d'independència de Catalunya",
      "L'ordre de mobilització general",
    ],
    respuestaCorrecta: 0,
    explicacion: "El text oficial emès per l'ajuntament de Ripoll el 18 d'agost de 1937 autoritzant el trasllat de refugiats a la població és un exemple de com els municipis catalans van gestionar l'acollida massiva de refugiats durant la guerra."
  },
  {
    id: "b33",
    categoria: "Història",
    subTema: "Guerra Civil",
    pregunta: "Com va evolucionar la guerra a Catalunya fins al seu final?",
    opciones: [
      "Del fracàs del cop d'Estat a la batalla de l'Ebre i l'acabament de la guerra",
      "Amb una ràpida victòria republicana",
      "Sense grans operacions militars",
      "Amb una rendició immediata",
    ],
    respuestaCorrecta: 0,
    explicacion: "La guerra a Catalunya va evolucionar des del fracàs inicial del cop d'Estat, passant per la guerra de columnes al front d'Aragó, fins a la batalla decisiva de l'Ebre i l'acabament final de la guerra amb la victòria franquista."
  },
  {
    id: "b34",
    categoria: "Història",
    subTema: "Restauració Borbònica",
    pregunta: "Quina va ser la principal batalla de la Guerra Civil a Catalunya?",
    opciones: [
      "La batalla de l'Ebre",
      "La batalla de Madrid",
      "La batalla de Terol",
      "La batalla de Guadalajara",
    ],
    respuestaCorrecta: 0,
    explicacion: "La batalla de l'Ebre (juliol-novembre 1938) va ser la batalla més important de la Guerra Civil a Catalunya i va suposar un punt d'inflexió decisiu cap a la derrota republicana."
  },
  {
    id: "b64",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Com es va proclamar la República a Catalunya l'abril de 1931?",
    opciones: [
      "Macià va proclamar la República Catalana dins la Federació Ibèrica abans que Companys proclamés la República a Barcelona",
      "Es va esperar a la proclamació de Madrid per fer-ho",
      "Es va fer mitjançant un referèndum popular",
      "Va ser una decisió del govern provisional de Madrid",
    ],
    respuestaCorrecta: 0,
    explicacion: "Francesc Macià va proclamar la República Catalana com a Estat integrant de la Federació Ibèrica des del balcó de la Diputació, abans fins i tot que Lluís Companys proclamés la República des de l'Ajuntament de Barcelona i que es proclamés a Madrid."
  },
  {
    id: "b65",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Com es va resoldre la tensió entre el govern provisional de la República i Macià després de la proclamació de la República Catalana?",
    opciones: [
      "Amb la negociació que va convertir la República Catalana en la Generalitat de Catalunya",
      "Amb la intervenció militar del govern central",
      "Amb la declaració d'independència de Catalunya",
      "Amb la dissolució del govern català",
    ],
    respuestaCorrecta: 0,
    explicacion: "Tres ministres del govern provisional (Domingo, Nicolau i De los Ríos) van negociar amb Macià, qui va acceptar substituir la República Catalana per la Generalitat de Catalunya, recuperant així la institució històrica d'autogovern."
  },
  {
    id: "b66",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quin procés es va seguir per aprovar l'Estatut d'Autonomia de 1932?",
    opciones: [
      "Redacció a Núria, plebiscit català, negociació i aprovació a les Corts",
      "Imposició directa del govern central",
      "Acord entre partits sense consulta popular",
      "Aplicació automàtica de l'Estatut de 1931",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'Estatut es va redactar a Núria, va ser aprovat en plebiscit pels catalans, després va ser negociat i modificat a les Corts espanyoles i finalment aprovat el setembre de 1932, amb retallades respecte al text original."
  },
  {
    id: "b67",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quines competències principals va obtenir la Generalitat amb l'Estatut de 1932?",
    opciones: [
      "Ordre públic, justícia, ensenyament i legislació social, amb el català com a cooficial",
      "Totes les competències excepte defensa i relacions internacionals",
      "Només competències administratives sense capacitat legislativa",
      "Les mateixes que la Mancomunitat",
    ],
    respuestaCorrecta: 0,
    explicacion: "L'Estatut de 1932 va concedir a la Generalitat competències en ordre públic (creació dels Mossos), justícia, ensenyament i legislació social, establint també la cooficialitat del català, tot i que amb limitacions respecte al projecte inicial."
  },
  {
    id: "b68",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quin paper va tenir Lluís Companys durant la presidència de Macià (1931-1933)?",
    opciones: [
      "Va ser el primer president del Parlament de Catalunya i governador civil de Barcelona",
      "Va ser només diputat a les Corts espanyoles",
      "Va ser ministre del govern espanyol",
      "Va ser conseller en cap de la Generalitat",
    ],
    respuestaCorrecta: 0,
    explicacion: "Companys va ser escollit primer president del Parlament de Catalunya quan aquest es va constituir el 1932, i anteriorment havia estat governador civil de Barcelona, càrrecs des dels quals va donar suport a la política de Macià."
  },
  {
    id: "b69",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quin partit va ser hegemònic a Catalunya durant la Segona República?",
    opciones: [
      "Esquerra Republicana de Catalunya (ERC)",
      "Lliga Regionalista",
      "Partit Radical",
      "PSOE",
    ],
    respuestaCorrecta: 0,
    explicacion: "ERC va ser el partit hegemònic a Catalunya durant la Segona República, guanyant totes les eleccions importants des de 1931. Sota el lideratge de Macià i després Companys, va governar la Generalitat durant tot el període republicà."
  },
  {
    id: "b70",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quins eren els principals sindicats a Catalunya durant la Segona República?",
    opciones: [
      "CNT, UGT i Unió de Rabassaires",
      "CCOO i UGT",
      "CNT i FAI només",
      "UGT i PSOE",
    ],
    respuestaCorrecta: 0,
    explicacion: "Els principals sindicats eren la CNT (anarcosindicalista i majoritària), la UGT (socialista) i la Unió de Rabassaires (sindicat agrari proper a ERC). La CNT tenia especial força en el sector industrial."
  },
  {
    id: "b71",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quina va ser la principal força d'oposició conservadora a ERC durant la Segona República?",
    opciones: [
      "La Lliga Catalana (antiga Lliga Regionalista)",
      "El Partit Radical",
      "La CEDA",
      "El Partit Tradicionalista",
    ],
    respuestaCorrecta: 0,
    explicacion: "La Lliga Catalana (evolució de la Lliga Regionalista) va ser la principal força conservadora d'oposició, representant els interessos de la burgesia catalana i defensant un catalanisme més moderat que ERC."
  },
  {
    id: "b72",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Quin paper va tenir la Unió de Rabassaires durant el govern de Companys?",
    opciones: [
      "Va donar suport a la Llei de Contractes de Conreu i va ser un aliat clau d'ERC",
      "Es va oposar a les reformes agràries",
      "Va donar suport a la Lliga Catalana",
      "Va mantenir una posició neutral",
    ],
    respuestaCorrecta: 0,
    explicacion: "La Unió de Rabassaires va ser un aliat fonamental d'ERC i va donar suport a la Llei de Contractes de Conreu de 1934, que buscava millorar les condicions dels rabassaires (pagesos) i va generar un fort conflicte amb els propietaris agraris."
  },
  {
    id: "b73",
    categoria: "Història",
    subTema: "Segona República",
    pregunta: "Com va evolucionar el PSUC durant la Segona República?",
    opciones: [
      "Es va fundar el 1936 per la unificació de diversos partits marxistes catalans",
      "Ja existia abans de la República",
      "Era una branca del PSOE",
      "Va desaparèixer durant la República",
    ],
    respuestaCorrecta: 0,
    explicacion: "El Partit Socialista Unificat de Catalunya (PSUC) es va fundar el juliol de 1936 per la unificació de quatre partits marxistes catalans: Unió Socialista de Catalunya, Partit Comunista de Catalunya, Partit Català Proletari i la Federació Catalana del PSOE."
  },
  {
    id: "h10",
    categoria: "Història",
    subTema: "Franquisme",
    pregunta: "Com va canviar la relació d'Espanya amb els Estats Units i Europa occidental durant la Guerra Freda?",
    opciones: [
      "Es va passar de l'aïllament al reconeixement internacional gràcies al context de la Guerra Freda",
      "Es va mantenir l'aïllament internacional fins al final del règim",
      "Es van trencar les relacions diplomàtiques",
      "No hi va haver canvis significatius en les relacions internacionals",
    ],
    respuestaCorrecta: 0,
    explicacion: "El clima de la Guerra Freda va propiciar la incorporació d'Espanya al reconeixement internacional, restablint relacions diplomàtiques amb els EE.UU. i els països de l'Europa occidental, culminant amb l'entrada a l'ONU."
  },
  {
    id: "s30",
    categoria: "Matemàtiques",
    subTema: "Càlcul Integral",
    pregunta: "Quin és el valor de $\\int_0^1 (3x^2 + 2x) dx$?",
    opciones: [
      "1",
      "1.5",
      "2",
      "2.5",
    ],
    respuestaCorrecta: 2,
    explicacion: "Integrant: $x^3 + x^2$ avaluat entre 0 i 1 dóna $(1 + 1) - (0 + 0) = 2$."
  },
  {
    id: "m13",
    categoria: "Matemàtiques",
    subTema: "Càlcul",
    pregunta: "Calculeu els coeficients $a$, $b$, $c$ i $d$ de la funció $f(x) = ax^3 + bx^2 + cx + d$ si sabem que l'equació de la recta tangent a la gràfica de la funció $f$ en el punt d'inflexió $(2, 0)$ és $y = -2x + 4$ i que la funció té un extrem relatiu en el punt de la gràfica d'abscissa $x = 1$.",
    opciones: [
      "$a = 2, b = -6, c = 0, d = 4$",
      "$a = 1, b = -3, c = 0, d = 2$",
      "$a = 1, b = -2, c = 0, d = 1$",
      "$a = 2, b = -4, c = 0, d = 2$",
    ],
    respuestaCorrecta: 0,
    explicacion: "Seguim aquests passos:\\n1) Derivades successives: $f'(x) = 3ax^2 + 2bx + c$, $f''(x) = 6ax + 2b$\\n2) Com $(2,0)$ és punt d'inflexió: $f(2) = 0 \\rightarrow 8a + 4b + 2c + d = 0$ i $f''(2) = 0 \\rightarrow 12a + 2b = 0$\\n3) El pendent en $x = 2$ és $-2$, per tant: $f'(2) = -2 \\rightarrow 12a + 4b + c = -2$\\n4) Hi ha un extrem en $x = 1$, per tant: $f'(1) = 0 \\rightarrow 3a + 2b + c = 0$\\nResolent el sistema obtenim $a = 2$, $b = -6$, $c = 0$, $d = 4$"
  },
  {
    id: "m17",
    categoria: "Matemàtiques",
    subTema: "Càlcul",
    pregunta: "Considereu les funcions $f(x) = -x^2 + x + 6$ i $g(x) = -9x + 3x^2$. Trobeu l'equació de la recta tangent a la funció $f(x)$ en el punt $(-2, 0)$ i indiqueu per quins punts passa aquesta recta.",
    opciones: [
      "$y = 5x + 10$, passa pels punts $(0,10)$ i $(-2,0)$",
      "$y = -5x - 10$, passa pels punts $(0,-10)$ i $(-2,0)$",
      "$y = 5x - 10$, passa pels punts $(2,0)$ i $(-2,0)$",
      "$y = -5x + 10$, passa pels punts $(2,10)$ i $(-2,0)$",
    ],
    respuestaCorrecta: 0,
    explicacion: "1) Calculem la derivada: $f'(x) = -2x + 1$\\n2) Avaluem en $x = -2$: $f'(-2) = -2(-2) + 1 = 5$\\n3) Com que passa pel punt $(-2,0)$, l'equació és $y = 5(x-(-2)) + 0 = 5x + 10$\\n4) Per comprovar els punts, quan $x = 0$: $y = 10$, per tant passa per $(0,10)$ i $(-2,0)$."
  },
  {
    id: "m03",
    categoria: "Matemàtiques CCSS",
    subTema: "Càlcul",
    pregunta: "Si $f(x) = x^3 - 3x^2 + 2$, ¿cuáles son los puntos críticos de $f$?",
    opciones: [
      "$x = 0$ y $x = 2$",
      "$x = 1$ y $x = 2$",
      "$x = 0$ y $x = 1$",
      "$x = 1$ y $x = 3$",
    ],
    respuestaCorrecta: 1,
    explicacion: "Para encontrar los puntos críticos, derivamos $f'(x) = 3x^2 - 6x = 3x(x-2)$. Igualando a cero: $3x(x-2) = 0 \\Rightarrow x = 0$ o $x = 2$. Por tanto, los puntos críticos son $x = 0$ y $x = 2$."
  },
  {
    id: "m05",
    categoria: "Matemàtiques CCSS",
    subTema: "Estadística",
    pregunta: "Si $X$ es una variable aleatoria normal con media $\\mu = 20$ y desviación típica $\\sigma = 5$, ¿cuál es la probabilidad de que $X$ tome un valor entre 15 y 25?",
    opciones: [
      "0.5",
      "0.6827",
      "0.75",
      "0.9545",
    ],
    respuestaCorrecta: 1,
    explicacion: "Para una variable normal, el intervalo $[\\mu - \\sigma, \\mu + \\sigma] = [15, 25]$ contiene aproximadamente el 68.27% de las observaciones. Por tanto, $P(15 \\leq X \\leq 25) = P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) = 0.6827$."
  },
  {
    id: "m06",
    categoria: "Matemàtiques CCSS",
    subTema: "Funcions",
    pregunta: "Una empresa determina que los ingresos por la venta de $x$ unidades de un producto vienen dados por $I(x) = 100x - 0.01x^2$. ¿Cuál es el número de unidades que maximiza los ingresos?",
    opciones: [
      "4000",
      "5000",
      "8000",
      "10000",
    ],
    respuestaCorrecta: 1,
    explicacion: "Para maximizar los ingresos, derivamos la función e igualamos a cero: $I'(x) = 100 - 0.02x = 0 \\Rightarrow x = 5000$. Para confirmar que es un máximo, comprobamos que $I''(x) = -0.02 < 0$."
  },
  {
    id: "m11",
    categoria: "Matemàtiques CCSS",
    subTema: "Optimització",
    pregunta: "Una empresa fabrica dos tipos de productos, A y B. Cada unidad de A requiere 2 horas de mano de obra y 3 kg de materia prima, mientras que cada unidad de B requiere 3 horas de mano de obra y 2 kg de materia prima. La empresa dispone de 30 horas de mano de obra y 30 kg de materia prima diarios. Si cada unidad de A aporta un beneficio de 40€ y cada unidad de B aporta 50€, ¿cuántas unidades de cada producto debe fabricar para maximizar beneficios?",
    opciones: [
      "6 unidades de A y 6 unidades de B",
      "15 unidades de A y 0 unidades de B",
      "0 unidades de A y 10 unidades de B",
      "5 unidades de A y 10 unidades de B",
    ],
    respuestaCorrecta: 0,
    explicacion: "Plantemos el problema: Sea $x$ el número de unidades de A e $y$ el número de unidades de B. Tenemos las restricciones: $2x + 3y \\leq 30$ (horas de mano de obra), $3x + 2y \\leq 30$ (kg de materia prima), $x \\geq 0$, $y \\geq 0$. La función objetivo a maximizar es $Z = 40x + 50y. Resolviendo el sistema formado por las dos restricciones como igualdades: $2x + 3y = 30$ y $3x + 2y = 30$, obtenemos $x = 6$ e $y = 6$. El beneficio es $Z = 40 \\cdot 6 + 50 \\cdot 6 = 240 + 300 = 540€$."
  },
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
  },
  {
    id: "p5",
    categoria: "Matemáticas",
    subTema: "Càlcul",
    pregunta: "Considereu la funció \( f(x) = \frac{2 \ln x}{x} \), definida per a \( x > 0 \).\\n\\na) Estudieu-ne els màxims i els mínims, i les zones de creixement i de decreixement.\\n\\nb) Aquesta funció té asímptotes? Feu un esbós de la seva gràfica.\\n\\nc) Calculeu l'equació de la recta tangent a la gràfica de \( y = f(x) \) en el punt d'abscissa \( x = 1 \).",
    opciones: [
      "\( f(x) \) té un màxim en \( x = e \) i és creixent en \( (0, e) \) i decreixent en \( (e, +\infty) \).",
      "\( f(x) \) té asímptotes verticals a \( x = 0 \) i horitzontals a \( y = 0 \).",
      "L'equació de la recta tangent és \( y = -2x + 2 \)."
    ],
    respuestaCorrecta: 0,
    explicacion: "Derivant i igualant a zero, \( f'(x) = \frac{1 - \ln x}{x^2} = 0 \) ens dóna \( x = e \). La derivada segona és negativa, indicant un màxim. La funció és creixent en \( (0, e) \) i decreixent en \( (e, +\infty) \)."
  },
  {
    id: "p6",
    categoria: "Matemáticas",
    subTema: "Probabilitat",
    pregunta: "L'Andreu posa les nou boles que es mostren a continuació dins d'una bossa: B, A, Y, E, S, F, A, N, S.\\n\\na) A continuació, treu de la bossa dues boles a l'atzar, una darrere l'altra i sense reemplaçament. Calculeu la probabilitat que la primera bola sigui una A o una E.\\n\\nb) L'Andreu torna a posar totes les boles a la bossa i en treu cinc a l'atzar, una darrere l'altra, però ara amb reemplaçament. Calculeu la probabilitat que no hagi tret cap A.",
    opciones: [
      "\\( \frac{1}{3} \\) i 0.284",
      "\\( \frac{2}{9} \\) i 0.5",
      "\\( \frac{1}{4} \\) i 0.308"
    ],
    respuestaCorrecta: 0,
    explicacion: "Per a la primera part, hi ha 3 casos favorables (2 A i 1 E) sobre 9 possibles, per tant, la probabilitat és \\( \frac{3}{9} = \frac{1}{3} \\). Per a la segona part, la probabilitat de no treure cap A en cinc extraccions amb reemplaçament és \\( \left(\frac{7}{9}\right)^5 = 0.284 \\)."
  },
  {
    id: "p7",
    categoria: "Matemáticas",
    subTema: "Probabilitat",
    pregunta: "En una bossa hi ha 10 boles numerades de l'1 al 10. Es treuen tres boles a l'atzar, una darrere l'altra i sense reemplaçament. Calculeu la probabilitat que totes les boles siguin nombres parells.",
    opciones: [
      "\\( \frac{1}{12} \\)",
      "\\( \frac{1}{15} \\)",
      "\\( \frac{1}{20} \\)"
    ],
    respuestaCorrecta: 1,
    explicacion: "Hi ha 5 boles parells (2, 4, 6, 8, 10). La probabilitat de treure tres boles parells és \\( \frac{5}{10} \times \frac{4}{9} \times \frac{3}{8} = \frac{1}{15} \\)."
  }
];

// Exportar las preguntas premium (que ahora son solo las exclusivas)
export const premiumQuestions = premiumOnlyQuestions;

// Función para obtener preguntas según el estado premium
export function getQuestions(isPremium = false) {
  // Seleccionar las preguntas según el estado premium
  const questions = isPremium ? premiumQuestions : standardQuestions;
  
  // Eliminar duplicados basados en ID y mantener la versión con subtema si existe
  const uniqueQuestions = questions.reduce((acc, current) => {
    const existingQuestion = acc.find(q => q.id === current.id);
    if (!existingQuestion) {
      acc.push(current);
    } else if (!existingQuestion.subTema && current.subTema) {
      // Si la pregunta existente no tiene subtema pero la actual sí, usamos la actual
      acc[acc.indexOf(existingQuestion)] = current;
    }
    return acc;
  }, []);
  
  // Asegurarse de que las preguntas de historia tengan el subtema correcto
  return uniqueQuestions.map(question => {
    if (question.categoria === "Història") {
      // Si ya tiene subtema, lo mantenemos
      if (question.subTema) {
        return question;
      }
      
      // Si no tiene subtema, intentamos inferirlo del contenido
      const content = question.pregunta + " " + question.explicacion;
      let subTema = null;
      
      if (content.includes("Segona República") || 
          content.includes("República Catalana") ||
          content.includes("Macià") ||
          content.includes("Companys") ||
          content.includes("1931") ||
          content.includes("1932") ||
          content.includes("1933") ||
          content.includes("1934") ||
          content.includes("1935") ||
          content.includes("1936")) {
        subTema = "Segona República";
      }
      else if (content.includes("Guerra Civil") || 
          content.includes("1936") ||
          content.includes("1937") ||
          content.includes("1938") ||
          content.includes("1939") ||
          content.includes("bombardeig") ||
          content.includes("Ebre") ||
          content.includes("Milícies")) {
        subTema = "Guerra Civil";
      }
      else if (content.includes("Franquisme") || 
          content.includes("Franco") ||
          content.includes("dictadura") ||
          content.includes("1939") ||
          content.includes("1975")) {
        subTema = "Franquisme";
      }
      else if (content.includes("Restauració") || 
          content.includes("Primo de Rivera") ||
          content.includes("Alfons XIII") ||
          content.includes("1874") ||
          content.includes("1923") ||
          content.includes("1930")) {
        subTema = "Restauració Borbònica";
      }
      
      return subTema ? { ...question, subTema } : question;
    }
    return question;
  }).filter(question => {
    // Asegurarnos de que las preguntas de historia tengan subtema
    if (question.categoria === "Història") {
      return question.subTema;
    }
    return true;
  });
}
