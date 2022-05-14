export interface ObjectString {
  [key: string]: string;
}

// export interface GeneratedText {
//   context: string;
//   selected: boolean;
// }
export interface AddAdPayload {
  originalText: string;
  generatedText: string;
}

export interface AdState extends AddAdPayload {
  id: string;
}

export interface AddNamePayload {
  description: string;
  seedWords: string[];
  generatedText: string[];
}

export interface NameState extends AddNamePayload {
  id: string;
}

export interface GeneratedTextState {
  ad: AdState[];
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

export interface AdListComponentProp {
  ad: AdState;
}

export interface NameListComponentProp {
  name: NameState;
}

export interface UserSelectedTypes {
  ad: string;
  name: string;
}

export interface ContextUserSelected {
  userSelected: UserSelectedTypes;
  setUserSelected: React.Dispatch<React.SetStateAction<UserSelectedTypes>>;
}

export interface ContextLeftValue {
  leftValue: string;
  setLeftValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface HeightProps {
  height: string;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
  getHeight: (idName: string) => string | undefined;
}
