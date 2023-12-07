import React from "react";
import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";

interface IGreetingMessageComponent {
  userEmail: string;
  userName: string;
  openChatTime: string;
  sentEmailTime: string;
  sentNameTime: string;
  isGreetingMeesageShow?: boolean;
}

const GreetingMessageComponent = ({
  userEmail,
  userName,
  openChatTime,
  sentEmailTime,
  sentNameTime,
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
            Please enter your email address to start or continue a conversation.
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
                <Styled.RecivedMessageBox className="msgAnimate">
                  What should we call you?
                </Styled.RecivedMessageBox>
                <Styled.RecievdMessageTime>
                  {sentEmailTime || openChatTime}
                </Styled.RecievdMessageTime>
              </Styled.MessagesWrapper>
            </Styled.RecievedMessagesWrapper>
          )}
        </>
      )}

      {userName && (
        <>
          <Styled.SendedMessagesWrapper>
            <Styled.MessagesWrapper>
              <Styled.SendedMessageBox>{userName}</Styled.SendedMessageBox>
              <Styled.SendedMessageTime>
                {sentNameTime || openChatTime}
              </Styled.SendedMessageTime>
            </Styled.MessagesWrapper>
          </Styled.SendedMessagesWrapper>
          {isGreetingMeesageShow && (
            <Styled.RecievedMessagesWrapper>
              <Styled.AvatarWrapper />
              <Styled.MessagesWrapper>
                <Styled.MessageSender>CGS-team</Styled.MessageSender>
                <Styled.RecivedMessageBox className="msgAnimate">
                  Hi, my name is Dan. I’m a business manager at CGS-team. How
                  can I help you?
                </Styled.RecivedMessageBox>
                <Styled.RecievdMessageTime>
                  {sentNameTime || openChatTime}
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
