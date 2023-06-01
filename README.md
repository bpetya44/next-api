<div align="center">
  A REST API With Node, Express, TypeScript & MongoDB + Authentication
  <br/>
</div>

<br/>
<br/>

<div align="center" id="top">
<table>
  <tr>
    <td align="top" style="width:30%">
      <details open="open">
  <summary>Table of Contents</summary>

- [About](#-about)
  - [Built With](#-built-with)
- [Getting Started](#-getting-started)

  - [Install](#-install)

    </details>
      </td>
      <td valign="top" style="width:70%"><img src="docs/images/" alt="backend"/></td>
    </tr>
  </table>
  </div>

<br>
<hr>

# 🖥️ About

<div align="center">
This is a REST API 
</div>

<br/>

## ✅ Built With

<div style="width:60%;margin:0 auto;" align="center">
  <table>
    <tr>
      <td valign="center">
      <img width="100%" title="TS-Node" src="https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white" alt="TypeScript"/>
      <img width="100%" title="Redux" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux"/>
      </td>
      <td valign="center">  
      <img width="100%" title="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" alt="JavaScript"/>
       <img width="100%" title="Express" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js"/>
      </td>
      <td valign="center">
       <img width="100%" title="Node.js" src="https://img.shields.io/badge/Node.js-90c53f?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
       <img width="100%" title="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
      </td>
    </tr>
  </table>
</div>

<p align="right">(<a href="#top">Back to top</a>)</p>

<br>

<hr>

# 🚀 Getting Started

## 💻 Install

- Fork and clone the repository to your local computer.
  Clone the repo

  ```sh
  git clone https://github.com/bpetya44/
  ```

- `cd` in the root folder

- Installs the required dependencies:

  ```sh
  npm install
  ```

- Start the server:

  ```sh
    npm start
  ```

  - To run a local instance of mongodb. You can connect to it by connecting to `mongodb://127.0.0.1:27017/` with any MongoDB client like [Compass](https://www.mongodb.com/products/compass).

<br>

<p align="right">(<a href="#top">Back to top</a>)</p>

<hr>

# 🛠️ Maybe you wish to Start from scratch?

- In your chosen folder type:

         npm init -y

- Install Typescript as a dev dependancy:

        npm i -D typescript

- Install TS-Node as a dev dependancy:

  ts-node is a TypeScript execution engine for Node. js. It allows you to run your TypeScript code directly without precompiling your TypeScript code to JavaScript

         npm i -D ts-node

- Monitor your changes with nodemon:

        npm i -D nodemon

- Create a config file for TS in the root directory - `tsconfig.json` as in the repo:

```js
   {
        "compalireOptions": {
            "module": "NodeNext",
            "moduleResolution": "node",
            "noImplicitAny": true,
            "sourceMap": true,
            "outDir": "dist",
            "baseUrl": "src",
        },
        "include": [
            "src/**/*"
        ],
    }
```

- Create a config file for Nodemon in the root directory - `nodemon.json` as in the repo:

```js
   {
     "watch": ["src"],
     "ext": ".ts, .js",
     "exec": "ts-node ./src/index.ts"
    }
```

Or alternatively if you prefer you can do the same within the `package.json` file:

```js
"scripts": {
  "start": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts",
},
```

if not just change it to:

```js
"scripts": {
  "start": "nodemon",
},
```

- Create the `src` folder and `index.ts` in it.

- You will also need to install the required dependacies and their types:

      npm i express body-parser cookie-parser compression cors

  <br>
          
      npm i -D @types/express @types/body-parser @types/cookie-parser @types/compression @types/cors

- Later we will use MongoDB and mongoose, so we also need to install them:

      npm i dotenv mongoose

  <br>

      npm i -D @types/dotenv @types/mongoose

- Lodash is a JS library that makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.

      npm i lodash

  <br>

      npm i -D @types/lodash

<br>

<p align="right">(<a href="#top">Back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">Back to top</a>)</p>

<!-- CONTACT -->

## Contact

Petya - [@ang_petya](https://twitter.com/ang_petya) - ang.petya@gmail.com

<p align="right">(<a href="#top">Back to top</a>)</p>
