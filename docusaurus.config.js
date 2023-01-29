// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Awesome AI Engineering',
  tagline: 'Build the best AI products with the best practices',
  url: 'https://mlsysops.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mlsysops', // Usually your GitHub org/user name.
  projectName: 'mlsysops.github.io', // Usually your repo name.
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
                    {
                        title: 'Visitor From:',
                        items: [
                                                        {
                                html: `
<a href="https://info.flagcounter.com/5njl"><img src="https://s11.flagcounter.com/count2/5njl/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0"></a>`,

                            },
                        ],
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} MLSysOps, Inc. Built with Docusaurus.`,


            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            //
            //   algolia: {
            //   // The application ID provided by Algolia
            //   appId: 'YOUR_APP_ID',
            //
            //   // Public API key: it is safe to commit it
            //   apiKey: 'YOUR_SEARCH_API_KEY',
            //
            //   indexName: 'YOUR_INDEX_NAME',
            //
            //   // Optional: see doc section below
            //   contextualSearch: true,
            //
            //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            //   externalUrlRegex: 'external\\.com|domain\\.com',
            //
            //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
            //   replaceSearchResultPathname: {
            //     from: '/docs/', // or as RegExp: /\/docs\//
            //     to: '/',
            //   },
            //
            //   // Optional: Algolia search parameters
            //   searchParameters: {},
            //
            //   // Optional: path for search page that enabled by default (`false` to disable it)
            //   searchPagePath: 'search',
            //
            //   //... other Algolia params
            // },
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
