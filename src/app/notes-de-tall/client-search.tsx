'use client';

import { useSearchParams } from 'next/navigation';
import SearchNotesForm from '@/components/SearchNotesForm';

export default function ClientSearchComponent() {
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