import { useFormikContext } from "formik";
import React, { FC } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminGlobalService } from "../../../services/adminHomePage";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AddLogoFrame from "./AddLogoFrame";
import LogoElement from "./LogoElement";

interface IRenderProps {
  state: { url: string }[];
  deleteLogo: (ind: number) => void;
}

const render = ({ state, deleteLogo }: IRenderProps) => {
  return state.map((i, ind) => (
    <LogoElement
      image={i}
      key={Math.random()}
      deleteLogo={() => deleteLogo(ind)}
    />
  ));
};

const AdminLogosBlock: FC = () => {
  const queryClient = useQueryClient();
  const { values, handleSubmit } = useFormikContext<IDataResponse>();
  const { mutate } = useMutation([queryKeys.deleteImage], (url: string) =>
    adminGlobalService.deleteImage(url)
  );

  const deleteNormalLogo = (id: number) => {
    const link = values.LogosBlock.images.splice(id, 1);
    mutate(link[0].url);
    handleSubmit();
    queryClient.invalidateQueries([queryKeys.GetFullPage]);
  };

  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminSubTitle>Logos</Styled.AdminSubTitle>
      <Styled.AdminLogosGrid>
        <AddLogoFrame state={values.LogosBlock} submit={handleSubmit} />
        {render({
          state: values.LogosBlock.images,
          deleteLogo: deleteNormalLogo,
        })}
      </Styled.AdminLogosGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminLogosBlock;
