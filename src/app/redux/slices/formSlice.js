const { createSlice } = require("@reduxjs/toolkit");

const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    loading: false,
    error: null,
    success: false,
    generalInformation : null,
    registrantInformation : null,
    descriptionOfTheIncident : null,
    memberOneInformation : null,
    memberTwoInformation:null,
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
    setMemberOneInformation: (state, action) => {
      state.memberOneInformation = action.payload;
    },
    setMemberTwoInformation: (state, action) => {
      state.memberTwoInformation = action.payload;
    },

  },
});

export const { setGeneralInformation , setRegistrantInformation , setDescriptionOfTheIncident , setMemberOneInformation, setMemberTwoInformation } = formSlice.actions;

export default formSlice.reducer;
