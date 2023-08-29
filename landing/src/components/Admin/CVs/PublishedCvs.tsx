import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { toast } from "react-toastify";

import { queryKeys } from "../../../consts/queryKeys";
import { adminCvService } from "../../../services/adminCvPage";
import AdminDropDown from "../Global/AdminDropDown";
import AdminCvItem from "./AdminCvItem";
import CvPdf from "./CvPdf";

import * as Styled from "../../../styles/AdminPage";
import * as Styles from "../../../styles/AdminCvPage";

import { CvData, ICvPageData } from "../../../types/Admin/AdminCv.types";
import { ISitemapData, ISwapData } from "../../../types/Admin/Response.types";

interface ICvs {
  setIsNewCv: Dispatch<SetStateAction<boolean>>;
  setCurrent: (val: number) => void;
  current: number;
  isNewCv: boolean;
  data?: void | CvData[] | undefined;
  sitemap?: ISitemapData | void;
  scrollFunc: () => void;
}

const PublishedCvs = ({
  current,
  setCurrent,
  isNewCv,
  setIsNewCv,
  data,
  sitemap,
  scrollFunc,
}: ICvs) => {
  const { values } = useFormikContext<ICvPageData>();
  const queryClient = useQueryClient();

  const [catValue, setCatValue] = useState(values.categories[0]);

  const { mutateAsync: deleteCvById } = useMutation(
    [queryKeys.deleteCvById],
    async (id: string) => {
      return await toast.promise(adminCvService.deleteById(id), {
        pending: "Pending update",
        success: "CV deleted successfully 👌",
        error: "Some things went wrong 🤯",
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCvs]);
      },
    }
  );

  const { mutateAsync: swapCvs } = useMutation(
    [queryKeys.swapPortfolioReviews],
    async (swapData: ISwapData) => {
      return await toast.promise(adminCvService.swapCvs(swapData), {
        pending: "Pending update",
        success: "CV ID swapped successfully",
        error: "Some things went wrong 🤯",
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCvs]);
      },
    }
  );

  const deleteFunc = (id: string) => {
    deleteCvById(id);
    queryClient.invalidateQueries([queryKeys.getCvs]);
  };

  const filteredData = useMemo(
    () =>
      catValue === "All"
        ? data
        : data?.filter((data) => data.category.includes(catValue)),
    [data, catValue]
  );

  const handleDragEnd = async (oldIndex: number, newIndex: number) => {
    if (filteredData && data) {
      const srcItem = filteredData[oldIndex]._id;
      const desItem = filteredData[newIndex]._id;
      const srcInd = data.findIndex((el) => el._id === srcItem);
      const desInd = data.findIndex((el) => el._id === desItem);
      const swapped = data;

      swapped &&
        typeof desInd === "number" &&
        swapped.splice(desInd, 0, swapped.splice(srcInd, 1)[0]);
      typeof desInd === "number" &&
        (await swapCvs({ srcInd, desInd })) &&
        queryClient.setQueryData([queryKeys.getCvs], swapped);
    }
  };

  return (
    <>
      <Styled.AdminCategoryBlock>
        <AdminDropDown
          size="primary"
          bannerClassName="admin-cv-dropdown"
          menu={[...values.categories.map((elem) => elem)]}
          value={catValue}
          setValue={setCatValue}
          className="admin-cv-dropdown"
        />
      </Styled.AdminCategoryBlock>
            {(filteredData &&
                filteredData.length !== 0 &&
                filteredData.map((cv, idx) => (
                    <Styles.CvPdfWrapper id={cv._id} key={idx}>
                        <CvPdf data={cv} />
                    </Styles.CvPdfWrapper>
                )))}
            <SortableList onSortEnd={handleDragEnd}>
                {(filteredData &&
                    filteredData.length !== 0 &&
                    filteredData.map((cv, idx) => (
                        <SortableItem key={idx}>
                            <Styled.DraggableWrapper className="adminCv">
                                <AdminCvItem
                                    cv={cv}
                                    idx={idx}
                                    current={current}
                                    setCurrent={setCurrent}
                                    editFlag={isNewCv}
                                    editTrigger={setIsNewCv}
                                    onScroll={scrollFunc}
                                    deleteFunc={() =>
                                        cv._id &&
                                        deleteFunc(
                                            cv._id,
                                        )
                                    }
                                />
                            </Styled.DraggableWrapper>
                        </SortableItem>
                    ))) || <Styled.AdminSubTitle>no CVs</Styled.AdminSubTitle>}
            </SortableList>
        </>
    )
}

export default PublishedCvs;
