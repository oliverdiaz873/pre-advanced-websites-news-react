import React from 'react';
import type { FullNewsArticle } from '../../../../data';

interface ArticleDetailProps {
  article: FullNewsArticle;
}

/**
 * ArticleDetail
 * 
 * Este componente es el núcleo de la página de noticias (el "Main").
 * Se encarga de renderizar todo el contenido de una noticia individual,
 * incluyendo el título, la fecha, el resumen, la imagen principal 
 * y los párrafos del cuerpo.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {FullNewsArticle} props.article - El objeto completo de la noticia a mostrar.
 * @returns {JSX.Element} El componente de detalle de la noticia.
 */
export const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  return (
    <div className="article-wrapper shadow-sm mb-8 bg-white dark:bg-gray-900 rounded-[10px] p-[20px]">
      <article className="featured-article mb-4">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <div className="content order-2 lg:order-1 flex-[0_0_35%] max-w-full lg:max-w-[35%]">
            <h1 className="h1 text-[30px] leading-[1.2] font-sans font-bold mb-3 dark:text-white">
              {article.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 italic">
              Publicado el <time dateTime={article.datetime}>{article.date}</time> | {article.category}
            </p>
            <p className="lead text-[1.1rem] leading-[1.8] text-[#333] dark:text-gray-300 font-normal">
              {article.summary}
            </p>
          </div>
          <div className="image-wrapper order-1 lg:order-2 flex-[0_0_60%] max-w-full lg:max-w-[60%] shadow-sm overflow-hidden rounded-[10px]">
            <img 
              src={article.imageUrl} 
              alt={article.alt} 
              className="w-full h-auto transition-transform duration-300 hover:scale-105" 
              loading="lazy"
            />
          </div>
        </div>
      </article>

      <div className="article-body px-1 mt-4">
        {article.content?.map((paragraph, index) => (
          <p 
            key={index} 
            className="mb-6 text-[1.1rem] leading-[1.8] text-[#333] dark:text-gray-300 text-justify"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
