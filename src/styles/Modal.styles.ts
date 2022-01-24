import styled from "styled-components";
import { Modal } from "@mui/material";

export const ModalContainer = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1290px;
  height: 800px;

  background-color: #f7f7f7;
`;
