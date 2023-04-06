import { useMutation } from "@tanstack/react-query";
import { IChatEmailForm } from "../components/Chat/ChatRegisterForm";
import { queryKeys } from "../consts/queryKeys";
import { supportChatService } from "../services/supportChat";
import { IHttpConfig } from "../types/Admin";
import { IChat, IChatUser, IChatUserInfo } from "../types/SupportChat.types";
import setMessageTime from "../utils/setMessageTime";
import { storeKeys } from "../consts";

interface IGetOrCreateUser {
  data: IChatUser;
  config: IHttpConfig;
}

interface IGetOrCreateChat {
  data: IChat;
  config: IHttpConfig;
}

interface IUseCreateUserChatParams {
  setChatUserInfo: React.Dispatch<React.SetStateAction<IChatUserInfo | null>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setSentEmailTime: React.Dispatch<React.SetStateAction<string>>;
  setIsGreetingMessageShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUseCreateUserChat {
  handleSubmit: (values: IChatEmailForm) => Promise<void>;
  isLoadingUser: boolean;
  isLoadingChat: boolean;
}

export const useCreateUserChat = ({
  setUserEmail,
  setSentEmailTime,
  setChatUserInfo,
  setIsGreetingMessageShow,
}: IUseCreateUserChatParams): IUseCreateUserChat => {
  const { mutateAsync: getOrCreateUser, isLoading: isLoadingUser } =
    useMutation([queryKeys.supportChat], (values: IGetOrCreateUser) =>
      supportChatService.getOrCreateUser(values.data, values.config)
    );

  const { mutateAsync: getOrCreateChat, isLoading: isLoadingChat } =
    useMutation([queryKeys.supportChat], (values: IGetOrCreateChat) =>
      supportChatService.getOrCreateChat(values.data, values.config)
    );

  const handleSubmit = async (values: IChatEmailForm) => {
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY || "";
    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";
    const chatAdmin = process.env.NEXT_PUBLIC_CHAT_ADMIN || "";
    const userResult = await getOrCreateUser({
      data: {
        username: values.email,
        secret: values.email,
        email: values.email,
      },
      config: {
        headers: { "Private-Key": privateKey },
      },
    });

    const chatResult = await getOrCreateChat({
      data: {
        usernames: [chatAdmin, values.email],
        title: values.email,
        is_direct_chat: true,
      },
      config: {
        headers: {
          "Project-ID": projectId,
          "User-Name": values.email,
          "User-Secret": values.email,
        },
      },
    });

    const creationDate = new Date();
    const expiredTime =
      creationDate.getTime() +
        Number(process.env.NEXT_PUBLIC_CHAT_EXPIRED_TIME) || 0;

    const chatUserInfo = {
      userName: userResult?.username || "",
      userSecret: userResult?.secret || "",
      chatId: String(chatResult?.id) || "",
      accessKey: chatResult?.access_key || "",
      expiredTime,
    };

    localStorage.setItem(storeKeys.chatUserData, JSON.stringify(chatUserInfo));

    setUserEmail(values.email);
    setSentEmailTime(setMessageTime());
    setChatUserInfo(chatUserInfo);

    setTimeout(() => setIsGreetingMessageShow(true), 3000);
  };

  return {
    handleSubmit,
    isLoadingUser,
    isLoadingChat,
  };
};
