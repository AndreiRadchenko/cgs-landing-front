import { useFormikContext } from "formik";
import React, { FC } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminGlobalService } from "../../../services/adminHomePage";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AddLogoFrame from "./AddLogoFrame";
import LogoElement from "./LogoElement";

interface IDragItem {
  item: { url: string; index: number };
}

interface IDragContainer {
  items: { url: string }[];
}

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

  const SortableListItem = SortableElement<IDragItem>(({ item }: IDragItem) => {
    return (
      <div>
        <LogoElement
          image={item}
          key={Math.random()}
          deleteLogo={() => deleteNormalLogo(item.index)}
        />
      </div>
    );
  });

  const SortableList = SortableContainer<IDragContainer>(
    ({ items }: IDragContainer) => {
      return (
        <Styled.AdminLogosGrid>
          <AddLogoFrame state={values.LogosBlock} submit={handleSubmit} />
          {items.map((item, index) => {
            return (
              <SortableListItem
                item={{ ...item, index }}
                key={index}
                index={index}
              />
            );
          })}
        </Styled.AdminLogosGrid>
      );
    }
  );

  const onSortEnd = ({ oldIndex, newIndex }: IDragProps) => {
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

      <SortableList
        axis="xy"
        items={values.LogosBlock.images}
        onSortEnd={onSortEnd}
      />
    </div>
  );
};

export default AdminLogosBlock;
