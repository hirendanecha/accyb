import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllFormations = createAsyncThunk("admin/getAllFormations", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/web/formations`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export const getFormationsById = createAsyncThunk("admin/getFormationsById", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/web/formation/${id}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
}); 