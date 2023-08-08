import { useFormikContext } from "formik";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ButtonArrow from "../../../utils/ButtonArrow";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import CvCategory from "./CvCategory";
import { queryKeys } from "../../../consts/queryKeys";
import CvForm from "./CvForm";
import { adminCvService } from "../../../services/adminCvPage";

import * as AdminPageStyled from "../../../styles/AdminPage";
import { ArrowContainer, BlackButton } from "../../../styles/HomePage/General.styled";

import { ICvPageData } from "../../../types/Admin/AdminCv.types";

const CvContentBlock = () => {
    const [isNewCv, setIsNewCv] = useState<boolean>(false);

    const { values, handleChange, handleSubmit, setValues } =
        useFormikContext<ICvPageData>();

    const { data } = useQuery([queryKeys.getCvs], () =>
        adminCvService.getCv()
    );

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
                    <CvForm
                        isNewCv={isNewCv}
                        setIsNewCv={setIsNewCv}
                        cv={data}
                    />
                </AdminBlockDropDown>
            </AdminPageStyled.AdminContentBlock>
        </AdminPageStyled.AdminPaddedBlock>
    )
}

export default CvContentBlock;