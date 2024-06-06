import { createSlice } from "@reduxjs/toolkit";
import {
  getAllSecurityAlerts,
  getSecurityAlertsById,
} from "../../action/securityAlerts/securityAlertAction";

const securityAlertSlice = createSlice({
  name: "securityAlert",
  initialState: {
    loading: false,
    allSecurityAlerts: null,
    getSecurityAlert: null,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get admin details
    builder.addCase(getAllSecurityAlerts.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getAllSecurityAlerts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.allSecurityAlerts = payload.data;
      state.success = true;
    });

    builder.addCase(getAllSecurityAlerts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(getSecurityAlertsById.pending, (state, { payload }) => {
      console.log(payload, "state2");

      state.loading = true;
    });

    builder.addCase(getSecurityAlertsById.fulfilled, (state, { payload }) => {
      console.log(payload, "state2");
      state.loading = false;
      state.getSecurityAlert = payload.data;
      state.success = true;
    });

    builder.addCase(getSecurityAlertsById.rejected, (state, { payload }) => {
      console.log(payload, "state2");

      state.loading = false;
      state.error = payload;
    });
  },
});

export default securityAlertSlice.reducer;
