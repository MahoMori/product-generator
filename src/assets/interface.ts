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

interface NameState extends AddNamePayload {
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

export interface FetchComponentProp {
  aiFetch: (
    jsonObject: JsonObject,
    originalText: string,
    kw: string,
    description?: string | undefined,
    seedWords?: string[] | undefined
  ) => void;
}
