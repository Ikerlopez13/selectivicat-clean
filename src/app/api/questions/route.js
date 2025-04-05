import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { standardQuestions, premiumQuestions } from "@/data/questions";

export async function POST(req) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const { subjects } = body;

    if (!subjects || !Array.isArray(subjects)) {
      return NextResponse.json(
        { error: "Se requieren materias válidas" },
        { status: 400 }
      );
    }

    // Usar el banco de preguntas premium si el usuario es premium
    const questions = session.user.hasPremiumStatus ? premiumQuestions : standardQuestions;

    // Filtrar preguntas por las materias seleccionadas
    const filteredQuestions = questions.filter(q => 
      subjects.some(subject => q.categoria === subject)
    );

    // Mezclar las preguntas aleatoriamente
    const shuffledQuestions = [...filteredQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10); // Limitar a 10 preguntas por test

    return NextResponse.json({
      questions: shuffledQuestions,
      isPremium: session.user.hasPremiumStatus
    });

  } catch (error) {
    console.error("Error al cargar preguntas:", error);
    return NextResponse.json(
      { error: "Error al cargar preguntas" },
      { status: 500 }
    );
  }
} 