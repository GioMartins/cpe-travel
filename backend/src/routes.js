const express = require("express");
const routes = express.Router();

const auth = require("./middlewares/authentication");

// import Controllers
const UsuarioController = require("./controllers/UsuarioController");
const LocalController = require("./controllers/LocalController");
const SessionController = require("./controllers/SessionController");

// import Validators
const UsuarioValidator = require("./validators/UsuarioValidator");
const LocalValidator = require("./validators/LocalValidator");
const SessionValidator = require("./validators/SessionValidator");

// Session
routes.post(
  "/login",
  SessionValidator.login,
  auth.authenticateToken,
  SessionController.signIn
);

// configuracao rota /usuario
routes.get(
  "/usuario/:usuarioId",
  UsuarioValidator.getByUsuario,
  auth.authenticateToken,
  UsuarioController.getByUsuario
);
routes.get(
  "/usuario",
  UsuarioController.getUser
);

routes.post("/usuario", UsuarioValidator.create, UsuarioController.create);

routes.put(
  "/usuario/:usuarioId",
  UsuarioValidator.update,
  UsuarioController.update
);

routes.delete(
  "/usuario/:usuarioId",
  UsuarioValidator.delete,
  UsuarioController.delete
);

// configuracao rota /local
routes.get(
  "/local/:localId/:usuarioId",
  LocalValidator.getByLocal,
  LocalController.getByLocal
);
routes.post("/local", LocalValidator.create, LocalController.create);
routes.put("/local/:localId", LocalValidator.update, LocalController.update);
routes.delete("/local/:localId", LocalValidator.delete, LocalController.delete);

module.exports = routes;
