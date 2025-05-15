// 4 - Ordenar el array original por precio (de menor a mayor)
const productosOrdenados = [...this.state.productos].sort((a, b) => a.precio - b.precio);
  console.log("Productos ordenados por precio (ascendente):");
  console.log(productosOrdenados);