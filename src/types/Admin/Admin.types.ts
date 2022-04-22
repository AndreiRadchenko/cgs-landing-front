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
}

export interface InputPropsInterface {
  inputValue: string;
  onChangeFunction: () => void;
  limit?: number;
  rows?: number;
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
}