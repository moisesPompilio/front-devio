import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS, TypeSTATUS } from '../../model/Status';
import { Extra } from '../../model/Extra';

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
        categories: action.payload,
      };
    },
    setStatus: (state, action: PayloadAction<TypeSTATUS>) => {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { setExtra, setStatus } = extraSlice.actions;
export const extraReducer = extraSlice.reducer;
