import { Dispatch } from 'redux';
import { GetCategory } from '../../api/category/GetCategory';
import { STATUS } from '../../model/entity/Status';
import {
  setCategory,
  setStatusCategory,
} from '../../store/category/CategorySlice';

function delay(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export const getCategoryService = async (dispatch: Dispatch): Promise<void> => {
  dispatch(setStatusCategory(STATUS.LOADING));
  try {
    await delay(1000);
    dispatch(setCategory(await GetCategory()));
  } catch (error) {
    console.error(error);
  }
  dispatch(setStatusCategory(STATUS.IDLE));
};
