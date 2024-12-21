import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/TP3/__docusaurus/debug',
    component: ComponentCreator('/TP3/__docusaurus/debug', '04a'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/config',
    component: ComponentCreator('/TP3/__docusaurus/debug/config', '8ab'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/content',
    component: ComponentCreator('/TP3/__docusaurus/debug/content', 'cb9'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/globalData',
    component: ComponentCreator('/TP3/__docusaurus/debug/globalData', 'c8e'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/metadata',
    component: ComponentCreator('/TP3/__docusaurus/debug/metadata', '4a2'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/registry',
    component: ComponentCreator('/TP3/__docusaurus/debug/registry', '640'),
    exact: true
  },
  {
    path: '/TP3/__docusaurus/debug/routes',
    component: ComponentCreator('/TP3/__docusaurus/debug/routes', '899'),
    exact: true
  },
  {
    path: '/TP3/aa',
    component: ComponentCreator('/TP3/aa', 'a05'),
    exact: true
  },
  {
    path: '/TP3/Biblioteca',
    component: ComponentCreator('/TP3/Biblioteca', 'fbb'),
    exact: true
  },
  {
    path: '/TP3/blog',
    component: ComponentCreator('/TP3/blog', '1c7'),
    exact: true
  },
  {
    path: '/TP3/blog/archive',
    component: ComponentCreator('/TP3/blog/archive', '8cb'),
    exact: true
  },
  {
    path: '/TP3/blog/first-blog-post',
    component: ComponentCreator('/TP3/blog/first-blog-post', 'e99'),
    exact: true
  },
  {
    path: '/TP3/blog/long-blog-post',
    component: ComponentCreator('/TP3/blog/long-blog-post', 'cb1'),
    exact: true
  },
  {
    path: '/TP3/blog/mdx-blog-post',
    component: ComponentCreator('/TP3/blog/mdx-blog-post', '26c'),
    exact: true
  },
  {
    path: '/TP3/blog/tags',
    component: ComponentCreator('/TP3/blog/tags', 'b3e'),
    exact: true
  },
  {
    path: '/TP3/blog/tags/docusaurus',
    component: ComponentCreator('/TP3/blog/tags/docusaurus', 'ec6'),
    exact: true
  },
  {
    path: '/TP3/blog/tags/facebook',
    component: ComponentCreator('/TP3/blog/tags/facebook', '0c7'),
    exact: true
  },
  {
    path: '/TP3/blog/tags/hello',
    component: ComponentCreator('/TP3/blog/tags/hello', '602'),
    exact: true
  },
  {
    path: '/TP3/blog/tags/hola',
    component: ComponentCreator('/TP3/blog/tags/hola', 'fef'),
    exact: true
  },
  {
    path: '/TP3/blog/welcome',
    component: ComponentCreator('/TP3/blog/welcome', '162'),
    exact: true
  },
  {
    path: '/TP3/markdown-page',
    component: ComponentCreator('/TP3/markdown-page', '9fa'),
    exact: true
  },
  {
    path: '/TP3/docs',
    component: ComponentCreator('/TP3/docs', '09e'),
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
    component: ComponentCreator('/TP3/', '6fa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
