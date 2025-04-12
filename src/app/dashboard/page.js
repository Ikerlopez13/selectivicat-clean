import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { connectToDB } from "@/lib/mongoose";
import User from "@/models/User";

export default async function DashboardPage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/");
  }

  // Conectar a la base de datos y obtener el usuario
  await connectToDB();
  const user = await User.findOne({ email: session.user.email });
  const isPremium = user?.hasPremiumStatus || false;

  return (
    <main className="container mx-auto px-4 py-8 mt-16">
      {/* User Profile Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={session.user.image}
              alt={session.user.name}
              className="w-16 h-16 rounded-full"
            />
            {isPremium && (
              <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1">
                <span className="text-lg">⭐</span>
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">{session.user.name}</h1>
              {isPremium && (
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  Premium
                </span>
              )}
            </div>
            <p className="text-gray-600">{session.user.email}</p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      {!isPremium ? (
        <>
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
        </>
      ) : (
        // Interfaz para usuarios Premium
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-lg p-8">
          <div className="text-center text-white space-y-4">
            <div className="text-4xl mb-2">⭐</div>
            <h2 className="text-3xl font-bold mb-2">El teu accés Premium</h2>
            <p className="text-lg mb-6">
              Gaudeix d'accés il·limitat a totes les preguntes i funcionalitats exclusives
            </p>
            <Link 
              href="/seletest"
              className="inline-block bg-white text-yellow-500 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-50 transition-colors shadow-md"
            >
              Accedir a SeleTest Premium ➡️
            </Link>
          </div>
        </div>
      )}
    </main>
  );
} 