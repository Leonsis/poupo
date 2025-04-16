import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Views
import Header from './views/Header.jsx'
import App from './views/App.jsx'
import Footer from './views/Footer.jsx'
// Estilo
import './estilo/var.css'
import './estilo/geral.css'
import './estilo/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>
)