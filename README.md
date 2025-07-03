Fake Store E-Commerce App
-------------------------
Overview
---------
A React-based e-commerce app that fetches products from the Fake Store API, displays them in a responsive grid, allows adding items to a cart with duplicate alerts, and shows cart contents in a modal with remove functionality.
Features

Product Display: Fetches products from https://fakestoreapi.com/products and shows image, title, price, and "Add to Cart" button in a responsive grid (1 column mobile, 2–4 columns larger screens).
Cart Logic: Adds products to cart, alerts if already added, updates cart count in navbar.
Navbar: Displays "Fake Store" and cart count with a button to open cart modal.
Cart Modal: Shows cart items (image, title, price) with "Remove" buttons and a "Close" button.
Responsive Design: Used Tailwind CSS for mobile and desktop compatibility.

File Structure

src/App.jsx: Main component with product fetch, cart logic, and rendering.

src/Components/productcard.jsx: Displays individual product cards.

src/Components/navBar.jsx: Shows navbar with cart count.

src/Components/CartModal.jsx: Displays cart items in a modal.

src/main.jsx: Renders the app.

index.html: Includes Tailwind CDN.

Usage

Browse products in the grid.
Click "Add to Cart" to add items (alerts if duplicate).
Click "Cart" in navbar to view modal with cart items.
Remove items or close modal.
Modal opens on "Cart" button click, closes with "Close" button.
