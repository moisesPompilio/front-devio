import { api } from '..';
import { Product } from '../../model/entity/Product';

export async function GetProduct(
  searc?: string,
  page?: number,
  ordeBy?: string,
  categoryId?: string,
): Promise<Product[]> {
  const response = await api.get('product');
  const { products } = response.data;
  return products;
}
