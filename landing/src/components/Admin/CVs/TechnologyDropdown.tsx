import React, { useState } from "react";
import Image from "next/image";

import Arrow from "../../../../public/upArrowSidebar.svg";

import * as Styled from "../../../styles/AdminPortfolio";
import * as Styles from "../../../styles/AdminPage";

import { ITechnology } from "../../../types/Admin/AdminPortfolio.types";

interface TechnologyDropdownProps {
    isError?: boolean;
    technologies: ITechnology[] | undefined;
    cvTechnologies: ITechnology[] | undefined;
    handleSelectTechnology: (techIndex: number, projectIdx: number) => void;
    projectIdx: number;
    handleDeleteTechnology: (techIndex: number, projectIdx: number) => void;
}

const TechnologyDropdown = ({
    isError,
    technologies,
    cvTechnologies,
    handleSelectTechnology,
    projectIdx,
    handleDeleteTechnology,
} : TechnologyDropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = (idx: number, projectIdx: number) => {
        handleSelectTechnology(idx, projectIdx);
        setIsOpen(false);
    }

    return (
        <>
            <Styled.DropdownWrapperTechnology>
                <Styled.DropdownBanner
                    isError={isError}
                    onClick={() => setIsOpen(!isOpen)}
                    className={isOpen ? "open" : undefined}
                >
                    {"//Choose technologies"}
                    <Image width={12} height={12} src={Arrow.src} alt="Arrow" />
                </Styled.DropdownBanner>
                <Styled.Content className={isOpen ? "open" : undefined}>
                    {technologies?.map((tech, idx) => (
                        <div
                            key={`${tech}${idx}`} onMouseDown={(e) => e.preventDefault()}
                            onClick={() => handleClick(idx, projectIdx)}>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </Styled.Content>
            </Styled.DropdownWrapperTechnology>
            <Styles.AdminFourthBlockFlexTag>
                {cvTechnologies?.map((cvTech, idx) => (
                    <Styles.AdminPageFourthTechTagWrapper key={`${cvTech}${idx}`}>
                        <Styles.AdminPageFourthTechTag>
                            <span>{cvTech.name}</span>
                            <span onClick={() => handleDeleteTechnology(projectIdx, idx)}>x</span>
                        </Styles.AdminPageFourthTechTag>
                    </Styles.AdminPageFourthTechTagWrapper>
                ))}
            </Styles.AdminFourthBlockFlexTag>
        </>
    )
}

export default TechnologyDropdown;