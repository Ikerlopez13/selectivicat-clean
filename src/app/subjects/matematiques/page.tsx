import { Metadata } from 'next';
import SubjectPageTemplate from '@/components/SubjectPageTemplate';
import { getAsignaturaById, getItinerarioByAsignaturaId } from '@/data/itinerarios';
import { getExamenesByAsignatura } from '@/data/examenes';
import { getVideosBySubject } from '@/data/videos';

export const metadata: Metadata = {
  title: 'Matemàtiques | SelectiviCat',
  description: 'Recursos, vídeos i exàmens de Matemàtiques per a la selectivitat. Prepara\'t per a les PAU amb els millors materials.',
};
// Definir el tipo correcto para los parámetros de la página
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Aunque esta página no usa params dinámicos directamente, añadimos la estructura correcta

export default function MatematiquesPage() {
  const asignaturaId = 'matematiques';
  const asignatura = getAsignaturaById(asignaturaId);
  const itinerario = getItinerarioByAsignaturaId(asignaturaId);
  const examenes = getExamenesByAsignatura(asignaturaId);
  const videos = getVideosBySubject(asignaturaId);
  
  if (!asignatura || !itinerario) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Assignatura no trobada</h1>
          <p className="mb-6">No hem pogut trobar la informació d'aquesta assignatura.</p>
          <a href="/" className="btn btn-primary">Tornar a l'inici</a>
        </div>
      </div>
    );
  }
  
  return (
    <SubjectPageTemplate 
      subject={asignatura}
      itinerario={itinerario}
      videos={videos}
      examenes={examenes}
    />
  );
}