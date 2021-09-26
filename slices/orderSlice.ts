import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ItemOrder {
  id: number;
  name: string;
  price: number;
  quantity: number;
  variation: number;
}

export interface OrderSliceState {
  orderNumber: number;
  order: Array<ItemOrder> | [];
  timeCreated: Date;
  submitted: boolean;
  restaurantId: number;
  restaurantName: number;
}

const initialState = {
  orderNumber: 0,
  restaurant: 0,
  currentOrder: [],
  timeCreated: Date.now(),
  submitted: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCurrentRestaurant: (state, action: PayloadAction<number>) => {
      state.restaurant = action.payload;
    },
    addItem: (state, action: PayloadAction<ItemOrder>) => {
      const order: ItemOrder = action.payload;
      state.currentOrder.push(order as never);
    },
    submitOrder: (state) => {
      state.submitted = true;
    },
  },
});

export const { addItem, submitOrder } = orderSlice.actions;

export const currentOrder = (state: RootState) => state.order.currentOrder;

export default orderSlice.reducer;
