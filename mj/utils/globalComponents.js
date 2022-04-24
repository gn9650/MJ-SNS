import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};

  display: flex;
  flex-direction: ${(props) => props.dr || "column"};
  align-items: ${(props) => props.al || "center"};
  justify-content: ${(props) => props.ju || "center"};

  background-color: ${(props) => props.bg || ""};

  padding: ${(props) => props.padding || ""};
`;
