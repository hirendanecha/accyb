const { createSlice } = require("@reduxjs/toolkit");

const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
});

export const { setLoading, setError , setSuccess } = formSlice.actions;

export default formSlice.reducer;

