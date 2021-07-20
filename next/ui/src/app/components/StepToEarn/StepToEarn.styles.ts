import styled from "styled-components";

export const Header = styled("div")`
  display: flex;
  align-items: center;
  height: 35px;

  & > h2 {
    margin-right: 20px;
    
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

export const Container = styled("div")<{number: number}>`
  display: flex;
  position: absolute;
  padding-top: 80px;

  top: ${props => (props.number - 1) * 90}px;  

  @media screen and (max-width: 1023.5px) {
    position: static;

    padding-top: 0px;
  }
`;

export const Wrapper = styled("div")` 
  display: flex;
  align-items: center;
  padding-top: 20px;

  @media screen and (max-width: 1023.5px) {
    flex-direction: column;
    padding-top: 0;

  }

  & .image {
    margin-top:20px;
    margin-bottom:20px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    @media screen and (min-width: 1024px) {
      display: none;     
    }
  }

`;

export const Text = styled("div")`
  max-width: 480px;
  font-size: 18px;
  line-height: 22px;
  margin-left: 20px;  
  text-align: left;

  @media screen and (max-width: 1023.5px) {
    max-width: 500px;
    text-align: center;
    opacity: 0.5;
    margin-left: 0px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Number = styled("div")`
  width: 50px;
  height: 50px;
  background: #205a7b;
  border-radius: 50%;
  margin-left: 20px;
  text-align: center;
  padding-top: 2px;
  font-size: 36px;
  color: white;

  @media screen and (max-width: 1023.5px) {
    display: none;
  }
`;