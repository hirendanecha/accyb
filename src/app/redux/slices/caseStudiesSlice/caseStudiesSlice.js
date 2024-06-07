import { createSlice } from "@reduxjs/toolkit";
import { getAllCaseStudies, getCaseStudiesById } from "../../action/caseStudiesActions/caseStudiesAction";


const caseStudiesSlice = createSlice({
  name: "caseStudies",
  initialState: {
    loading: false,
    allcaseStudies: null,
    getcaseStudies: null,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get admin details
    builder.addCase(getAllCaseStudies.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getAllCaseStudies.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.allcaseStudies = payload.data;
      state.success = true;
    });

    builder.addCase(getAllCaseStudies.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(getCaseStudiesById.pending, (state, { payload }) => {
      console.log(payload, "state2");

      state.loading = true;
    });

    builder.addCase(getCaseStudiesById.fulfilled, (state, { payload }) => {
      console.log(payload, "state2");
      state.loading = false;
      state.getcaseStudies = payload.data;
      state.success = true;
    });

    builder.addCase(getCaseStudiesById.rejected, (state, { payload }) => {
      console.log(payload, "state2");

      state.loading = false;
      state.error = payload;
    });
  },
});

export default caseStudiesSlice.reducer;
