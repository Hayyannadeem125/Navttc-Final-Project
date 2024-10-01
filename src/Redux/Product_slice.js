import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk("products/fulfilled", async () => {
  const response = await axios.get("http://localhost:5000/getproduct");
  return response.data;
});

const initialState = {
  products: [],
  status: "Pending",
  error: null,
};

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "Fulfilled";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "Error/Failed";
      });
  },
});

export default productSlice.reducer;
