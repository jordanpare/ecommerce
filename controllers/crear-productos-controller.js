import { productoServicios } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) =>{    
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const imagenUrl = document.querySelector("[data-url]").value;
    const categoria  = document.querySelector("[data-categoria]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    console.log(nombre," - ",imagenUrl," - ",precio," - ",descripcion);
    productoServicios.crearProducto(nombre, imagenUrl, precio, descripcion)
    .then((respuesta) => {
        window.location.href = "/index.html"
        alert("El producto fue creado con exito")
        console.log(respuesta)
    }).catch((err) => {
        console.log(err)
    })
});