import { orders } from '.';
import { Order } from '../../model/entity/Order';

export async function GetOrder(): Promise<Order[]> {
  return orders;
}
