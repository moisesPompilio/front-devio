import { Dispatch } from 'redux';
import { STATUS } from '../../model/Status';
import { setProduct, setStatus } from '../../store/product/ProductSlice';
import { GetProduct } from '../../api/product/GetProduct';

function delay(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export const getProductService = async (dispatch: Dispatch): Promise<void> => {
  dispatch(setStatus(STATUS.LOADING));
  try {
    await delay(1000);
    dispatch(setProduct(await GetProduct()));
  } catch (error) {
    console.error(error);
  }
  dispatch(setStatus(STATUS.IDLE));
};
