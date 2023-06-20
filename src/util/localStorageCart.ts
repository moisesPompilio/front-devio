import { Order } from '../model/entity/Order';

const CART_KEY = 'cart';
export const readCartFromLocalStorage = (): Order => {
  const order: Order = {
    id: '1',
    products: [],
    status: 'pedido',
    total: 0,
    name_cliente: 'a',
  };
  try {
    const cartData = localStorage.getItem(CART_KEY);
    return cartData !== null ? JSON.parse(cartData) : order;
  } catch (error) {
    return order;
  }
};

export const writeCartToLocalStorage = (cartData: Order) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cartData));
};
