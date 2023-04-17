import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '7b7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd13'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c96'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b07'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ff1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '4c6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '87a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '82e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '024'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '2e5'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '185'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '1bd'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'a92'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '268'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '5e2'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '267'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '2d9'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '275'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b38'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '82d'),
    routes: [
      {
        path: '/docs/bab-delapan/manage-docs-versions',
        component: ComponentCreator('/docs/bab-delapan/manage-docs-versions', 'a80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-delapan/translate-your-site',
        component: ComponentCreator('/docs/bab-delapan/translate-your-site', '1d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-dua',
        component: ComponentCreator('/docs/bab-dua', '87d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-empat/manage-docs-versions',
        component: ComponentCreator('/docs/bab-empat/manage-docs-versions', '676'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-empat/translate-your-site',
        component: ComponentCreator('/docs/bab-empat/translate-your-site', '312'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-enam/manage-docs-versions',
        component: ComponentCreator('/docs/bab-enam/manage-docs-versions', '4d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-enam/translate-your-site',
        component: ComponentCreator('/docs/bab-enam/translate-your-site', '06a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-lima/manage-docs-versions',
        component: ComponentCreator('/docs/bab-lima/manage-docs-versions', '8ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-lima/translate-your-site',
        component: ComponentCreator('/docs/bab-lima/translate-your-site', '4f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-satu',
        component: ComponentCreator('/docs/bab-satu', 'a75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-sembilan/manage-docs-versions',
        component: ComponentCreator('/docs/bab-sembilan/manage-docs-versions', '8be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-sembilan/translate-your-site',
        component: ComponentCreator('/docs/bab-sembilan/translate-your-site', 'e72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-sepuluh/manage-docs-versions',
        component: ComponentCreator('/docs/bab-sepuluh/manage-docs-versions', '901'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-sepuluh/translate-your-site',
        component: ComponentCreator('/docs/bab-sepuluh/translate-your-site', 'bc7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-tiga',
        component: ComponentCreator('/docs/bab-tiga', '3e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-tujuh/manage-docs-versions',
        component: ComponentCreator('/docs/bab-tujuh/manage-docs-versions', 'e48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bab-tujuh/translate-your-site',
        component: ComponentCreator('/docs/bab-tujuh/translate-your-site', '6c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/bab-10---penutup',
        component: ComponentCreator('/docs/category/bab-10---penutup', '06b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/bab-4---ketentuan-umum',
        component: ComponentCreator('/docs/category/bab-4---ketentuan-umum', 'e2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/bab-5---kegiatan-belajar-mengajar',
        component: ComponentCreator('/docs/category/bab-5---kegiatan-belajar-mengajar', '23e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/bab-6---sarana-dan-prasarana',
        component: ComponentCreator('/docs/category/bab-6---sarana-dan-prasarana', '0b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/bab-7--hubungan-dengan-guru-pegawai-dan-pelatih-sekolah',
        component: ComponentCreator('/docs/category/bab-7--hubungan-dengan-guru-pegawai-dan-pelatih-sekolah', '086'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/bab-8---hak-dan-kewajiban-murid',
        component: ComponentCreator('/docs/category/bab-8---hak-dan-kewajiban-murid', '1f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/bab-9---mekanisme-sanksi-pelanggaran-tartib',
        component: ComponentCreator('/docs/category/bab-9---mekanisme-sanksi-pelanggaran-tartib', '19c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Format Penanganan',
        component: ComponentCreator('/docs/Format Penanganan', '807'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '660'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
