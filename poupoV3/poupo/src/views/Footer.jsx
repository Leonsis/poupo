import { useState } from 'react'
import '../estilo/Footer.css'
import poupoLogo from '../img/logo1Escura.png'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
      <footer>
        <div className="container">
          <div className='d-flex align-items-baseline'>
            <img src={poupoLogo}/>
            <h1>Contas</h1>
          </div>
          <div>
            <p>© 2024 - 2025 Feito por Caio Leonni os direitos reservados.</p>
          </div>          
        </div>
      </footer>
    </>
  )
}

export default Footer