import React, { Dispatch, SetStateAction } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

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

const CvForm = ({ isNewCv, setIsNewCv, cv, current }: CvAddOrEditProps) => {
  const queryClient = useQueryClient();

  const { mutateAsync: editCv } = useMutation(
    [queryKeys.addPortfolioReview],
    async (cv: CvData) => {
      return await toast.promise(adminCvService.updateById(cv), {
        pending: "Pending update",
        success: "CV updated successfully",
        error: "Some things went wrong 🤯",
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCvs]);
      },
    }
  );

  const { mutateAsync: postCv } = useMutation(
    [queryKeys.addPortfolioReview],
    async (cv: CvData) => {
      return await toast.promise(adminCvService.postCv(cv), {
        pending: "Pending update",
        success: "CV created successfully",
        error: "Some things went wrong 🤯",
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCvs]);
      },
    }
  );

  const validateForm = async (values: CvData) => {
    try {
      await AdminCvValidation.validate(values, {
        abortEarly: false,
      });
      return {};
    } catch (validationError) {
      toast.error(`Please fill all form fields`);
      return validationError;
    }
  };

  const handleSubmit = (values: CvData, action: FormikHelpers<any>) => {
    isNewCv ? postCv(values) : editCv(values);
    action.resetForm();
    action.setFieldValue("image", null);
    action.setFieldValue("category", "");
    setIsNewCv(true);
  };

  return (
    <Formik
      key={`Form${isNewCv}${typeof current === "number" ? current : "null"}`}
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
      validate={validateForm}
    >
      <Form>
        <CvAddOrEdit />
      </Form>
    </Formik>
  );
};

export default CvForm;
