// 2 - Crear un nuevo array con los productos cuyo precio sea mayor a $20, usando filter.
const preciosMayores = this.state.productos.filter((producto => (producto.precio > 20)));
console.log(preciosMayores);