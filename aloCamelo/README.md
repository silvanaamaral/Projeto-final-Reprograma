## Alô Camelô

 A API "Alô Camelô" tem o objetivo de ajudar localizar vendedores de rua por clientes em determinada area.

 Status: concluído ✔️

### Sumário

* Apresentação
* Contextualização
* Fonte dos dados
* Funcionalidades
* Tecnologias Utilizadas
* Instruções para instalação e contribuições no projeto
* Features e rotas
* Referências

### Apresentação

O "Alô Camelô" é o projeto de conclusão do bootcamp de Back-end da {reprograma}. Essa é uma API que tem por objetivo ajudar aos vendedores de rua.  
A ideia é que ela possa ser aproveitada por um programa de 

### Contextualização

No final de 2019, a Pesquisa Nacional por Amostra de Domicílio Contínua (PNAD Contínua), divulgada pelo Instituto Brasileiro de Geografia e Estatística (IBGE), mostrou que o Brasil atingiu nível recorde de trabalhadores informais: são 38,7 milhões de pessoas trabalhando por conta própria.

![ambulante](https://www.generonumero.media/wp-content/uploads/2021/04/210426_especial-trabalho-informal_perfil-760_px_.png)

FONTE PNAD/IBGE

### Funcionalidades

 :ballot_box_with_check:Login de pessoa administradora da API (cadastro, atualização e remoção de administradores)
 :ballot_box_with_check:Cadastro de Usuários 
 :ballot_box_with_check:Lista de todos os locais do usuário
 :ballot_box_with_check:Atualização de cadastro dos usuários
 :ballot_box_with_check:Remoção de usuário

### Tecnologias Utilizadas

#### Para construção da API

* Node.js, versão 12.18.3;
* Gerenciador de pacotes node npm, versão 6.14.6;
* As dependências node:
     * Express versão 4.17.1;
     * Mongoose versão 5.10.17;
     * Dotenv-safe 8.2.0;
     * Bcrypt 5.0.0;
* Banco de dados NoSQL MongoDB;
* Editor de códigos VSCode.

#### Para uso da API

* Postman: para teste das funcionalidades (rotas) da API;

* Heroku.com: deploy da aplicação na web;

* MongoDB Atlas: hospedagem do banco de dados na nuvem.


### Instruções para instalação e contribuições no projeto

* Faça um ```fork``` do projeto através do link(https://github.com/silvanaamaral/Projeto-final-Reprograma/tree/master/aloCamelo);

* Copie o código do fork realizado e, no prompt de comando da sua máquina, realize o clone do projeto através do git clone ```<link_do_fork_do_repositorio>```;

* Crie uma branch para realizar suas contribuições ```git checkout -b feature/<sua_branch>```;

* Instale as dependências necessárias à execução da API através do comando ```npm install```;

* No raiz do projeto, renomeie ```.env.example``` para ```.env``` e adicione os valores das variáveis ```PORT``` (porta sugerida ```8080```), ```MONGODB_URL``` (string de conexão com o banco de dados) e ```SECRET``` (chave RSA). Elas são necessárias para a execução da API em sua máquina

* Para executar a API, utilize o comando ```npm``` start no seu terminal;

* Após suas contribuições no projeto, realize o commit com o comando ```git commit -m 'sua mensagem'```;

* Para subir o projeto no seu GitHub, basta executar o comando ```git push origin feature/<sua_branch>```;

* E finalize criando um novo **Pull Request** com as contribuições para o projeto original.


### Features e rotas

| **Feature**                                | **Método** | **Rotas**|
|--------------------------------------------|------------|----------|
|Cadastro de usuários                        | POST       |          |
|Lista de todos os locais do usuários        | GET        |          |             
|Atualização de cadastro dos usuários        | PUT        |          |                      
|Remoção de usuário                          | DELETE     |          |




