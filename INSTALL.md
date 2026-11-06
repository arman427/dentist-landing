# Бриз — лендинг на Next.js 16

## Установка

1. В корне проекта:

   ```bash
   npm i @base-ui/react class-variance-authority cn shadcn tw-animate-css @phosphor-icons/react embla-carousel-react
   ```

2. Замени папку `src` целиком, `components.json` положи в корень (рядом с `package.json`).
3. По желанию удали из `public/` стандартные `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` — они не используются.
4. `npm run dev`

## Структура

| Папка                    | Что внутри                                                                                   |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| `src/app`                | `layout.tsx`, `page.tsx`, `globals.css` (все токены), иконки, OG-картинка, заглушки страниц, 404 |
| `src/components/ui`      | shadcn/ui на Base UI: button, input, sheet, accordion, toggle, toggle-group, carousel           |
| `src/components/shared`  | Title, Accent, RichText, Text, Pill, Section, Container, ButtonLink, Avatar, IconCircle…     |
| `src/components/layout`  | шапка (меню + мобильное меню) и футер (форма, контакты, навигация)                           |
| `src/components/sections`| блоки лендинга: hero, features, about, services, team, reviews                               |
| `src/config`             | `site.ts` — название, телефон, адрес, соцсети; `navigation.ts` — меню и ссылки              |
| `src/data`               | тексты, услуги, врачи, отзывы, цифры                                                         |
| `src/lib`                | `cn`, склонения, маска телефона, Server Action формы                                         |

## Токены → классы Tailwind

Цвета в `:root` (`globals.css`) превращаются в классы через `@theme inline`:
`bg-ocean`, `text-ink-soft`, `bg-mint`, `border-line`, `text-star`…
Шкалы макета: `text-display`, `text-title-lg`, `text-statement`, `text-metric`, `rounded-tile`, `rounded-card`,
`shadow-elevated`, `backdrop-blur-glass`, `font-accent`, `max-w-page`.

```tsx
<Title size="lg">
   Наши <Accent>врачи</Accent>
</Title>

<RichText text="*Подберём* идеальный оттенок" /> // *слово* → курсив Playfair
```

## Клиентский JS

Все секции — серверные компоненты. `"use client"` только у листьев:
`CallbackForm` (маска + статус), `ActiveLink` (подсветка пункта меню) и примитивы shadcn
(Accordion, ToggleGroup, Carousel, Sheet).

## Что доделать

- `src/lib/actions/request-callback.ts` — отправка заявки в CRM / Telegram (сейчас `console.info`).
- `src/config/site.ts` — реальный домен (`url`), телефон, соцсети.
- `/doctors`, `/privacy`, `/licenses`, `/careers` — пока заглушки на `<PageStub />`.
