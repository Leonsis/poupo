import { useState } from "react";
import "../estilo/poupo.css";


function Poupo() {
  const [count, setCount] = useState(0);

  return (
    <>
        <main>
            <section id="sectionOne">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="testo">
                                <h2>Vamos fazer o <span>seu planejamento!</span></h2>
                                <p>
                                    Com nosso sistema de planejamento de metas 
                                    podemos traças a melhor forma de você atingir <span>seu Objetivos!</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sectionTwo">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="testo">
                                <form id="formOne" className="row justify-content-center">
                                    <div className="col-md-4 ">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Quantas metas você possui?</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                        <div class="form-group bloco">
                                            <label for="exampleInputEmail1">Qual valor você vai investir por mês para essas metas?</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 ">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Quantas metas você possui?</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                        <div class="form-group bloco">
                                            <label for="exampleInputEmail1">Qual valor você vai investir por mês para essas metas?</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                    </div>
                                </form>                                
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
