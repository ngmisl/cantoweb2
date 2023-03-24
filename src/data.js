import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [{}],
  actions: [
    { type: 'button', text: 'Blog', href: getBlogPermalink() },
    { type: 'button', text: 'Maze', href: '/maze' },
    { type: 'button', text: 'Visit Gallery', href: '/gallery' },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Twitter',
      icon: 'tabler:brand-twitter',
      href: 'https://twitter.com/cantometaverse',
    },
    {
      ariaLabel: 'Discord',
      icon: 'tabler:brand-discord',
      href: 'https://discord.gg/8DNhVnRXHd',
    },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
};
