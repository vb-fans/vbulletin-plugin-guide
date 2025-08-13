module.exports = {
  title: 'vBulletin Plugin Guide',
  tagline: 'Create plugins for vBulletin 6',
  url: 'https://your-github-username.github.io',
  baseUrl: '/vbulletin-plugin-guide/',
  themeConfig: {
    navbar: {
      title: 'vBulletin Plugin Guide',
      items: [
        {
          to: 'docs/',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/your-username/vbulletin-plugin-guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
      ],
    },
  },
};
