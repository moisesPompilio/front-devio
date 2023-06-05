import './ProductSingle.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Product } from '../../model/entity/Product';
import { getExtraFromArrayId } from '../../util/getExtraFromArrayId';
import { setProducSingleVisible } from '../../store/product/ProductSlice';
import { ProductCardSingle } from '../ProductCardSingle/ProductCardSingle';
import { ExtraCardSelect } from '../ExtraCardSelect/ExtraCardSelect';
import { priceFormatter } from '../../util/priceFormatter';
import { ProductOrder } from '../../model/entity/ProductOrder';
import { isertProductInCartService } from '../../services/orde/isertProductInCartService';

type ProductSingleProps = {
  product: Product;
};
const MAX_CHARACTERS_OBSERVATION = 300;
export function ProductSingle({ product }: ProductSingleProps) {
  const dispatch = useDispatch();

  const { name, price } = product;
  const [quantityOfProduct, setQuantityOfProduct] = useState(1);
  const [observation, setObservation] = useState('');
  const [isExceededLimitObservation, setIsExceededLimitObservation] =
    useState(false);
  const [extrasSelect, setExtrasSelect] = useState([]);
  const handleContinuarPedindo = () => {
    const productOrder: ProductOrder = {
      ...product,
      quantity: quantityOfProduct,
      observation,
      extras: [],
    };
    isertProductInCartService(dispatch, productOrder);
    dispatch(setProducSingleVisible(false));
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeObservation = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setObservation(value);
  };
  useEffect(() => {
    if (observation.length > MAX_CHARACTERS_OBSERVATION) {
      setIsExceededLimitObservation(true);
    } else if (
      isExceededLimitObservation &&
      observation.length <= MAX_CHARACTERS_OBSERVATION
    ) {
      setIsExceededLimitObservation(false);
    }
  }, [observation]);

  const extras = useAppSelector(state => state.extras.extras);
  const idExtrasFromProduct = product?.extra ?? [];
  const extrasProduct = getExtraFromArrayId(idExtrasFromProduct, extras);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickOverlayProduct = (event: any) => {
    if (event.target.classList.contains('overlay-bg')) {
      dispatch(setProducSingleVisible(false));
    }
  };

  const clickChangeQuantityOfProduct = (qty: number) => {
    if (quantityOfProduct + qty > 0) {
      setQuantityOfProduct(quantityOfProduct + qty);
    }
  };

  return (
    <div
      className="overlay-bg"
      onClick={clickOverlayProduct}
      role="button"
      onKeyDown={event => {
        if (event.key === 'Enter') {
          dispatch(setProducSingleVisible(false));
        }
      }}
      tabIndex={0}
    >
      <div className="product-details-modal bg-white">
        <button
          type="button"
          className="modal-close-btn flex flex-center fs-14"
          onClick={() => dispatch(setProducSingleVisible(false))}
        >
          <i className="fas fa-times" />
        </button>
        <h1>Revise seu pedido!</h1>
        <div className="product-card">
          <ProductCardSingle
            product={product}
            clickChangeQuantityOfProduct={clickChangeQuantityOfProduct}
            quantityOfProduct={quantityOfProduct}
          />
        </div>
        <div className="product-extras">
          {extrasProduct[0] && (
            <div>
              <div className="product-extras-title">
                <h3>Adicionais</h3>
                <p>
                  Selcione os ingredientes que você quer adicionar a mais no seu
                  lanche
                </p>
              </div>
              <div className="product-extras-exibtion">
                {extrasProduct.map(extra => (
                  <ExtraCardSelect extra={extra} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="product-observation">
          <h3>Observações</h3>
          <textarea
            value={observation}
            onChange={handleChangeObservation}
            className={isExceededLimitObservation ? 'input-error' : ''}
          />
          <div className="character-count">
            {MAX_CHARACTERS_OBSERVATION - observation.length} caracteres
            restantes
          </div>
        </div>
        <div className="product-resume">
          <div className="product-resume-qty">
            <p>
              {quantityOfProduct}x {name}
            </p>
            <p>{priceFormatter(price)}</p>
          </div>
          <div className="product-resume-total">
            <p>Total do pedido:</p>
            <h3>{priceFormatter(price * quantityOfProduct)}</h3>
          </div>
        </div>
        <div className="product-btns">
          <button
            type="button"
            className="btn-secondary"
            id="cintinuar"
            onClick={() => handleContinuarPedindo()}
          >
            Continuar pedido
          </button>
          <Link to="cart">
            <button
              id="carrinho"
              type="button"
              className="btn-primary"
              onClick={() => handleContinuarPedindo()}
            >
              Adicionar ao carrinho
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
