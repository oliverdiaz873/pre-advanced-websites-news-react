import { Link } from 'react-router-dom';
import './RecentNewsSidebar.css';
import type { NewsArticle } from '../../../../data';

interface RecentNewsSidebarProps {
  title?: string;
  articles: NewsArticle[];
}

/** Representa una barra lateral de noticias recientes para páginas de categorías. */
export const RecentNewsSidebar = ({ title = 'Noticias Recientes', articles }: RecentNewsSidebarProps) => {
  // Limitar a máximo 5 artículos para el sidebar
  const recentArticles = articles.slice(0, 5);

  return (
    <aside>
      <section className="rounded-lg border-l border-[#ddd] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:border-gray-700 dark:bg-gray-900">
        <h3 className="section-title-home section-title-sidebar mb-3">{title}</h3>

        <div className="space-y-6">
          {recentArticles.map((article) => (
            <article
              key={article.id}
              className="recent-news-card rounded-lg p-2 transition-all duration-300 hover:translate-x-[5px]"
            >
              <Link to={article.href} className="block text-inherit no-underline">
                <img
                  src={article.imageUrl}
                  alt={article.alt}
                  loading="lazy"
                  className="mb-2 h-[120px] w-full rounded-lg object-cover"
                />
                <h4 className="mb-2 text-[0.95rem] font-bold leading-[1.3] text-[#212529] transition-colors duration-300 hover:text-[#dc3545] dark:text-white">
                  {article.title}
                </h4>
                <div className="metadata">
                  <time dateTime={article.datetime}>{article.date}</time>
                </div>
                <p className="text-sm leading-[1.6] text-[#495057] dark:text-[#ced4da]">{article.summary}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
};
