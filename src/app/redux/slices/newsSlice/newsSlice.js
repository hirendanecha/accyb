import { createSlice } from "@reduxjs/toolkit";
import { getAllNews, getNewsById } from "../../action/newsActions/newsAction";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    loading: false,
    allNews: null,
    getNews: null,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get admin details
    builder.addCase(getAllNews.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getAllNews.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.allNews = payload.data;
      state.success = true;
    });

    builder.addCase(getAllNews.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(getNewsById.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getNewsById.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.getNews = payload.data;
      state.success = true;
    });

    builder.addCase(getNewsById.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default newsSlice.reducer;
