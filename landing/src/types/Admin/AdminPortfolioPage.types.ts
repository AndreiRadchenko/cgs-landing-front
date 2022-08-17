import { FormikHelpers } from "formik";
import React from "react";
import { IMetaBlock } from "./Response.types";

export interface IPortfolioReview {
  _id?: string;
  image: { url: string } | null;
  title: string;
  text: string;
  category: string;
  button: string;
  feedback: {
    name: string;
    rating: number;
    company: string;
    feedbackText: string;
  };
  bgColor: string;
}

export interface IPortfolioData {
  categories: string[];
  subtitle: string;
  reviews: IPortfolioReview[];
  meta: IMetaBlock;
}

export interface IPortfolioResponse {
  data?: IPortfolioData;
  isLoading: boolean;
  refetch: () => Promise<IPortfolioResponse>;
}

export interface IAddAndEditProps {
  submitFunc: (
    data: IPortfolioReview,
    props: FormikHelpers<IPortfolioReview>
  ) => void;
  setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
  editFunc: (
    values: IPortfolioReview,
    props: FormikHelpers<IPortfolioReview>,
    id: number
  ) => void;
  current: number;
  isNewStatus: boolean;
}
