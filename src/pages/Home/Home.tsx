import './Home.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { CategorySlider } from '../../components/CategorySlider/CategorySlider';
import { ProductList } from '../../components/ProductList/ProductList';
import { getCategoryService } from '../../services/category/getCategoryService';
import { getProductService } from '../../services/product/getProductService';
import { getExtraService } from '../../services/extra/getExtraService';
import { getOrderService } from '../../services/orde/getOrderService';

export function Home() {
  const categories = useAppSelector(state => state.categories.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    getCategoryService(dispatch);
    getProductService(dispatch);
    getExtraService(dispatch);
    getOrderService(dispatch);
  }, []);

  return (
    <div className="container">
      <div className="categories">
        <h2 className="fw-7 ls-4">Categorias</h2>
        <p>Navegue por categoria</p>
        <CategorySlider categories={categories} />
      </div>
      <div className="products">
        <h2 className="fw-7 ls-4">Produtos</h2>
        <p className="products-text">
          Selecione um produto para adcionar no seu pedido
        </p>
        <ProductList />
      </div>
    </div>
  );
}
