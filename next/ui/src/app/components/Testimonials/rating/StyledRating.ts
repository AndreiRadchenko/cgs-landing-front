import styled from "styled-components";
export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RatingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:not(:only-child):last-child {
    margin-left: 28px;
    @media (max-width: 420px) {
      margin-left: 15px;
    }
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  @media (max-width: 420px) {
    font-size: 14px;
  }
  & img {
    margin-right: 9px;
  }

  & p {
    margin: 0;
    margin-right: 9px;
  }
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;

  & img:not(:last-child) {
    margin-right: 3px;
  }
`;
