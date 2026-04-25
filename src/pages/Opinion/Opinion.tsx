import { Link } from 'react-router-dom';
import './Opinion.css';
import '../Home/Home.css';
import '../Article/Article.css';
import { Breadcrumb } from '../../features/navigation/components';
import { RecentNewsSidebar, ArticleDetail, useOpinion } from '../../features/news';
import { NewsLayout } from '../../shared/layouts';

/**
 * Opinion Page
 * 
 * Página que orquestra la visualización de una columna de opinión individual.
 * Utiliza la misma plantilla que las noticias para mantener la consistencia visual.
 */
export const Opinion = () => {
  const { article, sidebarOpinions } = useOpinion();

  // Estado: Opinión no encontrada
  if (!article) {
    return (
      <main className="min-h-[calc(100vh-200px)] px-4 py-8 lg:px-4">
        <div className="mx-auto max-w-[900px] rounded-lg bg-white p-8 shadow-[0_2px_6px_rgba(0,0,0,0.1)] dark:bg-gray-900">
          <p className="text-[#dc3545] font-bold mb-2">Opinión no encontrada</p>
          <h1 className="text-3xl font-bold mb-4 dark:text-white">Esta columna de opinión no está disponible</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            El artículo que buscas no existe o ha sido movido.
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
      <Breadcrumb 
        home="Inicio"
        category="Opinión"
        categoryPath="/"
        current={article.title}
      />
      
      <NewsLayout
        sidebar={
          <RecentNewsSidebar 
            title="Otras Opiniones"
            articles={sidebarOpinions as any}
          />
        }
      >
        <ArticleDetail article={article} />
      </NewsLayout>


    </>
  );
};


