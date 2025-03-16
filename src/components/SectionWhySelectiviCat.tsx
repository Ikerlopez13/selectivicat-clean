import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

export default function SectionWhySelectiviCat() {
  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Texto */}
          <div className="space-y-8">
            <AnimateOnScroll animation="fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold">
                Per què <span className="text-selectivi-yellow">selectiviCAT</span>?
              </h2>
            </AnimateOnScroll>
            
            <div className="space-y-6">
              {/* Punto 1 */}
              <AnimateOnScroll animation="slideRight" delay={0.1}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-2xl">✅</div>
                  <div>
                    <h3 className="text-xl font-semibold">Les millors explicacions en vídeo</h3>
                    <p className="text-gray-700">
                      Accedeix a llistes de vídeos amb els millors professors explicant tot el temari de Selectivitat.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
              
              {/* Punto 2 */}
              <AnimateOnScroll animation="slideRight" delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-2xl">🎯</div>
                  <div>
                    <h3 className="text-xl font-semibold">Calculadora de notes de tall</h3>
                    <p className="text-gray-700">
                      Descobreix amb precisió quines opcions tens segons les teves notes i objectius.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
              
              {/* Punto 3 */}
              <AnimateOnScroll animation="slideRight" delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-2xl">👨‍🏫</div>
                  <div>
                    <h3 className="text-xl font-semibold">Professors personals</h3>
                    <p className="text-gray-700">
                      Troba l'acompanyament perfecte per resoldre els teus dubtes amb el millor equip de docents.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
              
              {/* Punto 4 */}
              <AnimateOnScroll animation="slideRight" delay={0.4}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-2xl">👩‍🎓</div>
                  <div>
                    <h3 className="text-xl font-semibold">Experiència de primera mà</h3>
                    <p className="text-gray-700">
                      El nostre desenvolupador va fer la Selectivitat l'any passat i sap exactament com evitar els errors més comuns!
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
          
          {/* Columna derecha - Imagen */}
          <AnimateOnScroll animation="scale" delay={0.2} duration={0.7}>
            <div className="flex justify-center items-center">
              <div className="aspect-square bg-gray-100 p-6 rounded-lg w-full max-w-sm flex items-center justify-center">
                <img 
                  src="/images/Group11.png" 
                  alt="Estudiants de Selectivitat" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
} 