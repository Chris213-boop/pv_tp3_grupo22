
function Productos () {
    let productos = []; //array simple para guardar productos
    

    function manejarSubmit(evento) {
        evento.preventDeFault (); //evita la recarga

        const nombre = document.getElementById ("nombre").value;
        const precio = document.getElementById ("precio").value;

        const producto = { nombre, precio };
        productos.push(producto);

        const lista = document.getElementById ("lista-productos");
        const item = document.createElement('li');
        item.textContent = `Producto: ${producto.nombre} - Precio: $${producto.precio}`;
        lista.appendChild(item);
    }

// render() {
//   return (
//     <div className='container'>
//       <h2 className='titulo'>Productos disponibles</h2>
//       <ul className='lista'>
//         {this.state.productos.map(producto => (
//           <li key={producto.id}>
//             {producto.nombre} - ${producto.precio}
//           </li>
//         ))}
//       </ul>
//       <button onClick={this.agregarProducto} className='boton-completar'>Agregar Producto</button>
//       <button onClick={this.eliminarProductoMasBarato} className='boton-eliminar'>Eliminar producto más barato</button>
//     </div>
//     );
//   }
// }
// export default Productos;



    return(
        <>
        <div className='container'>
          <h2 className='titulo'>LISTA DE PRODUCTOS</h2>
          <form onSubmit={manejarSubmit}>
              <input type="text" id='nombre' name="nombre" placeholder="nombre del producto" required />
              <input type="text" id="precio" name="precio" placeholder="Precio" required />
              <button id="boton" type="submit" className='boton'>Agregar Producto</button>
          </form>

          <h2>Productos Agregados</h2>
          <ul id="lista-productos" className='lista'> </ul>
          </div>
        </>
    );
    
}
export default Productos;