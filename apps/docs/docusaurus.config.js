/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StyleX',
  tagline: '没有思考负担，而且还超快的原子化 CSS',
  url: 'https://stylexjs.com',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  // GitHub pages deployment config.
  organizationName: 'facebook',
  projectName: 'stylex',
  plugins: ['@orama/plugin-docusaurus'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/stylex/tree/main/apps/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/stylex/tree/main/apps/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
      },
      navbar: {
        title: '',
        logo: {
          alt: 'StyleX Project Logo',
          src: 'img/stylex-logo-small.svg',
          srcDark: 'img/stylex-logo-small-dark.svg',
        },
        items: [
          {
            label: '学习',
            to: '/docs/learn',
            position: 'left',
          },
          {
            label: 'API',
            to: '/docs/api',
            position: 'left',
          },
          {
            label: '实践',
            to: '/playground',
            position: 'left',
          },
          {
            label: '博客',
            to: '/blog',
            position: 'right',
          },
          {
            'aria-label': 'GitHub',
            className: 'navbar-github-link',
            href: 'https://github.com/facebook/stylex',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: '开发',
            items: [
              {
                label: '学习',
                to: '/docs/learn',
              },
              {
                label: 'API',
                to: '/docs/api',
              },
            ],
          },
          {
            title: '探索',
            items: [
              {
                label: '实践',
                to: '/playground',
              },
              {
                label: '博客',
                href: '/blog',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/stylex/',
              },
              {
                label: '鸣谢',
                href: '/docs/learn/acknowledgements',
              },
            ],
          },
          {
            title: '其它',
            items: [
              // Please do not remove the privacy and terms, it's a legal requirement.
              {
                label: '隐私',
                href: 'https://opensource.fb.com/legal/privacy/',
              },
              {
                label: '协议',
                href: 'https://opensource.fb.com/legal/terms/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Meta Open Source Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/meta_opensource_logo.svg',
          srcDark: '/img/meta_opensource_logo_negative.svg',
          href: 'https://opensource.fb.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Meta Platforms, Inc. Built with Docusaurus. Chinese by MaxLee`,
      },
      metadata: [
        {name: 'og:title', content: 'StyleX'},
        {
          name: 'og:description',
          content: 'The styling system that powers Meta.',
        },
        {
          name: 'og:image',
          content: '/img/stylex-cover-photo.png',
        },
      ],
    },
};

module.exports = config;
