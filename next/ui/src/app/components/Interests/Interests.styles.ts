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

export const Container = styled("div")` 
  position: absolute;  

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

export const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const Text = styled("div")`
  border-radius: 5px;
  max-width: 500px;
  font-size: 18px;
  line-height: 22px;
  text-align: justify;
  margin-left: 20px;
  /* @media screen and (max-width: 1023.5px) {
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    opacity: 0.5;
  } */

  /* @media (max-width: 375px) {
    padding-left: 13px;
    padding-right: 12px;
    text-align: center;     
  } */
`;

export const Number = styled("div")`
  width: 50px;
  height: 50px;
  background: #205a7b;
  border-radius: 50%;
  margin-left: 20px;
`