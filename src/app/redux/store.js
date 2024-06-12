import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice";
import eventSlice from "./slices/eventSlice/eventSlice";
import newsSlice from "./slices/newsSlice/newsSlice";
import securityAlertSlice from "./slices/securityAlertSlice/securityAlertSlice";
import videoSlice from "./slices/videoSlice/videoSlice";
import formationSlice from "./slices/formationSLice/formationSlice";
import caseStudiesSlice from "./slices/caseStudiesSlice/caseStudiesSlice";
import sendEmailSlice from "./slices/sendEmailSlice/sendEmailSlice";

const combineReducers = {
  formSlice: formSlice,
  events: eventSlice,
  news: newsSlice,
  securityAlerts: securityAlertSlice,
  videos : videoSlice,
  formations: formationSlice,
  caseStudies: caseStudiesSlice,
  email:sendEmailSlice,
};

export default configureStore({
  reducer: combineReducers,
});
