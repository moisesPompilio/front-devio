import { orders } from '.';
import { Order } from '../../model/Order';

export async function CreateOrder(order: Order): Promise<Order> {
  const newOrder: Order = { ...order };
  const lastOrder = orders[orders.length - 1];
  const lastOrderId = lastOrder?.id ?? '0';
  const id = (parseInt(lastOrderId, 10) + 1).toString();
  newOrder.id = id;
  orders.push(newOrder);
  return newOrder;
}
