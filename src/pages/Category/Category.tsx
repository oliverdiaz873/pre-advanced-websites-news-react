import { Link } from 'react-router-dom';
import './Category.css';
import '../Home/Home.css';
import { useCategory, RecentNewsSidebar, FeaturedNewsSection, LatestNewsSection } from '../../features/news';
import { NewsLayout } from '../../shared/layouts';


/**
 * Category Page
 * 
 * Página que orquestra la visualización de una sección de noticias (Salud, Deporte, etc.).
 * Utiliza el hook useCategory para abstraer la lógica de obtención de contenidos.
 * 
 * Componentes usados:
 * - NewsLayout: Estructura de dos columnas (Main + Sidebar).
 * - RecentNewsSidebar: Barra lateral con noticias de la sección.
 * - FeaturedNewsSection: Grid de noticias destacadas de la categoría.
 * - LatestNewsSection: Listado inferior de noticias adicionales.
 */
export const Category = () => {
  const { content } = useCategory();

  // Estado: Categoría no encontrada
  if (!content) {
    return (
      <main className="min-h-[calc(100vh-200px)] px-4 py-8 md:px-[0.1rem] lg:px-4">
        <div className="mx-auto max-w-[900px] rounded-lg bg-white p-8 shadow-[0_2px_6px_rgba(0,0,0,0.1)] dark:bg-gray-900">
          <p className="category-kicker text-[#dc3545] font-bold mb-2">Categoría no encontrada</p>
          <h1 className="text-3xl font-bold mb-4 dark:text-white">No encontramos esa sección editorial</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            La ruta solicitada no coincide con las categorías disponibles en el sistema.
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
    <>
      <NewsLayout
        sidebar={
          <RecentNewsSidebar 
            title="Noticias Recientes"
            articles={content.sidebarNews} 
          />
        }
      >
        <div className="space-y-8">
          {/* Sección de noticias destacadas de la categoría */}
          <FeaturedNewsSection content={content.featuredSection} />
          
          {/* Listado de noticias adicionales si existen */}
          {content.latestNews.length > 0 && (
            <LatestNewsSection 
              title={content.latestTitle} 
              articles={content.latestNews} 
            />
          )}
        </div>
      </NewsLayout>
    </>
  );
};
