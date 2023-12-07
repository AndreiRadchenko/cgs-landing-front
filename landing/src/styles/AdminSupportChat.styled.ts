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

  .ce-message-list {
    height: calc((100% - 85px) - 75px) !important;
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

  .ce-chat-feed {
    max-height: 90%;
  }

  .ce-chat-card-subtitle-html {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap; /
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

export const SupportChatHeaderWrapper = styled.div`
  margin-left: 0px;
  margin-right: 0px;
  display: flex;
  flex-flow: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: normal;
  justify-content: flex-start;
  width: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.92);
  padding: 18px 0px;
  text-align: center;
  color: rgb(24, 144, 255);
  overflow-x: hidden;
`;

export const SupportChatHeader = styled.div`
  width: 100%;
  font-family: Avenir;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: rgb(24, 144, 255);
`;

export const SupportChatDesc = styled.div`
  width: 100%;
  font-family: Avenir;
  font-size: 12px;
  text-align: center;
  color: rgb(24, 144, 255);
`;
