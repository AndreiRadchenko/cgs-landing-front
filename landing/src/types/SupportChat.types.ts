export interface IChatUser {
  username: string;
  secret: string;
  first_name?: string;
}

export interface IChatUpd {
  title: string;
}

export interface IUpdatedChatUser {
  data: { username: string; secret: string; first_name?: string };
}

export interface ICurrentMessage {
  text: string;
  sender_username: string;
}

export interface IChatUserResponse {
  username: string;
  secret: string;
  id: number;
  first_name: string;
}

export interface IUpdateUserResponse {
  data: {
    username: string;
    secret: string;
    id: number;
  };
}

export interface IChat {
  usernames: string[];
  title: string;
  is_direct_chat: boolean;
}

export interface IChatResponse {
  id: number;
  access_key: string;
}

export interface IChatUserInfo {
  userName: string;
  userSecret: string;
  chatId: string;
  accessKey: string;
  expiredTime: number;
  firstName?: string;
}
