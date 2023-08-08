import React, { Dispatch, SetStateAction } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { useMutation } from "@tanstack/react-query";

import { queryKeys } from "../../../consts/queryKeys";
import { adminCvService } from "../../../services/adminCvPage";
import { AdminCvValidation } from "../../../validations/AdminCvValidation";
import CvAddOrEdit from "./CvAddorEdit";
import { NewCv } from "../../../consts";

import { CvData } from "../../../types/Admin/AdminCv.types";

interface CvAddOrEditProps {
    isNewCv: boolean;
    setIsNewCv: Dispatch<SetStateAction<boolean>>;
    cv: CvData[] | undefined | void;
}

const CvForm = ({
    isNewCv,
    setIsNewCv,
    cv,
}: CvAddOrEditProps) => {
    const { mutateAsync: postCv } = useMutation(
        [queryKeys.addPortfolioReview],
        (cv: CvData) => adminCvService.postCv(cv),
    );

    const handleSubmit = (values: CvData, action: FormikHelpers<any>) => {
        postCv(values);
        action.resetForm();
        action.setFieldValue("image", null)
        action.setFieldValue("category", "")
    }

    return (
        <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={JSON.parse(JSON.stringify(NewCv))}
            onSubmit={handleSubmit}
            validationSchema={AdminCvValidation}
        >
            <Form>
                <CvAddOrEdit />
            </Form>
        </Formik>
    )
}

export default CvForm;