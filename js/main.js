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
  "xingfa.png",
  "electra.png",
  "elitech.png",
];

const track = document.createElement("div");
track.classList.add("marcas-track");
const listaCompleta = [
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
  ...imagenes,
]; // Duplicar las imágenes para el efecto infinito
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

// CREAR PRODUCTOS DESTACADOS
function crearDestacados(productosDestacados) {
  const contenedorDestacados = document.getElementById("destacados");
  contenedorDestacados.innerHTML = ""; // Limpiar contenido previo

  productosDestacados.forEach((producto) => {
    const nuevoDestacado = document.createElement("div");
    nuevoDestacado.classList.add("tarjeta-destacado");

    nuevoDestacado.innerHTML = `
      <img src="./img/destacados/${producto.id}.png" class="imagen-destacado" /> 
      <h3 class="nombre-destacado">${producto.nombre}</h3>
      <p class="precio-destacado">$${producto.precio}</p>
      <button class="btn-agregar">Agregar al carrito</button>
    `;

    contenedorDestacados.appendChild(nuevoDestacado);

    // Agregar funcionalidad al botón "Agregar al carrito"
    const boton = nuevoDestacado.querySelector(".btn-agregar");
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto);
    });
  });
}

//CARGAR DESDE EL ARCHIVO JSON
fetch("./json/destacados.json")
  .then((response) => {
    if (!response.ok) throw new Error("Error al cargar el archivo JSON");
    return response.json();
  })
  .then((data) => {
    crearDestacados(data);
  })
  .catch((error) => console.error("Error:", error));

// BUSCADOR DE PRODUCTOS
document.addEventListener("DOMContentLoaded", () => {
  const inputBusqueda = document.getElementById("busqueda");
  const btnBusqueda = document.getElementById("btn-busqueda");

  function filtrarProductos() {
    const texto = inputBusqueda.value.toLowerCase().trim();
    const productos = document.querySelectorAll(".tarjeta-destacado");

    productos.forEach((producto) => {
      const nombre = producto.querySelector("h3").textContent.toLowerCase();
      producto.style.display = nombre.includes(texto) ? "block" : "none";
    });
  }

  // BUSCADOR DE PRODUCTOS MEJORADO
  /*function filtrarProductos() {
  const texto = inputBusqueda.value.toLowerCase().trim();

  const productos = document.querySelectorAll(".tarjeta-destacado");
  productos.forEach((producto) => {
    const nombre = producto.querySelector("h3").textContent.toLowerCase();

    // También buscamos dentro de dataset, si guardás las categorías o tags ahí
    const categoria = producto.dataset.categoria || "";
    const tags = producto.dataset.tags || "";

    // Mostrar si el texto coincide con alguno de los campos
    const coincide =
      nombre.includes(texto) ||
      categoria.toLowerCase().includes(texto) ||
      tags.toLowerCase().includes(texto);

    producto.style.display = coincide ? "block" : "none";
  });
}*/

  //ESTO ES PARA AGREGAR EN BUSQUEDAS EN EL JSON. TANTO EL TAG COMO EL CATEGORIAS Y CONFIGURARLO EN EL JS PARA QUE TE LO ENCUENTRE

  /*[
  {
    "id": 1,
    "nombre": "Piso techo de 15000 frigorías INVERTER",
    "precio": 120000,
    "categoria": "aire acondicionado",
    "tags": ["piso techo", "inverter", "frio", "calor", "aire"]
  },
  {
    "id": 2,
    "nombre": "Motocompresor 1/4 hp Electrolux",
    "precio": 80000,
    "categoria": "compresores",
    "tags": ["motocompresor", "heladera", "refrigeración", "compresor"]
  }
]*/

  btnBusqueda.addEventListener("click", filtrarProductos);
  inputBusqueda.addEventListener("keyup", (e) => {
    if (e.key === "Enter") filtrarProductos();
  });
  inputBusqueda.addEventListener("input", filtrarProductos);
});
