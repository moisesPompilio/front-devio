import { Dispatch } from 'redux';
import { GetExtra } from '../../api/extra/GetExtra';
import { STATUS } from '../../model/entity/Status';
import { setExtra, setStatusExtra } from '../../store/extra/ExtraSlice';

export const getExtraService = async (dispatch: Dispatch): Promise<void> => {
  dispatch(setStatusExtra(STATUS.LOADING));
  try {
    dispatch(setExtra(await GetExtra()));
  } catch (error) {
    console.error(error);
  }
  dispatch(setStatusExtra(STATUS.IDLE));
};
