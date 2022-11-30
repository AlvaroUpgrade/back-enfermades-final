const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categoriesShema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    img: { type: String, trim: true },
    description: { type: String, required: true, trim: true },
    disease: { type: mongoose.Types.ObjectId, ref: "disease" },
  },

  {
    timestamps: true,
  }
);

const Category = mongoose.model("categories", categoriesShema);

module.exports = Category;
