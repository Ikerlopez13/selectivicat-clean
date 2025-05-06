import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ hasPremiumStatus: false });
    }

    // Aquí deberías verificar en tu base de datos si el usuario tiene premium
    // Por ahora, asumimos que nadie tiene premium
    return NextResponse.json({ hasPremiumStatus: false });
  } catch (error) {
    console.error('Error checking premium status:', error);
    return NextResponse.json({ hasPremiumStatus: false });
  }
} 