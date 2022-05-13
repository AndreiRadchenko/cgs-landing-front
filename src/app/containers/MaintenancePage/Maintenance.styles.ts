import styled from "styled-components";
import theme from "../../../../styles/theme";

export const MainWrapper = styled("div")`
  width: 100%;
  height: 100vh;
  background-color: rgb(31, 90, 123);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled("p")`
  color: ${theme.colors.mainBgColor};
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
  align-self: center;
`;
