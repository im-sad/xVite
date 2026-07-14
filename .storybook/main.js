const { join } = require('path')
const { mergeConfig } = require('vite')

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/stories/**/*.stories.@(js|ts)'],
  addons: [
    join(__dirname, '..', 'node_modules', '@storybook', 'addon-essentials'),
    join(__dirname, '..', 'node_modules', '@storybook', 'blocks'),
  ],
  framework: {
    name: join(__dirname, '..', 'node_modules', '@storybook', 'html-vite'),
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler',
            silenceDeprecations: ['mixed-decls'],
            additionalData: `$url-img: '/public/assets/img/bg';`,
          },
        },
      },
      resolve: {
        alias: {
          '@scss': '/src/scss',
        },
      },
    })
  },
}

module.exports = config
