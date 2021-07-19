import styled from "styled-components";

export const Header = styled("div")`
  display: flex;
  align-items: center;
  height: 35px;

  & > h2 {
    margin-right: 5px;
    
    @media screen and (max-width: 400px) {
      font-size: 20px;
    }
  }
`;

export const Title = styled("div")`
  padding: 2px 8px;
  color: white;
  background: ${(props) => props.theme.colors.buttonBgColor};
  border-radius: 5px;
  
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
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

  @media screen and (max-width: 1023.5px) {
    align-items: center;
    text-align: start;
  }
`;

export const Text = styled("div")`
  border-radius: 5px;
  font-size: 18px;
  line-height: 22px;
  text-align: justify;
  @media screen and (max-width: 1023.5px) {
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    opacity: 0.5;
  }

  @media (max-width: 375px) {
    padding-left: 13px;
    padding-right: 12px;
    text-align: center;     
  }
`;
