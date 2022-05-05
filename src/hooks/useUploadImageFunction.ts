import { useFormikContext } from "formik";
import { QueryClient, useMutation } from "react-query";
import { IImage } from "../types/Admin/Admin.types";
import { queryKeys } from "../consts/queryKeys";
import { adminGlobalService } from "../services/adminHomePage";

const useUploadImageFunction = (
  state?: IImage,
  key = queryKeys.GetFullPage
) => {
  const queryClient = new QueryClient();
  const { handleSubmit } = useFormikContext();

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
    queryClient.invalidateQueries(key);
  };

  return uploadImageFunction;
};

export default useUploadImageFunction;
