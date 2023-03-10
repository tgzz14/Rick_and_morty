// const http = require("http");
// const getCharById = require("../controllers/getCharById.js");
// const getCharDetail = require("../controllers/getCharDetail.js");
// const characters = require("../utils/data.js");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("rickandmorty/character")) {
//       const id = req.url.split("/").at(-1);
//       //console.log(id)
//       const num = parseInt(id, 10);
//       //console.log(typeof(num))
//       //const character = characters.filter((c) => c.id === num);
//       //value = character.shift();
//       //console.log(value)
//       const character = characters.find((c) => c.id === num);
//       //console.log(character)
//       res.writeHead(200, { "Content-Type": "application/json" });
//       //res.end(JSON.stringify(value));
//       res.end(JSON.stringify(character));
//     } else {
//         res.writeHead(404, {'Content-Type':'text/plain'});
//         res.end("Character not found")
//     }
//   })
//   .listen(3001, "localhost");
//
//  http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     let id = req.url.split("/").at(-1);
//     if (req.url.includes("onsearch")) {
//       getCharById(res, id);
//     }

//     if (req.url.includes("detail")) {
//       getCharDetail(res, id);
//     }
//   })
//   .listen(3001, "localhost"); 
  const express = require('express');
  const app = express();
  const PORT = 3001;
  const cors = require('cors')
  const router = require('./index.js')
  const {sequelize} = require('../DB_connection.js')
  const saveApiData = require("../controllers/saveApiData.js")
// middleware para poder traer info del body 
  app.use(express.json())
  app.use(cors())

  app.use('/', router)


  sequelize.sync({force: true}).then(async () => {

    await saveApiData();

    app.listen(PORT, ()=> {
      console.log(`has being created a sever in the port ${PORT}`);

    })
  })

