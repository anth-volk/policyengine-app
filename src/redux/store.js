import { configureStore } from "@reduxjs/toolkit"
import policyReducer from "./policySlice";

export const store = configureStore({
  reducer: {
    policy: policyReducer
  }
});