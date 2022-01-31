import styled from "styled-components";
import { Modal } from "@mui/material";

export const BackDrop = styled.div`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const ModalContainer = styled(Modal)`
  position: fixed;
  z-index: 12;
  overflow-y: scroll;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(12, 16, 51, 0.75);
`;

export const ModalWrapper = styled.div`
  outline: none;
  width: 1290px;
  min-height: 600px;
  position: absolute;
  top: 10%;
  background-color: #f7f7f7;
  opacity: 1;
`;

export const ModalRow = styled.div`
  position: relative;
`;

export const ModalCloseButton = styled.button`
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  width: 0.7em;
  height: 0.7em;
  position: absolute;
  right: 2%;
  top: -0.5%;
  cursor: pointer;
`;
