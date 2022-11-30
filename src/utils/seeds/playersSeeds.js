const { mongoose } = require("mongoose");
const Player = require("../../api/players/players.model");
const Team = require("../../api/teams/teams.model");
const Sport = require("../../api/sports/sports.model");
const { DB_URL } = require("../database/db");

const players = [
  {
    name: "Carlos Soler",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Carlos_Soler_2020.png/490px-Carlos_Soler_2020.png",
    team: "Paris Saint-Germain F. C.",
    age: 25,
    dorsal: 19,
    position: "Mediocentro",
    sport: "Futbol",
  },
  {
    name: "Pedri González",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pedri.png/490px-Pedri.png",
    team: "F.C.Barcelona",
    age: 19,
    dorsal: 21,
    position: "Mediocentro",
    sport: "Futbol",
  },
  {
    name: "Nico Williams",
    img: "https://img.a.transfermarkt.technology/portrait/big/709187-1644238283.jpg?lm=1",
    team: "Athletic Club de Bilbao",
    age: 20,
    dorsal: 2,
    position: "Delantero",
    sport: "Futbol",
  },
  {
    name: "Borja Iglesias",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Borja_iglesias_2019001.jpg/490px-Borja_iglesias_2019001.jpg",
    team: "Real Betis Balompié",
    age: 29,
    dorsal: 3,
    position: "Delantero",
    sport: "Futbol",
  },

  {
    name: "Lorenzo Brown",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lorenzo_Brown_4_KK_Crvena_zvezda_EuroLeague_20191010_%281%29.jpg/1200px-Lorenzo_Brown_4_KK_Crvena_zvezda_EuroLeague_20191010_%281%29.jpg",
    team: "Maccabi Tel Aviv",
    age: 32,
    dorsal: 2,
    position: "Base",
    sport: "Baloncesto",
  },
  {
    name: "Rudy Fernandez",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Rudy_Fern%C3%A1ndez_2016.jpg",
    team: "Real Madrid",
    age: 37,
    dorsal: 5,
    position: "Ala",
    sport: "Baloncesto",
  },
  {
    name: "Sebas Saiz",
    img: "https://images.ecestaticos.com/zznydCVprdFPRmp81zeoJFSkBPM=/0x0:1471x1776/624x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb20%2F399%2Fcfe%2Fb20399cfe29c0b2f93fdbc6694cced09.jpg",
    team: "Alvark Tokio",
    age: 27,
    dorsal: 11,
    position: "AlaPivote",
    sport: "Baloncesto",
  },
  {
    name: "Willy Hernangómez",
    img: "https://phantom-marca.unidadeditorial.es/c2d399253335229221d9bf944fe62547/resize/1320/f/jpg/assets/multimedia/imagenes/2022/10/18/16661110685226.jpg",
    team: "New Orleans Pelicans",
    age: 28,
    dorsal: 14,
    position: "Pivote",
    sport: "Baloncesto",
  },
  {
    name: "Rafa Nadal",
    img: "https://www.atptour.com/-/media/tennis/players/head-shot/2022/05/25/15/47/nadal-head-2022-may.png",
    team: "España",
    age: 36,
    sport: "Tenis",
  },
  {
    name: "Pablo Carreño",
    img: "https://www.atptour.com/-/media/tennis/players/head-shot/2022/05/25/15/45/carreno-busta-head-2022-may.png",
    team: "España",
    age: 31,
    sport: "Tenis",
  },
  {
    name: "Albert Ramos",
    img: "https://www.atptour.com/es/players/albert-ramos-vi%C3%B1olas/r772/www.atptour.com/-/media/tennis/players/head-shot/2019/03/08/17/24/ramos_vinolas_head_ao19.png",
    team: "España",
    age: 34,
    sport: "Tenis",
  },
  {
    name: "Carlos Alcaraz",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpp0jQ3G1YgtiacCdumcLoN_8HEJPw8Xfvg&usqp=CAU",
    team: "España",
    age: 19,
    sport: "Tenis",
  },

  {
    name: "Rodrigo Corrales",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Rodrigo_Corrales_20170924.jpg",
    team: "MKB Vesszprém",
    age: 31,
    dorsal: 12,
    position: "Portero",
    sport: "Balonmano",
  },
  {
    name: "Agustin Casado",
    img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/01/19/16426192793553.jpg",
    team: "Ciudad de Logroño",
    age: 25,
    dorsal: 25,
    position: "Central",
    sport: "Balonmano",
  },
  {
    name: "Adrià Figueres",
    img: "https://pbs.twimg.com/profile_images/1412789564561887235/avQrS7WP_400x400.jpg",
    team: "C'Chartres MHB",
    age: 33,
    dorsal: 17,
    position: "Pivote",
    sport: "Balonmano",
  },
  {
    name: "Antonio Garcia",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Antonio_saltando.jpg",
    team: "Fraikin BM. Granollers",
    age: 37,
    dorsal: 27,
    position: "Lateral Izquierdo",
    sport: "Balonmano",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allPlayers = await Player.find().lean();

    if (!allPlayers.length) {
      console.log("[seed]: No se encuentran jugadores, continuo...");
    } else {
      console.log(`[seed]: Encontrados ${allPlayers.length} jugadores.`);
      await Player.collection.drop();
      console.log("[seed]: Colección Players eliminada correctamente");
    }
  })
  .catch((error) => console.log("[seed]: Error eliminando la colección -->", error))
  .then(async () => {
    for (const player of players) {
      const sport = player.sport;
      const sportId = await Sport.findOne({ name: sport }).lean();
      player.sport = sportId._id.toString();
    }

    for (const player of players) {
      const team = player.team;
      const teamId = await Team.findOne({ name: team }).lean();
      player.team = teamId._id.toString();
    }

    await Player.insertMany(players);
    console.log(`[seed]: ${players.length} nuevos jugadores añadidos con éxito`);
  })
  .catch((error) => console.log("[seed]: Error añadiendo los jugadores", error))
  .finally(() => mongoose.disconnect());
