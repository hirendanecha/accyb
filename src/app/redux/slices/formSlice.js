const { createSlice } = require("@reduxjs/toolkit");

const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    loading: false,
    error: null,
    success: false,
    generalInformation : null,
    registrantInformation : null,
    descriptionOfTheIncident : null
  },
  reducers: {
    setGeneralInformation: (state, action) => {
      state.generalInformation = action.payload;
    },
    setRegistrantInformation: (state, action) => {
      state.registrantInformation = action.payload;
    },
    setDescriptionOfTheIncident: (state, action) => {
      state.descriptionOfTheIncident = action.payload;
    },
  },
});

export const { setGeneralInformation , setRegistrantInformation , setDescriptionOfTheIncident } = formSlice.actions;

export default formSlice.reducer;
