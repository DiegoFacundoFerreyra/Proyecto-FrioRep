//CARRUSEL
const marcas = document.querySelector(".marcas");
const imagenes = [
  "fabra.png",
  "acyc.png",
  "anton.png",
  "armacell.png",
  "comptek.png",
  "cubigel.png",
  "dosivac.png",
  "drean.png",
  "electrolux.png",
  "eluma.png",
  "gafa.png",
  "gmcc.png",
  "huayi.png",
  "lg.png",
  "mabe.png",
  "mc.png",
  "necton.png",
  "patrick.png",
  "philco.png",
  "samsung.png",
  "tacsa.png",
  "unite.png",
  "value.png",
  "whirlpool.png",
];

const track = document.createElement("div");
track.classList.add("marcas-track");
const listaCompleta = [...imagenes, ...imagenes]; // Duplicar las imágenes para el efecto infinito
listaCompleta.forEach((img) => {
  const imagen = document.createElement("img");
  imagen.src = `../img/marcas/${img}`;
  imagen.alt = img;
  track.appendChild(imagen);
});
marcas.appendChild(track);

let posicion = 0;
const velocidad = 1; // Velocidad del carrusel
function animarCarrusel() {
  posicion -= velocidad;
  const anchoTotal = track.scrollWidth / 2; // Ancho total de las imágenes originales
  if (Math.abs(posicion) >= anchoTotal) {
    posicion = 0; // Reiniciar la posición para el efecto infinito
  }
  track.style.transform = `translateX(${posicion}px)`;
  requestAnimationFrame(animarCarrusel);
}
animarCarrusel();
