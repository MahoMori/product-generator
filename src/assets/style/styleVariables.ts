import styled from "styled-components";

export const Section = styled.section`
  width: 50%;
  height: 100%;

  background: white;
`;

export const PanelParentDiv = styled.div<{ leftValue: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: ${(props) => (props.leftValue ? props.leftValue : "0")};
  transition: left 1s;
`;

export const PanelStyle = styled.div`
  width: 100%;
  height: 100%;

  /* display: grid;
  grid-template-rows: repeat(2, 1fr);
  text-align: center;
  align-items: center; */
  position: relative;

  /* p {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    font-size: 1.5rem;
    background-color: #fff;
  } */
`;
