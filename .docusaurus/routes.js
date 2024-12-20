import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-ghpages/__docusaurus/debug',
    component: ComponentCreator('/docusaurus-ghpages/__docusaurus/debug', '0d6'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/__docusaurus/debug/config',
    component: ComponentCreator('/docusaurus-ghpages/__docusaurus/debug/config', '9b9'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/__docusaurus/debug/content',
    component: ComponentCreator('/docusaurus-ghpages/__docusaurus/debug/content', '9f2'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/__docusaurus/debug/globalData',
    component: ComponentCreator('/docusaurus-ghpages/__docusaurus/debug/globalData', 'acc'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/__docusaurus/debug/metadata',
    component: ComponentCreator('/docusaurus-ghpages/__docusaurus/debug/metadata', 'b22'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/__docusaurus/debug/registry',
    component: ComponentCreator('/docusaurus-ghpages/__docusaurus/debug/registry', '10f'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/__docusaurus/debug/routes',
    component: ComponentCreator('/docusaurus-ghpages/__docusaurus/debug/routes', 'ba9'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/blog',
    component: ComponentCreator('/docusaurus-ghpages/blog', '63e'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/blog/archive',
    component: ComponentCreator('/docusaurus-ghpages/blog/archive', '8dc'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-ghpages/blog/first-blog-post', '798'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-ghpages/blog/long-blog-post', 'bf3'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-ghpages/blog/mdx-blog-post', '800'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/blog/tags',
    component: ComponentCreator('/docusaurus-ghpages/blog/tags', '152'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-ghpages/blog/tags/docusaurus', 'f87'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-ghpages/blog/tags/facebook', '785'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/blog/tags/hello',
    component: ComponentCreator('/docusaurus-ghpages/blog/tags/hello', '9ef'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/blog/tags/hola',
    component: ComponentCreator('/docusaurus-ghpages/blog/tags/hola', 'ea6'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/blog/welcome',
    component: ComponentCreator('/docusaurus-ghpages/blog/welcome', 'c4d'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/markdown-page',
    component: ComponentCreator('/docusaurus-ghpages/markdown-page', '093'),
    exact: true
  },
  {
    path: '/docusaurus-ghpages/docs',
    component: ComponentCreator('/docusaurus-ghpages/docs', '619'),
    routes: [
      {
        path: '/docusaurus-ghpages/docs/category/tutorial---basics',
        component: ComponentCreator('/docusaurus-ghpages/docs/category/tutorial---basics', 'f12'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-ghpages/docs/category/tutorial---extras',
        component: ComponentCreator('/docusaurus-ghpages/docs/category/tutorial---extras', '3b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-ghpages/docs/intro',
        component: ComponentCreator('/docusaurus-ghpages/docs/intro', 'dad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-ghpages/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docusaurus-ghpages/docs/tutorial-basics/congratulations', '088'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-ghpages/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docusaurus-ghpages/docs/tutorial-basics/create-a-blog-post', '54e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-ghpages/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docusaurus-ghpages/docs/tutorial-basics/create-a-document', '1e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-ghpages/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docusaurus-ghpages/docs/tutorial-basics/create-a-page', 'dda'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-ghpages/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docusaurus-ghpages/docs/tutorial-basics/deploy-your-site', '43e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-ghpages/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docusaurus-ghpages/docs/tutorial-basics/markdown-features', '303'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-ghpages/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docusaurus-ghpages/docs/tutorial-extras/manage-docs-versions', 'f1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-ghpages/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docusaurus-ghpages/docs/tutorial-extras/translate-your-site', '025'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docusaurus-ghpages/',
    component: ComponentCreator('/docusaurus-ghpages/', 'b9f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
