import './ProductCard.scss';
import { Product } from '../../model/entity/Product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { name, description, price, image } = product;
  return (
    <div className="product-item bg-white">
      <img src={image} alt={name} className="product-item-image" />
      <div className="product-item-text flex-collunm">
        <h5 className="product-item-text-name text-center">{name}</h5>
        <p className="product-item-text-description text-center">
          {description}
        </p>
      </div>
      <h5 className="product-item-price">R${price}</h5>
    </div>
  );
}
