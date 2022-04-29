import { queryKeys } from "../consts/queryKeys";
import { QueryClient, useMutation } from "react-query";
import { IImage } from "../types/Admin/Admin.types";
import { adminGlobalService } from "../services/adminHomePage";
import { IDataResponse } from "../types/Admin/Response.types";

const useDeleteImageFunction = async (
  data: IDataResponse,
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void,
  state?: IImage
) => {
  const queryClient = new QueryClient();
  const { mutate } = useMutation(queryKeys.deleteImage, (url: string) =>
    adminGlobalService.deleteImage({
      data: {
        url,
        data: data!,
      },
    })
  );

  const deleteImageFunction = (localState?: IImage) => {
    const link = state ? state.image!.url : localState!.image!.url;
    mutate(link);
    if (state) {
      state.image = null;
    } else {
      localState!.image = null;
    }
    handleSubmit();
    queryClient.invalidateQueries(queryKeys.GetFullPage);
  };

  return deleteImageFunction;
};

export default useDeleteImageFunction;
