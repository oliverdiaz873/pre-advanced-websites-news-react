import { Link } from 'react-router-dom';
import './RecentNewsSidebar.css';
import type { NewsArticle } from '../../../../data';

interface RecentNewsSidebarProps {
  title?: string;
  articles: NewsArticle[];
}

/**
 * RecentNewsSidebar
 * 
 * Este componente es el Sidebar de la página.
 * Muestra una lista vertical de noticias relacionadas o recientes,
 * permitiendo al usuario seguir navegando por temas similares sin volver a la portada.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} [props.title='Noticias Recientes'] - Título que aparecerá en la cabecera del sidebar.
 * @param {NewsArticle[]} props.articles - Arreglo de noticias a mostrar en la lista.
 * @returns {JSX.Element} El componente de barra lateral.
 */
export const RecentNewsSidebar = ({ title = 'Noticias Recientes', articles }: RecentNewsSidebarProps) => {
  // Limitar a máximo 5 artículos para el sidebar
  const recentArticles = articles.slice(0, 5);

  return (
    <aside className="recent-news-sidebar">
      <section className="rounded-lg border-l border-[#ddd] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:border-[var(--color-border-subtle)] dark:bg-[var(--color-surface-elevated)]">
        <h3 className="section-title-home section-title-sidebar mb-4 text-2xl font-bold dark:text-[var(--color-text-primary)]">{title}</h3>

        <div className="space-y-6">
          {recentArticles.map((article) => (
            <article
              key={article.id}
              className="opinion-card-home rounded-lg p-2 transition-all duration-300 hover:translate-x-[5px]"
            >
              <Link to={article.href} className="block text-inherit no-underline">
                <img
                  src={article.imageUrl}
                  alt={article.alt}
                  loading="lazy"
                  className="mb-2 h-[120px] w-full rounded-lg object-cover"
                />
                <h4 className="mb-2 text-[0.95rem] font-bold leading-[1.3] text-[#212529] transition-colors duration-300 hover:text-[#dc3545] dark:text-[var(--color-text-primary)]">
                  {article.title}
                </h4>
                <div className="metadata">
                  <time dateTime={article.datetime}>{article.date}</time>
                </div>
                <p className="text-sm leading-[1.6] text-[#495057] dark:text-[var(--color-text-primary)]">
                  {article.summary}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
};
