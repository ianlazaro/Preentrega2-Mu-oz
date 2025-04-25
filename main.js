document.addEventListener('DOMContentLoaded', async () => {
    const productos = await getData();
    const container = document.getElementById('container');
    productos.remeras.forEach(remera => {
        // console.log(remera.color, remera.precio, remera.nombre);
        const div = document.createElement('div');
        div.setAttribute("class", "container-sm");
        div.innerHTML = `
        <h2 class="text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" >${remera.nombre}</h2>
        <p>Precio: ${remera.precio}</p>
        <p>Color: ${remera.color} </p>
        <a class="btn-add btn-primary" id=boton${remera.id}>Añadir Carrito</a>
        `;
        container.appendChild(div);

        const boton = document.getElementById(`boton${remera.id}`);
        boton.addEventListener('click', () => {
            console.log(remera.stock++);
            
        });
    });
});



// const productos = require('../productos.json');
// console.log(productos.remeras[0]);


// for (let i = 0; i < productos.remeras.length; i++) {
//     let remera = productos.remeras[i];
//     console.log(remera.color, remera.precio, remera.nombre);
// }