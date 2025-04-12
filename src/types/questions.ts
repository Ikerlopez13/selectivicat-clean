export interface Question {
  id: string;
  categoria: string;
  subTema?: string;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
} 