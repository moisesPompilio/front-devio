import { ProductOrder } from './ProductOrder';

export type Order = {
  id: string;
  produtcs: ProductOrder[];
  total: number;
  status: 'pedido' | 'preparando' | 'pronto' | 'retirado';
};
