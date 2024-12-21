import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/TP3/__docusaurus/debug',
    component: ComponentCreator('/TP3/__docusaurus/debug', 'c03'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/config',
    component: ComponentCreator('/TP3/__docusaurus/debug/config', '544'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/content',
    component: ComponentCreator('/TP3/__docusaurus/debug/content', '7f9'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/globalData',
    component: ComponentCreator('/TP3/__docusaurus/debug/globalData', 'a17'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/metadata',
    component: ComponentCreator('/TP3/__docusaurus/debug/metadata', '7d6'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/registry',
    component: ComponentCreator('/TP3/__docusaurus/debug/registry', 'cef'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/routes',
    component: ComponentCreator('/TP3/__docusaurus/debug/routes', '654'),
    exact: true
  },
  {
    path: '/TP3/aa',
    component: ComponentCreator('/TP3/aa', 'aa0'),
    exact: true
  },
  {
    path: '/TP3/Biblioteca',
    component: ComponentCreator('/TP3/Biblioteca', '882'),
    exact: true
  },
  {
    path: '/TP3/blog',
    component: ComponentCreator('/TP3/blog', '573'),
    exact: true
  },
  {
    path: '/TP3/blog/archive',
    component: ComponentCreator('/TP3/blog/archive', '42d'),
    exact: true
  },
  {
    path: '/TP3/blog/first-blog-post',
    component: ComponentCreator('/TP3/blog/first-blog-post', 'db2'),
    exact: true
  },
  {
    path: '/TP3/blog/long-blog-post',
    component: ComponentCreator('/TP3/blog/long-blog-post', 'd83'),
    exact: true
  },
  {
    path: '/TP3/blog/mdx-blog-post',
    component: ComponentCreator('/TP3/blog/mdx-blog-post', '28b'),
    exact: true
  },
  {
    path: '/TP3/blog/tags',
    component: ComponentCreator('/TP3/blog/tags', 'fa7'),
    exact: true
  },
  {
    path: '/TP3/blog/tags/docusaurus',
    component: ComponentCreator('/TP3/blog/tags/docusaurus', 'f0c'),
    exact: true
  },
  {
    path: '/TP3/blog/tags/facebook',
    component: ComponentCreator('/TP3/blog/tags/facebook', 'e37'),
    exact: true
  },
  {
    path: '/TP3/blog/tags/hello',
    component: ComponentCreator('/TP3/blog/tags/hello', 'c56'),
    exact: true
  },
  {
    path: '/TP3/blog/tags/hola',
    component: ComponentCreator('/TP3/blog/tags/hola', '546'),
    exact: true
  },
  {
    path: '/TP3/blog/welcome',
    component: ComponentCreator('/TP3/blog/welcome', '2b6'),
    exact: true
  },
  {
    path: '/TP3/markdown-page',
    component: ComponentCreator('/TP3/markdown-page', '241'),
    exact: true
  },
  {
    path: '/TP3/docs',
    component: ComponentCreator('/TP3/docs', 'e3b'),
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
    component: ComponentCreator('/TP3/', 'ce8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
