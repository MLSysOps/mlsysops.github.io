// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Awesome AI Engineering',
  tagline: 'Build the best AI products with the best practices',
  url: 'https://breezeml.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'breezeml', // Usually your GitHub org/user name.
  projectName: 'breezeml.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Awesome AI Engineering',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs/course', label: 'Course', position: 'left'},
          {to: '/docs/blog', label: 'Blog', position: 'left'},
          {to: '/docs/talk', label: 'Talk', position: 'left'},
          {to: '/docs/group', label: 'Group', position: 'left'},
          {to: '/docs/paper/intro', label: 'Paper', position: 'left'},
          {to: '/docs/tutorial/MLOps_101', label: 'Tutorial', position: 'left'},
          // {
          //   type: 'doc',
          //   docId: 'paper/intro',
          //   position: 'left',
          //   label: 'Paper',
          // },
          // {
          //   type: 'doc',
          //   docId: 'tutorial/MLOps_101',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {to: '/docs/paper', label: 'Paper', position: 'left'},
          {
            href: 'https://breezeml.ai',
            label: 'BreezeML',
            position: 'right',
          },
          {
            href: 'https://github.com/HuaizhengZhang/Awesome-System-for-Machine-Learning',
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
                label: 'Quick Start',
                to: '/docs/quick_start',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'BreezeML',
                href: 'https://breezeml.ai',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/HuaizhengZhang/Awesome-System-for-Machine-Learning',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BreezeML, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

// module.exports = {
//   // ...
//   title: 'Awesome AI Engineering',
//   url: 'https://breezeml.github.io', // 你的网站 URL
//   baseUrl: '/',
//   projectName: 'breezeml.github.io',
//   organizationName: 'breezeml',
//   trailingSlash: false,
//   deploymentBranch: 'gh-pages',
//   // ...
// };