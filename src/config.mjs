import defaultImage from './assets/images/hero.webp';

const CONFIG = {
  name: 'CantoVerse',

  origin: 'https://cantoverse.net',
  basePathname: '/',
  trailingSlash: false,

  title: 'Cantoverse - Decentralized Marketplace and Art Gallery on the Canto Blockchain',
  description:
    'Discover and collect unique NFTs on Cantoverse, the decentralized marketplace and art gallery powered by the Canto Blockchain. Buy and sell securely with ease, and explore the works of talented artists from around the world. Join the future of art and technology today.',
  defaultImage: defaultImage,

  defaultTheme: 'dark', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  // googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  // googleSiteVerificationId: '',

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
