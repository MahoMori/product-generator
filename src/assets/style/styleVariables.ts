import styled from "styled-components";
import { ObjectString } from "../interface";
import { device } from "./screenSize";

export const color: ObjectString = {
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

  & p::before {
    content: "*";
    color: #c41e3a;
    font-size: 1.5rem;
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

  & img {
    height: 2rem;
  }
`;

export const HrLine = styled.hr`
  border-color: #000;
`;

// ----- list style -----
export const ListDataCard = styled.div`
  position: relative;
  padding: 1rem;
  background-image: linear-gradient(
    -135deg,
    transparent 10px,
    ${color.platinum} 10px
  );
  overflow: hidden;
  margin: 1.5rem 0;
  border-radius: 3px;

  &::before {
    position: absolute;
    content: "";
    right: 0px;
    top: 0px;
    width: 15px;
    height: 15px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
  }
`;

export const ListDataDiv = styled.div`
  position: relative;
  margin: 1em 0;
  padding: 25px 10px 7px;
  border: solid 2px #000;
  background: #fff;
  border-radius: 3px;

  & span {
    position: absolute;
    display: inline-block;
    top: -2px;
    left: -2px;
    padding: 0 9px;
    height: 25px;
    line-height: 25px;
    font-size: 17px;
    background: #000;
    color: #fff;
  }

  & p {
    margin: 0;
    padding: 0;
  }
`;

export const SelectButton = styled.button<{ bColor: string }>`
  display: block;
  margin: 0.7rem auto;
  background: ${(props) => color[props.bColor]};
  border: solid 2px #000;
  font-size: 1rem;
  border-radius: 3px;
  padding: 0.25rem 1rem;
  width: 8rem;
  height: 2.25rem;
`;
