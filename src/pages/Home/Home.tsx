import './Home.css';
import { BreakingNewsBanner } from '../../features/news/components';

export const Home = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Content Column (equivalent to col-lg-9) */}
        <div className="lg:col-span-9 space-y-8">
          <section className="breaking-news-section">
             <BreakingNewsBanner />
          </section>

          <section className="featured-news">
             <h2 className="text-2xl font-bold mb-4 dark:text-white">Noticias Destacadas</h2>
             {/* TODO: Featured News Component */}
             <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">TODO: Featured News Grid</div>
          </section>

          <section className="latest-news">
             <h2 className="text-2xl font-bold mb-4 dark:text-white">Noticias Recientes</h2>
             {/* TODO: Latest News Grid Component */}
             <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">TODO: Latest News Grid</div>
          </section>
        </div>

        {/* Sidebar Column (equivalent to col-lg-3) */}
        <div className="lg:col-span-3">
          <aside className="sticky top-24">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Opinión</h3>
            {/* TODO: Opinion Sidebar Component */}
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded h-64">TODO: Sidebar Content</div>
          </aside>
        </div>
      </div>
    </div>
  );
};
