import React from 'react';
import App from '../../App';

const productos = [
  { id: 1, nombre: 'Camisa', precio: 25 },
  { id: 2, nombre: 'Pantalón', precio: 40 },
  { id: 3, nombre: 'Remera', precio:20  },
  { id: 4, nombre: 'Buzos', precio: 60 },
  { id: 5, nombre: 'zapatos', precio: 59 },
  { id: 6, nombre: 'Camperas', precio: 65 },
  { id: 7, nombre: 'Gorras', precio: 15 },
  { id: 7, nombre: 'Chombas', precio: 50 },
];

function Productos() {
  console.log("Lista de productos:");
  console.log(productos);

  return (
    <div>
      <h2>Productos disponibles</h2>
      <ul>
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