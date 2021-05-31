import styled from 'styled-components';

export const Wrapper = styled('div')`
  max-width: 645px;
  width:100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
  .buttons {
    margin-left: 20px;
    display: flex;
    flex-direction: column;

    button:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const Title = styled('h2')`
  font-family: Mulish;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0em;
  text-align: center;
  text-transform:uppercase;
`;


export const Item = styled('div')`
  padding:20px 75px;
  margin-top:60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border:2px solid #1F5A7B;
  border-radius: 20px;
  font-size:14px;
  line-height:32px;
  font-weight:700;
  color:#1F5A7B;
  & img {
    margin-left: 30px;
    width: 100px;
  }
`;


export const List = styled('ul')`
  list-style:none;
  margin:0;
  padding:0;
`;

export const ListItem = styled('li')`
display:grid;
grid-template-columns: minmax(auto,150px) 1fr;
  & > span:nth-child(1){
    color: #0C1033;
    padding-right:20px;
    text-align:end;
  }
`;