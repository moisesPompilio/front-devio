import { ProductOrder } from './ProductOrder';

export type Order = {
  id: string;
  name_cliente?: string;
  products: ProductOrder[];
  total: number;
  status: 'pedido' | 'preparando' | 'pronto' | 'retirado';
};
