// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Txmanual',
  tagline: 'Let\'s do better',
  favicon: 'img/favicon.ico',
  url: 'https://www.dumborc.com', // 你的 GitHub Pages 网址
  baseUrl: '/sms/', // 你的项目名称
  trailingSlash: true,
//  organizationName: 'howard520', // 你的 GitHub 用户名
//  projectName: 'tx-zone', // 你的仓库名称
//  deploymentBranch: 'gh-pages',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/howard520/tx-zone/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '首页',
        logo: {
         alt: 'My Site Logo',
         src: '/static/img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            href: '/docs/%E9%81%A5%E6%8E%A7%E5%99%A8/DRC16/%E4%B8%80%EF%BC%9A%E9%81%A5%E6%8E%A7%E5%99%A8%E7%AE%80%E4%BB%8B/1.1%E9%81%A5%E6%8E%A7%E5%99%A8%E4%BD%BF%E7%94%A8%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '遥控器',
          },
          {
            href: '/docs/%E6%8E%A5%E6%94%B6%E6%9C%BA/P6FG%E6%8E%A5%E6%94%B6%E6%9C%BA',
            position: 'left',
            label: '接收机',
          },
//       {to: '/blog', label: 'Blog', position: 'left'},
//          {
//            href: 'https://github.com/howard520/tx-zone',
//            label: 'GitHub',
//            position: 'right',
//          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '说明书',
            items: [
              {
                label: '遥控器说明书',
                to: '/docs/%E9%81%A5%E6%8E%A7%E5%99%A8/DRC16/%E4%B8%80%EF%BC%9A%E9%81%A5%E6%8E%A7%E5%99%A8%E7%AE%80%E4%BB%8B/1.1%E9%81%A5%E6%8E%A7%E5%99%A8%E4%BD%BF%E7%94%A8%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9#',
              },
              {
               label: '接收机说明书',
               to: '/docs/%E6%8E%A5%E6%94%B6%E6%9C%BA/P6FG%E6%8E%A5%E6%94%B6%E6%9C%BA',
             },
            ],
          },
          {
            title: '媒体',
            items: [
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/484079862',
              },
              {
                label: '抖音',
                href: 'https://www.douyin.com/user/MS4wLjABAAAAnD1BSivH_1MNFjHeb30z4jZsJwoOOIXf57lNXewEpQ0?from_tab_name=main',
              },
//             {
//                label: 'X',
//                href: 'https://x.com/docusaurus',
//              },
            ],
          },
          {
            title: '电商平台',
            items: [
              {
                label: '淘宝网站',
                href: 'https://fangleiyu.taobao.com',
              },
              {
                label: '1688网站',
                href: 'https://dumborc.1688.com',
              },
            ],
          },
 //{
 //           title: 'More',
//            items: [
//              {
//                label: 'Blog',
//                to: '/blog',
//              },
//              {
//                label: 'GitHub',
//                href: 'https://github.com/howard520/tx-zone',
//              },
//            ],
//          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 深圳市小飞象模型有限公司. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;