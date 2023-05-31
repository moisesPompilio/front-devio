import './Cart..scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ProductCart } from '../../components/ProductCart/ProductCart';
import { TotalCart } from '../../components/TotalCart/TotalCart';
import { getOrderService } from '../../services/orde/getOrderService';

export function Cart() {
  const dispatch = useDispatch();
  const orderPedido = useAppSelector(state => state.orders.ordersPedido);
  useEffect(() => {
    getOrderService(dispatch);
  }, []);
  const produtosInxistentes = <h1>Você está sem produtos em seu carrinho</h1>;
  return (
    <div className="container">
      <h1>Seus pedidos</h1>
      <div className="cart">
        <div className="flex flex-column">
          {orderPedido.produtcs.length === 0
            ? produtosInxistentes
            : orderPedido.produtcs.map(product => (
                <ProductCart product={product} key={product.id} />
              ))}
        </div>
        <div>
          <TotalCart qtyProduct={orderPedido.produtcs.length} total={100} />
        </div>
      </div>
    </div>
  );
}
