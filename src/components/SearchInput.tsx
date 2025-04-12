'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchInput() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  if (!mounted) {
    return (
      <div className="relative animate-pulse">
        <div className="w-full h-14 rounded-lg bg-gray-200" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Cerca itineraris, assignatures..."
        className="w-full p-4 pl-12 rounded-lg bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-selectivi-yellow focus:border-transparent transition-all duration-200"
        disabled={isLoading}
      />
      <div className="absolute left-0 top-0 h-full flex items-center pl-4">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      </div>
      <button
        type="submit"
        disabled={isLoading || !searchTerm.trim()}
        className="absolute right-0 top-0 h-full px-4 flex items-center justify-center bg-selectivi-yellow text-white rounded-r-lg transition-all duration-200 hover:bg-selectivi-yellow/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          'Cerca'
        )}
      </button>
    </form>
  );
} 