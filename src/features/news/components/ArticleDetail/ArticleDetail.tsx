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
  // Separamos el primer párrafo del resto para mejorar el diseño visual
  const [firstParagraph, ...restParagraphs] = article.content || [];

  return (
    <div className="article-wrapper shadow-sm mb-8 bg-white dark:bg-gray-900 rounded-[10px] p-[20px] md:p-[30px]">
      <article className="featured-article mb-4">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="content order-2 lg:order-1 flex-[0_0_40%] max-w-full lg:max-w-[40%]">
            <h1 className="h1 text-[30px] leading-[1.2] font-sans font-bold mb-3 dark:text-white">
              {article.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 italic">
              Publicado el <time dateTime={article.datetime}>{article.date}</time> | {article.category}
            </p>
            
            <div className="space-y-6">
              {/* Resumen (Lead) */}
              <p className="text-[1.1rem] leading-[1.8] text-[#333] dark:text-[#d1d5db] text-justify">
                {article.summary}
              </p>
              
              {/* Primer párrafo al lado de la imagen */}
              {firstParagraph && (
                <p className="text-[1.1rem] leading-[1.8] text-[#333] dark:text-[#d1d5db] text-justify border-t border-gray-100 dark:border-gray-800 pt-6">
                  {firstParagraph}
                </p>
              )}
            </div>
          </div>
          
          <div className="image-wrapper order-1 lg:order-2 flex-[0_0_55%] max-w-full lg:max-w-[55%] shadow-sm overflow-hidden rounded-[10px]">
            <img 
              src={article.imageUrl} 
              alt={article.alt} 
              className="w-full h-auto transition-transform duration-300 hover:scale-105" 
              loading="lazy"
            />
          </div>
        </div>
      </article>

      <div className="article-body px-1 mt-8">
        {/* Resto de párrafos */}
        {restParagraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className="mb-6 text-[1.1rem] leading-[1.8] text-[#333] dark:text-[#d1d5db] text-justify"
          >
            {paragraph}
          </p>
        ))}
      </div>

    </div>
  );
};

