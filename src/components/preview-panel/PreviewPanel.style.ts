import styled from "styled-components";
import { color } from "../../assets/style/styleVariables";
import { device } from "../../assets/style/screenSize";

export const PreviewPanelDiv = styled.div`
  height: 100%;
  width: 100%;
  padding: 2.5rem 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${color.pink};

  box-shadow: 0px -5px 5px -2px rgba(133, 133, 133, 0.3) inset,
    0px 1px 10px -2px rgba(133, 133, 133, 0.55) inset;

  @media ${device.tablet} {
    box-shadow: -5px 1px 5px -2px rgba(133, 133, 133, 0.3) inset;
  }
`;

export const PreviewCard = styled.div`
  width: 100%;
  height: 100%;

  padding: 1rem 1rem 1.5rem;
  background: linear-gradient(135deg, #fff 0 100%),
    repeating-linear-gradient(45deg, #fff 0px 3px, transparent 3px 6px);
  background-repeat: no-repeat;
  background-size: calc(100% - 0.5rem) calc(100% - 0.5rem);
  background-position: 0 0, 0.5rem 0.5rem;

  & p:first-child {
    border-bottom: double 5px ${color.pink};
    font-size: 1.5rem;
    font-weight: bold;
  }

  & p:last-child {
    margin-top: 1rem;
  }

  @media ${device.tablet} {
    width: 95%;
    height: 70%;
  }

  @media ${device.laptop} {
    width: 95%;
    height: 50%;
  }

  @media ${device.laptopL} {
    width: 95%;
    height: 40%;

    & p:first-child {
      font-size: 1.75rem;
    }

    & p:last-child {
      font-size: 1.25rem;
    }
  }

  @media ${device.desktop} {
    width: 95%;
    height: 35%;

    & p:first-child {
      font-size: 2rem;
    }

    & p:last-child {
      font-size: 1.75rem;
    }
  }
`;
