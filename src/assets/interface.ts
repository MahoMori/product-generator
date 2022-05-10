export interface ObjectString {
  [key: string]: string;
}

// export interface GeneratedText {
//   context: string;
//   selected: boolean;
// }

export interface GeneratedTextState {
  [key: string]: ObjectString[];
}

export interface JsonObject {
  prompt: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
}

export interface FetchComponentProp {
  aiFetch: (jsonObject: JsonObject, kw: string) => void;
}
