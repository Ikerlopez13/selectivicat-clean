import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function PremiumSuccessPage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="text-6xl mb-6">🌟</div>
        <h1 className="text-4xl font-bold text-yellow-500 mb-2">¡Moltes gràcies!</h1>
        <h2 className="text-2xl font-semibold text-yellow-600 mb-6">Benvingut/da a SelectiviCAT Premium ⭐</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <p className="text-lg text-yellow-800">
            El teu compte ha estat actualitzat correctament a Premium. Ara tens accés il·limitat a tot el contingut! 🚀
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            Gràcies per confiar en nosaltres per ajudar-te a preparar la Selectivitat 📚
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors shadow-md"
          >
            Començar a practicar ➡️
          </Link>
        </div>
      </div>
    </main>
  );
} 