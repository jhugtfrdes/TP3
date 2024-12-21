import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/TP3/__docusaurus/debug',
    component: ComponentCreator('/TP3/__docusaurus/debug', '61e'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/config',
    component: ComponentCreator('/TP3/__docusaurus/debug/config', 'edd'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/content',
    component: ComponentCreator('/TP3/__docusaurus/debug/content', 'aef'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/globalData',
    component: ComponentCreator('/TP3/__docusaurus/debug/globalData', '485'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/metadata',
    component: ComponentCreator('/TP3/__docusaurus/debug/metadata', '533'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/registry',
    component: ComponentCreator('/TP3/__docusaurus/debug/registry', 'a33'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/routes',
    component: ComponentCreator('/TP3/__docusaurus/debug/routes', '8f1'),
    exact: true
  },
  {
    path: '/TP3/aa',
    component: ComponentCreator('/TP3/aa', 'f2b'),
    exact: true
  },
  {
    path: '/TP3/Biblioteca',
    component: ComponentCreator('/TP3/Biblioteca', '97e'),
    exact: true
  },
  {
    path: '/TP3/blog',
    component: ComponentCreator('/TP3/blog', 'cb4'),
    exact: true
  },
  {
    path: '/TP3/blog/archive',
    component: ComponentCreator('/TP3/blog/archive', '461'),
    exact: true
  },
  {
    path: '/TP3/blog/first-blog-post',
    component: ComponentCreator('/TP3/blog/first-blog-post', 'c84'),
    exact: true
  },
  {
    path: '/TP3/blog/long-blog-post',
    component: ComponentCreator('/TP3/blog/long-blog-post', 'efb'),
    exact: true
  },
  {
    path: '/TP3/blog/mdx-blog-post',
    component: ComponentCreator('/TP3/blog/mdx-blog-post', '07f'),
    exact: true
  },
  {
    path: '/TP3/blog/tags',
    component: ComponentCreator('/TP3/blog/tags', '17f'),
    exact: true
  },
  {
    path: '/TP3/blog/tags/docusaurus',
    component: ComponentCreator('/TP3/blog/tags/docusaurus', '5c3'),
    exact: true
  },
  {
    path: '/TP3/blog/tags/facebook',
    component: ComponentCreator('/TP3/blog/tags/facebook', '878'),
    exact: true
  },
  {
    path: '/TP3/blog/tags/hello',
    component: ComponentCreator('/TP3/blog/tags/hello', '7f1'),
    exact: true
  },
  {
    path: '/TP3/blog/tags/hola',
    component: ComponentCreator('/TP3/blog/tags/hola', '863'),
    exact: true
  },
  {
    path: '/TP3/blog/welcome',
    component: ComponentCreator('/TP3/blog/welcome', 'f47'),
    exact: true
  },
  {
    path: '/TP3/markdown-page',
    component: ComponentCreator('/TP3/markdown-page', 'f6a'),
    exact: true
  },
  {
    path: '/TP3/docs',
    component: ComponentCreator('/TP3/docs', '95d'),
    routes: [
      {
        path: '/TP3/docs/category/tutorial---basics',
        component: ComponentCreator('/TP3/docs/category/tutorial---basics', 'baa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3/docs/intro',
        component: ComponentCreator('/TP3/docs/intro', '9ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/TP3/docs/tutorial-basics/congratulations', '66f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/TP3/docs/tutorial-basics/create-a-blog-post', '5c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/TP3/docs/tutorial-basics/create-a-document', '84b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/TP3/docs/tutorial-basics/create-a-page', 'f14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/TP3/docs/tutorial-basics/deploy-your-site', 'ead'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/TP3/docs/tutorial-basics/markdown-features', '801'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/TP3/',
    component: ComponentCreator('/TP3/', '552'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
