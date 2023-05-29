import { Dispatch } from 'redux';
import { STATUS } from '../../model/entity/Status';
import {
  setOrder,
  setOrdersPedido,
  setOrdersPreparando,
  setOrdersRetirada,
  setStatusOrder,
  setordersPronto,
} from '../../store/order/OrderSlice';
import { GetOrder } from '../../api/order/GetOrder';

export const getOrderService = async (dispatch: Dispatch): Promise<void> => {
  dispatch(setStatusOrder(STATUS.LOADING));
  try {
    const orders = await GetOrder();
    dispatch(setOrder(orders));
    const orderPedido = orders.filter(order => order.status === 'pedido');
    if (orderPedido.length > 0) {
      dispatch(setOrdersPedido(orderPedido[0]));
    }
    const orderPreparando = orders.filter(
      order => order.status === 'preparando',
    );
    dispatch(setOrdersPreparando(orderPreparando));

    const orderPronto = orders.filter(order => order.status === 'pronto');
    dispatch(setordersPronto(orderPronto));

    const orderRetirada = orders.filter(order => order.status === 'retirado');
    dispatch(setOrdersRetirada(orderRetirada));
  } catch (error) {
    console.error(error);
  }
  dispatch(setStatusOrder(STATUS.IDLE));
};
