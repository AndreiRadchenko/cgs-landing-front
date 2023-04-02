import styled from "styled-components";
import themes from "../utils/themes";

export const SupportWrapper = styled.div`
  font-family: "Gilroy" !important;

  div {
    ::-webkit-scrollbar {
      width: 0.65rem;
      background: transparent;
    }

    ::-webkit-scrollbar-track {
      background: ${themes.primary.colors.secondary};
    }
  }

  div:hover {
    ::-webkit-scrollbar {
      width: 0.65rem;
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

  .ce-attachment-input {
    display: none !important;
  }

  .ce-message-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 1rem;
  }

  #ce-send-message-button {
    bottom: 0 !important;
  }

  #msg-textarea {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    top: 0 !important;
  }
`;
