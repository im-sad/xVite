# AGENTS.md

Инструкции для AI-ассистентов по работе с xVite Template.

## Команды

```bash
npm start             # Dev-сервер на http://localhost:9000
npm run build         # Production сборка → build/
npm run preview       # Просмотр production сборки
npm run test          # Все линтеры (editorconfig + pug + scss + ts + type)
npm run lint:scss     # Stylelint для SCSS
npm run lint:ts       # ESLint для TypeScript
npm run lint:pug      # Pug-lint
npm run lint:type     # TypeScript type checking
npm run editorconfig  # EditorConfig проверка
```

## Структура проекта

```
xVite/
├── src/
│   ├── js/                    # TypeScript код
│   │   ├── main.ts           # Точка входа
│   │   ├── modules/          # Инициализаторы (init-modals, init-tabs)
│   │   ├── libs/             # Классы (Accordion, Tabs)
│   │   ├── helpers/          # Хелперы (form-helpers, string-helpers)
│   │   ├── utils/            # Утилиты (scroll-width, ios-checker)
│   │   ├── data/             # Константы (vars, lang)
│   │   └── animations/       # GSAP анимации
│   ├── pug/                  # Pug шаблоны
│   │   ├── pages/            # HTML страницы (index, 404, ui-kit, sitemap)
│   │   ├── components/       # Компоненты
│   │   │   ├── ui/          # UI элементы (btn, input, checkbox, select)
│   │   │   ├── widgets/     # Виджеты (header, footer)
│   │   │   ├── blocks/      # Блоки
│   │   │   ├── sections/    # Секции
│   │   │   ├── utils/       # Утилиты (pic, img, icn, sprite)
│   │   │   └── _auto-import.pug  # Авто-генерируемый файл импортов
│   │   ├── snippets/         # Сниппеты (meta, favicon, vars)
│   │   └── _data/            # Данные (data-menu)
│   ├── scss/                 # Стили
│   │   ├── style.scss        # Главный файл стилей
│   │   ├── system/           # Система (vars, mix, functions, reset, core)
│   │   ├── ui/               # UI компоненты
│   │   ├── elements/         # Элементы (badge)
│   │   ├── blocks/           # Блоки (preloader)
│   │   ├── sections/         # Секции (hero-section, error-section)
│   │   ├── widgets/          # Виджеты (header, footer)
│   │   ├── pages/            # Страницы (~page)
│   │   ├── layout/           # Лейаут (width)
│   │   └── vendors/          # Сторонние библиотеки (hystmodal)
│   ├── icns/                 # SVG иконки для спрайта
│   └── vite-env.d.ts         # Vite типы
├── public/                   # Статические файлы
│   ├── assets/
│   │   ├── img/content/     # Контентные изображения
│   │   └── fonts/           # Шрифты
│   ├── favicon.svg
│   └── site.webmanifest
├── build/                    # Production сборка (генерируется)
├── vite.config.js            # Конфигурация Vite
├── tsconfig.json             # TypeScript конфигурация
├── eslint.config.js          # ESLint конфигурация (flat config)
├── .stylelintrc              # Stylelint конфигурация
├── .pug-lintrc.json          # Pug-lint конфигурация
└── package.json              # Зависимости и скрипты
```

## Конвенции кода

### TypeScript
- **Strict mode**: `strict: true` в tsconfig.json
- **Модули**: ESNext, импорты через alias
- **Стиль**: single quotes, no semicolons, 2 spaces
- **Именование**: camelCase для переменных/функций, PascalCase для классов
- **Типизация**: явные типы для параметров и возвращаемых значений

### SCSS
- **Методология**: BEM-подобные имена классов
- **Импорты**: glob-импорты через `@import 'ui/*.scss'`
- **Переменные**: в `system/_vars.scss`
- **Миксины**: в `system/_mix.scss`
- **Функции**: в `system/_functions.scss`
- **Стиль**: single quotes, 2 spaces, max-nesting-depth: 3

### Pug
- **Отступы**: 2 пробела
- **Атрибуты**: двойные кавычки, пробел между атрибутами
- **Обязательные атрибуты**:
  - `img`: src, alt
  - `button`: type
  - `input`: type
  - `video`: playsinline
- **Компоненты**: автоматически импортируются через `_auto-import.pug`

## Path Aliases

Настроены в `tsconfig.json` и `vite.config.js`:

```typescript
@animations/*  → src/js/animations/*
@utils/*       → src/js/utils/*
@data/*        → src/js/data/*
@libs/*        → src/js/libs/*
@modules/*     → src/js/modules/*
@helpers/*     → src/js/helpers/*
@types/*       → src/js/types/*
@scss/*        → src/scss/*
```

Пример использования:
```typescript
import { setScrollWidth } from '@utils/scroll-width'
import Tabs from '@libs/Tabs'
```

## Автоматизация

### 1. Pug компоненты (Auto-import)
Плагин `pugComponentsAutoInclude()` автоматически генерирует `_auto-import.pug`:
- Сканирует папки: `blocks/`, `elements/`, `forms/`, `modals/`, `sections/`, `ui/`, `utils/`, `widgets/`
- Создаёт include для всех `.pug` файлов
- Обновляется при добавлении/удалении компонентов
- **Важно**: файл в `.gitignore`, генерируется при каждом запуске

### 2. SCSS Glob Imports
Плагин `sassGlobImports` позволяет использовать:
```scss
@import 'ui/*.scss';      // Импортирует все файлы из ui/
@import 'sections/*.scss';
```
Новые файлы подключаются автоматически.

### 3. SVG Sprite
Плагин `svgSpritemap`:
- Исходники: `src/icns/*.svg`
- Результат: `build/assets/img/sprite.svg`
- Использование в Pug: `+sprite('icn-close')`

### 4. WebP генерация
Плагин `viteImagemin`:
- Оптимизирует PNG/JPG/SVG
- Создаёт WebP версии (качество 80%)
- **В dev-режиме**: WebP отключён (`disableWebp` плагин)

### 5. SCSS Hot Reload
Плагин `watchScssFiles()`:
- Отслеживает добавление новых `.scss` файлов
- Автоматически перезагружает страницу

## Зависимости

### Production
- `gsap` — анимации
- `hystmodal` — модальные окна
- `imask` — маски для input
- `js-cookie` — работа с cookies
- `just-validate` — валидация форм
- `swiper` — карусели/слайдеры
- `tippy.js` — тултипы

### Dev
- `vite` — сборщик
- `vituum` — Vite + SSG
- `@vituum/vite-plugin-pug` — Pug поддержка
- `sass` — SCSS компилятор
- `typescript` — TypeScript компилятор
- `eslint` — линтер JS/TS
- `stylelint` — линтер SCSS
- `pug-lint` — линтер Pug

## Особенности конфигурации

### Vite (vite.config.js)
- **Base**: `./` (относительные пути)
- **Port**: 9000
- **Build**: sourcemaps включены
- **Output**: `build/assets/[name].[ext]` (без хешей)
- **SCSS**: modern-compiler API, переменная `$url-img` для фонов

### TypeScript (tsconfig.json)
- **Target**: ES2020
- **Module**: ESNext
- **Strict**: true
- **noEmit**: true (только проверка типов)

### ESLint (eslint.config.js)
- **Flat config** (ESLint 9+)
- **Parser**: @typescript-eslint/parser
- **Rules**: single quotes, no semicolons, 2 spaces
- **Globals**: window, document, Swiper и др.

### Browserslist (package.json)
```json
"browserslist": [
  "defaults",
  "not IE 11"
]
```
Поддержка современных браузеров (Chrome 120+, Firefox 115+, Safari 17+).

## Рабочий процесс

### Добавление нового компонента

1. **Создать Pug компонент**:
   ```bash
   src/pug/components/ui/my-component.pug
   ```
   Автоматически добавится в `_auto-import.pug`

2. **Создать SCSS стили**:
   ```bash
   src/scss/ui/my-component.scss
   ```
   Автоматически подключится через `@import 'ui/*.scss'`

3. **Создать TypeScript модуль** (если нужен):
   ```bash
   src/js/modules/init-my-component.ts
   ```
   Импортировать в `main.ts`

### Добавление SVG иконки

1. Поместить `.svg` файл в `src/icns/`
2. Использовать в Pug:
   ```pug
   +sprite('icon-name')
   ```

### Добавление страницы

1. Создать файл в `src/pug/pages/my-page.pug`
2. Vite автоматически создаст `build/my-page.html`

## Типичные задачи

### Инициализация модальных окон
```typescript
// src/js/modules/init-modals.ts
import HystModal from 'hystmodal'

export const initModals = () => {
  new HystModal({ linkAttributeName: 'data-modal' })
}
```

### Создание табов
```typescript
import Tabs from '@libs/Tabs'

const tabsEl = document.querySelector('[data-tabs]')
if (tabsEl) {
  new Tabs(tabsEl as HTMLElement, {
    activeClass: 'is-active',
    afterChange: (el, index) => {
      console.log('Tab changed:', index)
    }
  })
}
```

### Создание аккордеона
```typescript
import Accordion from '@libs/Accordion'

new Accordion('[data-accordion]', {
  isAlwaysOpen: false, // Можно открыть несколько
  activeClass: 'is-active'
})
```

## Линтеры

### Stylelint
- Конфиг: `stylelint-config-htmlacademy`
- Single quotes обязательны
- Max nesting depth: 3
- `!important` — warning

### ESLint
- Single quotes
- No semicolons
- 2 spaces indent
- `no-console` — warning

### Pug-lint
- 2 spaces indent
- LF line breaks
- Обязательные атрибуты для img, button, input
- Lowercase tags

## Troubleshooting

### Компонент не подключается
Проверьте `src/pug/components/_auto-import.pug` — файл должен быть сгенерирован.

### SCSS не обновляется
Перезапустите dev-сервер — плагин `watchScssFiles()` отслеживает только новые файлы.

### TypeScript ошибки
Запустите `npm run lint:type` для проверки типов.

### WebP не работает в dev
Это нормально — WebP отключён в dev-режиме для ускорения. В production всё работает.

## Git

### Игнорируются
- `build/` — production сборка
- `node_modules/` — зависимости
- `src/pug/components/_auto-import.pug` — генерируется автоматически
- `*.local` — локальные конфиги
- `*.psd`, `*.ai` — исходники дизайна

## Полезные ссылки

- [Vite](https://vitejs.dev/)
- [Vituum](https://vituum.dev/)
- [Pug](https://pugjs.org/)
- [SASS](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [GSAP](https://greensock.com/gsap/)
- [Swiper](https://swiperjs.com/)