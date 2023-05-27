import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS, TypeSTATUS } from '../../model/Status';
import { Product } from '../../model/Product';

type stateProduct = {
  products: Product[];
  status: TypeSTATUS;
};

const initialState: stateProduct = {
  products: [],
  status: STATUS.IDLE,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product[]>) => {
      return {
        ...state,
        products: action.payload,
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

export const { setProduct, setStatus } = productSlice.actions;
export const productReducer = productSlice.reducer;
