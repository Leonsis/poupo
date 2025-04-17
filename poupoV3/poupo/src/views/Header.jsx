import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../estilo/Header.css'
import poupoLogo from '../img/logo1Escura.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
            <div className="top-nav">
                <div className="logo">
                    <Link to="/" className="d-flex">
                        <img src={poupoLogo} alt="Logo"/>
                        <h1>Poupo</h1>
                    </Link>
                </div>
            </div>
        </header>
    </>
  )
}

export default App