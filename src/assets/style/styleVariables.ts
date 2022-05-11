import styled from "styled-components";
import { device } from "./screenSize";

export const color = {
  green: "#ABD9CFff",
  blue: "#85C3DCff",
  platinum: "#E9EAE5ff",
  pink: "#EF7B88ff",
  yellow: "#FDCD62ff",
  brown: "#8B5D61ff",
};

export const Section = styled.section`
  width: 100%;
  height: 100%;

  @media ${device.tablet} {
    width: 50%;
  }
`;

export const RightPanelStyle = styled.div`
  position: absolute;
  padding: 1.5rem;
  width: 100%;
  min-height: 160%;

  @media ${device.tablet} {
    box-shadow: 0px 1px 10px -2px rgba(133, 133, 133, 0.55) inset;
  }
`;

// ----- form style -----
export const FormStyle = styled.form`
  /* width: 100%; */
  padding: 1rem 0;
`;

export const TextareaStyle = styled.div`
  & p {
    margin: 0 0 0.25rem -0.25rem;
  }

  & textarea {
    width: 100%;
    height: 10rem;
    border: solid 2px #000;
    border-radius: 5px;
    padding: 0.25rem;
    font-family: "Noto Sans JP", sans-serif;
    resize: vertical;
  }
`;

export const GenerateButton = styled.button`
  display: block;
  width: 8rem;
  height: 2.5rem;
  background: #fff;
  border: solid 2px #000;
  border-radius: 3px;
  font-size: 1rem;
  margin: 1rem auto;
  border-bottom: 5px solid #000;

  &:active {
    transform: translateY(4px);
    border-bottom: 1px solid #562913;
  }
`;

export const HrLine = styled.hr`
  border-color: #000;
`;
