// 3 - Crear un array con los productos, pero con el precio con IVA incluido (21%), usando map.

// map : devuelve un nuevo array
const preciosConIVA = this.state.productos.map((p) =>{
  return {
    ...p,
    precio : p.precio + (0.21 * p.precio)
  }

});
console.log(preciosConIVA);