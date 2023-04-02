import { useMutation } from "@tanstack/react-query";
import { IChatEmailForm } from "../components/Chat/ChatRegisterForm";
import { queryKeys } from "../consts/queryKeys";
import { supportChatService } from "../services/supportChat";
import { IHttpConfig } from "../types/Admin";
import { IChat, IChatUser, IChatUserInfo } from "../types/SupportChat.types";
import setMessageTime from "../utils/setMessageTime";

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
}

interface IUseCreateUserChat {
  handleSubmit: (values: IChatEmailForm) => Promise<void>;
}

export const useCreateUserChat = ({
  setUserEmail,
  setSentEmailTime,
  setChatUserInfo,
}: IUseCreateUserChatParams): IUseCreateUserChat => {
  const { mutateAsync: getOrCreateUser } = useMutation(
    [queryKeys.supportChat],
    (values: IGetOrCreateUser) =>
      supportChatService.getOrCreateUser(values.data, values.config)
  );

  const { mutateAsync: getOrCreateChat } = useMutation(
    [queryKeys.supportChat],
    (values: IGetOrCreateChat) =>
      supportChatService.getOrCreateChat(values.data, values.config)
  );

  const handleSubmit = async (values: IChatEmailForm) => {
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY || "";
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
        is_direct_chat: true,
      },
      config: { headers: { "Private-Key": privateKey } },
    });

    const creationDate = new Date();
    const expiredDate = creationDate.getTime() + 30000;

    const chatUserInfo = {
      userName: userResult?.username || "",
      userSecret: userResult?.secret || "",
      chatId: String(chatResult?.id) || "",
      accessKey: chatResult?.access_key || "",
      expiredDate,
    };

    localStorage.setItem("chatUserData", JSON.stringify(chatUserInfo));

    setUserEmail(values.email);
    setSentEmailTime(setMessageTime());
    setChatUserInfo(chatUserInfo);
  };

  return {
    handleSubmit,
  };
};
