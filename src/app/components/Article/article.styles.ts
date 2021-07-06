import styled from "styled-components";

export const HorizontalSep = styled("div")`
  width: 55px !important;
  height: 2px;
  background: #0c1033;
  border-radius: 5px;
  margin-bottom: 33px;
`;

export const Wrapper = styled("article")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 1em 0 3em;
  & > p {
    text-align: center;
    opacity: 0.5;
    font-size: 18px;
    font-weight: 300;
    padding: 0 3em;
    line-height: 32px;
    margin-bottom: 60px;
    max-width: 870px;

    @media screen and (max-width: 1023.5px) {
      margin-bottom: 19px;
    }
 }
`;

export const Title = styled("h2")`
  font-size: 36px;
  line-height: 56px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 40px;
  padding: 0 15vw;  
  @media screen and (max-width: 1024px) {
    padding: 0 110px;
    font-size: 24px;
    line-height: 56px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
    padding: 0 30px;
    line-height: 56px;    
  }
  @media screen and (max-width: 378px) {
    padding: 0px 10px;  
}
  @media screen and (max-width: 375px) {
    font-size: 22px;
    padding: 0px 30px;
  }
`;

export const SubTitle = styled("p")`
  max-width: 1150px;
`;

export const AdminTextAreaWrapper = styled("div")`
  padding-top: 2px;
  width:  97%;
  margin-left: 20px;
  border: 2px solid #1f5a7b;
  border-radius: 20px;
`
