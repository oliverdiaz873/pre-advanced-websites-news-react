export interface NewsArticle {
  id: string;
  title: string;
  href: string;
  category: string;
  date: string;
  datetime: string;
  summary: string;
  imageUrl: string;
  alt: string;
}

export interface OpinionArticle {
  id: string;
  title: string;
  href: string;
  summary: string;
  imageUrl: string;
  alt: string;
  date: string;
  datetime: string;
}

export interface FeaturedSectionContent {
  title: string;
  primary: NewsArticle;
  secondary: [NewsArticle, NewsArticle, NewsArticle];
  grid: NewsArticle[];
}

export interface CategoryPageContent {
  slug: string;
  label: string;
  description: string;
  featuredSection: FeaturedSectionContent;
  latestTitle: string;
  latestNews: NewsArticle[];
  sidebarTitle: string;
  sidebarNews: NewsArticle[];
  opinionArticles: OpinionArticle[];
}
