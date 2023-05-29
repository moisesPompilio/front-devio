import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS, TypeSTATUS } from '../../model/entity/Status';
import { Order } from '../../model/entity/Order';

type stateOrder = {
  orders: Order[];
  ordersPedido: Order;
  ordersPreparando: Order[];
  ordersPronto: Order[];
  ordersRetirada: Order[];
  status: TypeSTATUS;
};

const initialState: stateOrder = {
  orders: [],
  ordersPedido: { id: 'a', produtcs: [], status: 'pedido', total: 0 },
  ordersPreparando: [],
  ordersPronto: [],
  ordersRetirada: [],
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
    setOrdersPedido: (state, action: PayloadAction<Order>) => {
      return {
        ...state,
        ordersPedido: action.payload,
      };
    },
    setOrdersPreparando: (state, action: PayloadAction<Order[]>) => {
      return {
        ...state,
        ordersPreparando: action.payload,
      };
    },
    setordersPronto: (state, action: PayloadAction<Order[]>) => {
      return {
        ...state,
        ordersPronto: action.payload,
      };
    },
    setOrdersRetirada: (state, action: PayloadAction<Order[]>) => {
      return {
        ...state,
        ordersRetirada: action.payload,
      };
    },
    setStatusOrder: (state, action: PayloadAction<TypeSTATUS>) => {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const {
  setOrder,
  setOrdersPedido,
  setOrdersPreparando,
  setOrdersRetirada,
  setordersPronto,
  setStatusOrder,
} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
