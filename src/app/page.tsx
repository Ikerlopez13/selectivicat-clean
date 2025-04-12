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
import { auth } from '@/auth';
import SearchInput from '@/components/SearchInput';

export default async function Home() {

  const session = await auth();

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchInput />
        </div>
        <FooterMain />
      </div>
    </div>
  );
} 