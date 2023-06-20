import './NavBar.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';

export function NavBar() {
  const pedidos = useAppSelector(state => state.orders.ordersPedido);
  const [totalCart, setTotalCart] = useState(pedidos.products.length);
  useEffect(() => {
    setTotalCart(pedidos.products.length);
  }, [pedidos]);
  const preparando = useAppSelector(state => state.orders.ordersPreparando);
  const prontos = useAppSelector(state => state.orders.ordersPronto);
  const [totalPedido, setTotalPedido] = useState(
    prontos.length + preparando.length,
  );
  useEffect(() => {
    setTotalPedido(prontos.length + preparando.length);
  }, [preparando, prontos]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="container">
          <div className="navbar-top flex flex-between">
            <Link to="/" className="navbar-brand">
              <span className="text-white">Fast</span>
              <span className="text-white">Food</span>
            </Link>
            <div className="flex flex-row">
              <div className="navbar-btns">
                <Link to="/pedidos" className="add-to-cart-btn flex">
                  <div>
                    <span className="btn-ico">
                      <i className="fas fa-clipboard" />
                      <span className="cart-count-value">{totalPedido}</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="navbar-btns">
                <Link to="/cart" className="add-to-cart-btn flex">
                  <div>
                    <span className="btn-ico">
                      <i className="fas fa-shopping-cart" />
                      <span className="cart-count-value">{totalCart}</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
