import styled from "styled-components";
import { TextField } from "@mui/material";
import themes from "../../../../utils/themes";

export const Field = styled(TextField)`
  margin-top: 1rem;
  & label {
    font-weight: ${themes.primary.font.weight.bold};
    color: #858585;
    font-family: ${themes.primary.font.family.gilroy};
  }
  & input {
    font-size: 0.875em;
  }
`;