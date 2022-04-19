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
}

export interface InputPropsInterface {
  inputValue: string;
  onChangeFunction: () => void;
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

export interface IEditInformation {
  title: string;
  text: string;
  text2: string;
  button: string;
}

export interface ISubtitle {
  title: string;
  elements: string[];
  firstText2: string;
  text3: string;
  secondText2: string;
}

export interface IDataResponse {
  EditInformation: IEditInformation;
  Subtitle: ISubtitle;
}
