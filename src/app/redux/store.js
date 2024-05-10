import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice";
import eventSlice from "./slices/eventSlice/eventSlice";
import newsSlice from "./slices/newsSlice/newsSlice";

const combineReducers = {
  formSlice: formSlice,
  events: eventSlice,
  news: newsSlice,
};

export default configureStore({
  reducer: combineReducers,
});
