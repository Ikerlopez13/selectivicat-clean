import { ReactNode } from 'react';
import 'katex/dist/katex.min.css';

interface SeleTestLayoutProps {
  children: ReactNode;
}

export default function SeleTestLayout({ children }: SeleTestLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
} 