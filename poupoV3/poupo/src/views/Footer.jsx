import { useState } from 'react'
import '../estilo/Footer.css'
import poupoLogo from '../img/logo1Escura.png'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
      <footer>
        <div className="container">
          
          <div className='row d-flex align-items-baseline'>
            <div className='col-md-3'>
              <div className='d-flex align-items-baseline'>
                <img src={poupoLogo}/>
                <h2 style={{ fontWeight: "bold", fontSize: "2.5rem"}}>Contas</h2>
              </div>
            </div>

            <div className='col-md-4'>
              <div>
                <h2>Site map</h2>
                <ul>                  
                  <li>
                    Home
                  </li>
                  <li>Login</li>
                  <li>Planejamento</li>
                </ul>
              </div>
            </div>
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