import { auth } from "@/auth";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="flex items-center space-x-4">
          {session?.user?.image && (
            <img 
              src={session.user.image} 
              alt="Foto de perfil"
              className="w-16 h-16 rounded-full"
            />
          )}
          <div>
            <h2 className="text-2xl font-semibold">{session?.user?.name}</h2>
            <p className="text-gray-600">{session?.user?.email}</p>
          </div>
        </div>
      </div>

      {/* Sección de Planes */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Plan Premium */}
        <div className="bg-gradient-to-br from-selectivi-yellow/20 to-selectivi-yellow/5 rounded-lg p-6 shadow-lg border border-selectivi-yellow/20">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="text-2xl mr-2">✨</span>
            Plan Premium
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-selectivi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Acceso ilimitado a todas las preguntas
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-selectivi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Preguntas premium exclusivas
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-selectivi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Soporte prioritario
            </li>
          </ul>
          <Link 
            href="/premium" 
            className="btn bg-selectivi-yellow text-white hover:bg-selectivi-yellow/90 w-full"
          >
            Obtenir Premium
          </Link>
        </div>

        {/* Plan Standard */}
        <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="text-2xl mr-2">🎯</span>
            Plan Standard
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Acceso a preguntas básicas
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Práctica limitada
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Soporte básico
            </li>
          </ul>
          <Link 
            href="/seletest" 
            className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 w-full"
          >
            Continuar con Standard
          </Link>
        </div>
      </div>
    </div>
  );
} 