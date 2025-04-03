'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Error d&apos;autenticació
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {error === 'Configuration' ? (
              <>
                Hi ha hagut un error en la configuració de l&apos;autenticació.
                Si us plau, torna-ho a intentar més tard.
              </>
            ) : (
              <>
                Hi ha hagut un error durant l&apos;autenticació.
                Si us plau, torna-ho a intentar.
              </>
            )}
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="bg-selectivi-yellow text-white px-4 py-2 rounded-md hover:bg-selectivi-yellow/90 transition-colors"
            >
              Tornar a l&apos;inici
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AuthError() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-selectivi-yellow"></div>
      </div>
    }>
      <ErrorContent />
    </Suspense>
  );
} 