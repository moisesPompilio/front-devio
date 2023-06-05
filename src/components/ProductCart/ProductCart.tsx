import { useEffect, useState } from 'react';
import { ProductOrder } from '../../model/entity/ProductOrder';
import { priceFormatter } from '../../util/priceFormatter';
import './ProductCart.scss';

type ProductCartProps = {
  product: ProductOrder;
};

export function ProductCart({ product }: ProductCartProps) {
  const { image, name, quantity, price, extras } = product;
  const [quantityProduct, setQuantityProduct] = useState(quantity);
  const [subTotal, setSubTotal] = useState(0);
  const productOrder: ProductOrder = {
    ...product,
    quantity: quantityProduct,
  };

  const caculateSubTotalExtras = (): number => {
    let value = 0;
    if (extras.length === 0) {
      return 0;
    }
    extras.forEach(extra => {
      value += extra.price;
    });
    return value;
  };
  const clickChangeQuantityOfProduct = (numero: number) => {
    const newQuantityProduct = quantityProduct + numero;
    if (newQuantityProduct > 0) {
      setQuantityProduct(newQuantityProduct);
    }
  };

  useEffect(() => {
    setSubTotal((caculateSubTotalExtras() + price) * quantityProduct);
  }, [quantityProduct]);

  return (
    <div className="product-cart bg-white flex-between">
      <div className="product-cart-resume fs-13">
        <div className="product-cart-img flex flex-column">
          <img src={image} alt={name} />
          <button type="button" className="btn-danger">
            <i className="fas fa-trash" />
          </button>
        </div>
        <div className="product-cart-itens flex flex-column">
          <div>
            {name}: {priceFormatter(price)}
          </div>
          {extras[0] &&
            extras.map(extra => (
              <div>
                {extra.name}: {priceFormatter(extra.price)}
              </div>
            ))}
          <div className="product-cart-itens-btn">
            <button
              type="button"
              className="btn-primary"
              onClick={() => clickChangeQuantityOfProduct(-1)}
            >
              -
            </button>
            <p>{quantityProduct}</p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => clickChangeQuantityOfProduct(1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="product-cart-total">
          <h3>Sub Total: {priceFormatter(subTotal)}</h3>
        </div>
      </div>
    </div>
  );
}
