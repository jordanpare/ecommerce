const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) =>respuesta.json());

const crearProducto = (nombre, imagenUrl, precio, descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
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

const eliminarProducto = (id) => {
    console.log("Eliminar a --> ", id);
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE"

    })
}

const detalleProducto = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`).then ( respuesta => respuesta.json()); 
       
};

const actualizarProducto = (nombre, categoria, precio, imagenUrl, descripcion, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
    method : "PUT",
    headers : {
        "Content-Type": "application/json"
        },
    body: JSON.stringify({nombre, categoria, precio, imagenUrl, descripcion})
}).then((respuesta) => respuesta)
.catch((err) => console.log(err));
};


export const productoServicios = {
    crearProducto,
    listaProductos,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
};