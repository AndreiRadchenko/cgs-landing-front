import { IPropsWithImage } from "./BlockProps";
import {
  IBuildRocketBlock,
  IContactFormBlock,
  IDataResponse,
  IEditInformation,
  IPointsData,
} from "./Response.types";
import { FieldArrayRenderProps } from "formik";
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
}

export interface InputPropsInterface {
  inputValue: string;
  onChangeFunction: (e?: string | React.ChangeEvent<any>) => void;
  name?: string;
}

export interface DropdownPropsInterface {
  value: string;
  route: string;
  children?: any;
}

export interface InputWithHeader extends InputPropsInterface {
  placeholder?: string;
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
    | IFeedbackRenderState
    | IPointsData;

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
