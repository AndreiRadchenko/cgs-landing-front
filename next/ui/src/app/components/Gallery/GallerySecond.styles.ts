import styled from "styled-components";

export const MainWrapperForDeckstop = styled("div")`
    display: flex;
    max-width: 1150px;
    margin-top: 140px;

    @media screen and (max-width: 1023.5px) {
        display: none;
    }
    @media screen and (min-width: 1024px) and (max-width: 1150px) {
        width: 1024px;
    }
`
export const WraperForFirstImage = styled("div")`
    width: 50%;
`

export const WraperForSecondImageAndText = styled("div")`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Image1 = styled("div")`
    width: 100%;
    padding: 10px;

    .image {
        width: inherit;
        object-fit: contain;
    }    
`

export const Image2 = styled("div")`
    width: 100%;
    padding: 10px;

    .image {
        width: inherit;
        object-fit: contain;
    }
`

export const Block = styled("div")`
  text-align: center;
   @media screen and (max-width: 1023.5px) {
       width: 90%;
       margin: 0 auto;
   }
`

export const Title = styled("div")`
    font-size: 36px;
    font-weight: 700;
    @media screen and (max-width: 1023.5px) {
        font-size: 24px;
    }
`

export const SubTitle = styled("div")`
    font-size: 18px;
    line-height: 32px;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    /* max-width: 400px; */
    margin: 0 auto;
    margin-top: 25px;
    color: #868799;

    /* @media screen and (min-width: 768px) and (max-width: 1023.5px) {
        padding-left: 50px;
        padding-right: 50px;
    } */
`

export const HorizontalLine = styled("div")`
    width: 55px;
    height: 3px;
    background: #0c1033;
    border-radius: 5px;   
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 25px;
`

export const MainWrapperMobile = styled("div")`
    @media screen and (min-width: 1024px) {
        display: none;
    }
    @media screen and (max-width: 1023.5px) {
        width: 81%;
        margin: 0 auto;
        justify-content: center;
    }
`

export const WraperForTwoImages = styled("div")`
    display: flex;
    justify-content: center;
    /* height: 151px; */
    margin: 0 auto;
    /* width: 90%; */
    /* @media screen and (max-width: 1023.5px) {
        height: 350px;
    }
    @media screen and (max-width: 835px) {
        height: 330px;
    } */
    /* @media (min-width: 700px) and (max-width: 1023.5px) {
        height: 40vw;      
    }
    @media (min-width: 400px) and (max-width: 500px) {
        height: 35vw;      
    }
    @media (min-width: 320px) and (max-width: 399px) {
        height: 32vw;      
    } */
`


export const Image3= styled("div")`
    /* width: 100%; */
    padding: 10px;
    width: 31.4%;
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media screen and (max-width: 1023.5px) {
        padding: 0;
        margin-right: 7px;
        height: 30vw;
    }
`

export const Image4 = styled("div")`
    /* width: 100%; */
    padding: 10px;
    width: 65%;
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media screen and (max-width: 1023.5px) {
        padding: 0;
        height: 30vw;
    }
`

