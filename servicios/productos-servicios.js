const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) =>respuesta.json());

const crearProducto = (nombre, imagenUrl, precio, descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,imagenUrl,precio,descripcion, id: uuid.v4()})
    })
    .then(respuesta => {
        if(respuesta.ok){
            return respuesta.body;
        }
        throw new Error("No fue posible crear un producto")
    })
};


export const productoServicios = {
    crearProducto,
    listaProductos
};