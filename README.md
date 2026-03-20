INTRODUÇÃO

Este trabalho apresenta um desenvolvimento de sistema web voltado para o gerenciamento de consultas em clínicas médicas, utlizando tecnologias estudadas na disciplina de Desenvolvimento Backend I.
O sistema foi desenvolvido com o objetivo de permitir que o paciente marque sua consulta de forma rápida e organizada, além de criar um cadastro que ficará salvo no sistema para futuros agendamentos.
Também foram aplicadas integrações com APIs externas que permitem a consulta de endereço através do CEP e a verificação das condições climaticas no dia da consulta. 

TECNOLOGIAS UTILIZADAS 

Node.js – Ambiente de execução do javascript. Não rodando apenas no navegador, mas em qualquer lugar.
•	Foi utilizado para o desenvolvimento do backend e gerenciamento das requisições. 

Express – É um framework para Node.js que simplifica a criação de aplicativos web e APIs. 
•	Utilizado para organização de rotas de sistema, como cadastros, login e agendamentos. 

Vue.js – Framework Javascript progressivo utilizado para criar interfaces de usuário (UI) e aplicações web, especialmente o Single Page Applications (SPA). Além disso, o vue.js é um projeto “open source”, ou seja, não é restrito e qualquer desenvolvedor pode utiliza-lo.
•	Foi utilizado para criação da interface do usuário e interação com o sistema.

MongoDB – Banco de dados de documentos responsável por armazenar dados em documentos flexíveis semelhantes a JSON, ajudando os desenvolvedores a criar aplicativos modernos com mais rapidez.
•	Utlizado para armazenar os dados dos usuários e das consultas.

JWT (JSON web Token) – Serve para realizar a autenticação dos usuários de forma segura.
HTML, CSS e JavaScript – O HTML é usado para criar a estrutura e dar significado ao conteúdo web. Sem ele, não seria possível criar uma forma de organizar os textos ou os elementos da página. O CSS é utilizado para controlar o layout, design, cores, fontes e espaçamentos da página web, sem alterar a estrutura fornecida pelo HTML. Já o JavaScript é uma linguagem de programação que permite adicionar interação e dinamismo para às páginas web, conforme ações do usuário com o website.
•	Utilizados para criar a estrutura e dar interatividade à aplicação


FUNCIONAMENTO DO PROGRAMA
O sistema consiste em duas partes principais: Backend e Frontend.
O backend foi construido utilizando Node.js e Express, sendo o responsável pelo processamento das informações, autenticação dos usuários e gerenciamento dos agendamentos. 
Já o frontend foi o utlizado o Vue.js para o seu desenvolvimento, onde foram criadas as telas de cadastro, login e agendamento, permitindo a interação do usuário com o sistema.

O sistema realiza também integração com APIs externas. Informando o CEP, o endereço é preechido de forma automatica. Além disso, quando for agendada uma consulta, o sistema verifica as condições climaticas para a data informada pelo paciente
