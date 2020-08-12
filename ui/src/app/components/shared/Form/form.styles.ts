import styled from 'styled-components';
export const FormWrapper = styled('div')`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-conntent: space-between;
  align-items: center;
  & > div {
    width: 100%;
    margin-bottom: 1em;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;
