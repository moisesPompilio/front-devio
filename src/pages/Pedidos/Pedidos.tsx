import { useDispatch } from 'react-redux';
import './Pedidos.scss';
import { useEffect } from 'react';
import { getOrderService } from '../../services/orde/getOrderService';
import { useAppSelector } from '../../hooks/useAppSelector';

export function Pedidos() {
  const dispatch = useDispatch();
  // const orderPreparando = useAppSelector(
  //   state => state.orders.ordersPreparando,
  // );
  // const ordenPronto = useAppSelector(state => state.orders.ordersPronto);
  useEffect(() => {
    getOrderService(dispatch);
  }, []);
  return (
    <div className="container">
      <div className="flex flex-between">
        <div className="product-preparando">sads</div>
        <div className="product-pronto">sads</div>
      </div>
    </div>
  );
}
