import { Metadata } from 'next';
import Link from 'next/link';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Blog sobre Selectivitat i accés a la universitat | SelectiviCat',
  description: 'Articles i recursos sobre la Selectivitat a Catalunya, notes de tall, estratègies d\'estudi i consells per a l\'accés universitari. Informació actualitzada sobre la nova PAU 2025.',
  keywords: 'selectivitat, PAU, notes de tall, universitat, catalunya, accés universitari, blog educatiu, nova selectivitat 2025',
  openGraph: {
    title: 'Blog sobre Selectivitat i accés a la universitat | SelectiviCat',
    description: 'Articles i recursos sobre la Selectivitat a Catalunya, notes de tall, estratègies d\'estudi i consells per a l\'accés universitari.',
    url: 'https://selectivicat.cat/blog',
    siteName: 'SelectiviCat',
    locale: 'ca_ES',
    type: 'website',
  },
};

// Simulación de artículos para paginación
const allArticles = [
  {
    slug: 'memoritzar-raonar-nova-pau',
    title: 'Hauré de memoritzar més o raonar més? Canvis en la metodologia d\'avaluació de la nova PAU',
    description: 'Descobreix com la nova PAU a Catalunya canvia el model d\'avaluació cap a un enfocament més competencial i menys memorístic. Estratègies i consells per adaptar-te.',
    date: '15 de maig de 2023',
    delay: 0
  },
  {
    slug: 'modificacions-ponderacions-nova-selectivitat',
    title: 'Es modificaran les ponderacions d\'assignatures a la nova selectivitat? Anàlisi per carreres',
    description: 'Descobreix com podrien canviar les ponderacions d\'assignatures a la nova PAU de Catalunya i com això afectarà l\'accés a diferents carreres universitàries.',
    date: '20 de maig de 2023',
    delay: 0.1
  },
  {
    slug: 'ultims-canvis-pau-catalunya',
    title: 'Últims canvis a la PAU de Catalunya: Tot el que pares i alumnes han de saber',
    description: 'Informació actualitzada sobre els canvis recents a la Selectivitat i estratègies per maximitzar la nota d\'accés.',
    date: '15 de maig de 2023',
    delay: 0.2
  },
  {
    slug: 'selectivitat-catalunya-nova-pau',
    title: 'Selectivitat a Catalunya: Com afecta la nova PAU a la teva nota final?',
    description: 'Anàlisi detallat de com la nova PAU afectarà el càlcul de la nota final i estratègies per optimitzar els resultats.',
    date: '10 de maig de 2023',
    delay: 0.3
  },
  {
    slug: 'calcular-nota-acces-universitat-2025',
    title: 'Com calcular la teva nota d\'accés a la universitat 2025',
    description: 'Guia completa per entendre com es calcula la nota d\'accés a la universitat amb la nova Selectivitat.',
    date: '5 de maig de 2023',
    delay: 0.4
  },
  {
    slug: 'notes-tall-catalunya-2025',
    title: 'Notes de tall a Catalunya 2025: Quins canvis hi haurà amb la nova Selectivitat?',
    description: 'Anàlisi de com la nova Selectivitat pot afectar les notes de tall de les universitats catalanes.',
    date: '1 de maig de 2023',
    delay: 0.5
  },
  {
    slug: 'notes-tall-catalunya-10-carreres-dificils',
    title: 'Les 10 carreres més difícils d\'entrar el 2025',
    description: 'Descobreix quines són les carreres amb les notes de tall més altes a Catalunya i com preparar-te per accedir-hi.',
    date: '28 d\'abril de 2023',
    delay: 0.6
  },
  {
    slug: 'triar-assignatures-selectivitat',
    title: 'Com triar assignatures per pujar nota a la Selectivitat?',
    description: 'Descobreix les millors estratègies per maximitzar la teva nota d\'admissió a la universitat amb una bona elecció d\'assignatures.',
    date: '25 d\'abril de 2023',
    delay: 0.7
  },
  {
    slug: 'preparacio-mental-selectivitat',
    title: 'Preparació mental per a la Selectivitat: Tècniques per gestionar l\'estrès',
    description: 'Aprèn tècniques efectives per gestionar l\'ansietat i l\'estrès durant la preparació i realització dels exàmens de la PAU.',
    date: '20 d\'abril de 2023',
    delay: 0.8
  }
];

// Definir el tipo correcto para los parámetros de búsqueda
type SearchParams = {
  page?: string;
  categoria?: string;
  tag?: string;
};

// Definir el tipo para los parámetros de la página
type PageProps = {
  params: { [key: string]: string };
  searchParams: SearchParams;
};

export default async function Blog({ searchParams }: PageProps) {
  // Obtener la página actual de los parámetros de búsqueda o usar 1 por defecto
  const pageParam = searchParams?.page;
  const currentPage = pageParam ? Number(pageParam) : 1;
  const articlesPerPage = 5;
  
  // Calcular el índice inicial y final para la paginación
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  
  // Obtener los artículos para la página actual
  const currentArticles = allArticles.slice(startIndex, endIndex);
  
  // Calcular el número total de páginas
  const totalPages = Math.ceil(allArticles.length / articlesPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="bg-selectivi-yellow py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Blog SelectiviCat
              </h1>
              <p className="text-lg md:text-xl opacity-80 mb-8">
                Articles, guies i recursos per ajudar-te a preparar la Selectivitat i accedir a la universitat
              </p>
            </div>
          </div>
        </div>
        
        {/* Blog Content */}
        <div className="py-12 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold mb-8">Articles recents</h2>
                
                <div className="space-y-8">
                  {currentArticles.map((article, index) => (
                    <AnimateOnScroll key={article.slug} animation="fadeIn" delay={article.delay}>
                      <Link href={`/blog/${article.slug}`} className="block group">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-selectivi-yellow transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                              {article.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">{article.date}</span>
                              <span className="text-selectivi-yellow font-medium">Llegir més →</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </AnimateOnScroll>
                  ))}
                </div>
                
                {/* Pagination - Now functional */}
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-2">
                    {currentPage > 1 && (
                      <Link 
                        href={`/blog?page=${currentPage - 1}`} 
                        aria-label="Pàgina anterior"
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        Anterior
                      </Link>
                    )}
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <Link 
                        key={page}
                        href={`/blog?page=${page}`} 
                        aria-current={page === currentPage ? "page" : undefined}
                        aria-label={`Pàgina ${page}`}
                        className={`px-4 py-2 rounded-md font-medium ${
                          page === currentPage 
                            ? "bg-selectivi-yellow text-gray-900" 
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        } transition-colors`}
                      >
                        {page}
                      </Link>
                    ))}
                    
                    {currentPage < totalPages && (
                      <Link 
                        href={`/blog?page=${currentPage + 1}`} 
                        aria-label="Pàgina següent"
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        Següent
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3 mt-10 lg:mt-0">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    <Link href="/blog?categoria=selectivitat" className="block py-2 px-3 bg-gray-100 rounded-md hover:bg-selectivi-yellow/20 transition-colors">
                      Selectivitat
                    </Link>
                    <Link href="/blog?categoria=notes-tall" className="block py-2 px-3 bg-gray-100 rounded-md hover:bg-selectivi-yellow/20 transition-colors">
                      Notes de tall
                    </Link>
                    <Link href="/blog?categoria=universitat" className="block py-2 px-3 bg-gray-100 rounded-md hover:bg-selectivi-yellow/20 transition-colors">
                      Universitat
                    </Link>
                    <Link href="/blog?categoria=consells-estudi" className="block py-2 px-3 bg-gray-100 rounded-md hover:bg-selectivi-yellow/20 transition-colors">
                      Consells d'estudi
                    </Link>
                  </div>
                </div>
                
                {/* Newsletter */}
                <div className="bg-selectivi-yellow/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Subscriu-te al nostre butlletí</h3>
                  <p className="mb-4">Rep les últimes actualitzacions sobre la Selectivitat, notes de tall i consells d'estudi directament al teu correu.</p>
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="El teu correu electrònic" 
                      aria-label="El teu correu electrònic"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-selectivi-yellow"
                    />
                    <button 
                      type="submit" 
                      className="w-full bg-selectivi-yellow text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                    >
                      Subscriu-me
                    </button>
                  </form>
                </div>
                
                {/* Popular Tags */}
                <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                  <h3 className="text-xl font-bold mb-4">Etiquetes populars</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/blog?tag=pau-2025" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-selectivi-yellow/20 transition-colors">
                      #PAU2025
                    </Link>
                    <Link href="/blog?tag=notes-tall" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-selectivi-yellow/20 transition-colors">
                      #NotesTall
                    </Link>
                    <Link href="/blog?tag=medicina" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-selectivi-yellow/20 transition-colors">
                      #Medicina
                    </Link>
                    <Link href="/blog?tag=ponderacions" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-selectivi-yellow/20 transition-colors">
                      #Ponderacions
                    </Link>
                    <Link href="/blog?tag=competencies" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-selectivi-yellow/20 transition-colors">
                      #Competències
                    </Link>
                    <Link href="/blog?tag=batxillerat" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-selectivi-yellow/20 transition-colors">
                      #Batxillerat
                    </Link>
                    <Link href="/blog?tag=universitat" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-selectivi-yellow/20 transition-colors">
                      #Universitat
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterMain />
    </div>
  );
} 