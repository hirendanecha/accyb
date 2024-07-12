import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCaseStudies = createAsyncThunk("admin/getAllCaseStudies", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/web/caseStudies`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export const getCaseStudiesById = createAsyncThunk("admin/getCaseStudiesById", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/web/caseStudies/${id}`);
        console.log(response, "response");
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
}); 