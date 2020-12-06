const express = require("express");
const routes = express.Router();

// import Controllers
const UsuarioController = require("./controllers/UsuarioController");
const LocalController = require("./controllers/LocalController");

// import Validators
const UsuarioValidator = require("./validators/UsuarioValidator");
const LocalValidator = require("./validators/LocalValidator");

// configuracao rota /usuario
routes.get("/usuario/:usuarioId", UsuarioValidator.getByUsuario, UsuarioController.getByUsuario);
routes.post("/usuario", UsuarioValidator.create ,UsuarioController.create); 
routes.put("/usuario/:usuarioId", UsuarioValidator.update ,UsuarioController.update); 
routes.delete("/usuario/:usuarioId", UsuarioValidator.delete ,UsuarioController.delete); 

// configuracao rota /local 
routes.get("/local/:localId/:usuarioId", LocalValidator.getByLocal, LocalController.getByLocal); // essa rota tem dois params
routes.post("/local", LocalValidator.create, LocalController.create); 
routes.put("/local/:localId", LocalValidator.update, LocalController.update); 
routes.delete("/local/:localId", LocalValidator.delete, LocalController.delete);

module.exports = routes;