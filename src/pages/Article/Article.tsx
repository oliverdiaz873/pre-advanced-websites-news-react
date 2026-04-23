import { Link, useParams } from 'react-router-dom';
import './Article.css';
import { newsArticles } from '../../data';

export const Article = () => {
  const { category, slug } = useParams();
  const href = category && slug ? `/news/${category}/${slug}` : '';
  const article = newsArticles.find((item) => item.href === href);

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
    <main className="min-h-[calc(100vh-200px)] px-4 py-6 lg:px-4">
      <article className="article-shell">
        <header className="article-header">
          <p className="article-category">{article.category}</p>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-meta">
            Publicado el <time dateTime={article.datetime}>{article.date}</time>
          </p>
          <p className="article-summary">{article.summary}</p>
        </header>

        <img src={article.imageUrl} alt={article.alt} className="article-image" />

        <div className="article-body">
          <p>
            {article.summary} Este seguimiento forma parte de la migracion editorial actual y conserva el tono, la
            jerarquia visual y los recursos graficos utilizados en la maqueta principal del proyecto.
          </p>
          <p>
            En esta primera version dejamos disponible la ruta funcional de la nota para evitar navegacion rota desde
            categorias y portada, mientras avanzamos con la migracion completa de las paginas de detalle.
          </p>
        </div>
      </article>
    </main>
  );
};
