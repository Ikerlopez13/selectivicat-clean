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
        <FooterMain />
      </div>
    </div>
  );
} 