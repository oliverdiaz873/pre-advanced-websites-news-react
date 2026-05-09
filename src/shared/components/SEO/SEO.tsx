import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  articleUrl?: string;
  type?: 'website' | 'article';
  datePublished?: string;
  authorName?: string;
}

const SEO = ({
  title,
  description = 'Mantente informado con las últimas noticias internacionales, política, economía y más.',
  imageUrl = '/images/logo/logo.jpg',
  articleUrl = window.location.href,
  type = 'website',
  datePublished,
  authorName = 'News Portal Redacción'
}: SEOProps) => {
  const siteName = 'News Portal';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${window.location.origin}${imageUrl}`;

  // Schema.org JSON-LD
  const schemaData = type === 'article' 
    ? {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        'headline': title,
        'description': description,
        'image': [fullImageUrl],
        'datePublished': datePublished,
        'author': [{
          '@type': 'Person',
          'name': authorName,
          'url': window.location.origin
        }],
        'publisher': {
          '@type': 'Organization',
          'name': siteName,
          'logo': {
            '@type': 'ImageObject',
            'url': `${window.location.origin}/images/logo/logo.jpg`
          }
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': articleUrl
        }
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': fullTitle,
        'description': description,
        'url': articleUrl,
        'publisher': {
          '@type': 'Organization',
          'name': siteName
        }
      };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={articleUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={articleUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
