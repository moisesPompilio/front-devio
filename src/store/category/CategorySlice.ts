import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../../model/entity/Category';
import { STATUS, TypeSTATUS } from '../../model/entity/Status';

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
    setStatusCategory: (state, action: PayloadAction<TypeSTATUS>) => {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { setCategory, setStatusCategory } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
