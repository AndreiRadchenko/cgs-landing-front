import React from "react";
import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";

interface IGreetingMessageComponent {
  userEmail: string;
  openChatTime: string;
  sentEmailTime: string;
}

const GreetingMessageComponent = ({
  userEmail,
  openChatTime,
  sentEmailTime,
}: IGreetingMessageComponent) => {
  return (
    <>
      <Styled.RecievedMessagesWrapper>
        <Styled.AvatarWrapper />
        <Styled.MessagesWrapper>
          <Styled.MessageSender>CGS-team</Styled.MessageSender>
          <Styled.RecivedMessageBox>
            Hi there! I’m here to help if you need anything.
          </Styled.RecivedMessageBox>
          <Styled.RecivedMessageBox>
            Please enter your email to start o continue a conversation.
          </Styled.RecivedMessageBox>
          <Styled.RecievdMessageTime>{openChatTime}</Styled.RecievdMessageTime>
        </Styled.MessagesWrapper>
      </Styled.RecievedMessagesWrapper>

      {userEmail && (
        <>
          <Styled.SendedMessagesWrapper>
            <Styled.MessagesWrapper>
              <Styled.SendedMessageBox>{userEmail}</Styled.SendedMessageBox>
              <Styled.SendedMessageTime>
                {sentEmailTime}
              </Styled.SendedMessageTime>
            </Styled.MessagesWrapper>
          </Styled.SendedMessagesWrapper>
          <Styled.RecievedMessagesWrapper>
            <Styled.AvatarWrapper />
            <Styled.MessagesWrapper>
              <Styled.MessageSender>CGS-team</Styled.MessageSender>
              <Styled.RecivedMessageBox>
                How can I help your?
              </Styled.RecivedMessageBox>
              <Styled.RecievdMessageTime>
                {sentEmailTime}
              </Styled.RecievdMessageTime>
            </Styled.MessagesWrapper>
          </Styled.RecievedMessagesWrapper>
        </>
      )}
    </>
  );
};

export default GreetingMessageComponent;
