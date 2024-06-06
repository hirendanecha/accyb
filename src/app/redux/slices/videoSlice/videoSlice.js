import { createSlice } from "@reduxjs/toolkit";
import { getAllVieos } from "../../action/videoActions/videoAction";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    loading: false,
    allvideos: null,
    getvideo: null,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get admin details
    builder.addCase(getAllVieos.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getAllVieos.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.allvideos = payload.data;
      state.success = true;
    });

    builder.addCase(getAllVieos.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // builder.addCase(getAllVieos.pending, (state, { payload }) => {
    //   state.loading = true;
    // });

    // builder.addCase(getAllVieos.fulfilled, (state, { payload }) => {
    //   state.loading = false;
    //   state.getvideo = payload.data;
    //   state.success = true;
    // });

    // builder.addCase(getAllVieos.rejected, (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // });
  },
});

export default videoSlice.reducer;
