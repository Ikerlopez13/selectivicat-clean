import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function middleware(request) {
  // Rutas que requieren premium
  const premiumPaths = [
    '/seletest/premium',
    '/api/questions/premium'
  ];

  // Verificar si la ruta actual requiere premium
  const isPremiumPath = premiumPaths.some(path => request.nextUrl.pathname.startsWith(path));
  
  if (isPremiumPath) {
    const session = await auth();
    
    if (!session?.user) {
      return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }

    // Verificar si el usuario es premium
    const user = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
      headers: {
        'Cookie': request.headers.get('cookie') || '',
      },
    }).then(res => res.json());

    if (!user?.isPremium) {
      return NextResponse.redirect(new URL('/premium', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/seletest/premium/:path*',
    '/api/questions/premium/:path*'
  ]
}; 