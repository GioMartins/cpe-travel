const express = require("express");
const routes = express.Router();

// import Controllers
const UsuarioController = require("./controllers/UsuarioController");
const LocalController = require("./controllers/LocalController");

// configuracao rota /usuario
routes.get("/usuario/:usuarioId", UsuarioController.getByUsuario);
routes.post("/usuario", UsuarioController.create); 
routes.put("/usuario/:usuarioId", UsuarioController.update); 
routes.delete("/usuario/:usuarioId", UsuarioController.delete); 

// configuracao rota /local 
routes.get("/local/:localId/:usuarioId", LocalController.getByLocal); // essa rota tem dois params
routes.post("/local", LocalController.create); 
routes.put("/local/:localId", LocalController.update); 
routes.delete("/local/:localId", LocalController.delete);

module.exports = routes;