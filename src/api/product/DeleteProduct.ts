import { pordutosMemomerie } from '.';

export async function DeleteOrder(id: string): Promise<void> {
  const index = pordutosMemomerie.findIndex(order => order.id === id);
  if (index !== -1) {
    pordutosMemomerie.splice(index, 1);
  }
}
