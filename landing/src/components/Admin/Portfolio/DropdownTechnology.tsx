import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Field, useFormikContext } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as Styled from "../../../styles/AdminPortfolio";
import * as Styles from "../../../styles/AdminPage";

import Arrow from "../../../../public/upArrowSidebar.svg";

import {
  IPortfolioReview,
  ITechnology,
} from "../../../types/Admin/AdminPortfolio.types";
import TrashIconBtn from "../RateCard/trashIconBtn";
import { queryKeys } from "../../../consts/queryKeys";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";

interface IDropdownProps {
  technologies: ITechnology[];
}

const DropdownTechnology = ({ technologies }: IDropdownProps) => {
  const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [techArr, setTechArr] = useState<ITechnology[]>([]);

  const { values, setFieldValue } = useFormikContext<IPortfolioReview>();

  const { mutateAsync: deleteTech } = useMutation(
    [queryKeys.removePortfolioTech],
    (id: string) => adminPortfolioService.removeTechnology(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getPortfolioPage]);
      },
    }
  );

  const changeTechHandler = (tech: ITechnology) => {
    setIsOpen(false);
    setTechArr((prevState) => [tech, ...prevState]);
  };
  const removeTagHandler = (idx: number) => {
    const temp = [...techArr];
    temp.splice(idx, 1);

    setTechArr(temp);
  };

  useEffect(() => {
    setFieldValue("technologies", techArr);
  }, [techArr]);

  return (
    <>
      <Styled.DropdownWrapperTechnology>
        <Styled.DropdownBanner
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "open" : undefined}
        >
          {"//Choose technologies"}
          <Image width={12} height={12} src={Arrow.src} alt="Arrow" />
        </Styled.DropdownBanner>
        <Styled.Content className={isOpen ? "open" : undefined}>
          {technologies?.map((tech, idx) => (
            <div key={`${tech}${idx}`} onMouseDown={(e) => e.preventDefault()}>
              <span onClick={() => changeTechHandler(tech)}>{tech.name}</span>
              <TrashIconBtn onClick={() => tech._id && deleteTech(tech._id)} />
            </div>
          ))}
        </Styled.Content>
      </Styled.DropdownWrapperTechnology>
      <Styles.AdminFourthBlockFlexTag>
        {values.technologies.map((tech, idx) => (
          <Styles.AdminPageFourthTechTagWrapper key={`${tech}${idx}`}>
            <Styles.AdminPageFourthTechTag>
              <span>{tech.name}</span>
              <span onClick={() => removeTagHandler(idx)}>x</span>
            </Styles.AdminPageFourthTechTag>
            <label>
              <Field type="checkbox" name={`technologies[${idx}].main`} /> Main
            </label>
          </Styles.AdminPageFourthTechTagWrapper>
        ))}
      </Styles.AdminFourthBlockFlexTag>
    </>
  );
};

export default DropdownTechnology;
