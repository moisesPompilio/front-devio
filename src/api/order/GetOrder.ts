import { orders } from '.';
import { Order } from '../../model/Order';

export async function GetOrder(): Promise<Order[]> {
  return orders;
}
