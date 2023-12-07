import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../consts/queryKeys";
import { supportChatService } from "../services/supportChat";
import setMessageTime from "../utils/setMessageTime";
import { storeKeys } from "../consts";
import { IChatUpd, IChatUser, IChatUserInfo } from "../types/SupportChat.types";
import { IChatNameForm } from "../components/Chat/ChatNameForm";
import { IHttpConfig } from "../types/Admin";
import { adminBookService } from "../services/adminBookServiceModal";

interface IUpdateUser {
  id: number;
  data: IChatUser;
  config: IHttpConfig;
}

interface IUpdateChat {
  id: number;
  data: IChatUpd;
  config: IHttpConfig;
}

interface IUseUserUpdateParams {
  setChatUserInfo: React.Dispatch<React.SetStateAction<IChatUserInfo | null>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setSentNameTime: React.Dispatch<React.SetStateAction<string>>;
  setIsGreetingMessageShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUseUserUpdate {
  handleSubmit: (values: IChatNameForm) => Promise<void>;
  isLoadingUser: boolean;
}

export const useUpdateUser = ({
  setUserName,
  setSentNameTime,
  setChatUserInfo,
  setIsGreetingMessageShow,
}: IUseUserUpdateParams): IUseUserUpdate => {
  const { mutateAsync: updateUserInfo, isLoading: isLoadingUser } = useMutation(
    [queryKeys.supportChat],
    (values: IUpdateUser) =>
      supportChatService.updateUserInfo(values.id, values.data, values.config)
  );

  /*const { mutateAsync: updateChatInfo, isLoading: isLoadingChat } = useMutation(
    [queryKeys.supportChat],
    (values: IUpdateChat) =>
      supportChatService.updateChatInfo(values.id, values.data, values.config)
  );*/

  const handleSubmit = async (values: IChatNameForm) => {
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY || "";
    // const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

    const createdUserInfo = JSON.parse(
      localStorage.getItem(storeKeys.chatUserData) || "{}"
    );

    setUserName(values.name);

    const userResult = await updateUserInfo({
      id: createdUserInfo.userId,
      data: {
        username: createdUserInfo.userName,
        secret: createdUserInfo.userSecret,
        first_name: values.name,
      },
      config: {
        headers: { "Private-Key": privateKey },
      },
    });

    if (userResult.data.first_name) {
      adminBookService.createCalendlyPipedriveLead(
        userResult.data.first_name,
        userResult.data.username,
        "lead from chat"
      );
    }

    const creationDate = new Date();
    const expiredTime =
      creationDate.getTime() +
        Number(process.env.NEXT_PUBLIC_CHAT_EXPIRED_TIME) || 0;

    const chatUserInfo = {
      userName: userResult?.data.username || "",
      firstName: userResult?.data.first_name || "",
      userId: createdUserInfo?.userId || "",
      userSecret: userResult?.data.secret || "",
      chatId: String(createdUserInfo?.chatId) || "",
      accessKey: createdUserInfo?.accessKey || "",
      expiredTime,
    };

    /*await updateChatInfo({
      id: createdUserInfo?.chatId,
      data: {
        title: `${userResult?.data.username}|${values.name}`,
      },
      config: {
        headers: {
          "Project-ID": projectId,
          "User-Name": userResult?.data.username,
          "User-Secret": userResult?.data.username,
        },
      },
    });*/

    localStorage.setItem(storeKeys.chatUserData, JSON.stringify(chatUserInfo));

    setSentNameTime(setMessageTime());
    setChatUserInfo(chatUserInfo);

    setIsGreetingMessageShow(true);
  };

  return {
    handleSubmit,
    isLoadingUser,
  };
};
