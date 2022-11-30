const { mongoose } = require("mongoose");
const Center = require("../../api/centers/centers.model");
const { DB_URL } = require("../database/db");

const centers = [{}, {}, {}, {}];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allCenters = await Center.find().lean();

    if (!allCenters.length) {
      console.log("[seed]: No se encuentran centros, continuo...");
    } else {
      console.log(`[seed]: Encontrados ${allCenters.length} centros.`);
      await Center.collection.drop();
      console.log("[seed]: Colección Centros eliminada correctamente");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error eliminando la colección -->", error)
  )
  .then(async () => {
    await Center.insertMany(centers);
    console.log(`[seed]: ${centers.length} nuevos centros añadidos con éxito`);
  })
  .catch((error) => console.log("[seed]: Error añadiendo los centros", error))
  .finally(() => mongoose.disconnect());

const centerLog = "Centros Listos!!";

module.exports = centerLog;
