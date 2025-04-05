import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="container mx-auto px-4 py-8 mt-16">
      {/* User Profile Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-4">
          <img
            src={session.user.image}
            alt={session.user.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{session.user.name}</h1>
            <p className="text-gray-600">{session.user.email}</p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <h1 className="text-3xl font-bold mb-4">Accedeix al teu plan de SeleTest</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Plan Premium */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Plan Premium</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-white">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Accés il·limitat a totes les preguntes
            </li>
            <li className="flex items-center text-white">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Preguntes premium exclusives
            </li>
            <li className="flex items-center text-white">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Suport prioritari
            </li>
          </ul>
          <Link 
            href="/premium"
            className="block w-full text-center bg-white text-yellow-500 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-50 transition-colors"
          >
            Obtenir Premium
          </Link>
        </div>

        {/* Plan Standard */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Plan Standard</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Accés a preguntes bàsiques
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Pràctica limitada
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Suport bàsic
            </li>
          </ul>
          <Link 
            href="/seletest"
            className="block w-full text-center bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Continuar amb Standard
          </Link>
        </div>
      </div>
    </main>
  );
} 