import './Cart..scss';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ProductCart } from '../../components/ProductCart/ProductCart';
import { TotalCart } from '../../components/TotalCart/TotalCart';
import { getOrderService } from '../../services/orde/getOrderService';
import { updateProductInCartService } from '../../services/orde/updateProductInCartService';

export function Cart() {
  const dispatch = useDispatch();
  const orderPedido = useAppSelector(state => state.orders.ordersPedido);
  const [priceTotal, setPriceTotal] = useState(0);
  const produtosInxistentes = <h1>Você está sem produtos em seu carrinho</h1>;

  useEffect(() => {
    getOrderService(dispatch);
  }, []);

  const calculateTotalPrice = () => {
    orderPedido.produtcs.forEach(product => {
      let extrasTotalPrice = 0;
      product.extras.forEach(extras => {
        extrasTotalPrice = extras.price + extrasTotalPrice;
      });
      const productTotalPrice =
        product.quantity * (product.price + extrasTotalPrice);
      setPriceTotal(priceTotal + productTotalPrice);
    });
  };

  useEffect(() => {
    calculateTotalPrice();
    if (orderPedido.produtcs.length > 0)
      updateProductInCartService(dispatch, orderPedido);
  }, [orderPedido]);
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
          <TotalCart
            qtyProduct={orderPedido.produtcs.length}
            total={priceTotal}
          />
        </div>
      </div>
    </div>
  );
}
