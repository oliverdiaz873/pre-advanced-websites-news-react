export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  imageUrl: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
}

// TODO: Poblaremos estos datos extraídos del html antiguo cuando vayamos a montar los componentes de la feature News
export const mockNews: NewsItem[] = [];
