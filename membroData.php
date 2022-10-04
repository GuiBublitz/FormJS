<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="shortcut icon" href="./icons/favicon.ico" type="image/x-icon" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seja um membro (Objeto Brasil)</title>
</head>
<body>
    <header>
        <div class="wraper-header">
            <h1>My header content!<h1>
        </div><!-- header-wraper -->
    </header>
    <section>
        <div class="wraper-section">
            <div class="header-section">
                <h1 class="title">SEJA UM COLABORADOR</h1>
                <p class="text">
                    Faça parte deste universo de sucesso! Atue diretamente com representação das 
                    nossas marcas, referências no mercado da moda. Preencha o cadastro e venda 
                    muito na sua região.
                </p>
            </div><!-- header-section -->
            <div class="content-section">
                <h2 class="title">DADOS PESSOAIS</h2>
                <form class="form" method="get">
                    <div class="input-container">
                        <label class="text" for="input-nome">NOME</label>
                        <input class="text" id="input-nome" type="text" required name="nome" />
                    </div>
                    <div class="input-container">
                        <label class="text" for="input-email" >E-MAIL</label>
                        <input class="text" id="input-email" type="email" required name="email" />
                    </div>
                    <div class="input-container">
                        <label class="text" for="input-core">CORE</label>
                        <input class="text" id="input-core" type="text" required name="core" />
                    </div>
                    <div class="input-container">
                        <label class="text" for="input-cpfCnpj">CPF/CNPJ</label>
                        <input class="text" id="input-cpfCnpj" type="text" name="cpfCnpj" maxlength="18" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" required/>
                    </div>
                    <div class="input-container">
                        <label class="text" for="input-telefone">TELEFONE</label>
                        <input class="text" id="input-telefone" type="text" required name="tel" maxlength="18" />
                    </div>
                    <div class="select-container">
                        <label for="estado-user" class="text">ESTADO</label>
                        <select required class="text" id="estado-user" name="estado-user">
                            <option value="" disabled selected hidden>Selecione um estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>
                        </select>
                    </div>
                    <div class="select-container">
                        <label for="cidade-user" class="text">CIDADE</label>
                        <select required class="text" id="cidade-user" name="cidade-user">
                        </select>
                    </div>
                    <h1 class="title">ÁREA DE ATUAÇÃO</h1>
                    <div class="select-container">
                        <label for="estado-atuacao" class="text">ESTADO DE ATUAÇÃO</label>
                        <select required class="text" id="estado-atuacao" name="estado-atuacao">
                            <option value="" disabled selected hidden>Selecione um estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>
                        </select>
                    </div>
                    <div class="select-container">
                        <label for="cidade-atuacao" class="text">CIDADE DE ATUAÇÃO</label>
                        <select required class="text" id="cidade-atuacao" name="cidade-atuacao">
                        </select>
                    </div>
                    <div class="textarea-container">
                        <label for="mensagem">MENSAGEM</label>
                        <textarea maxlength="750" placeholder="Digite a sua mensagem" id="mensagem" name="mensagem" rows="4" cols="50"></textarea>
                    </div>
                    <button>ENVIAR</button>
                </form><!--input-container-->
            </div><!--content-section-->
        </div><!-- section-wraper -->
    </section>
    <footer>
        
    </footer>

    <script type="text/javascript" src="./src/utils/estados-cidades.js" ></script>
    <script src="./src/utils/ValidaDados.js"></script>
    <script src="./src/controller/MembroController.js"></script>
    <script src="./src/app.js"></script>

</body>
</html>