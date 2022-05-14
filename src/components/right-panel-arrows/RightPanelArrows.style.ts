import styled from "styled-components";
import { device } from "../../assets/style/screenSize";

export const ArrowsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    display: flex;
    align-items: center;

    background: none;
    border: none;
    font-size: 2rem;

    cursor: pointer;
  }
`;

export const PanelTitle = styled.div`
  border-bottom: solid 2px #000;

  @media ${device.laptop} {
    & p {
      font-size: 1.3rem;
    }
  }

  @media ${device.desktop} {
    & p {
      font-size: 1.7rem;
    }
  }
`;
