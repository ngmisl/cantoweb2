import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Pages',
      links: [
        {
          text: 'Gallery',
          href: '/gallery',
        },
        {
          text: 'Free Mint',
          href: '/mint',
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ type: 'button', text: 'Visit Gallery', href: '/gallery' }],
};

export const footerData = {
  links: [
  ],
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
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
  ],
};
