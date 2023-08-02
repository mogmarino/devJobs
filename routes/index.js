const express = require("express");
const homeController = require("../controllers/homeController");
const vacantesController = require("../controllers/vacantesControler");
const router = express.Router();

module.exports = () => {
  router.get("/", homeController.mostrarTrabajos);

  router.get("/vacantes/nueva", vacantesController.formularioNuevaVacante);
  router.post("/vacantes/nueva", vacantesController.agregarVacante);

  return router;
};
