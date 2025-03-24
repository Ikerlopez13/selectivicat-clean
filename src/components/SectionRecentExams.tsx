import { getFeaturedExamenes, Examen } from '@/data/examenes';

export default function SectionRecentExams() {
  const recentExams = getFeaturedExamenes();
  
  // Agrupar exámenes por convocatoria y año
  const groupedExams = recentExams.reduce((groups: Record<string, any>, exam) => {
    const key = `${exam.convocatoria}-${exam.año}`;
    const title = `Convocatòria ${exam.convocatoria === 'modelo-0' ? 'Model 0' : exam.convocatoria} ${exam.año}`;
    
    if (!groups[key]) {
      groups[key] = {
        id: key,
        title: title,
        image: '/images/placeholder.jpg',
        subjects: [],
        exams: []
      };
    }
    
    // Añadir la asignatura si no está ya en la lista
    if (!groups[key].subjects.includes(exam.asignatura)) {
      groups[key].subjects.push(exam.asignatura);
    }
    
    // Añadir el examen a la lista de exámenes de esta convocatoria
    groups[key].exams.push(exam);
    
    return groups;
  }, {});
  
  // Convertir el objeto agrupado en array
  const convocatorias = Object.values(groupedExams);
  
  // Obtener las 3 convocatorias más recientes
  const recentConvocatorias = convocatorias
    .sort((a: any, b: any) => {
      // Ordenar por año descendente (más reciente primero)
      const yearA = parseInt(a.id.split('-').pop() || '0');
      const yearB = parseInt(b.id.split('-').pop() || '0');
      return yearB - yearA;
    })
    .slice(0, 3);

  // Función para formatear el nombre de la asignatura para mostrar
  const formatSubjectName = (name: string) => {
    const subjectMap: Record<string, string> = {
      'fisica': 'Física',
      'quimica': 'Química',
      'matematiques': 'Matemàtiques',
      'matematiques-socials': 'Matemàtiques CCSS',
      'castella': 'Castellà',
      'catala': 'Català',
      'biologia': 'Biologia',
      'aleman': 'Alemany',
      'frances': 'Francès',
      'italia': 'Italià',
      'ingles': 'Anglès',
      'historia-art': 'Història de l\'Art',
      'historia-musica': 'Història de la Música',
      'fonaments-arts': 'Fonaments Artístics',
      'dibuix-artistic': 'Dibuix Artístic',
      'disseny': 'Disseny',
      'filosofia': 'Filosofia',
      'geografia': 'Geografia',
      'historia': 'Història',
      'geologia': 'Geologia i CCAA',
      'tecnologia': 'Tecnologia',
      'literatura-catalana': 'Literatura Catalana',
      'literatura-castellana': 'Literatura Castellana',
      'literatura-dramatica': 'Literatura Dramàtica',
      'lengua-cultura-griegas': 'Grec',
      'ciencias-generales': 'Ciències Generals',
      'dibujo-tecnico': 'Dibuix Tècnic',
      'fundamentos-empresa': 'Empresa',
      'analisis-musical': 'Anàlisi Musical',
      'movimientos-culturales': 'Mov. Culturals i Artístics',
      'arts-esceniques': 'Arts Escèniques'
    };
    
    return subjectMap[name] || name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
  };

  // Asignar un color para cada asignatura
  const getSubjectColor = (subject: string) => {
    const colorMap: Record<string, string> = {
      'fisica': 'bg-blue-100 text-blue-800',
      'quimica': 'bg-green-100 text-green-800',
      'matematiques': 'bg-purple-100 text-purple-800',
      'matematiques-socials': 'bg-purple-100 text-purple-800',
      'castella': 'bg-red-100 text-red-800',
      'catala': 'bg-red-100 text-red-800',
      'biologia': 'bg-emerald-100 text-emerald-800',
      'aleman': 'bg-amber-100 text-amber-800',
      'frances': 'bg-amber-100 text-amber-800',
      'italia': 'bg-pink-100 text-pink-800',
      'ingles': 'bg-amber-100 text-amber-800',
      'historia-art': 'bg-indigo-100 text-indigo-800',
      'historia-musica': 'bg-indigo-100 text-indigo-800',
      'fonaments-arts': 'bg-fuchsia-100 text-fuchsia-800',
      'dibuix-artistic': 'bg-rose-100 text-rose-800',
      'disseny': 'bg-teal-100 text-teal-800',
      'filosofia': 'bg-cyan-100 text-cyan-800',
      'geografia': 'bg-lime-100 text-lime-800',
      'historia': 'bg-orange-100 text-orange-800',
      'geologia': 'bg-emerald-100 text-emerald-800',
      'tecnologia': 'bg-slate-100 text-slate-800',
      'literatura-catalana': 'bg-pink-100 text-pink-800',
      'literatura-castellana': 'bg-pink-100 text-pink-800',
      'literatura-dramatica': 'bg-pink-100 text-pink-800',
      'lengua-cultura-griegas': 'bg-yellow-100 text-yellow-800',
      'ciencias-generales': 'bg-green-100 text-green-800',
      'dibujo-tecnico': 'bg-stone-100 text-stone-800',
      'fundamentos-empresa': 'bg-sky-100 text-sky-800',
      'analisis-musical': 'bg-violet-100 text-violet-800',
      'movimientos-culturales': 'bg-rose-100 text-rose-800',
      'arts-esceniques': 'bg-rose-100 text-rose-800'
    };
    
    return colorMap[subject] || 'bg-gray-100 text-gray-800';
  };
  
  // Determinar el número de columnas basado en el número de convocatorias
  const numColumns = recentConvocatorias.length;
  const columnClass = numColumns === 1 
    ? 'grid-cols-1 max-w-md mx-auto' 
    : numColumns === 2 
      ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto' 
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto';
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Últims exàmens afegits</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Accedeix als últims models d'examen afegits a la nostra base de dades. Prepara't per la Selectivitat amb els materials més recents.
        </p>
        
        <div className={`grid gap-8 ${columnClass}`}>
          {recentConvocatorias.map((convocatoria: any) => (
            <div key={convocatoria.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-selectivi-yellow to-yellow-300 relative">
                <img 
                  src={convocatoria.image} 
                  alt="" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-60" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 px-4 py-2 bg-white bg-opacity-80 rounded-lg">
                    {convocatoria.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 my-4">
                  {convocatoria.subjects.slice(0, 5).map((subject: string, index: number) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getSubjectColor(subject)}`}
                    >
                      {formatSubjectName(subject)}
                    </span>
                  ))}
                  {convocatoria.subjects.length > 5 && (
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
                      +{convocatoria.subjects.length - 5} més
                    </span>
                  )}
                </div>
                
                <div className="mt-6 flex justify-end">
                  <a 
                    href="/examenes" 
                    className="px-6 py-2.5 bg-selectivi-yellow text-gray-900 font-medium rounded-lg shadow-md hover:bg-yellow-400 transition duration-200 flex items-center"
                  >
                    Veure exàmens
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/examenes" 
            className="px-8 py-3 bg-white border-2 border-selectivi-yellow text-gray-900 font-semibold rounded-lg hover:bg-selectivi-yellow transition duration-300"
          >
            Veure tots els exàmens
          </a>
        </div>
      </div>
    </div>
  );
} 