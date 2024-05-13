import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllEvents = createAsyncThunk("admin/getAllEvents", async (data, { rejectWithValue }) => {
  try {
    console.log(data);
    let response;
    if (data?.month) {
      response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/web/events?month=${data?.month}`);
    } else {
      response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/web/events`);
    }
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const getEventsById = createAsyncThunk("admin/getEventsById", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/web/event/${id}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});
