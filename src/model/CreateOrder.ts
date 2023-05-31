import { ProductOrder } from './entity/ProductOrder';

export type CreateOrder = {
  produtcs: ProductOrder[];
  total: number;
  observartion?: string;
  status: 'pedido';
};
