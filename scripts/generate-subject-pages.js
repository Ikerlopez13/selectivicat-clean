const fs = require('fs');
const path = require('path');

// Importar los datos de asignaturas
const itinerariosPath = path.join(__dirname, '../src/data/itinerarios.ts');
const itinerariosContent = fs.readFileSync(itinerariosPath, 'utf8');

// Extraer las asignaturas usando una expresión regular más flexible
const asignaturasRegex = /export const asignaturas: Asignatura\[\] = \[([\s\S]*?)\];/;
const asignaturasMatch = itinerariosContent.match(asignaturasRegex);

if (!asignaturasMatch) {
  console.error('No se pudo encontrar la definición de asignaturas en el archivo.');
  process.exit(1);
}

// Extraer cada objeto de asignatura con una expresión regular más flexible
const asignaturasString = asignaturasMatch[1];
const asignaturaObjects = [];
let bracketCount = 0;
let currentObject = '';

// Recorrer el string caracter por caracter para extraer los objetos
for (let i = 0; i < asignaturasString.length; i++) {
  const char = asignaturasString[i];
  
  if (char === '{') {
    bracketCount++;
    if (bracketCount === 1) {
      currentObject = '{'; // Iniciar un nuevo objeto
    } else {
      currentObject += char;
    }
  } else if (char === '}') {
    bracketCount--;
    currentObject += char;
    
    if (bracketCount === 0) {
      // Objeto completo, extraer los datos
      asignaturaObjects.push(currentObject);
      currentObject = '';
    }
  } else if (bracketCount > 0) {
    currentObject += char;
  }
}

// Procesar cada objeto para extraer los datos
const asignaturas = asignaturaObjects.map(objStr => {
  const idMatch = objStr.match(/id:\s*"([^"]+)"/);
  const nombreMatch = objStr.match(/nombre:\s*"([^"]+)"/);
  const itinerarioIdMatch = objStr.match(/itinerarioId:\s*"([^"]+)"/);
  const rutaMatch = objStr.match(/ruta:\s*"([^"]+)"/);
  
  if (idMatch && nombreMatch && itinerarioIdMatch && rutaMatch) {
    return {
      id: idMatch[1],
      nombre: nombreMatch[1],
      itinerarioId: itinerarioIdMatch[1],
      ruta: rutaMatch[1]
    };
  }
  return null;
}).filter(Boolean);

console.log(`Se encontraron ${asignaturas.length} asignaturas.`);

// Crear la plantilla para cada página
const pageTemplate = (asignatura) => `import { Metadata } from 'next';
import SubjectPageTemplate from '@/components/SubjectPageTemplate';
import { getAsignaturaById, getItinerarioByAsignaturaId } from '@/data/itinerarios';
import { getExamenesByAsignatura } from '@/data/examenes';
import { getVideosBySubject } from '@/data/videos';

export const metadata: Metadata = {
  title: '${asignatura.nombre} | SelectiviCat',
  description: 'Recursos, vídeos i exàmens de ${asignatura.nombre} per a la selectivitat. Prepara\\'t per a les PAU amb els millors materials.',
};

export default function ${capitalizeAndClean(asignatura.id)}Page() {
  const asignaturaId = '${asignatura.id}';
  const asignatura = getAsignaturaById(asignaturaId);
  const itinerario = getItinerarioByAsignaturaId(asignaturaId);
  const examenes = getExamenesByAsignatura(asignaturaId);
  const videos = getVideosBySubject(asignaturaId);
  
  if (!asignatura || !itinerario) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Assignatura no trobada</h1>
          <p className="mb-6">No hem pogut trobar la informació d'aquesta assignatura.</p>
          <a href="/" className="btn btn-primary">Tornar a l'inici</a>
        </div>
      </div>
    );
  }
  
  return (
    <SubjectPageTemplate 
      subject={asignatura}
      itinerario={itinerario}
      videos={videos}
      examenes={examenes}
    />
  );
}`;

// Función para capitalizar y limpiar un ID para usarlo como nombre de componente
function capitalizeAndClean(id) {
  return id
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

// Crear las carpetas y archivos para cada asignatura
asignaturas.forEach(asignatura => {
  const folderPath = path.join(__dirname, '../src/app/subjects', asignatura.id);
  const filePath = path.join(folderPath, 'page.tsx');
  
  // Crear la carpeta si no existe
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Carpeta creada: ${folderPath}`);
  }
  
  // Crear el archivo de la página
  fs.writeFileSync(filePath, pageTemplate(asignatura));
  console.log(`Archivo creado: ${filePath}`);
});

console.log('Generación de páginas completada.'); 