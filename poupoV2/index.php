<!DOCTYPE html>
<html lang="en">
    <head>            
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- Estilos -->        
        <link rel="stylesheet" href="public/css/header.css">
        <link rel="stylesheet" href="public/css/footer.css">
        <link rel="stylesheet" href="public/css/home.css">
        <link rel="stylesheet" href="public/css/var.css">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="public/css/bootstrap.min.css">

        <style>
            a {
                text-decoration: none;
            }
        </style>

        <link rel="icon" href="public/imag/logo1Escura.png" type="image/png">
        <title>Poupo</title>
    </head>
    <body>
        <header>
            <div class="top-nav">
                <div class="logo">
                    <a href="index.php" class="d-flex">
                        <img src="public/imag/logo1Escura.png" alt="Logo">
                        <h1>Poupo</h1>
                    </a>
                </div>
            </div>
        </header>

        <main>
            <style>
                section button.btn:hover {
                    background-color: var(--cor-principal) !important;
                }
            </style>

            <section id="descricao">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 d-flex align-items-center">
                            <div class="testo">
                                <h1>Bem vindo ao <span>Poupo</span></h1>
                                <p>Uma plataforma inovadora para ajudar você a gerenciar melhor suas finanças e alcançar seus objetivos de forma mais eficaz. </p>
                                <button class='btn'>
                                    <a href="">
                                        Saiba mais!
                                    </a>
                                </button>   
                            </div>
                        </div>
                        <div class="col-6 d-none d-md-block">
                            <div class="imagem">
                                <img src="public/imag/9211510__1_-removebg-preview.png" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="organizadorFinanceiro" style="border-top: 1px solid var(--cor-principal);">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <div class="imagem">
                                <img src="public/imag/imagem2.jpg" class="img-fluid" style="border-radius: 20px;">
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="testo" style="text-align: left;">
                                    <h3>
                                        <span style="border-bottom: 1px solid var(--cor-principal);">
                                            O que é o <strong>Poupo</strong>?
                                        </span>
                                    </h3> 
                                    <p>
                                        Uma plataforma inovadora de economia financeira, 
                                        projetada para ajudar você a gerenciar melhor suas finanças 
                                        e alcançar seus objetivos de forma mais eficaz. Através de 
                                        uma interface intuitiva, o sistema oferece ferramentas que 
                                        simplificam a organização das suas dívidas e metas financeiras, 
                                        garantindo mais controle sobre o seu dia a dia.
                                    </p>
                                
                                <ul style="list-style: none; padding-left: 0;">
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;<strong>Planejador de Metas</strong>:
                                        <ul style="list-style: none;">
                                            <li>
                                                onde você pode definir e acompanhar suas metas financeiras 
                                                ou planejar o pagamento de dívidas de forma estratégica e 
                                                personalizada.
                                            </li>
                                        </ul>
                                    </li>
                                    </br>
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;<strong>Organizador de Dívidas</strong>:
                                        <ul style="list-style: none;">
                                            <li>
                                                onde você pode definir e acompanhar suas metas financeiras 
                                                ou planejar o pagamento de dívidas de forma estratégica e 
                                                personalizada.
                                            </li>
                                        </ul>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="secao">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2>Organize suas Dívidas com o Poupo!</h2>
                            <p>
                                No Poupo, você informa suas dívidas e define quanto pode contribuir por mês. Nosso sistema faz os cálculos e cria um planejamento personalizado para ajudar você a quitar tudo da melhor forma possível. Simples, eficiente e feito para você!
                            </p>
                            <button class='btn'>
                                <a href="">
                                    Venha Ver!
                                </a>
                            </button>                
                        </div>
                        <style>
                            @media(min-width: 991.98px){
                                .imagem3 .imagem img {
                                    width: 70%;
                                }   
                            }
                        </style>
                        <div class="col-lg-6 imagem3">
                            <div class="imagem" id="imageDiv">
                                <img src="public/imag/9930924_4269960.jpg" class="img-fluid" style="border-radius: 20px;">
                            </div>
                        <div>
                    </div>
                </div>
            </section>

            <section class="secao" style="padding-bottom: 30px;  background-color: var(--cor-terciaria);">
                <div class="container">
                    <div class="row">
                        <div class="col-12" style="text-align: center;">
                            <h2>Comece a Controlar Suas Finanças Agora!</h2>
                            <p>
                                No Poupo, organize dívidas e planeje suas metas financeiras com facilidade. Crie sua conta e comece a transformar sua vida financeira hoje!
                            </p>
                            <button class='btn'>
                                <a href="">
                                    Venha Ver!
                                </a>
                            </button>
                        </div>    
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <div class="container d-flex align-items-baseline">
                <img src="public/imag/logo1Escura.png">
                <h1>Contas</h1>
            </div>
        </footer>

        <!-- Scripts -->
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <script src="public/js/bootstrap.bundle.min.js"></script>
        
    </body>
</html>
