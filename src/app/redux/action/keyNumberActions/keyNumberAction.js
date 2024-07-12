import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllKeyNumbers = createAsyncThunk("admin/getAllKeyNumbers", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/web/keynumbers`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});