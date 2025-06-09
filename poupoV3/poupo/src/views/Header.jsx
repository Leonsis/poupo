import { useState } from 'react'
import { Link, useLocation} from 'react-router-dom';

import '../estilo/Header.css';
import poupoLogo from '../img/logo1Escura.png';

function Herader() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  const button = location.pathname !== '/poupo' ? (<button className="btn">Login</button> ) : ( <button className="btn">Logout</button> )
  return (
    <>
      <header>
        <div className="container">
            <div className="logo row justify-content-between">

              <div className="col-md-3">
                <Link to="/" className="d-flex">
                  <img src={poupoLogo} alt="Logo"/>
                  <h1>Poupo</h1>
                </Link>
              </div>
              
              {/* O CTA não vai aparecer na pagina de login*/}
              {location.pathname !== '/login' && (
              <div className="col-md-3">
                <Link to="/login" className="d-flex btn-login">
                  {button}
                </Link>
              </div>
             )}

              

            </div>
        </div>      
      </header>
    </>
  )
}

export default Herader