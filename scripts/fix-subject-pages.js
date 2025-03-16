const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Ruta a la carpeta de asignaturas
const subjectsDir = path.join(__dirname, '../src/app/subjects');

// Buscar todos los archivos page.tsx en la carpeta de asignaturas
const pageFiles = glob.sync(path.join(subjectsDir, '*/page.tsx'));

// Código a insertar después de la exportación de metadata
const typeDefinition = `
// Definir el tipo correcto para los parámetros de la página
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Aunque esta página no usa params dinámicos directamente, añadimos la estructura correcta`;

// Procesar cada archivo
pageFiles.forEach(filePath => {
  console.log(`Procesando: ${filePath}`);
  
  // Leer el contenido del archivo
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Verificar si ya tiene la definición de tipo
  if (content.includes('type Props =')) {
    console.log(`  El archivo ya tiene la definición de tipo, omitiendo.`);
    return;
  }
  
  // Buscar la posición después de la exportación de metadata
  const metadataEndIndex = content.indexOf('};', content.indexOf('export const metadata'));
  
  if (metadataEndIndex === -1) {
    console.log(`  No se encontró la exportación de metadata, omitiendo.`);
    return;
  }
  
  // Insertar la definición de tipo después de la exportación de metadata
  const newContent = 
    content.slice(0, metadataEndIndex + 2) + 
    typeDefinition + 
    content.slice(metadataEndIndex + 2);
  
  // Escribir el contenido actualizado
  fs.writeFileSync(filePath, newContent, 'utf8');
  
  console.log(`  Archivo actualizado correctamente.`);
});

console.log('Proceso completado.'); 