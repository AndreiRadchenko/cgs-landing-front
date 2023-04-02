import styled from "styled-components";
import themes from "../utils/themes";

export const SupportWrapper = styled.div`
  div {
    ::-webkit-scrollbar {
      width: 0.7rem;
      background: transparent;
    }

    ::-webkit-scrollbar-track {
      background: ${themes.primary.colors.secondary};
    }
  }

  div:hover {
    ::-webkit-scrollbar {
      width: 0.7rem;
    }

    ::-webkit-scrollbar-track {
      background: ${themes.primary.colors.secondary};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${themes.primary.colors.chatMessageBgc};
      border-radius: 10px;
      border: 3px solid ${themes.primary.colors.secondary};
    }
  }
`;
