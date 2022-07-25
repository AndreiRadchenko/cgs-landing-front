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
  const { mutate } = useMutation(queryKeys.deleteImage, (url: string) =>
    adminGlobalService.deleteImage(url)
  );
  const normalLogos = { images: values.LogosBlock.images.normal };
  const hoverLogos = { images: values.LogosBlock.images.hover };

  const deleteNormalLogo = (id: number) => {
    const link = values.LogosBlock.images.normal.splice(id, 1);
    mutate(link[0].url);
    handleSubmit();
    queryClient.invalidateQueries(queryKeys.GetFullPage);
  };

  const deleteHoverLogo = (id: number) => {
    const link = values.LogosBlock.images.hover.splice(id, 1);
    mutate(link[0].url);
    handleSubmit();
    queryClient.invalidateQueries(queryKeys.GetFullPage);
  };
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminSubTitle>Logos</Styled.AdminSubTitle>
      <Styled.AdminLogosGrid>
        <AddLogoFrame state={normalLogos} submit={handleSubmit} />
        {render({
          state: values.LogosBlock.images.normal,
          deleteLogo: deleteNormalLogo,
        })}
      </Styled.AdminLogosGrid>
      <Styled.AdminSubTitle>Logos (hover)</Styled.AdminSubTitle>
      <Styled.AdminLogosGrid>
        <AddLogoFrame state={hoverLogos} submit={handleSubmit} />
        {render({
          state: values.LogosBlock.images.hover,
          deleteLogo: deleteHoverLogo,
        })}
      </Styled.AdminLogosGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminLogosBlock;
