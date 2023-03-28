import React from "react";
import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";

const GreetingMessageComponent = () => {
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
            Please enter your email to start a conversation.
          </Styled.RecivedMessageBox>
          <Styled.RecievdMessageTime>06:07 PM</Styled.RecievdMessageTime>
        </Styled.MessagesWrapper>
      </Styled.RecievedMessagesWrapper>

      <Styled.SendedMessagesWrapper>
        <Styled.MessagesWrapper>
          <Styled.SendedMessageBox>email@domen.com</Styled.SendedMessageBox>
          <Styled.SendedMessageTime>06:07 PM</Styled.SendedMessageTime>
        </Styled.MessagesWrapper>
      </Styled.SendedMessagesWrapper>
    </>
  );
};

export default GreetingMessageComponent;
