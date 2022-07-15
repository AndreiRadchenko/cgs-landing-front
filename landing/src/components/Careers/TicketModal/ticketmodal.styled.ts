import styled from "styled-components";
import themes from "../../../utils/themes";

interface IModal {
  isOpen?: boolean;
}

export const TicketModal = styled.div<IModal>`
  display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: linear-gradient(180deg, rgba(241, 239, 237, 0.8) 100%, rgba(241, 239, 237, 0) 114.26%);
`;

export const TicketModalContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TicketModalContent = styled.div`
  width: 535px;
  height: auto;
  background: ${themes.primary.colors.blogBackground};
  border: 2px solid ${themes.primary.colors.primary};
  position: relative;
`;

export const List = styled.ul`
  list-style-type: square;
  margin: 48px 0 0 0;
`;
export const ListTitle = styled.span`
  margin: 0 0 7px 0;
  font-size: 28px;
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  line-height: 33px;
`;
export const ListItem = styled.li`
  margin: 0;
  margin-top: 9px;
  margin-left: 22px;
  font-size: 16px;
  line-height: 28px;
  font-weight: ${themes.primary.font.weight.heavy};
  color: gray;

  &::marker {
    color: black;
    font-size: 1.2em;
    margin: 0;
  }
`;

export const SubmitButtonContainer = styled.div`
  height: 50px;
  width: 172px;
  position: relative;
  margin: 38px 0 40px 36px;
`;

export const SubmitButton = styled.button`
  height: 100%;
  width: 100%;
  background: black;
  color: white;
  text-transform: uppercase;
  font-size: 19px;
  cursor: pointer;
`;

export const SubmitArrow = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  right: -18px;
  top: -15px;
  cursor: pointer;
`;

export const CloseButton = styled.img`
  width: 26px;
  height: 26px;
  position: absolute;
  right: 0;
  margin: 26px 26px 0 0;
  cursor: pointer;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  margin-top: 12px;
  margin-left: 12px;
  border: 2px solid black;
`;

export const BlackBox = styled.div`
  width: 100%;
  height: 50%;
  background: black;
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 50%;
`;
