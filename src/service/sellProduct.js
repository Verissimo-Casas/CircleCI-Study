/**
 * A quantidade vendida pode ser de 1 ou mais unidades
 * --> Se o estoque ficar negativo uma exception deve ser lancada
 * --> O valor de venda nao pode ser maior que valor de compra.
 * @param {*} product 
 * @param {*} amount 
 */

export default function sellProduct(product, amount) {
  product.stock -= amount;
  return product;
}