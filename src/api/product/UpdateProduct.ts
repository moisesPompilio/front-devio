import { pordutosMemomerie } from '.';
import { Product } from '../../model/Product';

export async function UpdateProduct(
  id: string,
  productUpdate: Product,
): Promise<void> {
  const index = pordutosMemomerie.findIndex(product => product.id === id);
  pordutosMemomerie[index] = productUpdate;
}
