import { useFormikContext } from "formik";
import React, { FC } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SortableItem } from "react-easy-sort";

import { queryKeys } from "../../../consts/queryKeys";
import { adminGlobalService } from "../../../services/adminHomePage";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AddLogoFrame from "./AddLogoFrame";
import LogoElement from "./LogoElement";

export interface IDragProps {
  oldIndex: number;
  newIndex: number;
}

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

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    values.LogosBlock.images.splice(
      newIndex,
      0,
      values.LogosBlock.images.splice(oldIndex, 1)[0]
    );
    handleSubmit();
  };

  return (
    <div>
      <Styled.AdminSubTitle>Logos</Styled.AdminSubTitle>
      <Styled.AdminLogosGrid
        onSortEnd={onSortEnd}
        className="list"
        draggedItemClassName="dragged"
      >
        <AddLogoFrame state={values.LogosBlock} submit={handleSubmit} />
        {values.LogosBlock.images.map((item, index) => (
          <SortableItem key={item.url}>
            <div>
              <LogoElement
                image={item}
                key={Math.random()}
                deleteLogo={() => deleteNormalLogo(index)}
              />
            </div>
          </SortableItem>
        ))}
      </Styled.AdminLogosGrid>
    </div>
  );
};

export default AdminLogosBlock;
