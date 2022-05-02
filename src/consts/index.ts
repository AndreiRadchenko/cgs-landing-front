export enum ErrorMessage {
  DEFAULT = "Oops, something went wrong!",
}

export enum storeKeys {
  token = "TOKEN",
  role = "ROLE",
  profile = "PROFILE",
}

export const initAdmin = {
  username: "",
  password: "",
};

export const feedbackInit = {
  companyName: "",
  role: "",
  text: "",
  name: "",
  stars: 1,
};

export enum ROUTE_KEYS {
  AdminPage = "AdminPage",
  AdminPortfolio = "/Admin/AdminPortfolio",
  AdminCareers = "AdminCareers",
  AdminPartners = "AdminPartners",
  AdminSettings = "AdminSettings",
}
