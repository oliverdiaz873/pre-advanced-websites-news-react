import { Link, useParams } from 'react-router-dom';
import './Opinion.css';
import { opinionArticlesByRoute } from '../../data';

export const Opinion = () => {
  const { slug } = useParams();
  const href = slug ? `/opiniones/${slug}` : '';
  const article = opinionArticlesByRoute[href];

  if (!article) {
    return (
      <main className="min-h-[calc(100vh-200px)] px-4 py-8 lg:px-4">
        <div className="mx-auto max-w-[900px] rounded-lg bg-white p-8 shadow-[0_2px_6px_rgba(0,0,0,0.1)] dark:bg-gray-900">
          <p className="opinion-kicker">Opinion no encontrada</p>
          <h1 className="opinion-title">No encontramos esta columna</h1>
          <p className="opinion-summary mb-6">
            La pieza solicitada aun no forma parte de la migracion o la ruta no coincide con los enlaces actuales.
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
      <article className="opinion-shell">
        <header className="opinion-header">
          <p className="opinion-kicker">Opinion</p>
          <h1 className="opinion-title">{article.title}</h1>
          <p className="opinion-summary">{article.summary}</p>
        </header>

        <img src={article.imageUrl} alt={article.alt} className="opinion-image" />

        <div className="opinion-body">
          <p>
            {article.summary} Esta vista mantiene una presentacion editorial sobria para asegurar continuidad visual con
            la portada y con las nuevas paginas de categoria.
          </p>
          <p>
            La migracion de las columnas completas puede profundizarse despues, pero desde ahora la navegacion queda
            resuelta y coherente con los enlaces ya visibles en el sitio.
          </p>
        </div>
      </article>
    </main>
  );
};
