import styled from "styled-components";
import chatOperatorAvatar from "../../../public/chatOperatorAvatar.svg";
import themes from "../../utils/themes";

export const RecievedMessagesWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5em;
  margin-bottom: 1.17em;

  p {
    margin: 0;
    margin-bottom: 0.33em;
  }
`;

export const SendedMessagesWrapper = styled(RecievedMessagesWrapper)`
  justify-content: end;
`;

export const AvatarWrapper = styled.div`
  height: 39px;
  width: 39px;

  background-image: url(${chatOperatorAvatar.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const MessagesWrapper = styled.div`
  width: 75%;
`;

export const MessageSender = styled.p`
  font-weight: ${themes.primary.font.weight.semiBold};
  line-height: 1.33em;
`;

export const RecivedMessageBox = styled.p`
  width: fit-content;
  padding: 0.67em;

  line-height: 1.58em;
  font-weight: ${themes.primary.font.weight.normal};
  font-size: 1.17em;
  color: ${themes.primary.colors.blogArticleText};

  border-radius: 0px 6px 6px 6px;
  background-color: ${themes.primary.colors.chatMessageBgc};

  :not(:last-of-type) {
    margin-bottom: 0.5em;
  }
`;

export const SendedMessageBox = styled(RecivedMessageBox)`
  margin-left: auto;
  border-radius: 6px 0 6px 6px;
  background-color: ${themes.primary.colors.chatSendedMessageBgc};

  :nth-of-type(n) {
    margin-left: auto;
  }
`;

export const RecievdMessageTime = styled.span`
  display: block;
  width: fit-content;

  line-height: 1.33em;
`;

export const SendedMessageTime = styled(RecievdMessageTime)`
  margin-left: auto;
`;
