## Entrega

### My-Survey

Dentro pasta **delivery** foi desenvolvido um projeto em React para solucionar o desafio proposto. Esse projeto consiste em um formulário NPS onde o usuário é convidado a avaliar sua satisfação com a empresa por meio de estrelas. Tais estrelas (Rating) e o "Nome" do usuário, são campos obrigatórios. O campo "Comentário" é opcional. As pesquisas respondidas são salvas dentro do arquivo (`src/assets/mock/db.json`).

### :building_construction: Stack
Este projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)

No desenvolvimento do projeto, além das tecnologias já citadas, também foi utilizado [Context Api](https://pt-br.reactjs.org/docs/context.html) e [Husky](https://github.com/typicode/husky). A organização dos componentes é baseada no Atomic Designer :atom_symbol:.

Também foi utilizado as Cores e Tipografias do Design System criado no primeiro Exercício dentro do projeto.

### :rocket: Inicialização

__Backend__

Para o backend deste projeto é necessário ter o [Json-server](https://www.npmjs.com/package/json-server) instalado globalmente. Então após ter o mesmo instalado, para rodar o projeto é necessário ir até a pasta mock (`src/assets/mock`) e executar o comando abaixo:

```
json-server --watch db.json --port 5555
```

O Backend salva todas as avaliações feitas pelos usuários dentro do arquivo (`src/assets/mock/db.json`).

__Frontend__


```js
  yarn install
```

Em seguida

```js
  yarn start
```

### :test_tube: Tests

O aplicativo possui 2 testes desenvolvidos em Cypress.

  * `try to send survey` - Este teste valida se é possível enviar uma resposta e se a mesma é recebida pelo serviço.
  * `try to send survey with no name` - Este teste valida se ao não passar um nome para o formulário, impossibilita o envio do mesmo além de mostrar uma mensagem de erro.

Para executar os testes, use o comando:

```js
  npm test
```
