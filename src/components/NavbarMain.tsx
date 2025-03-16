import Link from 'next/link';

export default function NavbarMain() {
  return (
    <div className="navbar bg-white px-4 md:px-8 py-2 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-white rounded-box w-52">
            <li><Link href="/calculadora" className="hover:text-selectivi-yellow">Calculadora</Link></li>
            <li><Link href="/notes-de-tall" className="hover:text-selectivi-yellow">Notes de tall</Link></li>
            <li><Link href="/examenes" className="hover:text-selectivi-yellow">Exàmens</Link></li>
            <li><Link href="/millors-videos" className="hover:text-selectivi-yellow">Millors Videos</Link></li>
            <li><Link href="/blog" className="hover:text-selectivi-yellow">Blog</Link></li>
            <li><Link href="/premium" className="hover:text-selectivi-yellow">Fes-te Premium ✨</Link></li>
            <li>
              <a 
                href="https://focuscircle.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FF2D70] font-medium"
              >
                FocusCircle
                <svg viewBox="0 0 24 24" className="w-4 h-4 ml-1 inline-block">
                  <circle cx="12" cy="12" r="10" fill="#FF2D70" />
                  <circle cx="12" cy="12" r="7" fill="white" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">selectivi<span className="text-selectivi-yellow">CAT</span></span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/calculadora" className="text-base font-medium hover:text-selectivi-yellow transition-colors">Calculadora</Link></li>
          <li><Link href="/notes-de-tall" className="text-base font-medium hover:text-selectivi-yellow transition-colors">Notes de tall</Link></li>
          <li><Link href="/examenes" className="text-base font-medium hover:text-selectivi-yellow transition-colors">Exàmens</Link></li>
          <li><Link href="/millors-videos" className="text-base font-medium hover:text-selectivi-yellow transition-colors">Millors Videos</Link></li>
          <li><Link href="/blog" className="text-base font-medium hover:text-selectivi-yellow transition-colors">Blog</Link></li>
          <li><Link href="/premium" className="text-base font-medium hover:text-selectivi-yellow transition-colors">Fes-te Premium ✨</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a 
          href="https://focuscircle.net" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn bg-[#FF2D70] text-white hover:bg-[#FF4585] border-none mr-2 hidden md:flex items-center"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1">
            <circle cx="12" cy="12" r="11" fill="#FF2D70" />
            <circle cx="12" cy="12" r="8" fill="white" />
            <circle cx="12" cy="12" r="6" fill="#FF2D70" />
          </svg>
          <span className="hidden lg:inline">FocusCircle</span>
        </a>
        <Link href="/login" className="btn bg-selectivi-yellow text-white hover:bg-selectivi-yellow/90 border-none">
          Iniciar Sessió
        </Link>
      </div>
    </div>
  );
} 