import styled from 'styled-components';

export const SlideContainer = styled.div`
  width: 90%;
  height: 100%;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  & .article {
    font-weight: 700;
    color: #fff;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    font-size: 30px;
    @media screen and (max-width: 760px) {
      font-size: 25px;
      justify-content: center;
      padding: 0;
    }
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }

  & .body {
    height: 70%;
    width: 100%;
    display: flex;

    @media screen and (max-width: 760px) {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  & .person {
    display: flex;
    width: 50%;
    height: 100%;
    margin-right: 2px;
    @media screen and (max-width: 760px) {
      width: 100%;
      margin-bottom: 1.5em;
      height: auto;
    }
    & .person-photo {
      display: flex;
      width: 50%;
      height: 100%;
      justify-content: flex-end;
      align-items: center;
      margin-right: 20px;
      @media screen and (max-width: 760px) {
        width: auto;
        margin-left: 1.5em;
        margin-right: 15px;
      }
      & > img {
        border: 5px solid #fff;
        border-radius: 50%;
        object-fit: cover;
        width: 142px;
        height: 142px;
        @media screen and (max-width: 850px) {
          width: 110px;
          height: 110px;
        }
        @media screen and (max-width: 400px) {
          width: 90px;
          height: 90px;
        }
      }
    }
    & .person-info {
      display: flex;
      width: 50%;
      flex-direction: column;
      color: #fff;
      align-items: flex-start;
      justify-content: center;
      & .person-name {
        font-size: 22px;
        font-weight: 700;
        color: #fff;
        @media screen and (max-width: 500px) {
          font-size: 14px;
        }
      }
      & .person-position {
        font-size: 18px;
        color: gray;
        @media screen and (max-width: 500px) {
          font-size: 12px;
        }
      }
      & .person-country {
        margin-top: 5%;
        display: flex;
        align-items: center;
        & > span {
          margin-right: 6px;
          font-size: 18px;
          color: gray;
          @media screen and (max-width: 500px) {
            font-size: 12px;
          }
        }
        & > img {
          border: 2px solid #fff;
          border-radius: 5px;
          width: 42px;
          height: 26px;
          @media screen and (max-width: 500px) {
            width: 30px;
            height: 16px;
          }
        }
      }
    }
  }

  & .description {
    display: flex;
    width: 50%;
    @media screen and (max-width: 760px) {
      width: 100%;
      margin-bottom: 40px;
    }
    & > p {
      width: 75%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: gray;
      margin-left: 25px;
      @media screen and (max-width: 992px) {
        font-size: 16px;
      }
      @media screen and (max-width: 760px) {
        font-size: 14px;
      }
    }
  }
`;

export const HorizantalSep = styled('div')`
  width: 55px;
  height: 2px;
  background: #fff;
  border-radius: 5px;
  margin-top: 10px;
  @media screen and (max-width: 500px) {
    width: 23px;
  }
`;

export const TopRightDotsContainer = styled('div')`
  position: absolute;
  width: 10%;
  height: 22%;
  top: -4.5%;
  right: -3.8%;
  display: flex;
  flex-wrap: wrap;
  & > span {
    width: 20%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
      width: 50%;
      height: 50%;
    }
  }
`;
export const BottomLeftDotsContainer = styled('div')`
  position: absolute;
  width: 4%;
  height: 22%;
  bottom: 50px;
  left: -4.5%;
  display: flex;
  flex-wrap: wrap;
  & > span {
    width: 50%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
      width: 50%;
      height: 50%;
    }
  }
`;
