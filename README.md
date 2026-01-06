# MonoSkins — Усі скіни monobank

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)

**MonoSkins** — неофіційний каталог скінів карток monobank.  
Проєкт збирає в одному місці всі відомі дизайни: активні, лімітовані та архівні, з описами, умовами отримання та історією їх появи.

Створено як довідковий і дослідницький проєкт для спільноти.

## Додати скін

### Варіант 1: через Issue
Створіть Issue, в якому коротко опишіть скін (історія, дата появи, посилання) та додайте якісне зображення.

### Варіант 2: через Pull Request
1. Додайте зображення в директорію `public/skin` у форматі `.png`, використовуючи назву скіна за аналогією з наявними файлами.
2. Додайте інформацію про скін у файл `app/data/skins.json`, орієнтуючись на вже існуючі записи.
3. Створіть Pull Request до гілки `main`.

## Редагувати скін

### Варіант 1: через Issue
Створіть Issue, в якому опишіть **що саме потрібно змінити** (опис, зображення, посилання, дата тощо) та додайте посилання на відповідний скін або Issue/PR, у якому його було додано.

### Варіант 2: через Pull Request
1. Внесіть необхідні зміни до зображення скіна в директорії `public/skin` (за потреби замініть файл, зберігаючи поточну назву).
2. Оновіть інформацію про скін у файлі `app/data/skins.json` без зміни id та ключа.
3. Створіть Pull Request до гілки `main`.

## Quick Start

```bash [Terminal]
npm create nuxt@latest -- -t github:nuxt-ui-templates/starter
```

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
