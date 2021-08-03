import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  max-width: 1150px;
  margin-top: 140px;

  @media screen and (max-width: 1023.5px) {
    margin-top: 0;
  }
  @media screen and (min-width: 1024px) and (max-width: 1150px) {
    width: 1000px;
  }
`;
export const WraperForFirstImage = styled("div")`
  width: 50%;
  @media screen and (max-width: 1023.5px) {  
    display: none;
  } 
`;

export const WraperForSecondImageAndText = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1023.5px) {
    width: 79%;
    margin: 0 auto;
  }  
`;

export const Image1 = styled("div")`
  width: 100%;
  padding: 10px;

  .image {
    width: inherit;
    object-fit: contain;
  }

  @media screen and (max-width: 1023.5px) {
    display: none;
  }  
`;

export const Image2 = styled("div")`
  width: 100%;
  padding: 10px;

  .image {
    width: inherit;
    object-fit: contain;
  }
  @media screen and (max-width: 1023.5px) {
   padding: 0;
  }
`;

export const Block = styled("div")`
  text-align: center;
  margin-top: 60px;
  @media screen and (min-width: 1151px) {
    margin-top: 90px;
  }

  @media screen and (max-width: 1023.5px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Title = styled("div")`
  font-size: 36px;
  font-weight: 700;
  @media screen and (max-width: 1023.5px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled("div")`
  font-size: 18px;
  line-height: 32px;
  margin: 0 auto;
  margin-top: 25px;
  color: #868799;
  margin-bottom: 15px;
  padding-left: 60px;
  padding-right: 60px;  
  @media screen and (max-width: 1023.5px) {
    font-size: 17px;
    padding-left: 0;
    padding-right: 0;  
  }
`;

export const HorizontalLine = styled("div")`
  width: 55px;
  height: 3px;
  background: #0c1033;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
`;

// export const MainWrapperMobile = styled("div")`
//   @media screen and (min-width: 1024px) {
//     display: none;
//   }
//   @media screen and (max-width: 1023.5px) {
//     width: 79%;
//     margin: 0 auto;
//     justify-content: center;
//   }
// `;

// export const WraperForTwoImages = styled("div")`
//   display: flex;
//   justify-content: center;
//   margin: 0 auto;
// `;

// export const Image4 = styled("div")`
//   padding: 10px;
//   width: 100%;
//   .image {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
//   @media screen and (max-width: 1023.5px) {
//     padding: 0;
//     height: 50vw;   
//   }
// `;
