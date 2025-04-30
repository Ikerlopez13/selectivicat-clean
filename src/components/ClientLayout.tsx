'use client';

import { ReactNode } from 'react';
import NavbarMain from '@/components/NavbarMain';
import CookieConsent from '@/components/CookieConsent';
import Providers from '@/components/Providers';

interface ClientLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function ClientLayout({ children, className }: ClientLayoutProps) {
  return (
    <Providers>
      <NavbarMain />
      <main className={`min-h-screen ${className || ''}`}>
        {children}
      </main>
      <CookieConsent />
    </Providers>
  );
} 