import { Product } from "../domain/Product";
import { products } from "../infraestructure/products";

export const getProducts = (): Array<Product> => {
  return products;
};
