import { useState } from "react";
import "../estilo/App.css";
// imgs


function Poupo() {
  const [count, setCount] = useState(0);

  return (
    <>
        <main>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 d-flex align-items-center">
                            <div className="testo">
                                <img src="src/img/logo2.png" alt=""/>
                                <h2>Bem vindo ao <span>Poupo</span></h2>
                                <p>Uma plataforma inovadora para ajudar você a gerenciar melhor suas finanças e alcançar seus objetivos de forma mais eficaz. </p>
                            </div>
                        </div>
                        <div className="col-6 d-none d-md-block">
                            <div className="imagem">
                                <img src="src/img/9211510__1_-removebg-preview.png" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  );
}

export default Poupo;
