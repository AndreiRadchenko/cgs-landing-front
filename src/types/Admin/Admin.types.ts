import {
  IBuildRocketBlock,
  IContactFormBlock,
  IDataResponse,
  IEditInformation,
} from "./Response.types";
import { FieldArrayRenderProps } from "formik";
export interface IAdmin {
  username: string;
  password: string;
}

export interface IRes {
  accessToken: string;
}

export interface IPhotoBlock {
  photo: any;
  deleteFlag?: boolean;
  header?: string;
  deleteFunction?: () => void;
  uploadFunction?: (image: any) => void;
}

export interface InputPropsInterface {
  inputValue: string;
  onChangeFunction: (e?: string | React.ChangeEvent<any>) => void;
  name?: string;
}

export interface DropdownPropsInterface {
  value: string;
  onClick?: () => void;
  route: string;
}

export interface InputWithHeader extends InputPropsInterface {
  header: string;
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
  state:
    | IBuildRocketBlock
    | IContactFormBlock
    | IEditInformation
    | IFeedbackRenderState;
  onChangeFunction: (e?: string | React.ChangeEvent<any>) => void;
}

export interface IImage {
  image: {
    url: string;
  } | null;
}

export interface IDeleteImageData {
  data: {
    url: string;
    data: IDataResponse;
  };
}
