import { configureStore } from "@reduxjs/toolkit";
import generatedTextReducer from "./generatedTextSlice";

export const store = configureStore({
  reducer: generatedTextReducer,
});

export type TStore = ReturnType<typeof store.getState>;
