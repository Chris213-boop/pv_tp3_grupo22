import React from 'react';
import App from '../../App';

const productos = [
  { id: 1, nombre: 'Camisa', precio: 25 },
  { id: 2, nombre: 'Pantalón', precio: 40 },
  { id: 3, nombre: 'Remera', precio: 20  },
  { id: 4, nombre: 'Buzos', precio: 60 },
  { id: 5, nombre: 'Zapatos', precio: 59 },
  { id: 6, nombre: 'Camperas', precio: 65 },
  { id: 7, nombre: 'Gorras', precio: 15 },
  { id: 8, nombre: 'Chombas', precio: 50 },
  { id: 9, nombre: 'Guantes', precio: 18 },
  { id: 10, nombre: 'Bufandas', precio: 22 }
];

function Productos() {
  // console.log("Lista de productos:");
  // console.log(productos);

//1 - Mostrar en consola cada producto en el formato: "Producto: [descripción] - Precio:
//        $[precio]", usando forEach.

productos.forEach((producto, index) => {
  console.log("Producto",index + 1,": " , producto.nombre," - Precio: $" , producto.precio);
});

console.log("---------------------------------------------");

// 2 - Crear un nuevo array con los productos cuyo precio sea mayor a $20, usando filter.
const preciosMayores = productos.filter((productos => (productos.precio > 20)));
console.log(preciosMayores);

// 3 - Crear un array con los productos, pero con el precio con IVA incluido (21%), usando map.

// map : devuelve un nuevo array
const preciosConIVA = productos.map((p) =>{
  return {
    ...p,
    precio : p.precio + (0.21 * p.precio)
  }

});
console.log(preciosConIVA);

//5 - Agregar un nuevo producto al final del array (por ejemplo, { descripcion: "Parlante
//   Bluetooth", precio: 59000.90 }).
productos.push({
  id: productos.length + 1 ,
  nombre: "Parlante Bluetooth",
  precio: 59000.90
});


//6 - Eliminar el producto con el precio mas bajo del array. Mostrar como queda el array.
const precios = productos.map(p => p.precio);
  const precioMinimo = Math.min(...precios);
  const indexMin = productos.findIndex(p => p.precio === precioMinimo);
  if (indexMin !== -1) {
    productos.splice(indexMin, 1);
  }

  console.log("Array después de eliminar el producto con el precio más bajo:");
  console.log(productos);

  return (
    <div className='container'>
      <h2 className='titulo'>Productos disponibles</h2>
      <ul className='lista'>
        {productos.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;