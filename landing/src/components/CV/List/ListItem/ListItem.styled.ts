import styled from "styled-components";
import themes from "../../../../utils/themes";

export const ListItemWrapper = styled.div`
  position: relative;
  margin-top: 8px;
  @media ${themes.primary.media.minMobile} {
    margin-top: 100px;
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 573px;
    margin-top: 130px;
  }
`;

export const ListItemTitle = styled.div``;
export const ListItemLink = styled.div``;
export const ListItemArrowContainer = styled.div``;
export const ListItemName = styled.div``;
export const ListItemPosition = styled.div``;
