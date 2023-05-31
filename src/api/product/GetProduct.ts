import { pordutosMemomerie, products } from '.';
import { Product } from '../../model/entity/Product';

export async function GetProduct(
  searc?: string,
  //   page?: number,
  //   ordeBy?: string,
): Promise<Product[]> {
  products.length = 0;
  if (searc) {
    products.push(
      ...pordutosMemomerie.filter(
        product => product.name.includes(searc) || product.code.includes(searc),
      ),
    );
  } else {
    products.push(...pordutosMemomerie);
  }
  return products;
}
