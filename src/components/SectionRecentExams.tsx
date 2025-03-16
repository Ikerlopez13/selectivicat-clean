const recentExams = [
  {
    id: 'juny-2023',
    title: 'Convocatòria Juny 2023',
    image: '/images/placeholder.jpg',
    subjects: ['Matemàtiques', 'Física', 'Química', 'Biologia']
  },
  {
    id: 'setembre-2022',
    title: 'Convocatòria Setembre 2022',
    image: '/images/placeholder.jpg',
    subjects: ['Matemàtiques', 'Física', 'Química', 'Biologia']
  },
  {
    id: 'juny-2022',
    title: 'Convocatòria Juny 2022',
    image: '/images/placeholder.jpg',
    subjects: ['Matemàtiques', 'Física', 'Química', 'Biologia']
  }
];

export default function SectionRecentExams() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Últims exàmens afegits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentExams.map(exam => (
            <div key={exam.id} className="card bg-white shadow-xl">
              <figure className="h-40 bg-gray-200">
                <img src={exam.image} alt={exam.title} className="w-full h-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{exam.title}</h3>
                <div className="flex flex-wrap gap-2 my-2">
                  {exam.subjects.map((subject, index) => (
                    <div key={index} className="badge badge-outline">{subject}</div>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  <a href={`/convocatories/${exam.id}`} className="btn bg-selectivi-yellow text-white border-none hover:bg-selectivi-yellow/90">Veure</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="btn btn-outline border-selectivi-yellow text-selectivi-yellow hover:bg-selectivi-yellow hover:text-white">
            Veure tots els exàmens
          </button>
        </div>
      </div>
    </div>
  );
} 