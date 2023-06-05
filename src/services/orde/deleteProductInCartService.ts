import { Dispatch } from 'redux';
import { setOrdersPedido } from '../../store/order/OrderSlice';
import {
  readCartFromLocalStorage,
  writeCartToLocalStorage,
} from '../../util/localStorageCart';
import { Order } from '../../model/entity/Order';

export const deleteProductInCartService = async (
  dispatch: Dispatch,
  idProduct: string,
): Promise<void> => {
  try {
    const order = readCartFromLocalStorage();
    const newProduct = order.produtcs.filter(
      products => products.id !== idProduct,
    );
    const newOrder: Order = { ...order, produtcs: newProduct };
    writeCartToLocalStorage(newOrder);
    dispatch(setOrdersPedido(newOrder));
  } catch (error) {
    console.error(error);
  }
};
