import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS, TypeSTATUS } from '../../model/entity/Status';
import { Extra } from '../../model/entity/Extra';

type stateCategory = {
  extras: Extra[];
  status: TypeSTATUS;
};

const initialState: stateCategory = {
  extras: [],
  status: STATUS.IDLE,
};

export const extraSlice = createSlice({
  name: 'extra',
  initialState,
  reducers: {
    setExtra: (state, action: PayloadAction<Extra[]>) => {
      return {
        ...state,
        extras: action.payload,
      };
    },
    setStatusExtra: (state, action: PayloadAction<TypeSTATUS>) => {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { setExtra, setStatusExtra } = extraSlice.actions;
export const extraReducer = extraSlice.reducer;
