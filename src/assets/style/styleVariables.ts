import styled from "styled-components";

export const color = {
  green: "#ABD9CFff",
  blue: "#85C3DCff",
  platinum: "#E9EAE5ff",
  pink: "#EF7B88ff",
  yellow: "#FDCD62ff",
  brown: "#8B5D61ff",
};

export const Section = styled.section`
  width: 50%;
  height: 100%;
`;

export const PanelStyle = styled.div`
  width: 100%;
  height: 100%;
`;

export const RightPanelStyle = styled(PanelStyle)`
  position: absolute;
  box-shadow: 0px 1px 10px -2px #858585 inset;
`;
