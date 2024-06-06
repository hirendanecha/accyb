import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice";
import eventSlice from "./slices/eventSlice/eventSlice";
import newsSlice from "./slices/newsSlice/newsSlice";
import securityAlertSlice from "./slices/securityAlertSlice/securityAlertSlice";
import videoSlice from "./slices/videoSlice/videoSlice";

const combineReducers = {
  formSlice: formSlice,
  events: eventSlice,
  news: newsSlice,
  securityAlerts: securityAlertSlice,
  videos : videoSlice,
};

export default configureStore({
  reducer: combineReducers,
});
