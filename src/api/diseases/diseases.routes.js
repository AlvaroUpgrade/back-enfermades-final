const express = require("express");
const Disease = require("./diseases.model");
const router = express.Router();
const { isAuth, isAdmin } = require("../../middlewares/auth");

router.get("/", async (req, res) => {
  try {
    const allDiseases = await Disease.find();
    return res.status(200).json(allDiseases);
  } catch (error) {
    return res.status(500).json("Error al leer las enfermedades");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const diseaseToFind = await Disease.findById(id);
    return res.status(200).json(diseaseToFind);
  } catch (error) {
    return next(error);
  }
});

router.get("/getbyname/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    const diseasesToFind = await Disease.findOne({ name: name });
    return res.status(200).json(diseasesToFind);
  } catch (error) {
    return next(error);
  }
});

router.post("/create", [isAuth], async (req, res) => {
  try {
    const disease = req.body;
    const newDisease = new Disease(disease);
    const created = await newDisease.save();
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json("Error al crear la enfermedad");
  }
});

router.delete("/delete/:id", [isAdmin], async (req, res, next) => {
  try {
    const id = req.params.id;
    const diseaseToDelete = await Disease.findByIdAndDelete(id);
    return res
      .status(200)
      .json(`Se ha conseguido borrar la enfermedad ${diseaseToDelete}`);
  } catch (error) {
    return next(error);
  }
});

router.put("/edit/:id", [isAdmin], async (req, res, next) => {
  try {
    const id = req.params.id;
    const disease = req.body;
    const diseaseModify = new Disease(disease);
    diseaseModify._id = id;
    const diseaseUpdated = await Disease.findByIdAndUpdate(id, diseaseModify);
    return res
      .status(200)
      .json({
        mensaje: "Se ha conseguido editar la enfermedad",
        diseaseModificado: diseaseUpdated,
      });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
