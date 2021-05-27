import styled from 'styled-components';
export const Wrapper = styled('div')``;

export const ImagesWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  & label {
    margin-top: 10px;
  }
  & img {
    width: auto;
    height: 60px;
    object-fit: cover;
  }

  & input[type='radio']:checked + img {
    border: 3px solid black;
    height: 70px;
  }
`;
