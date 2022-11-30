async function runSeeds() {
  const teams = await require("./teamsSeeds")
//   .then(async () => {
//     console.log(teams);
//     const sports = await require("./sportsSeeds");
//   })
//   .catch((error) => console.log(error))
//   .then(async() => {
//     console.log(sports);
//     const players = await require("./playersSeeds");
//   })
//   .catch((error) => console.log(error))
//   .finally(()=> console.log(players))
  
}

runSeeds();
