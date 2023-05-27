import { orders } from '.';

export async function DeleteOrder(id: string): Promise<void> {
  const index = orders.findIndex(order => order.id === id);
  if (index !== -1) {
    orders.splice(index, 1);
  }
}
