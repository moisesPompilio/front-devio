import { Order } from '../model/entity/Order';

export const calculateOrderTotalPrice = (order: Order): number => {
  const productTotalPrice = order.products.reduce((total, product) => {
    const extrasTotalPrice = product.extras.reduce((extrasTotal, extra) => {
      return extrasTotal + extra.price;
    }, 0);

    return total + product.quantity * (product.price + extrasTotalPrice);
  }, 0);

  return productTotalPrice;
};
