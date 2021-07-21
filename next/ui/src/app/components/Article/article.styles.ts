import styled from "styled-components";

export interface HorizontalSepProps {
  hideOnMobile?: boolean;
}

export const HorizontalSep = styled("div")<HorizontalSepProps>`
  width: 55px !important;
  height: 2px;
  background: #0c1033;
  border-radius: 5px;
  margin-bottom: 33px;

  @media screen and (max-width: 1023.5px) {
    display: ${(props) => props.hideOnMobile && "none"}
  }
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
    font-size: 18px;
    font-weight: 300;
    padding: 0 3em;
    line-height: 32px;
    margin-bottom: 30px;
    max-width: 870px;
    color: #868799;

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
  margin-bottom: 20px;
  padding: 0 15vw;  
  @media screen and (max-width: 1023.5px) {
    padding: 0 110px;
    font-size: 23px;
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
    font-size: 20px; 
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
