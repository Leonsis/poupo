import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Views
import Header from './views/Header.jsx';
import App from './views/App.jsx';
import Poupo from './views/Poupo.jsx';
import Login from './views/Login.jsx';
import Footer from './views/Footer.jsx';

// Estilo
import './estilo/var.css';
import './estilo/geral.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Componente de layout para gerenciar Header, Routes e Footer
function Layout() {
  const location = useLocation(); // Hook useLocation dentro de um componente funcional

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/poupo" element={<Poupo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {location.pathname !== '/login' && <Footer />}
    </>
  );
}

// Renderização principal
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>
);