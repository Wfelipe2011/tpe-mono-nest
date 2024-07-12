
<p align="center">
  <a href="https://www.serverless.com/" target="blank"><img src="https://cdn.prod.website-files.com/60acbb950c4d6606963e1fed/60acbb950c4d66854e3e2013_logo%20serverless%20dark.svg" width="200" height="100" alt="Serverless Framework Logo" /></a>
  <img width="200"/>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <img width="300"/>
  <a href="https://webpack.js.org/" target="blank"><img src="https://webpack.js.org/assets/icon-square-big.svg" width="100" alt="Webpack Logo" /></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  
</p>

## Description

Este boilerplate oferece uma configuração inicial para projetos utilizando NestJS, Serverless Framework e Webpack, com suporte a monorepos.

## Componentes Principais

- **NestJS:** Estrutura modular com suporte nativo a monorepos.
- **Serverless Framework:** Simplifica o deploy de funções serverless.
- **Webpack:** Otimiza builds, com suporte a bundling e minificação.

## Tecnologias Utilizadas

- **NestJS** (v10.0.0)
- **Serverless Framework** (v3.39.0)
- **TypeScript** (v5.1.3)
- **Webpack**


## Vantagens do MonoRepo

1. **Gerenciamento Centralizado de Dependências:** Facilita atualizações e garante consistência.
2. **Consistência de Código e Configurações:** Padronização de linting, formatação e testes.
3. **Facilidade de Refatoração:** Alterações coordenadas e redução de bugs.
4. **Reutilização de Código:** Compartilhamento de módulos comuns acelera o desenvolvimento.

## Setup do Projeto

1. **Pré-requisitos**
   - Node.js 20 ou superior

2. **Instalação**
   ```bash
   npm install
   ```

3. **Executar a Aplicação**
   - Para subir os dois projetos:
     ```bash
     npm run sls:start:dev
     ```
   - Para subir um projeto específico:
     ```bash
     npm run sls:start:dev:<projeto-1>
     ```

4. **Scripts de Testes**
   - Testes unitários:
     ```bash
     npm run test
     ```
   - Testes e2e:
     ```bash
     npm run test:e2e
     ```
   - Cobertura de testes:
     ```bash
     npm run test:cov
     ```

## Support

Para mais informações sobre o NestJS, Serverless Framework e Webpack, consulte a documentação oficial:
* **NestJS** - [Documentação](https://docs.nestjs.com/)
* **Serverless Framework** - [Documentação](https://www.serverless.com/framework/docs/)
* **Webpack** - [Documentação](https://webpack.js.org/concepts/)

## Stay in touch 

**Wilson Felipe da Silva**
  - [Linkedin](https://www.linkedin.com/in/wilson-felipe-silva/)
  - [GitHub](https://github.com/Wfelipe2011)

## License

Nest is [MIT licensed](LICENSE).

