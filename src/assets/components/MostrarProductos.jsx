//1 - Mostrar en consola cada producto en el formato: "Producto: [descripción] - Precio:
//        $[precio]", usando forEach.

  this.state.productos.forEach((producto, index) => {
    console.log("Producto",index + 1,": " , producto.nombre," - Precio: $" , producto.precio);
});

console.log("---------------------------------------------");