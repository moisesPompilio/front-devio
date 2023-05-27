import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../../model/Category';
import { STATUS, TypeSTATUS } from '../../model/Status';

type stateCategory = {
  categories: Category[];
  status: TypeSTATUS;
};

const initialState: stateCategory = {
  categories: [],
  status: STATUS.IDLE,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category[]>) => {
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

export const { setCategory, setStatus } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
