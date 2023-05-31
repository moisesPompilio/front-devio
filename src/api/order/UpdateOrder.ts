import { orders } from '.';
import { Order } from '../../model/entity/Order';

export async function UpdateOrder(
  id: string,
  extraUpdate: Order,
): Promise<void> {
  const index = orders.findIndex(order => order.id === id);
  orders[index] = extraUpdate;
}
