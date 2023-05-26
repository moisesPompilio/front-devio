export type Order = {
  id?: string;
  produtos_id: string;
  extra?: string[];
  total: number;
  status: 'pedido' | 'preparando' | 'pronto' | 'retirado';
};
