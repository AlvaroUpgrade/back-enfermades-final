const express = require("express");
const Category = require("./categories.model");
const router = express.Router();
const { isAuth, isAdmin } = require("../../middlewares/auth");

router.get("/", async (req, res) => {
  try {
    const allCategories = await Category.find();
    return res.status(200).json(allCategories);
  } catch (error) {
    return res.status(500).json("Error al leer las categorias");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const categoryToFind = await Category.findById(id);
    return res.status(200).json(categoryToFind);
  } catch (error) {
    return next(error);
  }
});

router.get("/getbyname/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    const categoryToFind = await Category.findOne({ name: name });
    return res.status(200).json(categoryToFind);
  } catch (error) {
    return next(error);
  }
});

router.post("/create", [isAuth], async (req, res) => {
  try {
    const category = req.body;
    const newCategory = new Category(category);
    const created = await newCategory.save();
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json("Error al crear la categoria");
  }
});

router.delete("/delete/:id", [isAdmin], async (req, res, next) => {
  try {
    const id = req.params.id;
    const categoryToDelete = await Category.findByIdAndDelete(id);
    return res
      .status(200)
      .json(`Se ha conseguido borrar la categoria ${categoryToDelete}`);
  } catch (error) {
    return next(error);
  }
});

router.put("/edit/:id", [isAdmin], async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = req.body;
    const categoryModify = new Category(category);
    categoryModify._id = id;
    const categoryUpdated = await Category.findByIdAndUpdate(
      id,
      categoryModify
    );
    return res
      .status(200)
      .json({
        mensaje: "Se ha conseguido editar la categoria",
        categoryModificado: categoryUpdated,
      });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
