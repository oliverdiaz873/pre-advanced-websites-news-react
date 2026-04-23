import { Link } from 'react-router-dom';
import { latestNews, type NewsArticle } from '../../../../data';

interface LatestNewsSectionProps {
  title?: string;
  articles?: NewsArticle[];
}

/** Renderiza una cuadricula editorial reusable para portada y categorias. */
export const LatestNewsSection = ({ title = 'Noticias Recientes', articles = latestNews }: LatestNewsSectionProps) => {
  return (
    <section>
      <h2 className="section-title-home section-title-main mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.id}
            className="news-card-home h-full rounded-lg bg-white p-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)] dark:bg-gray-900"
          >
            <Link to={article.href} aria-label={`Leer noticia: ${article.title}`} className="block text-inherit no-underline">
              <img
                src={article.imageUrl}
                alt={article.alt}
                loading="lazy"
                className="mb-3 w-full rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <h3 className="mb-2 text-xl font-semibold leading-snug text-neutral-900 transition-colors duration-300 hover:text-[#dc3545] dark:text-white">
                {article.title}
              </h3>
              <p className="mb-2 text-[0.85rem] leading-[1.5] text-[#5f6871] dark:text-[#adb5bd]">
                {article.category} | Publicado el <time dateTime={article.datetime}>{article.date}</time>
              </p>
              <p className="text-[0.98rem] leading-[1.6] text-[#292f34] dark:text-[#ced4da]">{article.summary}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};
