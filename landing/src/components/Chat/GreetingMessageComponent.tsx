import React from "react";
import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";

interface IGreetingMessageComponent {
  userEmail: string;
  openChatTime: string;
  sentEmailTime: string;
  isGreetingMeesageShow?: boolean;
}

const GreetingMessageComponent = ({
  userEmail,
  openChatTime,
  sentEmailTime,
  isGreetingMeesageShow,
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
            Please enter your email to start or continue a conversation.
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
                {sentEmailTime || openChatTime}
              </Styled.SendedMessageTime>
            </Styled.MessagesWrapper>
          </Styled.SendedMessagesWrapper>
          {isGreetingMeesageShow && (
            <Styled.RecievedMessagesWrapper>
              <Styled.AvatarWrapper />
              <Styled.MessagesWrapper>
                <Styled.MessageSender>CGS-team</Styled.MessageSender>
                <Styled.RecivedMessageBox>
                  How can we help your?
                </Styled.RecivedMessageBox>
                <Styled.RecievdMessageTime>
                  {sentEmailTime || openChatTime}
                </Styled.RecievdMessageTime>
              </Styled.MessagesWrapper>
            </Styled.RecievedMessagesWrapper>
          )}
        </>
      )}
    </>
  );
};

export default GreetingMessageComponent;
