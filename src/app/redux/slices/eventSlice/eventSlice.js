import { createSlice } from "@reduxjs/toolkit";
import { getAllEvents, getEventsById } from "../../action/eventActions/eventAction";

const eventSlice = createSlice({
  name: "events",
  initialState: {
    loading: false,
    allEvents: null,
    error: null,
    eventLoading: false,
    getEvent: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get admin details
    builder.addCase(getAllEvents.pending, (state, { payload }) => {
      state.eventLoading = true;
    });

    builder.addCase(getAllEvents.fulfilled, (state, { payload }) => {
      state.eventLoading = false;
      state.allEvents = payload.data;
      state.success = true;
    });

    builder.addCase(getAllEvents.rejected, (state, { payload }) => {
      state.eventLoading = false;
      state.error = payload;
    });

    builder.addCase(getEventsById.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getEventsById.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.getEvent = payload.data;
      state.success = true;
    });

    builder.addCase(getEventsById.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default eventSlice.reducer;
