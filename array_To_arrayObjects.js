const regiones = [
  "Región Metropolitana",
  "XV Árica y Parinacota",
  "| Tarapacá",
  "|| Antofagasta",
];

const nuevo = regiones.map((region) => ({
  label: region,
  value: region,
  region,
}));

 console.log(nuevo);
