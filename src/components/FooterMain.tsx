import Link from 'next/link';

export default function FooterMain() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto">
        {/* Logo y redes sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 px-6 border-b">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold">selectivi<span className="text-[#FFC22D]">CAT</span></span>
            <p className="mt-2">El teu aliat per a la selectivitat. Des de 2023</p>
          </div>
          <div className="flex gap-4">
            {/* X (Twitter) */}
            <a href="https://x.com/SelectiviC83116" target="_blank" rel="noopener noreferrer" className="text-[#FFC22D] hover:text-[#FFC22D]/80">
              {/* SVG oficial de X (Twitter) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="fill-current">
                <path d="M17.53 2H21.5L14.36 10.39L22.75 22H16.16L10.98 15.01L4.99 22H1L8.57 13.03L0.5 2H7.24L11.97 8.36L17.53 2ZM16.32 20H18.14L7.78 3.5H5.82L16.32 20Z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/selectivi.cat" target="_blank" rel="noopener noreferrer" className="text-[#FFC22D] hover:text-[#FFC22D]/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="fill-current">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Enlaces en línea horizontal */}
        <div className="flex flex-wrap justify-between py-8 px-6">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h6 className="font-bold text-lg mb-4">Matèries</h6>
            <div className="flex flex-col space-y-2">
              <Link href="/materies/matematiques" className="text-gray-600 hover:text-[#FFC22D]">Matemàtiques</Link>
              <Link href="/materies/fisica" className="text-gray-600 hover:text-[#FFC22D]">Física</Link>
              <Link href="/materies/quimica" className="text-gray-600 hover:text-[#FFC22D]">Química</Link>
              <Link href="/materies/biologia" className="text-gray-600 hover:text-[#FFC22D]">Biologia</Link>
            </div>
          </div>
          
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h6 className="font-bold text-lg mb-4">Recursos</h6>
            <div className="flex flex-col space-y-2">
              <Link href="/recursos/formules" className="text-gray-600 hover:text-[#FFC22D]">Formularis</Link>
              <Link href="/recursos/consells" className="text-gray-600 hover:text-[#FFC22D]">Consells</Link>
              <Link href="/recursos/bibliografia" className="text-gray-600 hover:text-[#FFC22D]">Bibliografia</Link>
              <Link href="/recursos/videos" className="text-gray-600 hover:text-[#FFC22D]">Vídeos</Link>
            </div>
          </div>
          
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h6 className="font-bold text-lg mb-4">Sobre nosotros</h6>
            <div className="flex flex-col space-y-2">
              <Link href="/sobre-nosotros" className="text-gray-600 hover:text-[#FFC22D]">Quiénes somos</Link>
              <Link href="/contacto" className="text-gray-600 hover:text-[#FFC22D]">Contacto</Link>
              <Link href="/politica-privacidad" className="text-gray-600 hover:text-[#FFC22D]">Política de privacidad</Link>
              <Link href="/politica-cookies" className="text-gray-600 hover:text-[#FFC22D]">Política de cookies</Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-4 px-6 border-t bg-white text-gray-700 border-gray-200">
          <div className="text-center">
            <p>Copyright © {new Date().getFullYear()} - Tots els drets reservats per <span className="font-semibold">selectivi<span className="text-[#FFC22D]">CAT</span></span></p>
          </div>
        </div>
      </div>
    </footer>
  );
} 