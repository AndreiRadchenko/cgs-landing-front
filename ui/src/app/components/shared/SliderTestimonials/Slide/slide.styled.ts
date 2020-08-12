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
    color: #fff;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    font-size: 30px;

    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
    @media screen and (max-width: 400px) {
      font-size: 12px;
    }
  }

  & .body {
    height: 70%;
    width: 100%;
    display: flex;

    @media screen and (max-width: 760px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  & .person {
    display: flex;
    width: 50%;
    height: 100%;
    @media screen and (max-width: 760px) {
      width: 100%;
      margin-bottom: 40px;
    }
    & .person-photo {
      display: flex;
      width: 50%;
      height: 100%;
      justify-content: flex-end;
      align-items: center;
      margin-right: 25px;
      @media screen and (max-width: 768px) {
        margin-right: 5px;
      }
      & > img {
        border: 5px solid #fff;
        border-radius: 50%;
        width: 142px;
        @media screen and (max-width: 850px) {
          width: 110px;
        }
        @media screen and (max-width: 400px) {
          width: 80px;
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
        @media screen and (max-width: 760px) {
          font-size: 14px;
        }
      }
      & .person-position {
        font-size: 18px;
        color: gray;
        @media screen and (max-width: 760px) {
          font-size: 12px;
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
  @media screen and (max-width: 760px) {
    width: 23px;
  }
`;
