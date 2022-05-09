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
