import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS, TypeSTATUS } from '../../model/Status';
import { Order } from '../../model/Order';

type stateOrder = {
  orders: Order[];
  status: TypeSTATUS;
};

const initialState: stateOrder = {
  orders: [],
  status: STATUS.IDLE,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<Order[]>) => {
      return {
        ...state,
        orders: action.payload,
      };
    },
    setStatu: (state, action: PayloadAction<TypeSTATUS>) => {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { setOrder, setStatu } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
