<h1>Projeto de Testes com Playwright</h1>

<p>Este projeto utiliza Playwright para realizar testes automatizados em uma API local.</p>

<h2>📌 Pré-requisitos</h2>

Antes de começar, certifique-se de ter os seguintes itens instalados:

 - Node.js (versão 16 ou superior)

 - npm ou yarn

 - Playwright

<h2>🚀 Instalação</h2>

1. Clone o repositório:

```git clone https://github.com/Gabriel-Brunetto/Playwright-Serverest.git```

2. Acesse a pasta do projeto:

```cd Playwright-Serverest```

3. Instale as dependências:

```npm install```

4. Instale o Playwright:

```npx playwright install```

<h2>▶ Executando os Testes</h2>

Para rodar os testes, utilize o seguinte comando:

```npx playwright test```

Se quiser visualizar os resultados dos testes em um relatório interativo:

```npx playwright show-report```

<h2>📜 Estrutura do Projeto</h2>

📁 Playwright-Serverest</br>
├── 📁 src</br>
│   ├── 📄 usuarios.js</br>
│   ├── 📄 login.js</br>
│   ├── 📄 produtos.js</br>
├── 📁 tests</br>
│   ├── 📄 usuarios.spec.js</br>
│   ├── 📄 login.spec.js</br>
│   ├── 📄 produtos.spec.js</br>
├── 📄 package.json</br>
├── 📄 playwright.config.js</br>
├── 📄 README.md</br>
   

<h2>📝 Testes Implementados</h2>

GET /usuarios → Verifica se a resposta contém os usuários e a quantidade.

POST /usuarios → Cria um novo usuário e valida a resposta.

PUT /usuarios/{id} → Atualiza um usuário e valida a resposta.

DELETE /usuarios/{id} → Remove um usuário e verifica se a exclusão foi bem-sucedida.

<h2>🛠 Tecnologias Utilizadas</h2>

Playwright - Framework de testes end-to-end

Faker.js - Geração de dados fictícios para os testes

<h2>📌 Possíveis Problemas e Soluções</h2>

<h4>🛑 Erro EPERM: operation not permitted</h4>

Se encontrar erros relacionados a permissões (especialmente em diretórios do OneDrive), tente:

1. Fechar qualquer programa que esteja acessando os arquivos de teste.

2. Pausar a sincronização do OneDrive antes de rodar os testes.

3. Rodar o terminal como Administrador.

<h4>🛑 Servidor não encontrado (ECONNREFUSED)</h4>

Se a API não estiver rodando, certifique-se de iniciar o servidor local antes de rodar os testes:

```npm start```
