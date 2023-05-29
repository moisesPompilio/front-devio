import './ProductList.scss';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductSingle } from '../ProductSingle/ProductSingle';
import { Product } from '../../model/entity/Product';
import { setProducSingleVisible } from '../../store/product/ProductSlice';

export function ProductList() {
  const dispatch = useDispatch();
  const products = useAppSelector(state => state.products.products);
  const producSingleVisible = useAppSelector(
    state => state.products.ProducSingleVisible,
  );
  const [chosenProduct, setChosenProduct] = useState(products[0]);
  const slectProductHandle = (product: Product) => {
    setChosenProduct(product);
    dispatch(setProducSingleVisible(true));
  };
  return (
    <section className="product py-5" id="products">
      {producSingleVisible && <ProductSingle product={chosenProduct} />}
      <div className="product-content">
        <div className="product-items grid">
          {products[0] !== undefined ? (
            products.map(product => (
              <div
                role="button"
                onClick={() => slectProductHandle(product)}
                onKeyDown={event => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    slectProductHandle(product);
                  }
                }}
                tabIndex={0}
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <h3 className=" fw-7 ls-1">
              Não foi possivel encontrar os produtos.
            </h3>
          )}
        </div>
      </div>
    </section>
  );
}
