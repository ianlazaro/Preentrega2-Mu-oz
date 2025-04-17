document.addEventListener('DOMContentLoaded', async () => {
    const productos = await getData();
    const container = document.getElementById('container');
    productos.remeras.forEach(remera => {
        // console.log(remera.color, remera.precio, remera.nombre);
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>${remera.nombre}</h2>
        <p>Precio: ${remera.precio}</p>
        <p>Color: ${remera.color} </p>
        `;
        container.appendChild(div);
    });
});



// const productos = require('../productos.json');
// console.log(productos.remeras[0]);


// for (let i = 0; i < productos.remeras.length; i++) {
//     let remera = productos.remeras[i];
//     console.log(remera.color, remera.precio, remera.nombre);
// }