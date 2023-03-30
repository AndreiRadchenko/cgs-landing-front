export interface IChatUser {
  username: string;
  secret: string;
  email: string;
}

export interface IChatUserResponse {
  username: string;
  secret: string;
}

export interface IChat {
  usernames: string[];
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
}
