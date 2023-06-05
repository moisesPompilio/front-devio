import { Dispatch } from 'redux';
import { setOrdersPedido } from '../../store/order/OrderSlice';
import { writeCartToLocalStorage } from '../../util/localStorageCart';
import { Order } from '../../model/entity/Order';

export const updateProductInCartService = async (
  dispatch: Dispatch,
  order: Order,
): Promise<void> => {
  try {
    writeCartToLocalStorage(order);
    dispatch(setOrdersPedido(order));
  } catch (error) {
    console.error(error);
  }
};
