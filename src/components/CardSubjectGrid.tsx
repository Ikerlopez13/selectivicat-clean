const subjects = [
  {
    id: 'matematiques',
    name: 'Matemàtiques',
    icon: '📐',
    description: 'Exàmens i solucions de matemàtiques per a ciències i tecnologia'
  },
  {
    id: 'fisica',
    name: 'Física',
    icon: '⚛️',
    description: 'Problemes i teoria de física per a la selectivitat'
  },
  {
    id: 'quimica',
    name: 'Química',
    icon: '🧪',
    description: 'Formulació, problemes i teoria de química'
  },
  {
    id: 'biologia',
    name: 'Biologia',
    icon: '🧬',
    description: 'Continguts de biologia cel·lular, genètica i ecologia'
  },
  {
    id: 'historia',
    name: 'Història',
    icon: '📜',
    description: 'Història contemporània d\'Espanya i Catalunya'
  },
  {
    id: 'catala',
    name: 'Català',
    icon: '📝',
    description: 'Llengua catalana i literatura'
  },
  {
    id: 'castella',
    name: 'Castellà',
    icon: '📚',
    description: 'Llengua castellana i literatura'
  },
  {
    id: 'angles',
    name: 'Anglès',
    icon: '🌍',
    description: 'Llengua anglesa i comprensió lectora'
  }
];

export default function CardSubjectGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Explora per matèries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <div key={subject.id} className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="text-4xl mb-2">{subject.icon}</div>
              <h2 className="card-title">{subject.name}</h2>
              <p>{subject.description}</p>
              <div className="card-actions justify-end mt-4">
                <a href={`/materies/${subject.id}`} className="btn btn-sm bg-selectivi-yellow text-white border-none hover:bg-selectivi-yellow/90">Veure exàmens</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 