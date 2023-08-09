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
    current: number;
}

const CvForm = ({
    isNewCv,
    setIsNewCv,
    cv,
    current,
}: CvAddOrEditProps) => {
    const { mutateAsync: editCv } = useMutation(
        [queryKeys.addPortfolioReview],
        (cv: CvData) => adminCvService.updateById(cv),
    );
    
    const { mutateAsync: postCv } = useMutation(
        [queryKeys.addPortfolioReview],
        (cv: CvData) => adminCvService.postCv(cv),
    );

    const handleSubmit = (values: CvData, action: FormikHelpers<any>) => {
        isNewCv 
            ? postCv(values)
            : editCv(values);
        action.resetForm();
        action.setFieldValue("image", null);
        action.setFieldValue("category", "");
        setIsNewCv(true);
    }

    return (
        <Formik
            key={`Form${isNewCv}${
            typeof current === "number" ? current : "null"
            }`}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={
                isNewCv
                  ? JSON.parse(JSON.stringify(NewCv))
                  : typeof cv !== "undefined" &&
                    (cv[current].image
                      ? cv[current]
                      : {
                          ...cv[current],
                          imageBanner: {
                            image: null,
                          },
                          imageProjectBanner: {
                            image: null,
                          },
                        })
              }
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