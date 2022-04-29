import { QueryClient, useMutation } from "react-query";
import { IImage } from "../types/Admin/Admin.types";
import { queryKeys } from "../consts/queryKeys";
import { adminGlobalService } from "../services/adminHomePage";

const useUploadImageFunction = (handleSubmit: () => void, state?: IImage) => {
  const queryClient = new QueryClient();

  const upload = async (image: any) => {
    const response = await adminGlobalService.uploadImage(image);
    return response;
  };

  const { mutateAsync } = useMutation<{ url: string } | void>(
    queryKeys.uploadImage,
    upload
  );

  const uploadImageFunction = async (image: any, localState?: IImage) => {
    const link = await mutateAsync(image);
    if (state) {
      state.image! = link!;
    } else {
      localState!.image = link!;
    }
    handleSubmit();
    queryClient.invalidateQueries(queryKeys.GetFullPage);
  };

  return uploadImageFunction;
};

export default useUploadImageFunction;
