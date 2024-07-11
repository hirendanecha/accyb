import { createSlice } from "@reduxjs/toolkit";
import { getAllNews, getNewsById } from "../../action/newsActions/newsAction";
import { getAllKeyNumbers } from "../../action/keyNumberActions/keyNumberAction";

const keyNumberSlice = createSlice({
  name: "keyNumbers",
  initialState: {
    loading: false,
    allKeyNumbers: null,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get admin details
    builder.addCase(getAllKeyNumbers.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getAllKeyNumbers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.allKeyNumbers = payload.data;
      state.success = true;
    });

    builder.addCase(getAllKeyNumbers.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default keyNumberSlice.reducer;
