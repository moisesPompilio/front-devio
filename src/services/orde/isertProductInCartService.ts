import { Dispatch } from 'redux';
import { STATUS } from '../../model/entity/Status';
import { setOrdersPedido, setStatusOrder } from '../../store/order/OrderSlice';
import {
  readCartFromLocalStorage,
  writeCartToLocalStorage,
} from '../../util/localStorageCart';
import { ProductOrder } from '../../model/entity/ProductOrder';

export const isertProductInCartService = async (
  dispatch: Dispatch,
  productOrder: ProductOrder,
): Promise<void> => {
  dispatch(setStatusOrder(STATUS.LOADING));
  try {
    const orderPedido = readCartFromLocalStorage();
    orderPedido.produtcs.push(productOrder);
    writeCartToLocalStorage(orderPedido);
    dispatch(setOrdersPedido(orderPedido));
  } catch (error) {
    console.error(error);
  }
  dispatch(setStatusOrder(STATUS.IDLE));
};
