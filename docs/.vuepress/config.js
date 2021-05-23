const { name, description, repository } = require('./../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: name,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: '/TUSL/',
  lang: 'it-IT',
  
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: `/images/icon.png` }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: repository,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [],
    smoothScrolling: true,
    sidebar: [
      {
        title: 'Introduzione',   
        path: '/intro/'
      },
      {
        title: "Documenti",
        path: "/document/"
      },
      {
        title: "Entità",
        children: [
          '/entity/owner', '/entity/employ'
        ]
      },
      { 
        title: "Informatica",
        children: [
          '/it-sector/', '/it-sector/covid', '/it-sector/smartworking'
        ]
      },
    ],
    repo: repository,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
