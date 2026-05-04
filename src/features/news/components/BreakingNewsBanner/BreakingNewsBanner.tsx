import { useTranslation } from 'react-i18next';
import './BreakingNewsBanner.css';
import { featuredGrid, latestNews } from '../../../../data';
import { useArticleTranslator } from '../../hooks/useArticleTranslation';
import { BreakingNewsBadge } from './BreakingNewsBadge';

/** Obtiene 4 noticias aleatorias del array de noticias disponibles */
const getRandomBreakingNews = () => {
  const allNews = [...featuredGrid, ...latestNews];
  const shuffled = [...allNews].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
};

/** Representa el banner de "Última hora" de la home con múltiples titulares en formato ticker. */
export const BreakingNewsBanner = () => {
  const translateArticle = useArticleTranslator();
  const rawRandomNews = getRandomBreakingNews();
  const randomNews = rawRandomNews.map(translateArticle);
  const { t } = useTranslation('home');

  return (
    <section className="breaking-news rounded-md">
      <div className="relative flex items-center overflow-hidden rounded-md bg-[#dc3545] text-white shadow-sm">
        <BreakingNewsBadge />

        <div className="breaking-news-content">
          <div className="breaking-news-text inline-flex items-center">
            {randomNews.map((news, index) => (
              <span key={news.id}>
                {index > 0 && <span className="mx-4 align-middle">•</span>}
                <a 
                  href={news.href} 
                  className="inline-flex items-center text-white no-underline hover:underline"
                >
                  <span className="align-middle" style={{fontSize: '15px', fontFamily: 'Arial, sans-serif', fontWeight: '600'}}>{news.title}</span>
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
