import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface ArticleCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  delay?: number;
}

export default function ArticleCard({ slug, title, description, date, delay = 0 }: ArticleCardProps) {
  return (
    <AnimateOnScroll animation="fadeIn" delay={delay}>
      <Link href={`/blog/${slug}`} className="group block">
        <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8">
          <h3 className="text-2xl font-bold mb-4 group-hover:text-selectivi-yellow transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            {description}
          </p>
          <div className="text-sm text-gray-500 border-t border-gray-100 pt-4">
            <span>{date}</span>
          </div>
        </article>
      </Link>
    </AnimateOnScroll>
  );
} 