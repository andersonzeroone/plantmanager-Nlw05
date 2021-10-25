<h1 align="center">
  <img alt="logo" width="450px"  title="#Plant Manager" src="./logo.svg" />
</h1>

<h1 align="center">
  <img alt="Plant Manager"  title="#Plant Manager" src="./preview.png" />
</h1>


<h4 align="center"> 
	🚧  Plant Manager 🚀 concluído 🚧
</h4>

<br/>

<p align="center">
 <a href="#sobre-o-projeto">Sobre o projeto</a> • 
 <a href="#funcionalidades">Funcionalidades</a> • 
 <a href="#layout">Layout</a> • 
 <a href="#como-executar-o-projeto">Como executar o projeto</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#contribuidores">Contribuidores</a> • 
 <a href="#autor">Autor</a> • 
<a href="#licenc-a">Licença</a> • 
</p>
<br/>

## Sobre o projeto

<p align="left">Plant Manager é um aplicativo que ajuda a lembrar de regar e acompanhar suas plantas.

Projeto desenvolvido durante a NLW - Next Level Week oferecida pela  [Rocketseat](https://blog.rocketseat.com.br/primeira-next-level-week/).. O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.
</p>

<br/>

##  Funcionalidades

- [x] Listar plantas.
  - [x] Adicionar e remover planatas.
  - [x] Definir lembrantes para cada planta.
  - [x] Recebimento de notificações de lembrete de cada planata.
  - [x] além de selecionar um ou mais ítens de coleta: 
---

## Layout
Você pode acessar o Layout pelo Figma atravês <a href="https://www.figma.com/file/BThXfmgEFRfDkbcd1dTXf4/PlantManager-(Copy)?node-id=0%3A1">desse link</a>.

<br/>

---

## Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o projeto

```bash

# Clone este repositório
$ git clone git@github.com:andersonzeroone/plantmanager-Nlw05.git

# Acesse a pasta do projeto no terminal/cmd
$ cd plantmanager-Nlw05

# Instale as dependências
$ npm install ou yarn install

# No arquivo Api, dentro da pasta service substitua o endereço de ip pelo seu endereço de ip.

baseURL: 'http://seu-endereço-de-Ip:3333' 

# Execute a aplicação
$ expo start

# O projeto inciará na porta:3333 - acesse http://localhost:3333 

# No arquivo packge.json na raiz do projeto, no script "json-server" substitua o endereço de ip pelo seu endereço de ip.

json-server: json-server ./src/services/server.json  -H seu-endereco-de-id -p 3333

# Execute o json-server para simular um servidor online

npm json-server ou yarn json-server
```

---
##  Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/tgmarinho/Ecoleta#mobile-react-native--typescript)**Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[expo notification](https://docs.expo.dev/versions/latest/sdk/notifications/)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Json-server](https://github.com/typicode/json-server)**

> Veja o arquivo  [package.json](https://github.com/andersonzeroone/plantmanager-Nlw05/blob/main/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  


---
## Contribuidores

💜 Um super thanks 👏 para essa galera que fez esse produto sair do campo da ideia e entrar nas lojas de aplicativos :)

## Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

##  Autor
</br>

<a href="https://github.com/andersonzeroone">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/33969430?v=4" width="100px;" alt=""/>
 <br />
 <br />
 <sub><b>Anderson Pablo</b></sub></a> <a href="https://www.linkedin.com/in/anderson-pablo-js/" title="andersonPablo">🚀</a>
 <br />


 [![Linkedin Badge](https://img.shields.io/badge/-Anderson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anderson-pablo-js/)](https://www.linkedin.com/in/anderson-pablo-js/) 
[![Gmail Badge](https://img.shields.io/badge/-anderson.pablo02@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:anderson.pablo02@gmail.com)](mailto:anderson.pablo02@gmail.com)

---

## Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Anderson Pablo 👋🏽 [Entre em contato!](https://www.linkedin.com/in/anderson-pablo-js/)

---

<!-- ##  Versões do README

[Português 🇧🇷](./README.md)  |  [Inglês sem emojis 🇺🇸](./README-en.md) | [Portugues sem logo  🇧🇷](./README-sem-logo.md)  -->