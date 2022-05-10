import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import {
  GeneratedTextState,
  ObjectString,
  AddNamePayload,
} from "../assets/interface";

const initialState: GeneratedTextState = {
  ad: [],
  name: [],
};

export const generatedTextSlice = createSlice({
  name: "generatedTextSlice",
  initialState,
  reducers: {
    addGeneratedAd: (state, action: PayloadAction<ObjectString>) => {
      const { originalText, generatedText } = action.payload;
      state.ad.push({ id: uuid(), originalText, generatedText });
    },

    addGeneratedName: (state, action: PayloadAction<AddNamePayload>) => {
      const { description, seedWords, generatedText } = action.payload;
      state.name.push({ id: uuid(), description, seedWords, generatedText });
    },
  },
});

export const { addGeneratedAd, addGeneratedName } = generatedTextSlice.actions;

export default generatedTextSlice.reducer;
