//6 - Eliminar el producto con el precio mas bajo del array. Mostrar como queda el array.
/*const precios = productos.map(p => p.precio);
  const precioMinimo = Math.min(...precios);
  const indexMin = productos.findIndex(p => p.precio === precioMinimo);
  if (indexMin !== -1) {
    productos.splice(indexMin, 1);
  }

  console.log("Array después de eliminar el producto con el precio más bajo:");
  console.log(productos);
  */
eliminarProductoMasBarato = () =>{
  const {productos} = this.state;

  if(productos.length === 0) return;
  const precios = productos.map(p => p.precio);
  const precioMinimo = Math.min(...precios);
  const indexMin = productos.findIndex(p => p.precio === precioMinimo);

  if (indexMin !== -1) {
    const nuevaLista = [...productos];
    nuevaLista.splice(indexMin, 1);

    this.setState({productos: nuevaLista});
  }
};