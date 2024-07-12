import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllSecurityAlerts = createAsyncThunk("admin/getAllSecurityAlerts", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/web/securityAlerts`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export const getSecurityAlertsById = createAsyncThunk("admin/getSecurityAlertsById", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/web/securityAlerts/${id}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    } 
});
