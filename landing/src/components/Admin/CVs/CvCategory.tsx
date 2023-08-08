import React from "react";

import TrashIcon from "../Portfolio/TrashIcon";
import ButtonArrow from "../../../utils/ButtonArrow";

import * as Styled from "../../../styles/AdminPage";
import { ArrowContainer, BlackButton } from "../../../styles/HomePage/General.styled";

import { ICvPageData } from "../../../types/Admin/AdminCv.types";

interface ICvCategoryProps {
    categories: string[];
    onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
    handleClick: () => void;
    setValues: (values: React.SetStateAction<ICvPageData>, shouldValidate?: boolean | undefined) => void;
}

const CvCategory = ({ categories, onChangeFunction, handleClick, setValues }: ICvCategoryProps) => {
    const handleDeleteItem = (index: number) => {
        setValues((prevState) => ({
            ...prevState,
            categories: prevState.categories.filter((_, i) => i !== index),
        }));
    };

    const handleAddCategory = () => {
        setValues((prevState) => ({
            ...prevState,
            categories: [...prevState.categories, ""],
        }));
    };

    return (
        <Styled.ContentWrapper>
            {categories?.map((item, idx) => (
                <Styled.CategoryWrapper key={idx} className="cv">
                    <Styled.AdminNewCategoryInputWrapper>
                        <Styled.AdminCategoryNameInput
                            value={item}
                            onChange={onChangeFunction}
                            name={`categories.${idx}`}
                            className="cv"
                        />
                        {idx !== 0 ? (
                            <Styled.AdminCategoryDeleteBlockWrapper
                                onClick={() => handleDeleteItem(idx)}
                            >
                                <TrashIcon />
                            </Styled.AdminCategoryDeleteBlockWrapper>
                        ) : (
                            null
                        )}
                    </Styled.AdminNewCategoryInputWrapper>
                </Styled.CategoryWrapper>
            ))}
            <div style={{ marginTop: 38, marginBottom: 20 }}>
                <Styled.AdminCategoryAddBlockWrapper onClick={handleAddCategory}>
                    <Styled.AdminCategoryAddBlockBtn>
                        {"[ +add next ]"}
                    </Styled.AdminCategoryAddBlockBtn>
                </Styled.AdminCategoryAddBlockWrapper>
            </div>
            <BlackButton
                size={"1.5em"}
                padding={"1.11em 3em"}
                style={{ marginTop: "1.33em" }}
                onClick={handleClick}
            >
                Save Changes
                <ArrowContainer>
                    <ButtonArrow />
                </ArrowContainer>
            </BlackButton>
        </Styled.ContentWrapper>
    )
}

export default CvCategory;