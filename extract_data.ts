import fs from 'fs';
import path from 'path';
import {
  newsArticles,
  opinionArticles,
  opinionDetails,
  categoryContent,
} from './src/data/index.ts';

// Import full articles from category files
import { politicaArticles as fullPolitica } from './src/data/articleContent/politica.ts';
import { deporteArticles as fullDeporte } from './src/data/articleContent/deporte.ts';
import { economiaArticles as fullEconomia } from './src/data/articleContent/economia.ts';
import { internacionalArticles as fullInternacional } from './src/data/articleContent/internacional.ts';
import { justiciaArticles as fullJusticia } from './src/data/articleContent/justicia.ts';
import { climaArticles as fullClima } from './src/data/articleContent/clima.ts';
import { saludArticles as fullSalud } from './src/data/articleContent/salud.ts';

const allFullArticles = [
  ...fullPolitica,
  ...fullDeporte,
  ...fullEconomia,
  ...fullInternacional,
  ...fullJusticia,
  ...fullClima,
  ...fullSalud
];

const extractData = () => {
  const data = {
    articles: {} as Record<string, any>,
    categories: {} as Record<string, any>,
  };

  // Helper to add an article to the data object
  const addArticle = (article: any) => {
    if (!article || !article.id) return;
    
    // Si ya existe y tiene content, no sobreescribimos con una versión que no tenga content
    if (data.articles[article.id]?.content && !article.content) {
      return;
    }

    data.articles[article.id] = {
      ...data.articles[article.id],
      title: article.title,
      summary: article.summary,
      category: article.category,
      alt: article.alt,
      ...(article.content ? { content: article.content } : {}),
    };
  };

  // 1. Gather ALL articles from all known sources
  // Regular news
  newsArticles.forEach(addArticle);
  
  // Full articles from categories
  allFullArticles.forEach(addArticle);
  
  // Opinion articles and details
  opinionArticles.forEach(addArticle);
  Object.values(opinionDetails).forEach(addArticle);

  // 2. Scan all category content for any missed articles (sidebar, etc.)
  Object.values(categoryContent).forEach((cat) => {
    // Add articles from featured section
    addArticle(cat.featuredSection.primary);
    cat.featuredSection.secondary.forEach(addArticle);
    cat.featuredSection.grid.forEach(addArticle);
    
    // Add articles from latest and sidebar
    cat.latestNews.forEach(addArticle);
    cat.sidebarNews.forEach(addArticle);
    cat.opinionArticles.forEach(addArticle);

    // Extract category metadata
    data.categories[cat.slug] = {
      label: cat.label,
      description: cat.description,
      latestTitle: cat.latestTitle,
      sidebarTitle: cat.sidebarTitle,
      featuredSectionTitle: cat.featuredSection.title,
    };
  });

  // Write ES JSON
  const esPath = path.join(process.cwd(), 'public', 'locales', 'es', 'data.json');
  fs.writeFileSync(esPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Extracted ES data to ${esPath}`);

  // Generate EN JSON (mock translation with some real ones)
  const enData = {
    articles: {} as Record<string, any>,
    categories: {} as Record<string, any>,
  };

  const REAL_TRANSLATIONS: Record<string, any> = {
    'internacional-guerra': {
      title: 'The war in Ukraine comes to an end',
      summary: 'After years of conflict, the war in Ukraine has ended, marking a historic moment for the region and the international community.',
      content: [
        'The peace agreement was signed after intense negotiations between the involved parties, with mediation from international organizations and leaders from several countries seeking to end the violence and suffering of the civilian population.',
        'The President of Ukraine declared that the nation will begin a process of reconstruction and reconciliation, emphasizing the need for unity and cooperation to overcome the challenges arising from the conflict.',
        'For their part, Russian representatives stated that they will respect the terms of the agreement and committed to withdrawing their troops from the occupied territories, seeking stability and normalization of diplomatic relations.',
        'The international community has celebrated the end of the war, highlighting the importance of dialogue and diplomacy in conflict resolution. Humanitarian aid and reconstruction programs are expected for the affected areas.',
        'Analysts warn that, although the agreement ends hostilities, it will be crucial to implement security, justice, and economic development measures to ensure lasting peace and prevent future conflicts.',
        'Citizens of Ukraine have begun to return to their homes, while local and international organizations work to provide assistance and rebuild critical infrastructure damaged during the war.',
        'The agreement also includes provisions for international supervision and the establishment of regional cooperation mechanisms, with the aim of strengthening peace and preventing any future escalation.',
        'The world watches this historic moment with hope, trusting that the end of the war in Ukraine marks the beginning of a period of stability, development, and reconciliation across the region.'
      ]
    },
    'economia-inflacion': {
      title: 'Rising inflation impacts markets',
      summary: 'The sustained increase in inflation is creating uncertainty in financial markets and affecting citizens\' purchasing power.',
      content: [
        'According to recent reports, annual inflation in major economies has exceeded analysts\' expectations, driven by rising costs for energy, food, and transport. In several European countries, prices recorded their highest increase in over a year.',
        'International stock markets reacted with volatility. The S&P 500 fell more than 1%, while the Euro Stoxx 50 and Japan\'s Nikkei recorded similar declines. Investors fear that central banks may delay interest rate cuts.',
        'Jonathan Reeves, chief economist at the International Monetary Fund, noted that the persistence of inflation "reflects structural imbalances that go beyond the economic cycle." He also warned that "if inflationary expectations do not stabilize soon, markets could face a prolonged period of uncertainty."',
        'In Latin America, the effects are also being felt. Countries with economies dependent on imports have seen how the cost of basic goods rises, directly affecting the purchasing power of families.',
        'For their part, oil and natural gas prices remain high, which adds pressure to supply chains and production costs. Manufacturing and transport companies report tighter profit margins.',
        'Analysts agree that, although inflation could moderate in the coming months, markets will remain exposed to uncertainty. Factors such as geopolitical instability, trade conflicts, and the global energy transition will continue to influence price behavior.'
      ]
    },
    'economia-bolsa': {
      title: 'Stock Market Closes Higher After Session of Investor Optimism',
      summary: 'The stock market closed higher this Thursday, driven by renewed optimism among investors and the release of positive financial results from several leading companies.',
      content: [
        'The S&P 500 index rose 1.2%, while the Dow Jones and Nasdaq recorded increases of 1% and 1.5% respectively. This behavior reflects investor confidence in economic stability and short-term corporate earnings prospects.',
        'Analysts point out that the combination of monetary stimulus, progress in trade agreements, and the reduction of political uncertainties has contributed to the market recovery. Additionally, the technology sector led gains, with several companies exceeding analyst expectations.',
        'For their part, foreign investors also showed interest in US markets, increasing the demand for stocks and strengthening the upward trend. This dynamic has reinforced the perception that the economy remains resilient against global challenges.',
        'In conclusion, the positive session in the stock market reflects an environment of confidence and favorable expectations. However, experts warn that volatility could return if unexpected changes occur in economic policy or key financial indicators.'
      ]
    },
    'politica-ley-ambiental': {
      title: 'Historical Approval: Congress Gives Green Light to Environmental Protection Law',
      summary: 'In a historic session, the National Congress approved by a broad majority the Environmental Protection Law, a regulation that establishes drastic measures to combat climate change and protect the country\'s ecosystems.',
      content: [
        'The vote had broad support from legislators, who highlighted the importance of this law to face the challenges of climate change and protect critical ecosystems for future generations.',
        'The new regulation establishes strict measures for the preservation of forests, rivers, seas, and protected areas, as well as regulations on polluting emissions and responsible waste management.',
        'Environmental experts and civil organizations celebrated the approval, noting that this law could serve as a model for other countries in the region regarding environmental protection.',
        'Among the most prominent points are incentives for companies that adopt sustainable practices, environmental education programs, and severe sanctions for those who fail to comply with the established regulations.',
        'The President of Congress stated that this law represents a fundamental step towards more responsible economic development, which does not compromise natural resources or the quality of life of future generations.',
        'Civil society and citizens in general have shown great interest in the implementation of the law, hoping that its benefits will be reflected in the improvement of air and water quality and the conservation of biodiversity.'
      ]
    },
    'politica-encuesta': {
      title: 'Polls Reveal Increase in President\'s Popularity',
      summary: 'The latest public opinion polls show a significant increase in the president\'s popularity, reflecting growing support from citizens for his policies and government management.',
      content: [
        'According to data collected by several polling firms, the leader\'s approval rating has risen several percentage points compared to recent months, indicating a positive perception of his performance.',
        'Political analysts attribute this increase to recent government initiatives in key areas such as economy, health, and education, as well as the effective communication of achievements in media and social networks.',
        'The increase in popularity is also observed in different population segments, including youth, professionals, and voters from urban and rural regions, showing broader and more diversified support.',
        'On the other hand, some experts highlight that this increase could be influenced by external factors, such as international stability and media coverage of certain positive events related to the administration.',
        'The president and his team have taken advantage of these polls to reinforce their communication strategy and continue promoting policies that connect with the needs and expectations of citizens.',
        'Meanwhile, opposition parties analyze these results to adjust their campaigns and proposals, seeking to counter the growing popularity of the leader in the national political landscape.'
      ]
    },
    'salud-antibioticos': {
      title: 'Growing Concern Over Antibiotic Resistance Worldwide',
      summary: 'Antibiotic resistance continues to be a growing threat to public health worldwide, generating concern among scientists and health authorities.',
      content: [
        'Experts warn that the excessive and inadequate use of antibiotics has accelerated the emergence of resistant bacteria, which makes it difficult to treat common infections and increases the risk of serious complications.',
        'International organizations have urged the implementation of stricter policies to control antibiotic prescription, as well as promoting awareness campaigns about their responsible use.',
        'Recent research shows that antibiotic resistance could cause millions of additional deaths in the coming decades if effective measures are not taken immediately.',
        'Scientists highlight the importance of developing new drugs and alternative treatments, as well as strengthening epidemiological surveillance systems to detect and contain outbreaks of resistant bacteria.',
        'In conclusion, antibiotic resistance represents one of the greatest challenges of modern medicine, and requires international cooperation and a firm commitment to protect global health.'
      ]
    },
    'deporte-equipo-local': {
      title: 'Great Victory for the Local Team in an Exciting Football Match',
      summary: 'In a night full of emotion, the local team achieved an impressive victory against its main rival, consolidating its position as one of the favorites.',
      content: [
        'With a final score of 3-1, the team showed an excellent offensive performance and a solid defense that prevented any attempt at a comeback by the adversary. The team coach highlighted the unity and commitment of the squad as keys to success.',
        'Fans celebrated for hours in the streets, while social media was filled with messages of support and pride. Sports analysts agreed that this victory could mark a turning point in the season, strengthening team morale and fan confidence.',
        'After the match, the coach stated in a press conference: "The team showed character, discipline, and passion. Every player understood their role and fulfilled it perfectly. I am proud of what we achieved today and confident that we can keep improving."',
        'Finally, the local community has begun organizing celebrations and tributes for the players, recognizing their effort and dedication. A week full of sporting enthusiasm is expected in the city.'
      ]
    },
    'deporte-nba': {
      title: 'Lakers Defeat Celtics 112-107 in Thrilling NBA Matchup',
      summary: 'The Los Angeles Lakers defeated the Boston Celtics 112-107 in a game filled with excitement and spectacular plays that kept fans on the edge of their seats.',
      content: [
        'The game began with unusual intensity from the first quarter, with both teams exchanging plays and showing why they are considered two of the greatest franchises in NBA history.',
        'LeBron James was the standout figure for the Lakers, contributing 28 points, 8 rebounds, and 7 assists in a performance that proves he is still at the top of his game.',
        'Jayson Tatum led the Celtics with 25 points and 10 rebounds, but it wasn\'t enough to avoid defeat in a game that was decided in the final minutes.',
        'The third quarter was decisive, with the Lakers imposing their defensive rhythm and achieving a 32-24 run that gave them a comfortable lead for the final period.'
      ]
    },
    'deporte-espana-final': {
      title: 'Spain Qualifies for World Cup Final After Defeating Germany',
      summary: 'Spain secured its place in the World Cup final after defeating Germany in an intense match filled with memorable moments.',
      content: [
        'The first half was marked by Germany\'s offensive pressure, but the Spanish defense held firm with outstanding saves from the goalkeeper and impeccable defensive coordination.',
        'In the second half, Spain managed to impose its rhythm. The decisive goal came from a collective play that ended with a precise strike from a star player, sparking euphoria in the stands.',
        'The German team didn\'t give up and sought the equalizer until the final minutes, but the solidity of the Spanish defense and quick counterattacks allowed them to maintain the lead.',
        'The Spanish coach highlighted the discipline and teamwork of his players, stating that the victory is the result of collective effort and strategic preparation.'
      ]
    },
    'deporte-atletas': {
      title: 'Athletes Break World Records in International Championship',
      summary: 'Athletes from different countries set new world records at the international athletics championship, surpassing marks that had stood for years.',
      content: [
        'The Olympic Stadium witnessed historic moments when three athletes managed to overcome world records that seemed unbeatable, marking a milestone in modern athletics history.',
        'In the 100-meter dash, Jamaican sprinter Devon Allen ran in 9.58 seconds, equaling the world mark and demonstrating extraordinary speed.',
        'Polish hammer thrower Anita Włodarczyk broke her own world record with a throw of 82.98 meters, extending her dominance in the discipline.',
        'The high jump also had its glorious moment with Sweden\'s Armand Duplantis, who cleared 6.23 meters to set a new world record and leave everyone in awe.'
      ]
    },
    'clima-tormenta': {
      title: 'Tropical Storm Approaches the Caribbean and Alerts Several Countries',
      summary: 'Meteorological authorities issue preventive alerts as a tropical storm with the potential to become a hurricane approaches.'
    },
    'justicia-fraude': {
      title: 'Former Official Detained for Massive Financial Fraud',
      summary: 'Authorities arrested a former public official this Friday accused of participating in a financial fraud scheme that allegedly diverted millions of dollars from state funds.',
      content: [
        'The detention occurred after an extensive investigation led by the specialized economic crimes prosecutor\'s office. According to the preliminary report, the former official allegedly used a network of shell companies to divert resources intended for social development programs.',
        'Authorities claim that the money was transferred to offshore accounts and used for the purchase of luxury properties. The detainee was moved to a preventive detention center, where he will remain in custody while charges are formalized.',
        'The prosecution has requested preventive prison, considering there is a flight risk and the possibility of obstructing the investigation. During a press conference, the Attorney General stated that this arrest represents a significant step forward in the fight against corruption.'
      ]
    },
    'clima-huracan': {
      title: 'Hurricane Strengthens in the Atlantic, Threatening the East Coast',
      summary: 'Authorities have issued evacuation alerts as a Category 3 hurricane approaches the coast with sustained winds exceeding 200 km/h.',
      content: [
        'The hurricane, which formed several days ago in the central Atlantic, has rapidly gained strength due to high sea temperatures and favorable atmospheric conditions. Meteorologists from the National Hurricane Center reported that the system could intensify further in the coming hours.',
        'Sustained winds already exceed 200 kilometers per hour, with even stronger gusts in areas near the eye of the hurricane. The phenomenon is moving northwest at an approximate speed of 20 kilometers per hour, dangerously approaching the US East Coast.',
        'Authorities in Florida, Georgia, South Carolina, and North Carolina have issued hurricane alerts and preventive evacuation warnings in the most exposed coastal areas. Storm surges are expected to reach heights of three to five meters.'
      ]
    }
  };

  const translateText = (text: string | string[], id?: string, field?: string) => {
    if (!text) return text;
    
    // Check for real translation
    if (id && REAL_TRANSLATIONS[id] && REAL_TRANSLATIONS[id][field as string]) {
      return REAL_TRANSLATIONS[id][field as string];
    }

    if (Array.isArray(text)) {
      return text.map(p => `[EN] ${p}`);
    }
    return `[EN] ${text}`;
  };

  const translateCategory = (cat: string) => {
    const map: Record<string, string> = {
      'Política': 'Politics',
      'Internacional': 'International',
      'Economía': 'Economy',
      'Salud': 'Health',
      'Deporte': 'Sports',
      'Clima': 'Weather',
      'Justicia': 'Justice',
      'Opinión': 'Opinion'
    };
    return map[cat] || cat;
  };

  Object.entries(data.articles).forEach(([id, article]) => {
    enData.articles[id] = {
      title: translateText(article.title, id, 'title'),
      summary: translateText(article.summary, id, 'summary'),
      category: translateCategory(article.category),
      alt: translateText(article.alt, id, 'alt'),
    };
    if (article.content) {
      enData.articles[id].content = translateText(article.content, id, 'content');
    }
  });

  Object.entries(data.categories).forEach(([slug, cat]) => {
    enData.categories[slug] = {
      label: translateCategory(cat.label),
      description: translateText(cat.description),
      latestTitle: `More in ${translateCategory(cat.label)}`,
      sidebarTitle: 'Opinion',
      featuredSectionTitle: translateCategory(cat.featuredSectionTitle),
    };
  });

  const enPath = path.join(process.cwd(), 'public', 'locales', 'en', 'data.json');
  fs.writeFileSync(enPath, JSON.stringify(enData, null, 2), 'utf-8');
  console.log(`Generated EN data to ${enPath}`);
};

extractData();
