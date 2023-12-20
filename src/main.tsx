import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage.tsx';
import CartPage from './pages/CartPage.tsx';
import DetailsPage from './pages/DetailsPage.tsx';
import FlavorsPage from './pages/FlavorsPage.tsx';
import GalleryPage from './pages/GalleryPage.tsx';
import HomePage from './pages/HomePage.tsx';
import ProductPage from './pages/ProductPage.tsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="flavors" element={<FlavorsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="/product/:title" element={<DetailsPage />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
