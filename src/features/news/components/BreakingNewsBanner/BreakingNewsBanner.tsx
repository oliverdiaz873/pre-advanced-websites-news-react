import './BreakingNewsBanner.css';
import { breakingNews } from '../../../../data';

/** Representa el banner de "Última hora" de la home con el titular urgente en formato ticker. */
export const BreakingNewsBanner = () => {
  return (
    <section className="breaking-news rounded-md">
      <div className="relative flex items-center overflow-hidden rounded-md bg-[#dc3545] p-2 text-white shadow-sm">
        <div className="z-10 mr-2 flex shrink-0 items-center gap-2 rounded-md bg-[#212529] px-4 py-[0.35em] text-[0.75em] font-bold uppercase">
          ÚLTIMA HORA
          <span className="h-2 w-2 rounded-full bg-[#ff0000] animate-blink"></span>
        </div>

        <div className="breaking-news-content">
          <a
            href={breakingNews.href}
            className="breaking-news-text inline-flex items-center text-base font-semibold text-white no-underline"
          >
            <i className="mr-2 inline-block h-2 w-2 rounded-full bg-[#ffc107] align-middle" aria-hidden="true"></i>
            <span className="align-middle">{breakingNews.text}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
