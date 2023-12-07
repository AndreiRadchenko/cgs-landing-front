import axios from "axios";
import {
  IChatUser,
  IChatUserResponse,
  IChat,
  IChatResponse,
  IUpdateUserResponse,
  IUpdatedChatUser,
  IChatUpd,
} from "../../types/SupportChat.types";
import { IHttpConfig } from "../../types/Admin";
import { HttpService } from "../http.service";

export class SupportChatService {
  constructor(private httpService: HttpService) {}
  public getOrCreateUser(data: IChatUser, config: IHttpConfig) {
    return this.httpService.put<IChatUserResponse, IChatUser>(
      "users/",
      data,
      config
    );
  }

  public getOrCreateChat(data: IChat, config: IHttpConfig) {
    return this.httpService.put<IChatResponse, IChat>("chats/", data, config);
  }

  public updateUserInfo(id: number, data: IChatUser, config: IHttpConfig) {
    return axios.patch<IUpdateUserResponse, IUpdatedChatUser>(
      `https://api.chatengine.io/users/${id}`,
      data,
      config
    );
  }

  public updateChatInfo(id: number, data: IChatUpd, config: IHttpConfig) {
    return axios.patch<IUpdateUserResponse, IUpdatedChatUser>(
      `https://api.chatengine.io/chats/${id}`,
      data,
      config
    );
  }
}

const httpService = new HttpService(axios, "https://api.chatengine.io");
export const supportChatService = new SupportChatService(httpService);
