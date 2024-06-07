import { createSlice } from "@reduxjs/toolkit";
import { getAllFormations, getFormationsById } from "../../action/formationActions/formationAction";


const formationSlice = createSlice({
  name: "formation",
  initialState: {
    loading: false,
    allFormations: null,
    getFormation: null,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get admin details
    builder.addCase(getAllFormations.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getAllFormations.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.allFormations = payload.data;
      state.success = true;
    });

    builder.addCase(getAllFormations.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(getFormationsById.pending, (state, { payload }) => {
      console.log(payload, "state2");

      state.loading = true;
    });

    builder.addCase(getFormationsById.fulfilled, (state, { payload }) => {
      console.log(payload, "state2");
      state.loading = false;
      state.getFormation = payload.data;
      state.success = true;
    });

    builder.addCase(getFormationsById.rejected, (state, { payload }) => {
      console.log(payload, "state2");

      state.loading = false;
      state.error = payload;
    });
  },
});

export default formationSlice.reducer;
