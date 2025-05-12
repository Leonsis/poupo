import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import "../estilo/poupo.css";

// Declaração de variaveis globais
let nomesMetas = []; // function registro()
let valoresMetas = []; // function registro()

function Poupo() {

    return (
        <>
            <main>
                <section id="sectionOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 " style={{height: "150px"}}>
                                <div className="testo d-flex align-items-center">
                                    <div>
                                        <h2>Vamos fazer o <span>seu planejamento!</span></h2>
                                        <p>
                                            Com nosso sistema de planejamento de metas 
                                            podemos traças a melhor forma de você atingir <span>seu Objetivos!</span>
                                        </p>
                                    </div>
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
                                                <input type="number" class="form-control" id="exampleInputEmail1" placeholder="Coloque a quantidade. Ex: 4" required/>
                                            </div>
                                            <div class="form-group bloco">
                                                <label for="exampleInputEmail1" id="labelTwo">Qual valor você vai investir por mês para essas metas?</label>
                                                <input type="number" class="form-control" id="exampleInputEmail1" placeholder="Valor por mês. Ex: R$200.00" required />
                                            </div>
                                        </div>                                    
                                        <div className="col-md-4">
                                            <div class="form-group" id="formTwo">
                                                <label for="exampleInputEmail1">Você deseja incluir uma reserva de emergência?</label>
                                                <p style={{fontSize: "13px"}}>
                                                    OBS: A reserva é considerada como a primeira meta.
                                                </p>
                                                <p className="aviso" style={{color: "red",  fontSize: "13px"}}></p>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true" />
                                                    <label class="form-check-label" for="inlineRadio1">Sim</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="false" />
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
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="validationCustom05">Valor da meta</label>
                                                    <input type="text" class="form-control" id="validationCustom05" placeholder="R$22.000.00" required />                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center" id="btnRegistro">
                                            <a class="btn" type="submit" style= {{ border: "2px solid" }} onClick={Checker}>Registrar meta!</a>
                                        </div>                                    
                                    </form>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="three" style={{ marginBottom: "20px" }}>
                    <div className="container">
                        <div className="row" id="blocoRegistro">
                            
                            {/* Aqui fica a parte visual dos registros */}

                            <div className="d-flex justify-content-center d-none" id="btnPlanejar">
                                <a class="btn" type="submit" style= {{ border: "2px solid" }} onClick={Checker}>Planejar!</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );

    
    // Function para verificar se os campos foram preenchidos.
    function Checker() {
        const inputsNumber = document.querySelectorAll('input[type="number"]');
        const inputsText = document.querySelectorAll('input[type="text"]');
        const selected = document.querySelector('input[name="inlineRadioOptions"]:checked');
        const aviso = document.querySelector('.aviso');
        let isValid = true;

        // Verifica os campos numéricos
        inputsNumber.forEach((input) => {
            if (input.value === '' || input.value < 0) {
                input.style.border = '1px solid red';
                isValid = false;
            } else {
                input.style.border = '';
            }
        });

        // Verifica se alguma opção de radio está selecionada
        if (!selected) {
            aviso.innerHTML = 'Campo Obrigatório!';
            isValid = false;
        } else {
            aviso.innerHTML = '';
        }

        // Verifica os campos de texto
        inputsText.forEach((input) => {
            if (input.value === '') {
                input.style.border = '1px solid red';
                isValid = false;
            } else {
                input.style.border = '';
            }
        });

        inputsNumber[0].disabled = true;
        inputsNumber[1].disabled = true;

        const qMetas = parseInt(inputsNumber[0].value);
        const valorMensal = parseFloat(inputsNumber[1].value);
        const reserva = selected.value;
        let nomeMeta = inputsText[0].value;
        let valorMeta = inputsText[1].value;

        // Verifica se o número de metas corresponde ao valor de qMetas
        if (isValid) {
            registro(qMetas, valorMensal, reserva, nomeMeta, valorMeta);
        } else {
            alert('Preencha os campos corretamente!');
        }
    }

    // Function que registra os dados para serem manipulados e cria o registro visual.
    function registro(qMetas, valorMensal, reserva, nomeMeta, valorMeta) {
        // Asicionando os nomes e os valores das metas nos arrays.
        nomesMetas.push(nomeMeta);
        valoresMetas.push(valorMeta);

        // Criando a parte visual dos registros
        const divOne = document.createElement('div');
        divOne.classList.add('col-12');
        const divTwo = document.createElement('div');
        divTwo.classList.add('row');
        const divThree = document.createElement('div');
        
        divThree.classList.add('col-4');
        divThree.innerHTML = `Meta: ${nomesMetas[0]}`;

        divFuor.classList.add('col-4');
        divFuor.innerHTML = `Valor: ${valoresMetas[0]}`;
        
        divOne.appendChild(divTwo);

        const blocoRegistro = document.getElementById('blocoRegistro');
        

        console.log(
            `Quantidade de metas: ${qMetas},
            Valor mensal: ${valorMensal},
            reserva: ${reserva},
            nome das metas: ${nomesMetas},
            Valor das metas: ${valoresMetas}.
        `);

        if(nomesMetas.length == qMetas && valoresMetas.length == qMetas) {
            document.getElementById('btnRegistro').classList.add('d-none');
            document.getElementById('btnPlanejar').classList.remove('d-none');         
        }
    }
}

export default Poupo;
