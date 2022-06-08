import { useFormikContext } from "formik";
import React, { FC } from "react";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminGlobalService } from "../../../services/adminHomePage";
import * as Styled from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AddLogoFrame from "./AddLogoFrame";
import LogoElement from "./LogoElement";

interface ILocalState {
  images: { url: string }[];
}

interface IRenderProps {
  state: ILocalState;
  deleteLogo: (ind: number) => void;
}

const render = ({ state, deleteLogo }: IRenderProps) => {
  console.log(state.images);
  return state.images?.map((i, ind) => (
    <LogoElement
      image={i}
      key={Math.random()}
      deleteLogo={() => deleteLogo(ind)}
    />
  ));
};

interface AdminLogosBlockProps {
  typeOfLogo?: "normal" | "hover";
}

const AdminLogosBlock: FC<AdminLogosBlockProps> = ({ typeOfLogo }) => {
  const queryClient = useQueryClient();
  const { values, handleSubmit } = useFormikContext<IDataResponse>();
  const { mutate } = useMutation(queryKeys.deleteImage, (url: string) =>
    adminGlobalService.deleteImage(url)
  );

  const deleteLogo = (id: number) => {
    const link = values.LogosBlock.images.splice(id, 1);
    mutate(link[0].url);
    handleSubmit();
    queryClient.invalidateQueries(queryKeys.GetFullPage);
  };

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminSubTitle>
        Logos {typeOfLogo ? `(${typeOfLogo})` : null}
      </Styled.AdminSubTitle>
      <Styled.AdminLogosGrid>
        <AddLogoFrame state={values.LogosBlock} submit={handleSubmit} />
        {render({ state: values.LogosBlock, deleteLogo })}
      </Styled.AdminLogosGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminLogosBlock;
