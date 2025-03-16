import CalculadoraForm from '@/components/CalculadoraForm';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import SaasRecommendation from '@/components/SaasRecommendation';

export const metadata = {
  title: 'Calculadora de Nota Selectividad y Bachillerato | SelectiviCat',
  description: 'Calcula tu nota de acceso a la universidad llenando los siguientes campos. De esta forma podrás prever la nota de tu expediente de bachillerato.',
};

export default function CalculadoraPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      {/* Hero Section */}
      <div className="bg-selectivi-yellow py-16 px-4 md:px-8 pt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Calculadora de Nota Selectividad y Bachillerato</h1>
              <p className="text-xl mb-6">Calcula tu nota de acceso a la universidad.</p>
              <p className="mb-8">Llena los siguientes campos (las notas son sobre 10) y podrás prever la nota de tu expediente de bachillerato.</p>
            </div>
            
            <div className="lg:w-2/5 flex justify-center">
              <img 
                src="/images/Group11.png" 
                alt="Estudiante calculando su nota" 
                className="w-s max-w-sm h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Sección del formulario de calculadora */}
      <div className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <CalculadoraForm />
        </div>
      </div>
      
      {/* Sección de información adicional */}
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">¿Cómo se calcula la nota de acceso?</h2>
              <p className="mb-4">La nota de acceso a la universidad se calcula:</p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="font-semibold">Nota de acceso = 0,6 × NMB + 0,4 × CFG</p>
                <p className="text-sm mt-2">Donde:</p>
                <ul className="text-sm list-disc pl-6">
                  <li>NMB = Nota media del bachillerato</li>
                  <li>CFG = Calificación de la fase general de las PAU</li>
                </ul>
              </div>
              <p>A esta nota se le pueden sumar las calificaciones de las materias específicas (hasta 4 puntos adicionales).</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">¿Qué es la fase específica?</h2>
              <p className="mb-4">La fase específica permite mejorar la nota de admisión hasta un máximo de 4 puntos adicionales:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Puedes examinarte de un máximo de 3 materias de modalidad</li>
                <li>Cada materia se pondera según el grado universitario (0.1 o 0.2)</li>
                <li>Solo se consideran las dos mejores calificaciones ponderadas</li>
                <li>La nota de las materias específicas debe ser igual o superior a 5</li>
              </ul>
              <p>La fórmula para la nota de admisión es:</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">Nota de admisión = Nota de acceso + a×M1 + b×M2</p>
                <p className="text-sm mt-2">Donde:</p>
                <ul className="text-sm list-disc pl-6">
                  <li>M1, M2 = Las calificaciones de las dos materias específicas</li>
                  <li>a, b = Parámetros de ponderación (0.1 o 0.2)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recomendación de FocusCircle */}
      <div className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SaasRecommendation />
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
} 