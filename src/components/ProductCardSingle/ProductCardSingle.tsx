import './ProductCardSingle.scss';
import { Product } from '../../model/entity/Product';
import { priceFormatter } from '../../util/priceFormatter';

type ProductCardSingleProps = {
  product: Product;
  quantityOfProduct: number;
  clickChangeQuantityOfProduct: (qty: number) => void;
};

export function ProductCardSingle({
  product,
  quantityOfProduct,
  clickChangeQuantityOfProduct,
}: ProductCardSingleProps) {
  const { image, name, description, price } = product;

  return (
    <div className="product-card">
      <div className="product-card-item">
        <div className="bg-product">
          <img src={image} alt={name} />
          <div className="bg-white"> </div>
        </div>
        <div className="product-card-detail">
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="product-card-detail-qty">
            <button
              type="button"
              className="btn-primary"
              onClick={() => clickChangeQuantityOfProduct(-1)}
            >
              {' '}
              -{' '}
            </button>
            <p>{quantityOfProduct}</p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => clickChangeQuantityOfProduct(1)}
            >
              {' '}
              +{' '}
            </button>
          </div>
        </div>
      </div>
      <div className="product-card-price">
        <h3>{priceFormatter(price)}</h3>
      </div>
    </div>
  );
}
