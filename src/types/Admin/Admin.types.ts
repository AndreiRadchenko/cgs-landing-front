export interface IAdmin {
  username: string;
  password: string;
}

export interface IRes {
  accessToken: string ;
}

export interface IPhotoBlock {
  photo: any,
  deleteFlag?: boolean,
}