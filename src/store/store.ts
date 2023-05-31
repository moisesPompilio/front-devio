import { configureStore } from '@reduxjs/toolkit';
import { categoryReducer } from './category/CategorySlice';
import { productReducer } from './product/ProductSlice';
import { extraReducer } from './extra/ExtraSlice';
import { orderReducer } from './order/OrderSlice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    extras: extraReducer,
    orders: orderReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
