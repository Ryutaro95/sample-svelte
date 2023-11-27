import { loadCart } from "$lib/server/cart";
import { loadProducts } from "$lib/server/product";

async function getProductFromDatabaseById(productIds) {
  const products = await loadProducts();
  return products.filter((product) => productIds.includes(product.id));
}

export async function load() {
  const cart = await loadCart();
  const productsInCart = getProductFromDatabaseById(cart);
  return { productsInCart };
}
