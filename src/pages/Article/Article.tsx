import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Article.css';
import '../Home/Home.css';
import { Breadcrumb } from '../../features/navigation/components';
import { RecentNewsSidebar, ArticleDetail, useNewsArticle } from '../../features/news';
import { NewsLayout } from '../../shared/layouts';


/**
 * Article Page
 * 
 * Página que orquestra la visualización de una noticia individual.
 * Delega la lógica de búsqueda al hook useNewsArticle para mantener un diseño limpio.
 * 
 * Componentes usados:
 * - Breadcrumb: Navegación jerárquica (Inicio > Categoría > Noticia).
 * - NewsLayout: Estructura de dos columnas.
 * - RecentNewsSidebar: Barra lateral con noticias relacionadas.
 * - ArticleDetail: Componente que renderiza el cuerpo y metadatos de la noticia.
 */
export const Article = () => {
  const { article, categoryName, categorySlug } = useNewsArticle();
  const { t } = useTranslation('news');
  const { t: tCommon } = useTranslation('common');

  // Estado: Noticia no encontrada
  if (!article) {
    return (
      <main className="min-h-[calc(100vh-200px)] px-4 py-8 lg:px-4">
        <div className="mx-auto max-w-[900px] rounded-lg bg-white p-8 shadow-[0_2px_6px_rgba(0,0,0,0.1)] dark:bg-gray-900">
          <p className="article-category">{t('notFound.label')}</p>
          <h1 className="article-title">{t('notFound.title')}</h1>
          <p className="article-summary mb-6">
            {t('notFound.description')}
          </p>
          <Link
            to="/"
            className="inline-flex rounded-md bg-[#dc3545] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#b52a37]"
          >
            {tCommon('backToHome')}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Breadcrumb 
        home={t('breadcrumbHome')}
        category={categoryName}
        categoryPath={`/category/${categorySlug}`}
        current={article?.breadcrumb?.current || article?.title || ""}
      />
      
      <NewsLayout
        sidebar={
          <RecentNewsSidebar 
            title={t('relatedNews')}
            articles={article.relatedNews || []}
          />
        }
      >
        <ArticleDetail article={article} />
      </NewsLayout>
    </>
  );
};
