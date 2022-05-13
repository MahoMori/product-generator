import styled from "styled-components";
import { color, RightPanelStyle } from "../../assets/style/styleVariables";

export const SharePanelDiv = styled(RightPanelStyle)`
  left: 200%;
  background-color: ${color.yellow};
`;

export const ShareContainer = styled.div`
  width: 100%;
  height: 30rem;
  margin: 1rem 0;

  background-color: #fff;

  & img {
    width: 100%;
  }

  & div {
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.5rem;
  }
`;
