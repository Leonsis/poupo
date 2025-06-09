import { useState } from "react";
import "../estilo/App.css";
import { Link } from 'react-router-dom';
// imgs
import img1 from '../img/9211510__1_-removebg-preview.png'
import img2 from '../img/imagem2.jpg'
import img3 from '../img/9930924_4269960.jpg'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <section id="descricao">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 d-flex align-items-center">
                <div className="testo">
                  <h1>
                    Bem vindo ao <span>Poupo</span>
                  </h1>
                  <p>
                    Uma plataforma inovadora para ajudar você a gerenciar melhor
                    suas finanças e alcançar seus objetivos de forma mais
                    eficaz.
                  </p>
                  <button className="btn">
                    <Link to="/login">Saiba mais!</Link>
                  </button>
                </div>
              </div>
              <div className="col-6 d-none d-md-block">
                <div className="d-flex justify-content-center">
                  <img src={img1} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="organizadorFinanceiro">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="imagem">
                  <img src={img2} className="img-fluid" style={{ borderRadius: "20px" }} />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="testo" style={{ textAlign: "left" }}>
                  <h3>
                    <span style={{ borderBottom: "1px solid var(--cor-principal)" }} >
                      O que é o <strong>Poupo</strong>?
                    </span>
                  </h3>
                  <p>
                    Uma plataforma inovadora de economia financeira, projetada
                    para ajudar você a gerenciar melhor suas finanças e alcançar
                    seus objetivos de forma mais eficaz. Através de uma
                    interface intuitiva, o sistema oferece ferramentas que
                    simplificam a organização das suas dívidas e metas
                    financeiras, garantindo mais controle sobre o seu dia a dia.
                  </p>

                  <ul style={{ listStyle: "none; padding-left: 0" }}>
                    <li>
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <strong>Planejador de Metas</strong>:
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          onde você pode definir e acompanhar suas metas
                          financeiras ou planejar o pagamento de dívidas de
                          forma estratégica e personalizada.
                        </li>
                      </ul>
                    </li>
                    <br />
                    <li>
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <strong>Organizador de Dívidas</strong>:
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          onde você pode definir e acompanhar suas metas
                          financeiras ou planejar o pagamento de dívidas de
                          forma estratégica e personalizada.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="secao">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>Organize suas Dívidas com o Poupo!</h2>
                <p>
                  No Poupo, você informa suas dívidas e define quanto pode
                  contribuir por mês. Nosso sistema faz os cálculos e cria um
                  planejamento personalizado para ajudar você a quitar tudo da
                  melhor forma possível. Simples, eficiente e feito para você!
                </p>
                <button className="btn">
                  <Link to="/login"> Venha Ver! </Link>
                </button>
                
              </div>

              <div className="col-lg-6 imagem3">
                <div className="imagem" id="imageDiv" style={{ display: "flex", justifyContent: "center" }}>
                  <img src={img3} className="img-fluid" style={{ borderRadius: "20px" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="secao" style={{ paddingBottom: "30px", border: "none" }} >
          <div className="container" style={{ backgroundColor: "var(--cor-terciaria)", borderRadius: "10px", padding: "25px"}}>
            <div className="row">
              <div className="col-12" style={{ textAlign: "center" }}>
                <h2>Comece a Controlar Suas Finanças Agora!</h2>
                <p>
                  No Poupo, organize dívidas e planeje suas metas financeiras
                  com facilidade. Crie sua conta e comece a transformar sua vida
                  financeira hoje!
                </p>
                <button className="btn">
                  <Link to="/login">Venha Ver!</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
