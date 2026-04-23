import { Link, useParams } from 'react-router-dom';
import './Category.css';
import '../Home/Home.css';
import { categoryContent } from '../../data';
import {
  FeaturedNewsSection,
  LatestNewsSection,
  RecentNewsSidebar,
} from '../../features/news/components';

export const Category = () => {
  const { slug } = useParams();
  const content = slug ? categoryContent[slug] : undefined;

  if (!content) {
    return (
      <main className="min-h-[calc(100vh-200px)] px-4 py-8 md:px-[0.1rem] lg:px-4">
        <div className="mx-auto max-w-[900px] rounded-lg bg-white p-8 shadow-[0_2px_6px_rgba(0,0,0,0.1)] dark:bg-gray-900">
          <p className="category-kicker">Categoría no encontrada</p>
          <h1 className="category-title">No encontramos esa sección editorial</h1>
          <p className="category-description mb-6">
            La ruta solicitada no coincide con las categorías disponibles en el header.
          </p>
          <Link
            to="/"
            className="inline-flex rounded-md bg-[#dc3545] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#b52a37]"
          >
            Volver a la portada
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="home-main min-h-[calc(100vh-200px)] px-4 py-0 md:px-[0.1rem] lg:px-4">
      <div className="mx-auto mt-3 max-w-[1600px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-9">
            <FeaturedNewsSection content={content.featuredSection} />
            {content.latestNews.length > 0 ? (
              <LatestNewsSection title={content.latestTitle} articles={content.latestNews} />
            ) : null}
          </div>

          <div className="lg:col-span-3">
            <RecentNewsSidebar articles={content.latestNews} />
          </div>
        </div>
      </div>
    </main>
  );
};
