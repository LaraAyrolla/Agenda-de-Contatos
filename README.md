# Agenda
Aplicação web com CRUD completo de uma agenda de contatos. Tarefa para avaliação da matéria "Usabilidade, desenvolvimento web, mobile e jogos" no Centro Universitário Una.

## Tecnologias
Utilização do Framework Angular com o auxílio de json-server para a persistência de dados.

## Funcionalidades
* <b> Ações: </b> Cadastrar, Visualizar, Editar e Deletar Contatos. Filtrar a lista de contatos por coincidência parcial.
* <b> Campos: </b> ID, Nome, Telefone, E-mail, Empresa

## Utilização
* Para utilizar a aplicação localmente, deve-se clonar este repositório e utilizar o comando "ng serve" com o terminal aberto na pasta do projeto.
* Após isso, deve-se abrir uma nova guia do terminal também na pasta do projeto e utilizar o comando "json-server --watch ./json-server/db.json" para habilitar a url que funciona de forma similar a uma API REST para a persistência de dados da aplicação.
* Por fim, a página inicial da aplicação pode ser acessada no browser através da url "http://localhost:4200/". Os dados do json-server podem ser consultados na url "http://localhost:3000/".

## Screenshots
![Alt text](/scr/assets/screenshots/home.png?raw=true "Página Inicial")

#
#### Informações Geradas Pelo Framework Angular:
## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
