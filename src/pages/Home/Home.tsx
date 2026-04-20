import './Home.css';
import {
  BreakingNewsBanner,
  FeaturedNewsSection,
  LatestNewsSection,
  OpinionSidebar,
} from '../../features/news/components';

/** Representa la página principal del periódico y compone los bloques editoriales visibles en portada. */
export const Home = () => {
  return (
    <main className="home-main min-h-[calc(100vh-200px)] px-4 py-0 md:px-[0.1rem] lg:px-4">
      <div className="mx-auto mt-3 max-w-[1600px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <section className="mb-2">
              <BreakingNewsBanner />
            </section>

            <div className="space-y-8">
              <FeaturedNewsSection />
              <LatestNewsSection />
            </div>
          </div>

          <div className="lg:col-span-3">
            <OpinionSidebar />
          </div>
        </div>
      </div>
    </main>
  );
};
