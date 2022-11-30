const { mongoose } = require("mongoose");
const Disease = require("../../api/diseases/diseases.model");
const { DB_URL } = require("../database/db");

const diseases = [
  {
    name: "Alzheimer",
    description:
      "La enfermedad de Alzheimer es un trastorno cerebral que destruye lentamente la memoria y la capacidad de pensar y, con el tiempo, la habilidad de llevar a cabo hasta las tareas más sencillas. Las personas con Alzheimer también experimentan cambios en la conducta y la personalidad.",
    img: "https://www.centrodediasonraiz.com/images/alzehimer1_transparente.png",
    symptoms: "Cambios en la forma de pensar, recordar, razonar y comportarse",
    treatment:
      "Los medicamentos actuales para tratar la enfermedad de Alzheimer pueden ayudar durante un tiempo con los síntomas que afectan la memoria y para otros cambios cognitivos. Actualmente, se utilizan dos tipos de medicamentos para tratar los síntomas que afectan el sistema cognitivo: Los inhibidores de la colinesterasa y la Memantina (Namenda)",
    mortality:
      "El Alzheimer no es solo la pérdida de la memoria, el Alzheimer mata. 1 de 3 personas mayores muere con Alzheimer u otra demencia",
  },
  {
    name: "Encefalitis",
    description:
      "La encefalitis es una inflamación del encéfalo que aparece cuando un virus infecta directamente el encéfalo o cuando un virus, una vacuna o algún otro agente provoca inflamación. A veces también se ve afectada la médula espinal, en cuyo caso el trastorno se denomina encefalomielitis.",
    img: "https://www.neuroblasco.es/images/tratamiento_adultos_encefalitis.png",
    symptoms:
      "Aparecen síntomas como fiebre, cefalea o convulsiones, y también sueño, adormecimiento o confusión.",
    treatment:
      " consiste en aliviar los síntomas y, a veces, en el uso de antivíricos,antiinflamatorios, reposo en cama, aporte abundante de líquidos",
    mortality:
      "tiene un índice de mortalidad de entre el 5-20% de los casos y deja secuelas en más del 20% de los supervivientes;en Europa, se producen entre 0,5 y 7 casos por cada 100.000 habitantes al año",
  },
  {
    name: "Epilepsia",
    description:
      "La epilepsia no es una enfermedad psiquiátrica ni mental, se trata de un problema físico causado por un funcionamiento anormal esporádico de un grupo de neuronas.A grandes rasgos se distinguen dos tipos de crisis: las generalizadas, que afectan a toda la superficie del cerebro y provocan la pérdida de conocimiento y las crisis parciales o focales",
    img: "https://cdn.ucbcares.es/sites/ccdf08de-0b1f-4319-896d-6edb51d8177a/images/Tipos-de-crisis-epilepticas.png",
    symptoms:
      "Confusion temporal,episodios de ausencias,Rigidez en los musculos,perdida de onocimiento o la consciencia",
    treatment:
      "Los tratamientos de las crisis epilépticas incluyen,medicamentos,cirugia,dieta cetogena,estimulacion del nervio vago ",
    mortality:
      "En España, la prevalencia se estima en torno a 8 pacientes por cada 1000 habitantes",
  },
  {
    name: "Migrañas",
    description:
      "La migraña es un tipo de dolor de cabeza que no conviene confundir con las cefaleas, lo que comúnmente conocemos como dolor de cabeza.",
    img: "https://www.saneurologia.org/wp-content/uploads/2021/09/Migra%C3%B1a.png",
    symptoms:
      "Se presenta como un tipo de dolor de cabeza recurrente de intensidad variable. Generalmente produce una sensación pulsátil y/o punzante y suele afectar a uno de los lados de la cabeza. Otros síntomas son: nauseas, vómitos, sensabilidad a la luz, a los olores o al ruido.",
    treatment:
      "Las migrañas pueden tratarse en casa con analgésicos (medicamentos para el dolor) de venta sin receta, como el acetaminofén (Tylenol®), el ibuprofeno (Advil® o Motrin®) o el naproxeno (Aleve®) o con medicamentos que le recete su médico. Cuando ocurre la migraña, también puede ayudar recostarse en un cuarto oscuro y tratar de dormir.Para prevenir las migrañas, trate de evitar las cosas que sabe que pueden desencadenarlas y procure hacer ejercicio regular. Su médico puede también recetarle medicamentos que ayuden a prevenir las migrañas.",
    mortality:
      "La migraña, y particularmente la migraña con aura, se asocia a un mayor riesgo de muerte por enfermedad cardiovascular y accidente cerebrovascular hemorrágico,",
  },
  {
    name: "Enfermedades Cerebrovasculares",
    description:
      "Estas se producen por una alteración en el funcionamiento de la red de vasos sanguíneos que irrigan el cerebro y le aporta oxígeno y nutrientes al cerebro. Este mal funcionamiento puede producir muerte de áreas cerebrales que dependen de los vasos afectados y localización.",
    img: "https://www2.uned.es/pea-nutricion-y-dietetica-I/guia/enfermedades/cardiovasculares/img/riesgos_intro.png",
    symptoms:
      "Dificultad para hablar y entender lo que otros están diciendo. Se puede experimentar confusión, dificultad para articular las palabras o para entender lo que se dice.Parálisis o entumecimiento de la cara, el brazo o la pierna. Problemas para ver en uno o ambos ojos. Dolor de cabeza. Problemas para caminar.",
    treatment:
      "El tratamiento más efectivo para esta enfermedad cardiovascular, siempre que no haya contraindicaciones, es el aislamiento eléctrico de las venas pulmonares. Aunque hay diferentes técnicas para lograrlo, la crioablación con balón es la más novedosa y sencilla. Se realiza un cateterismo cardiaco colocando un balón o globo dentro de cada una de las venas pulmonares y congelando con óxido nitroso su unión con la aurícula izquierda. Un procedimiento que no precisa anestesia general y con ingreso habitual de 24 horas. La mejoría alcanza el 70% con un solo procedimiento. La insuficiencia cardiaca en un problema sanitario de primer orden. Los estudios en España arrojan una prevalencia del5% (unas 100.000 personas en el País Vasco). Es la primera causa de hospitalización en mayores de 65 años, con el 3% de todos los ingresos. El tratamiento habitual es farmacológico, pero en un tercio de los pacientes la asincronía cardiaca por bloqueo de la rama izquierda del sistema de conducción eléctrico es un factor agravante, cuando no la causa primaria. A este grupo se le podría llegar a recomendar la resincronización cardiaca con un marcapasos específico que envía electrodos de estimulación a ambos ventrículos. La mejora alcanza al 75% de los pacientes y en un 10% se llega a normalizar la función. El implante de este tipo de marcapasos es algo más complejo que el convencional pero se suele realizar sin anestesia general y con una estancia hospitalaria de 24 a 48 horas.",
    mortality:
      "La enfermedad cardiovascular es la primera causa de muerte en el mundo, con 17,5 millones de fallecimientos al año. Y también lo es en España, donde 122.426 personas fallecieron por esta causa en 2017, lo que supuso el 29% de los decesos totales",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allDiseases = await Disease.find().lean();

    if (!allDiseases.length) {
      console.log("[seed]: No se encuentran enfermedades, continuo...");
    } else {
      console.log(`[seed]: Encontrados ${allDiseases.length} deportes.`);
      await Disease.collection.drop();
      console.log("[seed]: Colección Diseases eliminada correctamente");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error eliminando la colección -->", error)
  )
  .then(async () => {
    await Disease.insertMany(diseases);
    console.log(
      `[seed]: ${diseases.length} nuevos enfermedades añadidos con éxito`
    );
  })
  .catch((error) =>
    console.log("[seed]: Error añadiendo las enfermedades", error)
  )
  .finally(() => mongoose.disconnect());

const diseaseLog = "Listado de enfermedades listo";

module.exports = diseaseLog;
