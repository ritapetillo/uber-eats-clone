import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Restaurant } from "../interfaces/restaurants";
import { RootState } from "../store";
import Location from "../interfaces/location";
import {
  fetchBusinessDetails,
  getALlRestaurants,
} from "../services/restaurants";
import { Business } from "../interfaces/business";

export interface RestaurantState {
  location: Location | null;
  retaurantList: Array<Restaurant> | [];
  pending: boolean;
  selectedBusiness: Business | undefined;
}

const initialState: RestaurantState = {
  location: null,
  retaurantList: [],
  pending: false,
  selectedBusiness: undefined,
};

///thunk
export const fetchRestaurants = createAsyncThunk(
  "restaurant/fetchRestaurant",
  async (location: Location | null) => {
    if (location) return await getALlRestaurants(location);
  }
);

export const getBusinessDetails = createAsyncThunk(
  "restaurant/getBusinessDetails",
  async (id: string) => {
    if (id) return await fetchBusinessDetails(id);
  }
);

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.pending, (state, action) => {
      state.pending = true;
    }),
      builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.pending = false;
        state.retaurantList = action.payload;
      }),
      builder.addCase(fetchRestaurants.rejected, (state, action) => {
        state.pending = false;
      });
    builder.addCase(getBusinessDetails.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getBusinessDetails.fulfilled, (state, action) => {
      state.selectedBusiness = action.payload;
      state.pending = false;
    });
    builder.addCase(getBusinessDetails.rejected, (state) => {
      state.pending = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setLocation } = restaurantSlice.actions;

export const restaurantList = (state: RootState) =>
  state.restaurants.retaurantList;
export const selectedLocation = (state: RootState): Location | null =>
  state.restaurants.location;
export const pendingSelector = (state: RootState): boolean =>
  state.restaurants.pending;
export const selectedBusiness = (state: RootState): Business | undefined =>
  state.restaurants.selectedBusiness;
export default restaurantSlice.reducer;
