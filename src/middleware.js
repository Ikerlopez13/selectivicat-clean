import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function middleware(request) {
  // Rutas que requieren autenticación
  const authPaths = [
    '/dashboard',
    '/seletest'
  ];

  // Verificar si la ruta actual requiere autenticación
  const isAuthPath = authPaths.some(path => request.nextUrl.pathname.startsWith(path));
  
  if (isAuthPath) {
    const session = await auth();
    
    if (!session?.user) {
      return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/seletest/:path*'
  ]
}; 