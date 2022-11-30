import { IPropsWithImage } from "./BlockProps";
import { IEditInformation, IPointsData } from "./Response.types";
import { FieldArrayRenderProps } from "formik";
import { IDataCareersResponse } from "./Response.types";
export interface IAdmin {
  username: string;
  password: string;
}

export interface IRes {
  accessToken: string;
}

export interface IPhotoBlock extends IPropsWithImage {
  photo: any;
  emptyHeader?: string;
  deleteFlag?: boolean;
  header?: string;
  className?: string;
  style?: any;
}

export interface InputPropsInterface {
  inputValue: string;
  onChangeFunction: (e?: string | React.ChangeEvent<any>) => void;
  onInputFunction?: (e: React.ChangeEvent<any>) => void;
  name?: string;
}

export interface DropdownPropsInterface {
  value: string;
  route?: string;
  children?: any;
  Icon?: any;
}

export interface IBlockDropDownProps {
  nextBtn?: boolean;
  title: string;
  style?: any;
  children: any;
  onNextClick?: () => void;
  defaultOpen?: boolean;
}

export interface InputWithHeader extends InputPropsInterface {
  placeholder?: string;
  header?: string;
  minRows?: number;
  isBlog?: boolean;
  isMetaField?: boolean;
  height?: string;
  width?: string;
  id?: string;
  inputStyle?: any;
}

export interface InputWithImage extends InputPropsInterface {
  photo: any;
  deleteFunction?: () => void;
  uploadFunction?: (image: any) => void;
}

export interface IFeedbackRenderState {
  [subtitle: string]: string;
  text3: string;
}

export interface IRenderInputsProps {
  props: FieldArrayRenderProps;
  state: IEditInformation | IFeedbackRenderState | IPointsData;

  onChangeFunction: (e?: string | React.ChangeEvent<any>) => void;
}

export interface IRenderContactInputsProps {
  props: FieldArrayRenderProps;
  state: any;
  onChangeFunction: (e?: string | React.ChangeEvent<any>) => void;
}

export interface IImage {
  image: {
    url: string;
  } | null;
}

export interface IDeleteImageData {
  url: string;
}

export interface CareersProps {
  data: IDataCareersResponse | undefined;
  isLoading: boolean;
}
