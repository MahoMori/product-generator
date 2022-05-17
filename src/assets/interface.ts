export interface ObjectString {
  [key: string]: string;
}

// ----- redux slice -----
// ad
export interface AddAdPayload {
  originalText: string;
  generatedText: string;
}

export interface AdState extends AddAdPayload {
  id: string;
}

// name
export interface AddNamePayload {
  description: string;
  seedWords: string[];
  generatedText: string[];
}

export interface NameState extends AddNamePayload {
  id: string;
}

// initial state
export interface GeneratedTextState {
  ad: AdState[];
  name: NameState[];
}

// ----- openAi API json object -----
export interface JsonObject {
  prompt: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
}

// ----- component props ------
// ad to list component
export interface AdListComponentProps {
  ad: AdState;
}

// name to list component
export interface NameListComponentProp {
  name: NameState;
}

// left value and height to right panel (ad, name)
export interface AdNameComponentProps {
  leftValue: string;
  setLeftValue: React.Dispatch<React.SetStateAction<string>>;
  height: string;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
  getHeight: (idName: string) => number | undefined;
}

// left value and height to right panel (share)
export interface ShareComponentProps {
  leftValue: string;
  setLeftValue: React.Dispatch<React.SetStateAction<string>>;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
}

// panel title and height to right panle arrow
export interface RightPanelArrowProps {
  panelTitle: string;
  leftValue: string;
  setLeftValue: React.Dispatch<React.SetStateAction<string>>;
}

// ----- useState userSelected ad and string types -----
export interface UserSelectedTypes {
  ad: string;
  name: string;
}

// ----- create context types -----
// userSelected
export interface ContextUserSelected {
  userSelected: UserSelectedTypes;
  setUserSelected: React.Dispatch<React.SetStateAction<UserSelectedTypes>>;
}
