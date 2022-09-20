import { useFormikContext } from "formik";
import { queryKeys } from "../consts/queryKeys";
import { QueryClient, useMutation } from "react-query";
import { IImage } from "../types/Admin/Admin.types";
import { adminGlobalService } from "../services/adminHomePage";

const useDeleteImageFunction = async (
  state?: IImage,
  key = queryKeys.GetFullPage
) => {
  const queryClient = new QueryClient();
  const { setFieldValue } = useFormikContext();

  const { mutate } = useMutation(queryKeys.deleteImage, (url: string) =>
    adminGlobalService.deleteImage(url)
  );

  const deleteImageFunction = (localState?: IImage) => {
    const link = state ? state.image!.url : localState!.image!.url;
    mutate(link);
    if (state) {
      state.image = null;
      setFieldValue("image", null);
    } else {
      localState!.image = null;
    }
    queryClient.invalidateQueries(key);
  };

  return deleteImageFunction;
};

export default useDeleteImageFunction;
