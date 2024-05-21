import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baseline: {
    id: 2,
    label: null,
    data: null
  },
  reform: {
    id: 2,
    label: null,
    data: null
  }
};

export const policySlice = createSlice({
  name: "policy",
  initialState,
  reducers: {
    // Initialize a policy with a country's default
    // baseline policy
    initialize: (state, action) => {
      state.baseline.id = action.payload;
      state.reform.id = action.payload;
    }
  }
});

export const { initialize } = policySlice.actions;

export default policySlice.reducer;