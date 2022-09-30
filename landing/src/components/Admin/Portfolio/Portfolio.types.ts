import { FormikHelpers } from "formik";
import {
  IPortfolioResponse,
  IPortfolioReview,
} from "../../../types/Admin/AdminPortfolio.types";

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

export interface IPortfolioData {
  data: IPortfolioResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IPortfolioData>;
}

export interface IRenderPortfolioInputsProps {
  state: string[];
  handleChange: (e: string | React.ChangeEvent<any>) => void;
}
