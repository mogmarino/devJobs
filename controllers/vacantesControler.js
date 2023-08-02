const mongoose = require("mongoose");
const Vacante = mongoose.model("Vacante");

exports.formularioNuevaVacante = (req, res) => {
  res.render("nueva-vacante", {
    nombrePagina: "Nueva Vacante",
    tagline: "Llena el formulario y publica tu vacante",
  });
};

exports.agregarVacante = async (req, res) => {
  const vacante = new Vacante(req.body);

  // crear arreglo de habilidades
  vacante.skills = req.body.skills.split(",");

  try {
    const nuevaVacante = await vacante.save();
    res.redirect(`/vacantes/${nuevaVacante.url}`);
  } catch (error) {
    console.log(error);
  }
};
