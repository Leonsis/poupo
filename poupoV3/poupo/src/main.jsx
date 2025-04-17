import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Views
import Header from './views/Header.jsx'
import App from './views/App.jsx'
import Poupo from './views/Poupo.jsx'
import Footer from './views/Footer.jsx'
// Estilo
import './estilo/var.css'
import './estilo/geral.css' 
import './estilo/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/poupo" element={<Poupo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)