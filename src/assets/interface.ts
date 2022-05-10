export interface ObjectString {
  [key: string]: string;
}

// export interface GeneratedText {
//   context: string;
//   selected: boolean;
// }

export interface AddNamePayload {
  description: string;
  seedWords: string[];
  generatedText: string[];
}

export interface NameState extends AddNamePayload {
  id: string;
}

export interface GeneratedTextState {
  ad: ObjectString[];
  name: NameState[];
}

export interface JsonObject {
  prompt: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
}

// export interface FetchComponentProp {
//   aiFetch: (
//     jsonObject: JsonObject,
//     originalText: string,
//     kw: string,
//     description?: string | undefined,
//     seedWords?: string[] | undefined
//   ) => void;
// }

export interface AdListComponentProp {
  ad: ObjectString;
}

export interface NameListComponentProp {
  name: NameState;
}

export interface ContextUserSelected {
  userSelected: ObjectString;
  setUserSelected: React.Dispatch<React.SetStateAction<ObjectString>>;
}

export interface ContextLeftValue {
  leftValue: string;
  setLeftValue: React.Dispatch<React.SetStateAction<string>>;
}
