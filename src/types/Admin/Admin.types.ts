export interface IAdmin {
  username: string;
  password: string;
}

export interface IRes {
  data: { accessToken: string };
}