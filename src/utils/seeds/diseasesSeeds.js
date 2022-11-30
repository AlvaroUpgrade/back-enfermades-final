const { mongoose } = require("mongoose");
const Sport = require("../../api/sports/sports.model");
const { DB_URL } = require("../database/db");

const sports = [{}, {}, {}, {}];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allSports = await Sport.find().lean();

    if (!allSports.length) {
      console.log("[seed]: No se encuentran deportes, continuo...");
    } else {
      console.log(`[seed]: Encontrados ${allSports.length} deportes.`);
      await Sport.collection.drop();
      console.log("[seed]: Colección Sports eliminada correctamente");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error eliminando la colección -->", error)
  )
  .then(async () => {
    await Sport.insertMany(sports);
    console.log(`[seed]: ${sports.length} nuevos deportes añadidos con éxito`);
  })
  .catch((error) => console.log("[seed]: Error añadiendo los deportes", error))
  .finally(() => mongoose.disconnect());

const sportLog = "Deportes listo";

module.exports = sportLog;
