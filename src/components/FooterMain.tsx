import Link from 'next/link';

export default function FooterMain() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto">
        {/* Logo y redes sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 px-6 border-b">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold">selectivi<span className="text-selectivi-yellow">CAT</span></span>
            <p className="mt-2">El teu aliat per a la selectivitat. Des de 2023</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-selectivi-yellow hover:text-selectivi-yellow/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a> 
            <a href="#" className="text-selectivi-yellow hover:text-selectivi-yellow/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a> 
            <a href="#" className="text-selectivi-yellow hover:text-selectivi-yellow/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Enlaces en línea horizontal */}
        <div className="flex flex-wrap justify-between py-8 px-6">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h6 className="footer-title">Matèries</h6>
            <div className="flex flex-col">
              <Link href="/materies/matematiques" className="link link-hover hover:text-selectivi-yellow">Matemàtiques</Link>
              <Link href="/materies/fisica" className="link link-hover hover:text-selectivi-yellow">Física</Link>
              <Link href="/materies/quimica" className="link link-hover hover:text-selectivi-yellow">Química</Link>
              <Link href="/materies/biologia" className="link link-hover hover:text-selectivi-yellow">Biologia</Link>
            </div>
          </div>
          
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h6 className="footer-title">Recursos</h6>
            <div className="flex flex-col">
              <Link href="/recursos/formules" className="link link-hover hover:text-selectivi-yellow">Formularis</Link>
              <Link href="/recursos/consells" className="link link-hover hover:text-selectivi-yellow">Consells</Link>
              <Link href="/recursos/bibliografia" className="link link-hover hover:text-selectivi-yellow">Bibliografia</Link>
              <Link href="/recursos/videos" className="link link-hover hover:text-selectivi-yellow">Vídeos</Link>
            </div>
          </div>
          
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h6 className="footer-title">Sobre nosaltres</h6>
            <div className="flex flex-col">
              <Link href="/sobre" className="link link-hover hover:text-selectivi-yellow">Qui som</Link>
              <Link href="/contacte" className="link link-hover hover:text-selectivi-yellow">Contacte</Link>
              <Link href="/privacitat" className="link link-hover hover:text-selectivi-yellow">Política de privacitat</Link>
              <Link href="/cookies" className="link link-hover hover:text-selectivi-yellow">Cookies</Link>
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <h6 className="footer-title">Newsletter</h6>
            <div className="form-control w-full md:w-80">
              <label className="label">
                <span className="label-text">Subscriu-te per rebre novetats</span>
              </label>
              <div className="join">
                <input type="email" placeholder="El teu email" className="input input-bordered join-item w-full" />
                <button className="btn bg-selectivi-yellow text-white border-none join-item hover:bg-selectivi-yellow/90">
                  Subscriu-te
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="footer footer-center p-4 border-t bg-white text-gray-700 border-gray-200">
          <div>
            <p>Copyright © 2023 - Tots els drets reservats per <span className="font-semibold">selectivi<span className="text-selectivi-yellow">CAT</span></span></p>
          </div>
        </div>
      </div>
    </footer>
  );
} 