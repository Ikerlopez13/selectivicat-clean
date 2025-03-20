import CalculadoraForm from '@/components/CalculadoraForm';
import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import SaasRecommendation from '@/components/SaasRecommendation';

export const metadata = {
  title: 'Calculadora de Nota Selectivitat i Batxillerat | SelectiviCat',
  description: 'Calcula la teva nota d\'accés a la universitat omplint els següents camps. D\'aquesta manera podràs preveure la nota del teu expedient de batxillerat.',
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Calculadora de Nota Selectivitat i Batxillerat</h1>
              <p className="text-xl mb-6">Calcula la teva nota d'accés a la universitat.</p>
              <p className="mb-8">Omple els següents camps (les notes són sobre 10) i podràs preveure la nota del teu expedient de batxillerat.</p>
            </div>
            
            <div className="lg:w-2/5 flex justify-center">
              <img 
                src="/images/Group11.png" 
                alt="Estudiant calculant la seva nota" 
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
              <h2 className="text-2xl font-bold mb-4">Com es calcula la nota d'accés?</h2>
              <p className="mb-4">La nota d'accés a la universitat es calcula:</p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="font-semibold">Nota d'accés = 0,6 × NMB + 0,4 × CFG</p>
                <p className="text-sm mt-2">On:</p>
                <ul className="text-sm list-disc pl-6">
                  <li>NMB = Nota mitjana del batxillerat</li>
                  <li>CFG = Qualificació de la fase general de les PAU</li>
                </ul>
              </div>
              <p>A aquesta nota se li poden sumar les qualificacions de les matèries específiques (fins a 4 punts addicionals).</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Què és la fase específica?</h2>
              <p className="mb-4">La fase específica permet millorar la nota d'admissió fins a un màxim de 4 punts addicionals:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Pots examinar-te d'un màxim de 3 matèries de modalitat</li>
                <li>Cada matèria es pondera segons el grau universitari (0.1 o 0.2)</li>
                <li>Només es consideren les dues millors qualificacions ponderades</li>
                <li>La nota de les matèries específiques ha de ser igual o superior a 5</li>
              </ul>
              <p>La fórmula per a la nota d'admissió és:</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">Nota d'admissió = Nota d'accés + a×M1 + b×M2</p>
                <p className="text-sm mt-2">On:</p>
                <ul className="text-sm list-disc pl-6">
                  <li>M1, M2 = Les qualificacions de les dues matèries específiques</li>
                  <li>a, b = Paràmetres de ponderació (0.1 o 0.2)</li>
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