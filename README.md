## Conceito MONOREPO

Unir todas as aplicações que fazem parte de um projeto num único git, exemplo:

Um projeto que tem frontend em React, um App Mobile react-native ou outra tecnologia, um backend em node, laravel,
etc.

Cada um na sua pasta, compartilhando recursos e dependências como Eslint, Prettier, etc.

## Construção usando Yarn Workspaces

- Criar uma pasta o "monorepo" e inicializar o Git e Yarn (ou npm)
- Mudar ou acrescentar no package.json: "private": true
- Acrescentar no package.json: "workspaces": { "packages":  [  "packages/*" ] }
    - Essa convenção usada pela comunidade, mas você pode usar como preferir, essa configuração são os nomes dos
      diretórios que armazenarão as aplicações.
    - O "packages/*" é um curinga que indica que todos os diretórios dentro de "packages" serão considerados como
      aplicação.
- Criar o arquivo ".gitignore" e colocar o que desejar, os recomendados são: node_modules, dist e yarn-error.log
    - Cada aplicação terá o seu próprio ".gitignore", portanto não é necessário colocar neste.
- Em cada pasta declarada ou pasta de app quando se rodar o yarn para instalar pacotes eles serão instalados no
  diretório principal "compartilhando", somente irá instalar no diretório local de cada aplicação se a versão do pacote
  diferir de uma já existente no monorepo.

## Configurando para, React, React Native e Expo e outros:

Instalar cada aplicação numa pasta separada, como "react", "react-native" e "expo" alterando a propriedade nome no "
package.json" para "@nome-do-monorepo/nome-da-aplicação".

Executar o yarn para instalar os pacotes de cada aplicação separadamente ou no diretório do monorepo.

Dependências globais podem ser instaladas com yarn add typescript -DW na pasta raiz do workspace;

## Configurando ESLint, Prettier e Jest

### ESLint e Prettier

- Criar um diretório para eslint: eslint-config (dessa forma a configuração fica toda nesta pasta).

_Obs._: Não esquecer de acrescentar essa pasta no workspace , se necessário.

- Instalar todas dependências do eslint, recomendados:

 ``` json
"@typescript-eslint/eslint-plugin":"^5.33.1",
"@typescript-eslint/parser":"^5.33.1",
"eslint":"^8.22.0",
"eslint-config-prettier":"^8.5.0",
"eslint-config-standard":"^17.0.0",
"eslint-import-resolver-typescript":"^3.4.1",
"eslint-plugin-import":"^2.22.0",
"eslint-plugin-next":"^0.0.0",
"eslint-plugin-node":"^11.1.0",
"eslint-plugin-prettier":"^4.2.1",
"eslint-plugin-promise":"^6.0.0",
"eslint-plugin-react":"^7.30.1",
"eslint-plugin-react-hooks":"^4.6.0",
"eslint-plugin-standard":"^5.0.0",
"prettier":"^2.0.5"
```

- Criar um arquivo de configuração como preferir: .eslintrc.js (ver modelo)
- Adicionar como dependência no projeto rais (monorepo)  "@monorepo/eslint-config": "*",
- Criar um arquivo de configuração para referência: ".eslintrc.js", com o conteúdo:

``` javascript
const config=require('@monorepo/eslint-config');

module.exports=config;
```

- Yarn para criar referencia.
- Criar o arquivo de configuração para o prettier: "prettier.config.js" e colocar as configurações que preferir.
- Pode aproveitar e também criar um arquivo ".editorconfig" com as configurações do seu gosto.

### JEST

- Instalar o jest e suas dependências, por exemplo:

``` bash
yarn add jest jest-cli jest-preset-typescript @types/jest ts-jest -DW
```

- Criar um arquivo de configuração para o Jest: "jest.config.js" e colocar as configurações que preferir. Meu exemplo:

```javascript
module.exports = {
    clearMocks: true,
    preset: 'ts-jest',
    projects: ['<rootDir>/frontend/jest.config.cjs'],
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).(j|t)s?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}
```

- Em cada aplicação é possível criar um arquivo de configuração para o Jest nas aplicações e personalizar as
  configurações que preferir.

```javascript
const {name} = require('./package.json');

module.exports = {
    displayName: name,
    // outras configurações do JEST
};
```

## Scripts para Package Manager (sugestões)

Eu prefiro criar um script no monorepo para rodar toda aplicação com auxilio de alguns pacotes adicionais

```bash
yarn add -D cross-env npm-run-all wait-on
```

Você pode executar os scritp para cada aplicação separadamente, ou rodar todas com o script "develop"

_Obs.:_ Ajustar os scripts para rodar as suas aplicações conforme sua necessidade.

```json
"scripts": {
"develop:backend": "yarn --cwd backend develop",
"develop:frontend": "wait-on http://localhost:1337/admin && yarn --cwd frontend dev -p 3000",
"develop": "cross-env FORCE_COLOR=1 npm-run-all -l -p develop:*",
"test": "jest",
"test:watch": "jest --watchAll",
"test:coverage": "jest --collect-coverage"
}
```

## Referencia e Autoria

Esse tutorial foi criado com base na Master Class da [Rocketseat](https://rocketseat.com.br) disponível no canal do
YouTube.

Recomendo assistir o vídeo para entender melhor o que foi feito e também para configurações adicionais de CI/CD

[Monorepo ReactJS, Node.js & React Native com Yarn Workspaces | Code/Drops #42](https://www.youtube.com/watch?v=k5TkBcUTJus)

Agradecimentos ao [Rocketseat](https://rocketseat.com.br) por disponibilizar o conteúdo.

