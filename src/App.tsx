import isPropValid from '@emotion/is-prop-valid';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import AboutUsPage from './pages/AboutUsPage';
import CartPage from './pages/CartPage';
import FlavorsPage from './pages/FlavorsPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import { NestedPage } from './pages/NestedPage';
import { Page } from './pages/Page';
import ProductPage from './pages/ProductPage';

export function App() {
  const location = useLocation();
  const locationArr = location.pathname?.split('/') ?? [];

  return (
    <>
      <StyleSheetManager
        shouldForwardProp={shouldForwardProp}

      >
        <Header />
        <main style={{ position: 'relative' }}>
          <AnimatePresence initial={false} mode="wait">
            <Routes location={location} key={locationArr[1]}>
              <Route
                path="/"
                element={
                  <Page>
                    <HomePage />
                  </Page>
                }
              />
              <Route
                path="/flavors/*"
                element={
                  <Page>
                    <FlavorsPage />
                    {/** Vi behöver använda absolute positionering om vi vill att content ska fadea in samtidigt som den andra fadear ut, div
                     * här är höjden på "outlet"*/}
                    <div style={{ position: 'relative', height: 200 }}>
                      <AnimatePresence initial={false}>
                        <Routes location={location} key={locationArr[2]}>
                          <Route
                            path="/*"
                            element={
                              <NestedPage
                                title="chocolate"
                                nextPath="../vanilla"
                              />
                            }
                          />
                          <Route
                            path="/vanilla"
                            element={
                              <NestedPage
                                title="Vanilla"
                                nextPath="../red-velvet"
                              />
                            }
                          />
                          <Route
                            path="/red-velvet"
                            element={
                              <NestedPage title="Red Velvet" nextPath="../" />
                            }
                          />
                        </Routes>
                      </AnimatePresence>
                    </div>
                  </Page>
                }
              />
              <Route
                path="/gallery/*"
                element={
                  <Page>
                    <GalleryPage />
                  </Page>
                }
              />
              <Route
                path="/about/*"
                element={
                  <Page>
                    <AboutUsPage />
                  </Page>
                }
              />
              <Route
                path="/products/*"
                element={
                  <Page>
                    <ProductPage />
                  </Page>
                }
              />
              <Route
                path="/cart/*"
                element={
                  <Page>
                    <CartPage />
                  </Page>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </StyleSheetManager>
    </>
  );
}

function shouldForwardProp(propName:string, target:unknown) {
  if (typeof target === 'string') {
    return isPropValid(propName);
  }
  return true;
}
