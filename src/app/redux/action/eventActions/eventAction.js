import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllEvents = createAsyncThunk("admin/getAllEvents", async (data, { rejectWithValue }) => {
  try {
    let response;
    if (data?.month) {
      response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/web/events?month=${data?.month}`);
      return {...response.data, isAll: false};
    } else {
      response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/web/events`);
      return {...response.data, isAll: true};
    }
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
