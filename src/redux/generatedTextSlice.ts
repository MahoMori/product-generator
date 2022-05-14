import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import {
  GeneratedTextState,
  AddNamePayload,
  AddAdPayload,
} from "../assets/interface";

const initialState: GeneratedTextState = {
  ad: [],
  name: [],
};

export const generatedTextSlice = createSlice({
  name: "generatedTextSlice",
  initialState,
  reducers: {
    addGeneratedAd: (state, action: PayloadAction<AddAdPayload>) => {
      const { originalText, generatedText } = action.payload;
      state.ad.unshift({ id: uuid(), originalText, generatedText });
    },

    addGeneratedName: (state, action: PayloadAction<AddNamePayload>) => {
      const { description, generatedText } = action.payload;
      let seedWords = action.payload.seedWords;

      const seedWordsArr = (seedWords: string[]): string[] => {
        let newArr = seedWords.filter((word) => {
          return word;
        });
        return newArr;
      };
      seedWords = seedWordsArr(seedWords);

      state.name.unshift({
        id: uuid(),
        description,
        seedWords,
        generatedText,
      });
    },
  },
});

export const { addGeneratedAd, addGeneratedName } = generatedTextSlice.actions;

export default generatedTextSlice.reducer;
