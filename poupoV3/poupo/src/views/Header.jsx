import { useState } from 'react'
import '../estilo/Header.css'
import poupoLogo from '../img/logo1Escura.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
            <div className="top-nav">
                <div className="logo">
                    <a href="index.php" className="d-flex">
                        <img src={poupoLogo} alt="Logo"/>
                        <h1>Poupo</h1>
                    </a>
                </div>
            </div>
        </header>
    </>
  )
}

export default App