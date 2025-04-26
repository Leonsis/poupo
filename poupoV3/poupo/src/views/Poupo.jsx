import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

import "../estilo/poupo.css";


function Poupo() {

    return (
        <>
            <main>
                <section id="sectionOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" style={{height: "150px"}}>
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

                <section id="sectionTwo" style={{marginBottom: "40px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="testo">
                                    <form id="formOne" className="row justify-content-center">
                                        <div className="col-md-4">
                                            <div class="form-group" id="formOne">
                                                <label for="exampleInputEmail1">Quantas metas você possui?</label>
                                                <input type="number" class="form-control" id="exampleInputEmail1" placeholder="Coloque a quantidade. Ex: 4"/>
                                            </div>
                                            <div class="form-group bloco">
                                                <label for="exampleInputEmail1" id="labelTwo">Qual valor você vai investir por mês para essas metas?</label>
                                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Valor por mês. Ex: R$200.00"/>
                                            </div>
                                        </div>                                    
                                        <div className="col-md-4">
                                            <div class="form-group" id="formTwo">
                                                <label for="exampleInputEmail1">Você deseja incluir uma reserva de emergência?</label>
                                                <p style={{fontSize: "13px"}}>
                                                    OBS: A reserva é considerada uma meta.
                                                </p>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label class="form-check-label" for="inlineRadio1">Sim</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label class="form-check-label" for="inlineRadio2">Não</label>
                                                </div>
                                                <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "var(--cor-principal)"}} className="iconAlert"/>
                                                <div className="alerta d-none" style={{padding: "10px", background: "var(--cor-principal)", border: "1px solid var(--cor-secudaria)", borderRadius: "10px", fontWeight: "bold", position: "absolute"}}>
                                                    <p>
                                                        É orbigatorio informar se deseja incluir reserva ou não.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="form-group row" style={{ marginTop: "20px"}}>
                                                <div class="col-md-6 mb-3">
                                                    <label for="validationCustom04">Nome da meta</label>
                                                    <input type="text" class="form-control" id="validationCustom04" placeholder="Moto" required />
                                                    <div class="invalid-feedback">
                                                        Please provide a valid state.
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="validationCustom05">Valor da meta</label>
                                                    <input type="text" class="form-control" id="validationCustom05" placeholder="R$22.000.00" required />
                                                    <div class="invalid-feedback">
                                                        Please provide a valid zip.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button class="btn" type="submit" onClick={Checker}>Registrar meta!</button>
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

    function Checker() {
        const inputsNumber = document.querySelectorAll('input[type="number"]');
        const inputsText = document.querySelectorAll('input[type="text"]');
        const inputsRadio = document.querySelectorAll('input[type="radio"]');
        if(inputsNumber[0].value == '' || inputsNumber[0].value < 0) {
            inputsNumber[0].style.border = '1px solid red';
            inputsNumber[0].placeholder = 'Informe a quantidade correta.';
        } else {
            inputsNumber[0].style.border = '';
            if(inputsText[0].value == '') {
                inputsText[0].style.border = '1px solid red';
                inputsText[0].placeholder = 'Informe o nome.';
            }
        }
    }
}

export default Poupo;
