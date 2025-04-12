const fs = require('fs');
const path = require('path');

// Directorio donde están los archivos JSON
const questionsDir = path.join(__dirname, '../data/questions');

// Leer todos los archivos JSON
const subjects = {};
fs.readdirSync(questionsDir).forEach(file => {
    if (file.endsWith('.json')) {
        const subject = file.replace('.json', '');
        const content = fs.readFileSync(path.join(questionsDir, file), 'utf8');
        subjects[subject] = JSON.parse(content);
    }
});

// Generar el contenido del archivo questions.js
let content = '// Preguntes disponibles per a usuaris standard\n';
content += 'export const standardQuestions = [\n';

// Añadir preguntas standard
Object.values(subjects).forEach(subject => {
    subject.standard.forEach(question => {
        content += '  {\n';
        content += `    id: "${question.id}",\n`;
        content += `    categoria: "${question.categoria}",\n`;
        if (question.subTema) {
            content += `    subTema: "${question.subTema}",\n`;
        }
        content += `    pregunta: "${question.pregunta}",\n`;
        content += '    opciones: [\n';
        question.opciones.forEach(opcion => {
            content += `      "${opcion}",\n`;
        });
        content += '    ],\n';
        content += `    respuestaCorrecta: ${question.respuestaCorrecta},\n`;
        content += `    explicacion: "${question.explicacion}"\n`;
        content += '  },\n';
    });
});

content += '];\n\n';

// Añadir preguntas premium
content += '// Preguntes disponibles només per a usuaris premium\n';
content += 'export const premiumOnlyQuestions = [\n';

Object.values(subjects).forEach(subject => {
    subject.premium.forEach(question => {
        content += '  {\n';
        content += `    id: "${question.id}",\n`;
        content += `    categoria: "${question.categoria}",\n`;
        if (question.subTema) {
            content += `    subTema: "${question.subTema}",\n`;
        }
        content += `    pregunta: "${question.pregunta}",\n`;
        content += '    opciones: [\n';
        question.opciones.forEach(opcion => {
            content += `      "${opcion}",\n`;
        });
        content += '    ],\n';
        content += `    respuestaCorrecta: ${question.respuestaCorrecta},\n`;
        content += `    explicacion: "${question.explicacion}"\n`;
        content += '  },\n';
    });
});

content += '];\n';

// Guardar el archivo
fs.writeFileSync(path.join(__dirname, '../data/questions.js'), content);

console.log('Archivo questions.js generado exitosamente'); 