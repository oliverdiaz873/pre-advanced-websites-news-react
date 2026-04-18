import React from 'react';
import './BreakingNewsBanner.css';

interface BreakingNewsItem {
  id: string;
  text: string;
}

// Temporary internal mock data, matching the original index.html exactly
const mockBreakingNews: BreakingNewsItem[] = [
  { id: '1', text: 'Crisis global: Mercados reportan caída libre' },
  { id: '2', text: 'Nuevo acuerdo internacional de protección ambiental firmado hoy' },
  { id: '3', text: 'Avance tecnológico revolucionario en procesamiento de datos presentado esta mañana' },
];

export const BreakingNewsBanner = () => {
  return (
    <section className="breaking-news rounded mb-[1.5rem]">
      <div className="flex items-center bg-[#dc3545] text-white p-[0.5rem] rounded shadow-sm relative overflow-hidden">
        
        {/* Label estático con el punto rojo indicativo a la derecha */}
        <div className="font-bold px-[1rem] py-[0.35em] text-[0.75em] uppercase bg-[#212529] rounded-[0.375rem] mr-[0.5rem] z-10 flex-shrink-0 flex items-center gap-2">
          ÚLTIMA HORA
          <span className="w-2 h-2 rounded-full bg-[#ff0000] animate-blink"></span>
        </div>
        
        {/* Contenedor del ticker animado */}
        <div className="breaking-news-content">
          <span className="breaking-news-text text-base font-bold">
            {mockBreakingNews.map((news, index) => (
              <React.Fragment key={news.id}>
                {/* El punto amarillo (bi-circle-fill text-warning) va ANTES de cada noticia */}
                <i className="inline-block rounded-full bg-[#ffc107] align-middle" style={{ width: '8px', height: '8px', marginRight: '0.5rem', marginLeft: index > 0 ? '1rem' : '0' }} aria-hidden="true"></i>
                <span className="align-middle">{news.text}</span>
              </React.Fragment>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
};
