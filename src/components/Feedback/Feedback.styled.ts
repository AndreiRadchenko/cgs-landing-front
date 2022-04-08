import styled from "styled-components";
import themes from "../../utils/themes";
export const Navigationwrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 3rem;
  & div :after {
    content: none;
  }
  & div {
    position: static;
    width: auto;
  }
  &div: nth-child(1) {
    margin-right: 2.5rem;
  }
`;