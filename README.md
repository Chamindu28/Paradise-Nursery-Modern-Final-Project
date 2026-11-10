# Paradise Nursery — Shopping Application

**Paradise Nursery** is a modern, responsive React + Redux Toolkit shopping cart application for an online houseplant shop. It was developed for the **Final Project: Paradise Nursery Shopping Application**, and implements all seven required submission tasks.

> **Tagline:** Good things grow here. 🌿

## Features

- Modern editorial landing page with a bundled botanical background illustration, the company name **Paradise Nursery**, and a prominent **Get Started** button.
- Dedicated **About Us** content describing our mission, products, quality standards, and commitment to plant lovers.
- **24 unique houseplants** displayed across **four categories**, with **six different plants in each category**:
  - Air Purifying (6)
  - Easy Care (6)
  - Aromatic & Herbs (6)
  - Flowering Favorites (6)
- Every product includes a **thumbnail, name, description, price, lighting tip, and watering guidance**.
- **Add to cart** through Redux; buttons automatically **disable after adding** and become available if the item is removed from the cart.
- Responsive **Home / Shop plants / Our story / Cart navigation** visible on all screens, with a **live cart quantity badge**.
- Product search, category selection, and price/name sorting.
- Shopping cart with **unit price, quantity stepper, line item total, cart subtotal, and grand total**.
- **Remove** buttons, **Continue shopping** navigation, and a **Checkout** button that displays a **“Checkout is coming soon!”** message.
- Cart persistence with `localStorage` so items are saved across refreshes when browser storage is available.
- Original self-contained SVG plant artwork included under `public/plants/`. **No external image hosting is required.**
- Responsive styles for desktop, tablet, and mobile, keyboard-accessible buttons, accessible labels, and reduced-motion support.

## Tech stack

- React 18 + Vite 5
- Redux Toolkit + React Redux
- HTML5 and CSS3
- SVG plant illustrations (bundled with the project)

## Run locally

You need Node.js 18 or later.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173/`).

To create and preview a production build:

```bash
npm run build
npm run preview
```

### Windows PowerShell note

If PowerShell blocks `npm.ps1`, you can run these commands via Command Prompt or use `npm.cmd install` and `npm.cmd run dev` instead.

## Rubric / files to submit

Upload this **entire project** to a **public GitHub repository**. In your graded submission, paste the **actual public GitHub file URL** for each item below. Do not paste a local file path, ZIP attachment, or the GitHub repository root in place of the file URL.

| Task | Points | GitHub file path | What it contains |
|---|---:|---|---|
| 1 | 2 | `README.md` | Project name, description, setup details |
| 2 | 1 | `src/AboutUs.jsx` | Company and mission details |
| 3 | 1 | `src/App.css` | Landing-page background image code and visual styles |
| 4 | 3 | `src/App.jsx` | Paradise Nursery landing page and Get Started button |
| 5 | 4 | `src/CartSlice.jsx` | Redux `addItem()`, `removeItem()`, `updateQuantity()` reducers |
| 6 | 16 | `src/ProductList.jsx` | At least six unique plants per category, cart actions, category filters |
| 7 | 23 | `src/CartItem.jsx` | Cart totals, +/- quantity, delete, checkout, continue shopping |

**Example file URL shape:**

`https://github.com/YOUR_USERNAME/YOUR_PUBLIC_REPOSITORY/blob/main/src/ProductList.jsx`

Replace `YOUR_USERNAME`, `YOUR_PUBLIC_REPOSITORY`, and, if different, the branch name with your own values. You must upload to GitHub first; this ZIP alone does not create public URLs.

For a ready-to-follow checklist and each of the seven URL patterns, see **[GITHUB_SUBMISSION_GUIDE.md](GITHUB_SUBMISSION_GUIDE.md)**.

## Project layout

```text
paradise-nursery/
├── README.md
├── GITHUB_SUBMISSION_GUIDE.md
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── hero-botanical.svg
│   ├── about-botanical.svg
│   ├── favicon.svg
│   └── plants/                 # 24 original plant thumbnails
└── src/
    ├── App.jsx               # Landing page / navigation
    ├── App.css               # Global layout and landing background
    ├── AboutUs.jsx           # Company details
    ├── AboutUs.css
    ├── ProductList.jsx       # 4 groups × 6 plants
    ├── ProductList.css
    ├── CartSlice.jsx         # Redux reducers
    ├── CartItem.jsx          # Cart item management / totals
    ├── CartItem.css
    ├── plantCatalog.js       # Product data and price formatting
    ├── store.js              # Redux store / localStorage
    ├── index.css
    ├── main.jsx
    └── components/
        ├── Icons.jsx
        ├── Navbar.jsx
        ├── PlantCard.jsx
        └── SiteFooter.jsx
```

## How the cart works

- `addItem(product)` inserts the plant with quantity 1, or adds one to the quantity of an existing product.
- `removeItem(productId)` deletes that plant from the cart.
- `updateQuantity({ id, quantity })` changes the quantity; a quantity of 0 removes the plant.
- The navbar count is computed as the **sum of quantities**, not the number of distinct products.
- A line total is `item.price × item.quantity`.
- The cart total is the sum of the line totals.
- Checkout is intentionally not integrated with a payment provider; it displays a **Coming Soon** notice, as required.

## Deployment note

The app uses URL hashes (`#home`, `#plants`, `#cart`), so links keep working on static hosts. If deploying under a GitHub Pages **repository subpath**, set the base path before building:

```bash
# Linux / macOS
VITE_BASE_PATH=/YOUR_PUBLIC_REPOSITORY/ npm run build

# Windows PowerShell
$env:VITE_BASE_PATH='/YOUR_PUBLIC_REPOSITORY/'; npm run build
```

GitHub file URLs are sufficient for the listed assignment questions; deploying a live site is optional unless your course separately requests it.

## Academic integrity

Review, run, and understand the code before submitting it as your own work. No purchases or real payments are processed.
