# MonoSkins — All monobank card skins

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)

**MonoSkins** — unofficial monobank card skins catalog.  
The project collects all known card designs in one place: active, limited edition, and archived, complete with descriptions, requirements to obtain them, and the history behind their release.

Created as a reference and research project for the community.

## Add a Skin

### Option 1: via Issue
Create an Issue with a brief description of the skin (history, release date, references) and attach a high-quality image.

### Option 2: via Pull Request
1. Add the image to the `public/skin` directory in `.png` format, following the naming convention of existing files.
2. Add the skin details to the `app/data/skins.json` file, using existing entries as a reference guide.
3. Create a Pull Request targeting the `main` branch.

## Edit a Skin

### Option 1: via Issue
Create an Issue describing **specifically what needs to be updated** (description, image, links, date, etc.) and include a link to the corresponding skin or the Issue/PR where it was added.

### Option 2: via Pull Request
1. Make the necessary changes to the skin image in the `public/skin` directory (replace the file if needed, retaining its current filename).
2. Update the skin details in `app/data/skins.json` without changing its `id` or key.
3. Create a Pull Request targeting the `main` branch.
   
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
