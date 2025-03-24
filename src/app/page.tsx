import NavbarMain from '@/components/NavbarMain';
import HeroMain from '@/components/HeroMain';
import SectionCategories from '@/components/SectionCategories';
import SectionWhySelectiviCat from '@/components/SectionWhySelectiviCat';
import CardSubjectGrid from '@/components/CardSubjectGrid';
import SectionFeatures from '@/components/SectionFeatures';
import SectionStats from '@/components/SectionStats';
import SectionRecentExams from '@/components/SectionRecentExams';
import FooterMain from '@/components/FooterMain';
import SaasRecommendation from '@/components/SaasRecommendation';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      <div className="pt-16">
        <HeroMain />
        <SectionCategories />
        <SectionWhySelectiviCat />
        <CardSubjectGrid />
        <SectionFeatures />
        <SectionStats />
        <SectionRecentExams />
        <div className="container mx-auto px-4 py-8">
          <SaasRecommendation className="my-8" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Cerca itineraris, assignatures..."
            className="w-full p-4 rounded-lg bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-selectivi-yellow focus:border-transparent"
          />
          <div className="absolute right-0 top-0 h-full flex items-center pr-4">
            <button className="bg-white text-selectivi-yellow hover:text-selectivi-yellow/80 p-2 rounded-lg">
              <span>Filtra</span>
            </button>
          </div>
        </div>
        <FooterMain />
      </div>
    </div>
  );
} 