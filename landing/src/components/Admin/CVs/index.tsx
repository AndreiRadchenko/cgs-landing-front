import { useFormikContext } from "formik";
import React from "react";

import ButtonArrow from "../../../utils/ButtonArrow";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import CvAddOrEdit from "./CvAddorEdit";
import CvCategory from "./CvCategory";

import * as AdminPageStyled from "../../../styles/AdminPage";
import { ArrowContainer, BlackButton } from "../../../styles/HomePage/General.styled";

import { ICvPageData } from "../../../types/Admin/AdminCv.types";

const CvContentBlock = () => {
    const { values, handleChange, handleSubmit, setValues } =
        useFormikContext<ICvPageData>();

    const handleClick = () => handleSubmit();

    return (
        <AdminPageStyled.AdminPaddedBlock theme="light">
            <AdminPageStyled.AdminContentBlock>
                <AdminPageStyled.AdminHeader>DEV'S CV</AdminPageStyled.AdminHeader>
                <div style={{ width: 347 }}>
                    <SubHeaderWithInput
                        header="Title"
                        name="title"
                        inputValue={values.title}
                        onChangeFunction={handleChange}
                    />
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
                <div style={{ marginTop: 50 }}>
                    <AdminBlockDropDown title="CATEGORY">
                        <CvCategory 
                            categories={values.categories} 
                            onChangeFunction={handleChange} 
                            handleClick={handleClick} 
                            setValues={setValues} 
                        />
                    </AdminBlockDropDown>
                </div>
                <AdminBlockDropDown title="ADD A NEW CV">
                    <CvAddOrEdit />
                </AdminBlockDropDown>
            </AdminPageStyled.AdminContentBlock>
        </AdminPageStyled.AdminPaddedBlock>
    )
}

export default CvContentBlock;