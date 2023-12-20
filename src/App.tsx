import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
