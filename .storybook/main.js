import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { mergeConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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

export default config
