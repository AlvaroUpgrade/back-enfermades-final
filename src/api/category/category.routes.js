const express = require("express");
const Category = require("./category.model");
const router = express.Router();
const { isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const deleteFile = require("../../middlewares/deleteFile");

router.get("/", async (req, res, next) => {
  try {
    const allCategories = await Category.find().populate("diseases");
    return res.status(200).json(allCategories);
  } catch (error) {
    return next(error);
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

router.post(
  "/create",
  [isAuth],
  upload.single("img"),
  async (req, res, next) => {
    try {
      const category = req.body;
      if (req.file) {
        category.img = req.file.path;
      }
      const newCategory = new Player(category);
      const created = await newCategory.save();
      return res.status(201).json(created);
    } catch (error) {
      return next(error);
    }
  }
);

router.delete("/delete/:id", [isAdmin], async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = await Category.findById(id);
    if (category.img) {
      deleteFile(category.img);
    }
    const categoryToDelete = await Category.findByIdAndDelete(id);
    return res
      .status(200)
      .json(`Se ha conseguido borrar el jugador ${categoryToDelete.name}`);
  } catch (error) {
    return next(error);
  }
});

router.put(
  "/edit/:id",
  [isAdmin],
  upload.single("img"),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const category = req.body;
      const categoryOld = await Category.findById(id);
      if (req.file) {
        if (categoryOld.img) {
          deleteFile(categoryOld.img);
        }
        diseases.img = req.file.path;
      }
      const categoryModify = new Category(category);
      categoryModify._id = id;
      const categoryUpdated = await Category.findByIdAndUpdate(
        id,
        categoryModify
      );
      return res
        .status(200)
        .json({
          mensaje: "Se ha conseguido editar las categorias",
          categoryModificado: categoryUpdated,
        });
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = router;
