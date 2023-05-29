import { pordutosMemomerie } from '.';
import { CreateProduct } from '../../model/CreateProduct';
import { Product } from '../../model/entity/Product';

export async function CreateProduct(product: CreateProduct): Promise<Product> {
  const lastProduct = pordutosMemomerie[pordutosMemomerie.length - 1];
  const lastProductId = lastProduct.id;
  const id = (parseInt(lastProductId, 10) + 1).toString();
  const newProduct: Product = { ...product, id };
  pordutosMemomerie.push(newProduct);
  return newProduct;
}
