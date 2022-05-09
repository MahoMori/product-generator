import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import { ObjectString, GeneratedTextState } from "../assets/interface";

const initialState: GeneratedTextState = {
  ad: [],
  name: [],
};

export const generatedTextSlice = createSlice({
  name: "generatedTextSlice",
  initialState,
  reducers: {
    addGeneratedText: (state, action: PayloadAction<ObjectString>) => {
      const { generatedText, kw } = action.payload;
      state[kw].push({ id: uuid(), context: generatedText });
    },
  },
});

export const { addGeneratedText } = generatedTextSlice.actions;

export default generatedTextSlice.reducer;
