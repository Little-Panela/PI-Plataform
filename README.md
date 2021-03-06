# PI-Plataform 🌍:zap:

Plataforma para a votação dos projetos da computação amostra do [CESUPA](Cesupa.br).

[Design Figma](https://bit.ly/3sr7qR4)

## Tecnologias Usadas :computer:
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title = "Figma"/></code> 
<code><img width="40px" src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" title = "Vite"/></code> 
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" title = "Yarn"/></code>
<code><img width="40px" src="https://d33wubrfki0l68.cloudfront.net/aad219b6c931cebb53121dcda794f6180d9e4397/86983/pt/assets/images/pnpm-standard-79c9dbb2e99b8525ae55174580061e1b.svg" title = "Pnpm"/></code> 
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" title = "Npm"/></code> 
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title = "React"/></code> 
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" title = "Typescript"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title = "NodeJS"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" title = "MongoDB"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" title = "Docker"/></code>          

## Rodando a aplicação

## Front End:
  
  <code>npm run dev</code> : incia o ambiente de desenvolvimento

  <code>npm run build</code> : inicia o processo de build da aplicação
  
  npm run build gera a pasta dist com o arquivo index.html e a pasta assets com o bundle do javascript e assets usados no site
  
## Back End: 

Requirements: 

MongoDB
Yarn or NPM
NodeJs

## MongoDB

To install it without you will have to acess MongoDB(https://www.mongodb.com/docs/guides/server/install/), follow the instructions till the end.

To install with docker, run the command: 

<code>docker run --name some-mongo -d mongo:tag</code>

After the installations is completed, create a database named (Nome do banco) with the GUI of your, recommended:
MongoDB Compass(https://www.mongodb.com/try/download/compass)

## Cloning and running API

After cloning the repository, navigate to the backend folder and run the following command on terminal to install dependencies

npm 
or
yarn

now run the application to connect to the database.

<code>npm run dev</code>
or
<code>yarn dev</code>

After connecting, the database and tables may not appear because they still do not have saved data. But the database is connected.

## Insomnia

For testing, the JSON file for Insomnia(https://insomnia.rest/download) is available on Notion(URL) for download, in -backend docs-, import the file on your Insomnia to visualize the routes.

## Routes Requiresments

To visualize the requirements for each route, access it's -controller file-

## Automated Testing 

The API have automated testing in all it's services, to run the tests enter the following command on terminal:

<code>npm run test</code>
or
<code>yarn test</code>



## Contribuidores :man_technologist: :octocat:
- [Fábio Costa de Oliveira Neves Filho](https://github.com/FabioNeves00)
- [João Vitor Cardoso Queiroz](https://github.com/JoaoCardoso00)
- [Jose Ryan De Oliveira Coelho](https://github.com/ryanolivrdev)
