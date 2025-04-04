'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from 'next/navigation';

export default function NavbarMain() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';

  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const menuItems = [
    { href: "/calculadora", text: "Calculadora" },
    { href: "/notes-de-tall", text: "Notes de tall" },
    { href: "/examenes", text: "Exàmens" },
    { href: "/millors-videos", text: "Millors Videos" },
    /*{ href: "/seletest", text: "SeleTest" },*/
    { href: "/blog", text: "Blog" },
    { href: "/premium", text: "Fes-te Premium ✨" }
  ];

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
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-selectivi-yellow">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/icon.png"
            alt="SelectiviCat Logo"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
            unoptimized
          />
          <span className="text-2xl font-bold">selectivi<span className="text-selectivi-yellow">CAT</span></span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-base font-medium hover:text-selectivi-yellow transition-colors">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {session ? (
          isDashboard ? (
            <button 
              onClick={handleSignOut}
              className="btn bg-red-500 text-white hover:bg-red-600 border-none"
            >
              Tancar la sessió
            </button>
          ) : (
            <Link href="/dashboard" className="btn bg-selectivi-yellow text-white hover:bg-selectivi-yellow/90 border-none">
              El meu perfil
            </Link>
          )
        ) : (
          <button 
            onClick={handleSignIn} 
            className="btn bg-selectivi-yellow text-white hover:bg-selectivi-yellow/90 border-none flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Iniciar amb Google
          </button>
        )}
      </div>
    </div>
  );
} 