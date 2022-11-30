const { mongoose } = require("mongoose");
const Team = require("../../api/teams/teams.model");
const { DB_URL } = require("../database/db");

const teams = [
  {
    name: "Paris Saint-Germain F. C.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Paris_Saint-Germain_%28Escudo%29.png/225px-Paris_Saint-Germain_%28Escudo%29.png",
  },
  {
    name: "F.C.Barcelona",
    img: "https://images.daznservices.com/di/library/DAZN_News/b8/37/fc-barcelona-la-liga_1jxdxq19a7z4i1mdvawqvnk2js.jpg?t=-2107146871",
  },
  {
    name: "Athletic Club de Bilbao",
    img: "https://www.aupaathletic.com/media/el-club/escudo/escudo-athletic-club-1972.gif",
  },
  {
    name: "Real Betis Balompié",
    img: "https://www.larazon.es/resizer/je_nT54RBaPpQsBhebjdb7xX-ec=/600x400/smart/filters:format(jpg)/cloudfront-eu-central-1.images.arcpublishing.com/larazon/DBEUFZS3GVB6NFLWTTXVVVUIBM.jfif",
  },

  {
    name: "Maccabi Tel Aviv",
    img: "http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/1784.png",
  },
  {
    name: "Real Madrid",
    img: "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png",
  },
  {
    name: "Alvark Tokio",
    img: "https://zonadeclubs.com/imagenes/Locales/Logos/TOKIO_ESCUDO.png",
  },
  {
    name: "New Orleans Pelicans",
    img: "https://www.solobasket.com/sites/default/files/48547_0.jpg",
  },
  {
    name: "España",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Escudo_de_Espa%C3%B1a_%28mazonado%29.svg/225px-Escudo_de_Espa%C3%B1a_%28mazonado%29.svg.png",
  },
  {
    name: "MKB Vesszprém",
    img: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/5197.png",
  },
  {
    name: "Ciudad de Logroño",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/81/Coat_of_Arms_of_Logro%C3%B1o.svg",
  },
  {
    name: "C'Chartres MHB",
    img: "https://upload.wikimedia.org/wikipedia/fr/archive/8/80/20191008120810%21BlasonCMHB.jpg",
  },
  {
    name: "Fraikin BM. Granollers",
    img: "https://upload.wikimedia.org/wikipedia/en/6/6c/Granollers_handball_club.png",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allTeams = await Team.find().lean();

    if (!allTeams.length) {
      console.log("[seed]: No se encuentran equipos, continuo...");
    } else {
      console.log(`[seed]: Encontrados ${allTeams.length} equipos.`);
      await Team.collection.drop();
      console.log("[seed]: Colección Teams eliminada correctamente");
    }
  })
  .catch((error) => console.log("[seed]: Error eliminando la colección -->", error))
  .then(async () => {
    await Team.insertMany(teams);
    console.log(`[seed]: ${teams.length} nuevos equipos añadidos con éxito`);
  })
  .catch((error) => console.log("[seed]: Error añadiendo los equipos", error))
  .finally(() => mongoose.disconnect());