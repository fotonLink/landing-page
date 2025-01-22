import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./paginationSlice";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
