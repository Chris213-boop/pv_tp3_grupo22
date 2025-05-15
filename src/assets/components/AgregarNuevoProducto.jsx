//5 - Agregar un nuevo producto al final del array (por ejemplo, { descripcion: "Parlante
//   Bluetooth", precio: 59000.90 }).
/*productos.push({
  id: productos.length + 1 ,
  nombre: "Parlante Bluetooth",
  precio: 59000.90
});*/

agregarProducto = () =>{
  const nuevoProducto = {
    id: this.state.productos.length + 1 ,
    nombre: "Parlante Bluetooth",
    precio: 59000.90
  };
  this.setState(prevState => ({
    productos: [...prevState.productos, nuevoProducto]
  }));
};
