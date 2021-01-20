/** @typedef {import('vitepress').UserConfig} UserConfig */

/** @type {UserConfig['head']} */
const head = []

/** @type {UserConfig} */
const config = {
  lang: 'en-US',
  title: 'Vue I18n',
  description: 'Vue I18n is internationalization plugin for Vue.js',
  head,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue I18n',
      description: 'Vue I18n is internationalization plugin for Vue.js'
    },
    '/pt/': {
      lang: 'pt-BR',
      title: 'Vue I18n',
      description: 'Vue I18n é um internacionalizador de idiomas para Vue.js'
    }
  },
  // serviceWorker: true,
  themeConfig: {
    repo: 'intlify/vue-i18n-next',
    docsRepo: 'intlify/vue-i18n-next',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,

    algolia: {
      apiKey: '3a9e93ba1069de0ece2ae100daf8f6ea',
      indexName: 'vue-i18n',
      algoliaOptions: { facetFilters: ['type:$TYPE'] },
    },

    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'API Reference',
            link: '/api/general'
          },
          {
            text: 'Ecosystem',
            link: '/ecosystem/official'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/intlify/vue-i18n-next/blob/master/CHANGELOG.md'
          }
        ],
        sidebar: {
          '/ecosystem/': [
            {
              text: 'Official Tooling',
              link: '/ecosystem/official'
            },
            {
              text: '3rd Party Tooling',
              link: '/ecosystem/third'
            },
          ],
          '/api/': [
            {
              text: 'General',
              link: '/api/general'
            },
            {
              text: 'Legacy API',
              link: '/api/legacy'
            },
            {
              text: 'Composition API',
              link: '/api/composition'
            },
            {
              text: 'Components',
              link: '/api/component'
            },
            {
              text: 'Directives',
              link: '/api/directive'
            },
            {
              text: 'Component Injections',
              link: '/api/injection'
            }
          ],
          '/': [
            {
              text: 'Introduction',
              link: '/introduction'
            },
            {
              text: 'Installation',
              link: '/installation',
            },
            {
              text: 'Essentials',
              collapsable: false,
              children: [
                {
                  text: 'Getting Started',
                  link: '/guide/',
                },
                {
                  text: 'Message Format Syntax',
                  link: '/guide/essentials/syntax',
                },
                {
                  text: 'Pluralization',
                  link: '/guide/essentials/pluralization'
                },
                {
                  text: 'Datetime Formatting',
                  link: '/guide/essentials/datetime'
                },
                {
                  text: 'Number Formatting',
                  link: '/guide/essentials/number'
                },
                {
                  text: 'Scope and Locale Changing',
                  link: '/guide/essentials/scope'
                },
                {
                  text: 'Fallbacking',
                  link: '/guide/essentials/fallback'
                },
                {
                  text: 'Local Scope Based Localization',
                  link: '/guide/essentials/local'
                }
              ]
            },
            {
              text: 'Advanced',
              collapsable: false,
              children: [
                {
                  text: 'Custom Directive',
                  link: '/guide/advanced/directive'
                },
                {
                  text: 'Component Interpolation',
                  link: '/guide/advanced/component'
                },
                {
                  text: 'Single File Components',
                  link: '/guide/advanced/sfc'
                },
                {
                  text: 'Lazy Loading',
                  link: '/guide/advanced/lazy'
                },
                {
                  text: 'Message Functions',
                  link: '/guide/advanced/function'
                },
                {
                  text: 'Composition API',
                  link: '/guide/advanced/composition',
                },
                {
                  text: 'Optimization',
                  link: '/guide/advanced/optimization',
                }
              ]
            },
            {
              text: 'Migration from Vue 2',
              collapsable: false,
              children: [
                {
                  text: 'Breaking Changes',
                  link: '/guide/migration/breaking'
                },
                {
                  text: 'New Features',
                  link: '/guide/migration/features'
                },
                {
                  text: 'Compostion API for Vue 2',
                  link: '/guide/migration/composition'
                }
              ]
            },
            {
              text: 'Documentation for v8.x',
              link: '/v8-docs',
            },
          ]
        }
      },
      '/pt/': {
        label: 'Português',
        selectText: 'Idiomas',
        editLinkText: 'Editar esta página no GitHub',
        lastUpdated: 'Última atualização',
        nav: [
          {
            text: 'Guia',
            link: '/pt/guide/'
          },
          {
            text: 'API Referência',
            link: '/pt/api/general'
          },
          {
            text: 'Ecossistema',
            link: '/pt/ecosystem/official'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/intlify/vue-i18n-next/blob/master/CHANGELOG.md'
          }
        ],
        sidebar: {
          '/ecosystem/': [
            {
              text: 'Ferramentas Oficiais',
              link: '/pt/ecosystem/official'
            },
            {
              text: 'Ferramentas de terceiros',
              link: '/pt/ecosystem/third'
            },
          ],
          '/api/': [
            {
              text: 'Geral',
              link: '/pt/api/general'
            },
            {
              text: 'API legada',
              link: '/pt/api/legacy'
            },
            {
              text: 'API de composição',
              link: '/pt/api/composition'
            },
            {
              text: 'Componente',
              link: '/pt/api/component'
            },
            {
              text: 'Diretiva',
              link: '/pt/api/directive'
            },
            {
              text: 'Injeções em componente',
              link: '/pt/api/injection'
            }
          ],
          '/': [
            {
              text: 'Introdução',
              link: '/pt/introduction'
            },
            {
              text: 'Instalação',
              link: '/pt/installation',
            },
            {
              text: 'Essenciais',
              collapsable: false,
              children: [
                {
                  text: 'Iniciando',
                  link: '/pt/guide/',
                },
                {
                  text: 'Sintaxe formato de mensagem',
                  link: '/pt/guide/essentials/syntax',
                },
                {
                  text: 'Pluralização',
                  link: '/pt/guide/essentials/pluralization'
                },
                {
                  text: 'Formatação de data e hora',
                  link: '/pt/guide/essentials/datetime'
                },
                {
                  text: 'Formatação de Número',
                  link: '/pt/guide/essentials/number'
                },
                {
                  text: 'Mudança de escopo e localização',
                  link: '/pt/guide/essentials/scope'
                },
                {
                  text: 'Fallbacking',
                  link: '/pt/guide/essentials/fallback'
                },
                {
                  text: 'Localização baseada em escopo local',
                  link: '/pt/guide/essentials/local'
                }
              ]
            },
            {
              text: 'Avançado',
              collapsable: false,
              children: [
                {
                  text: 'Diretiva personalizada',
                  link: '/pt/guide/advanced/directive'
                },
                {
                  text: 'Interpolação de componente',
                  link: '/pt/guide/advanced/component'
                },
                {
                  text: 'Componentes de arquivo único',
                  link: '/pt/guide/advanced/sfc'
                },
                {
                  text: 'Lazy Loading',
                  link: '/pt/guide/advanced/lazy'
                },
                {
                  text: 'Funções de mensagem',
                  link: '/pt/guide/advanced/function'
                },
                {
                  text: 'API de composição',
                  link: '/pt/guide/advanced/composition',
                },
                {
                  text: 'Otimização',
                  link: '/pt/guide/advanced/optimization',
                }
              ]
            },
            {
              text: 'Migração do Vue 2',
              collapsable: false,
              children: [
                {
                  text: 'Breaking Changes',
                  link: '/pt/guide/migration/breaking'
                },
                {
                  text: 'Novas Features',
                  link: '/pt/guide/migration/features'
                },
                {
                  text: 'API de composição para Vue 2',
                  link: '/pt/guide/migration/composition'
                }
              ]
            },
            {
              text: 'Documentação para v8.x',
              link: '/pt/v8-docs',
            },
          ]
        }
      }
    }
  }
}

module.exports = config
