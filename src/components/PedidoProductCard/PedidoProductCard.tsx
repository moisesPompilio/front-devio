import { Order } from '../../model/entity/Order';
import './PedidoProductCard.scss';

type PedidoProductCardProps = {
  order: Order;
};

export function PedidoProductCard({ order }: PedidoProductCardProps) {
  const { id, produtcs, total } = order;
  return <div />;
}
