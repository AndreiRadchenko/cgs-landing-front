import axios from "axios";
import {
  IChatUser,
  IChatUserResponse,
  IChat,
  IChatResponse,
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
}

const httpService = new HttpService(axios, "https://api.chatengine.io");
export const supportChatService = new SupportChatService(httpService);
