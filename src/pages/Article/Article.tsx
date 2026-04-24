import { Link, useParams } from 'react-router-dom';
import './Article.css';
import { 
  newsArticles, 
  politicaArticles, 
  deporteArticles, 
  economiaArticles, 
  internacionalArticles, 
  justiciaArticles, 
  climaArticles, 
  saludArticles 
} from '../../data';
import { Breadcrumb } from '../../features/navigation/components';
import { RecentNewsSidebar } from '../../features/news/components';
import type { FullNewsArticle } from '../../data';

export const Article = () => {
  const { category, slug } = useParams();
  const href = category && slug ? `/news/${category}/${slug}` : '';
  
  // Combinar todos los artículos existentes
  const allArticles = [
    ...newsArticles, 
    ...politicaArticles, 
    ...deporteArticles, 
    ...economiaArticles, 
    ...internacionalArticles, 
    ...justiciaArticles, 
    ...climaArticles, 
    ...saludArticles
  ];
  const article = allArticles.find((item) => item.href === href) as FullNewsArticle | undefined;

  if (!article) {
    return (
      <main className="min-h-[calc(100vh-200px)] px-4 py-8 lg:px-4">
        <div className="mx-auto max-w-[900px] rounded-lg bg-white p-8 shadow-[0_2px_6px_rgba(0,0,0,0.1)] dark:bg-gray-900">
          <p className="article-category">Noticia no encontrada</p>
          <h1 className="article-title">No encontramos este articulo</h1>
          <p className="article-summary mb-6">
            La nota solicitada todavia no esta disponible o la ruta no coincide con el contenido migrado.
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
        home={article?.breadcrumb?.home || "Inicio"}
        category={article?.breadcrumb?.category || article?.category || ""}
        categoryPath={`/category/${category}`}
        current={article?.breadcrumb?.current || article?.title || ""}
      />
      <main className="main-content">
        <div className="container-fluid mt-3">
          <div className="row">
            {/* Main Content Column */}
            <div className="col-lg-9">
              <div className="article-wrapper shadow-sm mb-5">
                <article className="featured-article mb-4">
                  <div className="d-flex align-items-start gap-4">
                    <div className="content">
                      <h1 className="h1 mb-3">{article.title}</h1>
                      <p className="text-muted mb-2">
                        <small>Publicado el <time dateTime={article.datetime}>{article.date}</time> | {article.category}</small>
                      </p>
                      <p className="lead fw-normal">
                        {article.summary}
                      </p>
                    </div>
                    <div className="image-wrapper shadow-sm">
                      <img src={article.imageUrl} alt={article.alt} className="img-fluid rounded" />
                    </div>
                  </div>
                </article>

                <div className="article-body px-1">
                  {article.content?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="col-lg-3">
              <aside className="aside-sidebar">
                <RecentNewsSidebar 
                  title="Noticias Recientes"
                  articles={article.relatedNews || []}
                />
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
