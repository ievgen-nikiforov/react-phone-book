# Phone Catalog

A responsive electronics storefront built with React and TypeScript. Browse
phones, tablets, and accessories, compare product specifications, save favourites,
and manage a shopping cart.

[Source repository](https://github.com/ievgen-nikiforov/react-phone-book)

Product data and images are included in the repository. The application runs
entirely in the browser and does not require a backend or API credentials.

## Live Preview

[GitHub Pages](https://ievgen-nikiforov.github.io/react-phone-book/)

The site becomes available after the first successful deployment.

## Technologies Used

- **React 18** and **TypeScript** for the application and typed product models.
- **React Router 6** with hash-based routing for page navigation.
- **React Context** and **localStorage** for persistent cart and favourites state.
- **SCSS Modules** and shared Sass styles for responsive layouts.
- **Vite** for development and production bundling.
- **ESLint**, **Stylelint**, and **Prettier** for code quality and formatting.

## Getting Started

### Prerequisites

- Node.js **20**, matching the project's configured version.
- npm and Git.

### Installation

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/ievgen-nikiforov/react-phone-book.git
   cd react-phone-book
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the local URL printed in the terminal.

### Production Build

```bash
npm run build
```

### GitHub Pages Deployment

1. With Git installed and authenticated to GitHub, run:

   ```bash
   npm run deploy
   ```

   This builds the application and publishes `dist` to the `gh-pages` branch.

2. In the repository, open **Settings → Pages**. Select **Deploy from a branch**,
   choose **gh-pages** and **/(root)**, and click **Save**.
3. Wait for GitHub Pages to publish, then open the live preview link above.

Run `npm run deploy` again whenever you want to publish updates. No custom
GitHub Actions workflow file is required.

### Code Quality

```bash
npm run lint
```

This command formats TypeScript and SCSS files and runs the JavaScript and style
linters. It can modify source files.

## Features

- Responsive layouts for mobile, tablet, and desktop screens.
- Home page with a rotating banner, category links, and product sliders.
- Separate catalogs for phones, tablets, and accessories.
- Sorting by newest products, name, or price, with pagination and selectable page
  sizes. Catalog settings are stored in URL query parameters.
- Product detail pages with image galleries, colour and capacity selection,
  descriptions, technical specifications, and suggested products.
- Favourites and cart contents preserved across page reloads using localStorage.
- Cart quantity controls, item removal, and calculated totals.
- Breadcrumb navigation, loading indicators, and a page for unknown routes.

Checkout is a demonstration: it asks whether to clear the cart and does not
process payments or place orders.
