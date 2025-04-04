import { NextResponse } from 'next/server';

export async function middleware(request) {
  // Rutas que requieren autenticación
  const authPaths = [
    '/dashboard',
    '/seletest'
  ];

  // Verificar si la ruta actual requiere autenticación
  const isAuthPath = authPaths.some(path => request.nextUrl.pathname.startsWith(path));
  
  if (isAuthPath) {
    // En lugar de verificar la sesión aquí (que causa problemas en Edge Runtime),
    // redirigimos al layout del dashboard, que verificará la sesión por nosotros
    // y redirigirá si es necesario
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/seletest/:path*'
  ]
}; 