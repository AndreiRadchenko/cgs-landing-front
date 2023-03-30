export interface IChatUser {
  username: string;
  secret: string;
  email: string;
}

export interface IChatUserResponse {
  username: string;
}

export interface IChat {
  usernames: string[];
  is_direct_chat: boolean;
}

export interface IChatResponse {
  id: number;
}
