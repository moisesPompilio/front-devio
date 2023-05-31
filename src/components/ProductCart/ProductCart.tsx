import { ProductOrder } from '../../model/entity/ProductOrder';
import { priceFormatter } from '../../util/priceFormatter';
import './ProductCart.scss';

type ProductCartProps = {
  product: ProductOrder;
};

export function ProductCart({ product }: ProductCartProps) {
  const { image, name, quantity, price } = product;
  const extras = product?.extras ?? [];
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
  const subTotal = (caculateSubTotalExtras() + price) * quantity;
  return (
    <div className="product-cart bg-white flex-between">
      <div className="product-cart-resume fs-13">
        <div className="product-cart-img flex flex-column">
          <img src={image} alt={name} />
          <button type="button" className="btn-danger">
            <i className="fas fa-clipboard" />
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
              // onClick={() => clickChangeQuantityOfProduct(-1)}
            >
              {' '}
              -{' '}
            </button>
            <p>{quantity}</p>
            <button
              type="button"
              className="btn-primary"
              // onClick={() => clickChangeQuantityOfProduct(1)}
            >
              {' '}
              +{' '}
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
