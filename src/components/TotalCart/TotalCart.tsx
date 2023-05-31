import './TotalCart.scss';
import { priceFormatter } from '../../util/priceFormatter';

type TotalCartProps = {
  qtyProduct: number;
  total: number;
};
export function TotalCart({ qtyProduct, total }: TotalCartProps) {
  return (
    <div className="total-card bg-white ">
      <div className="total-card-container">
        <div className="total-card-title">
          <h2>Resumo do seu pedido</h2>
        </div>
        <div className="total-card-resume ">
          <div className="total-card-resume-item flex flex-between">
            <div className="fs-15">
              Preço do(s) {qtyProduct} iten(s) selecionado(s)
            </div>
            <div>
              <h4>{priceFormatter(total)}</h4>
            </div>
          </div>
          <div className="total-card-resume-item flex flex-between">
            <div className="fs-15">Preço da entrega</div>
            <h4>{priceFormatter(0)}</h4>
          </div>
        </div>
      </div>
      <div className="total-card-container">
        <div className="total-card-total">
          <h2>Total: {priceFormatter(total)}</h2>
        </div>
        <div className="total-card-btn">
          <button className="btn-primary" type="button">
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}
