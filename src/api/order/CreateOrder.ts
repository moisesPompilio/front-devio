import { orders } from '.';
import { CreateOrder } from '../../model/CreateOrder';
import { Order } from '../../model/entity/Order';

export async function CreateOrder(order: CreateOrder): Promise<Order> {
  const lastOrder = orders[orders.length - 1];
  const lastOrderId = lastOrder.id;
  const id = (parseInt(lastOrderId, 10) + 1).toString();
  const newOrder: Order = { ...order, id };
  orders.push(newOrder);
  return newOrder;
}
