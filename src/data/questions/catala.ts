import { Question } from '@/types/questions';

export const catala: Question[] = [
  {
    id: 'cat-1',
    categoria: 'Català',
    subTema: 'Comprensió lectora',
    pregunta: 'Quin és el tipus de text que es caracteritza per explicar les característiques d\'un objecte, persona o situació?',
    opciones: [
      'Text descriptiu',
      'Text narratiu',
      'Text argumentatiu',
      'Text expositiu'
    ],
    respuestaCorrecta: 0,
    explicacion: 'El text descriptiu és aquell que presenta les característiques d\'alguna cosa, persona o situació, permetent al lector crear una imatge mental del que s\'està descrivint.'
  },
  {
    id: 'cat-2',
    categoria: 'Català',
    subTema: 'Gramàtica',
    pregunta: 'Quina d\'aquestes paraules és un complement directe en la frase "La Maria llegeix un llibre"?',
    opciones: [
      'La Maria',
      'llegeix',
      'un llibre',
      'Cap de les anteriors'
    ],
    respuestaCorrecta: 2,
    explicacion: '"Un llibre" és el complement directe perquè rep directament l\'acció del verb "llegeix". Es pot comprovar substituint-lo pel pronom "el": "La Maria el llegeix".'
  },
  {
    id: 'cat-3',
    categoria: 'Català',
    subTema: 'Literatura',
    pregunta: 'Qui va escriure "La plaça del Diamant"?',
    opciones: [
      'Josep Pla',
      'Mercè Rodoreda',
      'Salvador Espriu',
      'Joan Maragall'
    ],
    respuestaCorrecta: 1,
    explicacion: '"La plaça del Diamant" és una novel·la escrita per Mercè Rodoreda, publicada l\'any 1962. És considerada una de les obres més importants de la literatura catalana del segle XX.'
  }
]; 