import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS, TypeSTATUS } from '../../model/entity/Status';
import { Product } from '../../model/entity/Product';

type stateProduct = {
  products: Product[];
  status: TypeSTATUS;
  ProducSingleVisible: boolean;
};

const initialState: stateProduct = {
  products: [],
  status: STATUS.IDLE,
  ProducSingleVisible: false,
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
    setStatusProduct: (state, action: PayloadAction<TypeSTATUS>) => {
      return {
        ...state,
        status: action.payload,
      };
    },
    setProducSingleVisible: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        ProducSingleVisible: action.payload,
      };
    },
  },
});

export const { setProduct, setStatusProduct, setProducSingleVisible } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
