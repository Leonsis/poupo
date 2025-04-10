<!DOCTYPE html>
<html lang="en">
    <!--<< Header Area >>-->
    <head>
        <!-- ========== Meta Tags ========== -->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="modinatheme">
        <meta name="description" content="Eduspace - Online Course, Education & University Html Template">
        <!-- ======== Page title ============ -->
        <title>Poupo</title>
        <!--<< Favicon >>-->

        <link rel="icon" href="public/imag/logo1Escura.png" type="image/png">
        <!--<< Bootstrap min.css >>-->
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <!--<< Font Awesome.css >>-->
        <link rel="stylesheet" href="assets/css/font-awesome.css">
        <link rel="stylesheet" href="assets/css/main.css">
        <!--<< Style.css >>-->
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <!-- Breadcrumb-wrapper Start -->
        <section class="breadcrumb-wrapper">
            <div class="shape-1">
                <img src="assets/img/breadcrumb/shape-1.png" alt="img">
            </div>
            <div class="shape-2">
                <img src="assets/img/breadcrumb/shape-2.png" alt="img">
            </div>
            <div class="shape-3">
                <img src="assets/img/breadcrumb/shape-3.png" alt="img">
            </div>
            <div class="dot-shape">
                <img src="assets/img/breadcrumb/dot-shape.png" alt="img">
            </div>
            <div class="container">
                <div class="row">
                    <div class="page-heading">
                        <h1>Poupo</h1>
                        <div class="breadcrumb-image">
                            <img src="assets/img/img1.jpg" alt="img">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <style>
            .text {
                margin-bottom: 10px;  
            }

            .text p {
                color: black;
            }
        </style>
        <!-- Contact-section Start -->
        <section class="contact-section-2 section-padding pt-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <div class="contact-form-items">
                            <div class="title text-center">
                                <h2 class=" ">Organizador finaceiro</h2>
                            </div>
                            <div id="b1">
                                <div class="text">
                                    <p>
                                        Primeiro informe esses dados para nos podemos lhe ajudar e organizar a sua vida financeira.
                                    </p>
                                    <p class="alert"></p>
                                </div>
                                <form action="https://modinatheme.com/html/eduspace-html/contact.php" id="contact-form" method="POST">
                                    <div class="row g-4">
                                        <div class="col-lg-6 ">
                                            <div class="form-clt">
                                                <input type="text" name="name" id="name" placeholder="Informe seu nome">
                                            </div>
                                        </div>
                                        <div class="col-lg-6  " >
                                            <div class="form-clt">
                                                <input type="text" name="number" id="number" placeholder="Numero de telefone">
                                            </div>
                                        </div>
                                        <div class="col-lg-12  " >
                                            <div class="form-clt">
                                                <input type="text" name="email" id="email" placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="col-lg-12  " >
                                            <div class="form-clt">
                                                <textarea name="message" id="message" placeholder="Porque precisa da ajuda do poupo?"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12  " >
                                            <a class="theme-btn" data-target="b1,b2,name,number,email" id="button1">
                                                proximo
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div id="b2" class="d-none">
                                <div class="text">
                                    <p>
                                        Agora precisamos dsaber da sua receita. A entrada de dinheiro. 
                                        O salario fixo e obrigatorio preencher, caso o contrerio não conseguimos proseguir.
                                    </p>
                                    <p class="alert"></p>
                                </div>
                                <form action="https://modinatheme.com/html/eduspace-html/contact.php" id="contact-form" method="POST">
                                    <div class="row g-4">
                                        <div class="col-lg-6  " >
                                            <div class="form-clt">
                                                <input type="text" name="salario" id="salario" placeholder="Informe o seu salario">
                                            </div>
                                        </div>
                                        <div class="col-lg-6  " >
                                            <div class="form-clt">
                                                <input type="text" name="renda_extra" id="renda_extra" placeholder="Sua renda extra">
                                            </div>
                                        </div>
                                        <div class="col-lg-12  " >
                                            <a class="theme-btn" data-target="b1,b2" id="buttonV">
                                                Voltar
                                            </a>
                                            <a class="theme-btn" data-target="b2,b3,salario" id="button2">
                                                Proximo
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div id="b3" class="d-none">
                                <div class="text">
                                    <p>
                                        Agora informe quatas quantas dexpesas você possui e o valor delas.  
                                    </p>
                                </div>
                                <form action="https://modinatheme.com/html/eduspace-html/contact.php" id="contact-form" method="POST">
                                    <div class="row g-4">
                                        <div class="col-lg-6">
                                            <div class="form-clt">
                                                <input type="radio" id="html" name="fav_language" value="HTML" style="width: auto;">
                                                <label for="html">1 a 10 despesas</label><br>
                                                <input type="radio" id="css" name="fav_language" value="CSS" style="width: auto;">
                                                <label for="css">20 despesas</label><br>
                                                <input type="radio" id="javascript" name="fav_language" value="JavaScript" style="width: auto;">
                                                <label for="javascript">30 despesas</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-clt row">
                                                <input type="text" name="renda_extra" id="renda_extra" placeholder="Nome da despesa" class="col-md-6" style="margin-bottom: 20px;">
                                                <input type="text" name="renda_extra" id="renda_extra" placeholder="Valor da despesa" class="col-md-6">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <a class="theme-btn" data-target="b3,b2" id="buttonV2">
                                                Voltar
                                            </a>
                                            <a class="theme-btn">
                                                finalizar
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script>
            // Script para o step by step do formulario

                //Script para  verificação de campos do bloco 1
                    const button1 = document.getElementById('button1');
                    button1.addEventListener('click', () => {
                        const taget_id = button1.getAttribute('data-target').split(',');
                        const imputName = document.getElementById(taget_id[2]);
                        const imputNumber = document.getElementById(taget_id[3]);
                        const imputEmail = document.getElementById(taget_id[4]);
                        const pAlerts = document.querySelectorAll('.alert');
                        if(imputName.value.trim() != '' && imputNumber.value.trim() != '' && imputEmail.value.trim() != '') {
                            document.getElementById(taget_id[0]).classList.add('d-none');
                            document.getElementById(taget_id[1]).classList.toggle('d-none');
                            pAlerts[0].innerHTML = '';
                        } else {
                            pAlerts[0].innerHTML = '<spam style="color: red;">É preciso preencher os campos obrigatorios*</spam>';
                            imputName.placeholder = 'Informe seu nome*';
                            imputNumber.placeholder = 'Numero de telefone*';
                            imputEmail.placeholder = 'Email*';
                        }
                    });

                //Script para  verificação de campos do bloco 2
                    const buttonV = document.getElementById('buttonV');
                    buttonV.addEventListener('click', () => {
                        const taget_id = buttonV.getAttribute('data-target').split(',');
                        document.getElementById(taget_id[1]).classList.toggle('d-none');
                        document.getElementById(taget_id[0]).classList.toggle('d-none');
                    });

                //Script para  verificação de campos do bloco 3
                    const button2 = document.getElementById('button2');
                    button2.addEventListener('click', () => {
                        const taget_id = button2.getAttribute('data-target').split(',');
                        const salario = document.getElementById(taget_id[2]);
                        const pAlerts = document.querySelectorAll('.alert');
                        if(salario.value.trim() != '') {
                            document.getElementById(taget_id[0]).classList.toggle('d-none');
                            document.getElementById(taget_id[1]).classList.toggle('d-none');
                            pAlerts[1].innerHTML = '';
                        } else {
                            pAlerts[1].innerHTML = '<spam style="color: red;">É preciso preencher os campos obrigatorios*</spam>';
                            salario.placeholder = 'Salario*';
                        }
                    });

                const buttonV2 = document.getElementById('buttonV2');
                buttonV2.addEventListener('click', () => {
                    const taget_id = buttonV2.getAttribute('data-target').split(',');
                    document.getElementById(taget_id[1]).classList.toggle('d-none');
                    document.getElementById(taget_id[0]).classList.toggle('d-none');
                });
            
        </script>
        <script src="assets/js/bootstrap.bundle.min.js"></script>
    </body>
</html>