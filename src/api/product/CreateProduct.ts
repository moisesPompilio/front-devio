import { pordutosMemomerie } from '.';
import { Product } from '../../model/Product';

export async function CreateProduct(order: Product): Promise<Product> {
  const newOrder: Product = { ...order };
  const lastOrder = pordutosMemomerie[pordutosMemomerie.length - 1];
  const lastOrderId = lastOrder?.id ?? '0';
  const id = (parseInt(lastOrderId, 10) + 1).toString();
  newOrder.id = id;
  pordutosMemomerie.push(newOrder);
  return newOrder;
}
