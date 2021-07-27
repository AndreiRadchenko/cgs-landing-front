import styled from "styled-components";

export const Container = styled("div")`
  width: 1150px;
  margin: 0 auto;
  @media screen and (max-width: 1023.5px) {
    width: 81%;
  }
  @media screen and (min-width: 1024px) and (max-width: 1150px) {
    width: 1000px;
  }
`;

export const Row = styled("div")`
  display: flex;
  height: 450px;
  & .row-item {
    width: 50%;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
  }
  & .desktop-hidden {
    display: none !important;
  }

  & .row-item img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .row-item-description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 1023.5px) {
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    & .row-item {
      padding: 0;
    }

    & .row-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    & .row-item:first-child {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    & .desktop-hidden {
      display: flex !important;
    }
    & .row-item.row-item-30 {
      width: 31.3%;
      margin-right: 7px;
    }

    & .row-item.row-item-70 {
      width: 65%;
    }
    & .row-item-high {
      height: 174px;
    }

    @media (min-width: 351px) and (max-width: 375px) {
      & .row-item-high {
        height: 42vw;
      }
    }

    @media (min-width: 320px) and (max-width: 350px) {
      & .row-item-high {
        height: 42vw;
      }
    }

    & .row-item-low {
      height: 130px;
    }
  }
  @media (min-width: 425px) and (max-width: 1023.5px) {
    & .row-item-high {
      height: 40vw;
    }

    & .row-item-low {
      height: 30vw;
    }
  }
`;

export const RowLast = styled("div")`
  display: flex;
  height: 350px;
  & .row-item .no-stratch-image {
    width: auto;
  }

  & .row-item {
    width: 50%;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
  }
  & .row-item img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1023.5px) {
    justify-content: center;
    height: 300px;
    margin-top: 7px;
    & .row-item {
      padding: 0;
    }
    & .row-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .row-item .no-stratch-image {
      width: 100%;
    }
    & .row-item.row-item-30 {
      width: 31.3%;
      margin-right: 7px;
    }

    & .row-item.row-item-70 {
      width: 65%;
    }
    & .row-item-high {
      height: 170px;
    }

    & .row-item-low {
      height: 137px;
    }
    @media (min-width: 351px) and (max-width: 375px) {
      & .row-item-low {
        height: 34vw;
      }
    }

    @media (min-width: 320px) and (max-width: 350px) {
      & .row-item-low {
        height: 35vw;
      }
    }
  }
  @media screen and (min-width: 981px) and (max-width: 1024px) {
    height: 350px;
  }
  @media screen and (min-width: 901px) and (max-width: 980px) {
    height: 320px;
  }
  @media screen and (min-width: 850px) and (max-width: 900px) {
    height: 290px;
  }
  @media screen and (min-width: 800px) and (max-width: 849px) {
    height: 280px;
  }
  @media screen and (min-width: 700px) and (max-width: 799px) {
    height: 250px;
  }
  @media screen and (min-width: 600px) and (max-width: 699px) {
    height: 230px;
  }
  @media screen and (min-width: 500px) and (max-width: 599px) {
    height: 200px;
  }
  @media screen and (min-width: 400px) and (max-width: 499px) {
    height: 180px;
  }
  @media screen and (min-width: 320px) and (max-width: 399px) {
    height: 170px;
  }

  @media (min-width: 425px) and (max-width: 1024px) {
    & .row-item-high {
      height: 40vw;
    }

    & .row-item-low {
      height: 30vw;
    }
  }
`;

export const Block = styled("div")``;

export const Title = styled("div")`
  font-size: 36px;
  font-weight: 700;
  @media screen and (max-width: 1023.5px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled("div")`
  font-size: 17px;  
  margin: 0 auto;
  color: #868799;
  text-align: center;
  margin-bottom: 15px;
  & p {
    line-height: 32px;
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