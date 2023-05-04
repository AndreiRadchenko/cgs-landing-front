import React, { useState } from "react";
import Image from "next/image";
import { useFormikContext } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as Styled from "../../../styles/AdminPortfolio";

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

  const { values, setFieldValue } = useFormikContext<IPortfolioReview>();

  const { mutateAsync: deleteTech } = useMutation(
    [queryKeys.removePortfolioTech],
    (id: string) => adminPortfolioService.removeIndustry(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getPortfolio]);
      },
    }
  );

  const changeTechHandler = (tech: ITechnology) => {
    setIsOpen(false);
    values.technologies.push(tech);
  };

  return (
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
            <TrashIconBtn />
          </div>
        ))}
      </Styled.Content>
    </Styled.DropdownWrapperTechnology>
  );
};

export default DropdownTechnology;
