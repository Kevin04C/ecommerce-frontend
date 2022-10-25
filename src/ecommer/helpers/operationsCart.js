export const generateTotal = (cart = []) => {
  return cart.reduce((prev, curr) => prev + Number(curr.precioUnitario * curr.cantidadCarrito), 0); 
};

export const generateIGV = (total) => {
  return 0.18 * total;
}
