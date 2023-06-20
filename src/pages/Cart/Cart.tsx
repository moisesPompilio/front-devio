import './Cart..scss';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ProductCart } from '../../components/ProductCart/ProductCart';
import { TotalCart } from '../../components/TotalCart/TotalCart';
import { getOrderService } from '../../services/orde/getOrderService';
import { calculateOrderTotalPrice } from '../../util/calculateOrderTotalPrice';

export function Cart() {
  const dispatch = useDispatch();
  const orderPedido = useAppSelector(state => state.orders.ordersPedido);
  const [priceTotal, setPriceTotal] = useState(0);
  const produtosInxistentes = <h1>Você está sem produtos em seu carrinho</h1>;

  useEffect(() => {
    getOrderService(dispatch);
  }, []);

  const calculateTotalPrice = async () => {
    const productTotalPrice = calculateOrderTotalPrice(orderPedido);

    setPriceTotal(productTotalPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [orderPedido]);
  return (
    <div className="container">
      <h1>Seus pedidos</h1>
      <div className="cart">
        <div className="flex flex-column">
          {orderPedido.products.length === 0
            ? produtosInxistentes
            : orderPedido.products.map(product => (
                <ProductCart product={product} key={product.id} />
              ))}
        </div>
        <div>
          <TotalCart
            qtyProduct={orderPedido.products.length}
            total={priceTotal}
          />
        </div>
      </div>
    </div>
  );
}
