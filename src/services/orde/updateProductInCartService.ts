import { Dispatch } from 'redux';
import { setOrdersPedido } from '../../store/order/OrderSlice';
import {
  readCartFromLocalStorage,
  writeCartToLocalStorage,
} from '../../util/localStorageCart';
import { Order } from '../../model/entity/Order';
import { ProductOrder } from '../../model/entity/ProductOrder';

const observationsAreTheSame = (
  observation1?: string,
  observation2?: string,
): boolean => {
  if (
    observation1 !== undefined &&
    observation2 !== undefined &&
    observation1 === observation2
  ) {
    return true;
  }
  if (observation1 === undefined && observation2 === undefined) {
    return true;
  }
  return false;
};

export const updateProductInCartService = async (
  dispatch: Dispatch,
  productOrder: ProductOrder,
): Promise<void> => {
  try {
    const order = readCartFromLocalStorage();
    const produtcs = order.products.map(product => {
      console.log(
        observationsAreTheSame(product.observation, productOrder.observation),
      );
      if (
        product.id === productOrder.id &&
        product.extras.length === productOrder.extras.length &&
        observationsAreTheSame(product.observation, productOrder.observation)
      ) {
        return productOrder;
      }
      return product;
    });
    const newOrder: Order = { ...order, products: produtcs };
    writeCartToLocalStorage(newOrder);
    dispatch(setOrdersPedido(newOrder));
  } catch (error) {
    console.error(error);
  }
};
