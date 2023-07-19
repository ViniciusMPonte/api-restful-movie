# Biblioteca de Filmes - API

Esta é uma **API Restful** que tem como objetivo armazenar e fornecer informações de filmes. Ela foi desenvolvida em **TypeScript** com base na **arquitetura Model-View-Controller (MVC)**, e utiliza o **MongoDB** como banco de dados NoSQL.

## Como Acessar a API

A API pode ser acessada através do seguinte link: [https://movielibrary-viniciusmponte.onrender.com/api/](https://movielibrary-viniciusmponte.onrender.com/api/)

Para obter detalhes sobre as rotas disponíveis e como interagir com a API, consulte a seção "Rotas". Para um teste rápido, [clique aqui](https://movielibrary-viniciusmponte.onrender.com/api/movie) para visualizar `json` com todos os filmes disponíveis.

## Atributos de Cada Filme

| Campo                 | Descrição                                           |
|-----------------------|-----------------------------------------------------|
| Título                | O título do filme.                                 |
| Avaliação             | A avaliação do filme em uma escala de 0 a 10.      |
| Descrição             | Uma breve descrição sobre o enredo do filme.       |
| Diretor               | O nome do diretor responsável pela produção.       |
| Estrelas (Atores)     | Uma lista de atores principais do filme (opcional).|
| Poster                | O link para a imagem do poster do filme.           |
| Data de Criação/Alteração | Informação interna da API sobre criação e alteração do registro. |

## Rotas

A API possui as seguintes rotas para interagir com as informações de filmes:

- **GET** `/movie`: Retorna todos os filmes disponíveis.
- **POST** `/movie`: Cria um novo filme com base nos dados fornecidos.
- **GET** `/movie/:id`: Busca um filme específico pelo seu ID.
- **PATCH** `/movie/:id`: Atualiza um filme existente com base nos dados fornecidos.
- **DELETE** `/movie/:id`: Remove um filme existente pelo seu ID.

## Sistema de Validação

Para garantir que os dados fornecidos estejam corretos e válidos, a API utiliza o sistema da biblioteca "express-validator". Abaixo estão as regras de validação para cada campo:

- **title**:
  - Tipo: String
  - Mínimo de 5 caracteres.

- **rating**:
  - Tipo: Number
  - Intervalo: de 0 a 10.

- **description**:
  - Tipo: String

- **director**:
  - Tipo: String

- **poster**:
  - Tipo: String
  - Deve ser uma URL válida.

- **stars** (opcional):
  - Tipo: Array de strings

## Dependências

A API utiliza as seguintes dependências:

```json
"dependencies": {
  "config": "^3.3.9",
  "dotenv": "^16.0.3",
  "express": "^4.18.2",
  "express-validator": "^7.0.1",
  "mongoose": "^7.2.1",
  "morgan": "^1.10.0",
  "winston": "^3.9.0",
  "winston-daily-rotate-file": "^4.7.1"
},
"devDependencies": {
  "@types/config": "^3.3.0",
  "@types/express": "^4.17.17",
  "@types/mongoose": "^5.11.97",
  "@types/morgan": "^1.9.4",
  "@types/node": "^20.2.5",
  "ts-node-dev": "^2.0.0",
  "typescript": "^5.1.3"
}
```

### Dependências de Produção

Aqui estão algumas informações sobre as dependências utilizadas:

- **express**: Utilizado para criar o servidor web e gerenciar as requisições HTTP.

- **mongoose**: Biblioteca para interagir com o MongoDB, nosso banco de dados NoSQL.

- **express-validator**: Empregado para validar os dados recebidos nas requisições HTTP, garantindo a integridade dos dados.

- **config**: Utilizado para lidar com informações de configuração, como porta, URI do banco de dados, etc.

- **dotenv**: Utilizado para armazenar informações sensíveis em um arquivo `.env`, proporcionando maior segurança e permitindo a fácil configuração de variáveis de ambiente.

- **winston**: Biblioteca utilizada para configurações de loggers. Fornece funcionalidades avançadas de registro de logs.

- **winston-daily-rotate-file**: Utilizado para armazenar logs em arquivos locais, com recursos para rotação de arquivos antigos e evitar a sobrecarga do servidor.

- **morgan**: Biblioteca utilizada para criar logs das requisições HTTP, registrando detalhes como o método da requisição, a URL acessada, o código de status da resposta, o tempo de resposta e etc.

### Dependências de Desenvolvimento

Essas são dependências que são necessárias apenas durante o desenvolvimento da aplicação.

- **typescript**: A linguagem TypeScript em si.

- **@types/config, @types/express, @types/mongoose, @types/morgan, @types/node**: Tipos TypeScript para fornecer informações sobre as bibliotecas utilizadas durante o desenvolvimento.

- **ts-node-dev**: Utilizado para habilitar o suporte ao TypeScript durante o desenvolvimento com auto-reloading.

## Configurações de Logger

A API faz uso da biblioteca "Winston" para configurações de loggers. Os logs possuem diferentes níveis de informações, cada um com cores distintas para facilitar a visualização. Em ambiente de produção, somente logs do nível "Warn" são exibidos para evitar sobrecarga no servidor. Os logs são armazenados em arquivos locais e arquivos antigos são deletados automaticamente para garantir um ambiente limpo.


## Como executar o projeto

### Pré-requisitos

Para operar adequadamente, é necessário possuir o Node.js devidamente instalado em seu computador. Quanto ao banco de dados, há duas opções disponíveis:

A primeira delas é ter a instalação do MongoDB diretamente em sua máquina. A segunda alternativa, por sua vez, é utilizar a URI de um banco de dados MongoDB online.


### Instalação

Para executar o projeto, siga as etapas abaixo:

1. Clone o repositório em sua máquina local;
2. Renomeie o arquivo `.env.example` para `.env`;
3. Abra o arquivo `.env` e adicione suas informações de configuração de banco de dados e outras informações confidenciais;

```.env

NODE_ENV=           //Digite 'production' ou 'development'
PORT=               //Defina o valor da porta (ex: 8080)
MONGO_URI=          //URI do banco de dados MongoDB

```


4. Abra um terminal e navegue até a pasta raiz do projeto.
5. Execute `npm install` para instalar as dependências do projeto;
6. Execute `npm run build` para compilar os arquivos TypeScript em JavaScript;
7. Execute `npm start` para iniciar o servidor.

## Contato

- LinkedIn: https://www.linkedin.com/in/viniciusmponte/
- E-mail: vinicius.mponte@gmail.com
- Portfólio: https://viniciusmponte.github.io/portfolio/
