// CREA PRODUCTOS DESTACADOS
function crearDestacados(productosDestacados) {
  const contenedorDestacados = document.getElementById("destacados");
  contenedorDestacados.innerHTML = ""; // Limpiar contenido previo

  productosDestacados.forEach((producto) => {
    const nuevoDestacado = document.createElement("div");
    nuevoDestacado.classList.add("tarjeta-destacado");

    nuevoDestacado.innerHTML = `
      <img src="../img/destacados/${producto.id}.png" alt="${producto.nombre}" class="imagen-destacado" />
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

/* const botonAgregar = tarjeta.querySelector(".btn-agregar");
botonAgregar.addEventListener("click", () => {
  agregarAlCarrito(producto.id); */
