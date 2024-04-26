import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice";

const combineReducers = {
  formSlice: formSlice,
};

export default configureStore({
  reducer: combineReducers,
});
