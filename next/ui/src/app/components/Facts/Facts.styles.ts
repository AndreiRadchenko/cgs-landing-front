import styled from "styled-components";

export const Header = styled("div")`
  display: flex;
  align-items: center;
  height: 35px;

  & > h2 {
    margin-right: 20px;
  }
`;

export const Title = styled("div")`
  padding: 2px 8px;
  color: white;
  background: ${(props) => props.theme.colors.buttonBgColor};
  border-radius: 5px;
`;

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;

  & > ${Header} {
    margin-bottom: 5px;
  }

  & > ${Title} {
    margin-bottom: 25px;
  }

  @media screen and (max-width: 1024px) {
    align-items: center;
    text-align: start;
  }
`;

export const Text = styled("div")`
  border-radius: 5px;
  font-size: 18px;
  line-height: 1.67;
  text-align: justify;

  @media screen and (max-width: 1024px) {
    opacity: 0.5;
    padding: 0 30px;
  }
`;