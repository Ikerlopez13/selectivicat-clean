'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchNotesForm from '@/components/SearchNotesForm';

// Componente que usa useSearchParams
function SearchComponent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialUniversity = searchParams.get('university') || '';

  return (
    <SearchNotesForm 
      initialSearchTerm={initialSearch} 
      initialUniversity={initialUniversity} 
    />
  );
}

// Componente de carga mientras se suspende
function SearchLoading() {
  return (
    <div className="w-full animate-pulse">
      <div className="h-12 bg-gray-200 rounded mb-4"></div>
      <div className="h-12 bg-gray-200 rounded"></div>
    </div>
  );
}

// Componente principal que envuelve en Suspense
export default function ClientSearchComponent() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchComponent />
    </Suspense>
  );
} 