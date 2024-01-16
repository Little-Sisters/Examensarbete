import isPropValid from '@emotion/is-prop-valid';
import '@google/model-viewer/dist/model-viewer';
import { ReactLenis } from '@studio-freight/react-lenis';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import './theme/ModelViewer.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { darkMode, lightMode } from './theme/Themes';
import { GlobalStyles } from './theme/globalStyles';
import { CartProvider } from './contexts/CartContext';
import { OrderProvider } from './contexts/OrderContext';
import { ProductProvider } from './contexts/ProductContext';
import { useLocalStorageState } from './hooks/useLocalStorage';
import './theme/index.css';
import AboutUsPage from './pages/AboutUsPage';
import BespokeDetailsPage from './pages/BespokeDetailsPage';
import CartPage from './pages/CartPage';
import ConfirmationPage from './pages/ConfirmationPage';
import DetailsPage from './pages/DetailsPage';
import FlavorsPage from './pages/FlavorsPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import { Page } from './pages/Page';
import ProductPage from './pages/ProductPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function App() {
  const location = useLocation();
  const locationArr = location.pathname?.split('/') ?? [];
  const [theme, setTheme] = useLocalStorageState('light', 'theme');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    console.log(theme);
  };

  return (
    <ReactLenis root>
      <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
        <CartProvider>
          <ProductProvider>
            <OrderProvider>
              <>
              <ToastContainer
              position='bottom-center'
              />
                <GlobalStyles />
                <StyleSheetManager shouldForwardProp={shouldForwardProp}>
                  <Header
                    themeToggler={themeToggler}
                    theme={theme}
                    isOn={theme === 'dark'}
                  />
                  <main>
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
                          path="/products/"
                          element={
                            <Page>
                              <ProductPage />
                            </Page>
                          }
                        />
                        <Route
                          path="/product/:id"
                          element={
                            <Page>
                              <DetailsPage />
                            </Page>
                          }
                        />
                        <Route
                          path="/product/2"
                          element={
                            <Page>
                              <BespokeDetailsPage />
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
                        <Route
                          path="/confirmation"
                          element={
                            <Page>
                              <ConfirmationPage />
                            </Page>
                          }
                        />
                      </Routes>
                    </AnimatePresence>
                  </main>
                  <Footer />
                </StyleSheetManager>
              </>
            </OrderProvider>
          </ProductProvider>
        </CartProvider>
      </ThemeProvider>
    </ReactLenis>
  );
}

function shouldForwardProp(propName: string, target: unknown) {
  if (typeof target === 'string') {
    return isPropValid(propName);
  }
  return true;
}
