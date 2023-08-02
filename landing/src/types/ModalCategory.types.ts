import React, { MouseEvent } from "react";

export interface IServiceDropdown {
  setService: (val: string) => void;
  dropdownName: string;
  serviceIsOpen: boolean;
  setServiceIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  btnIsClicked: boolean;
}

export interface IFormState {
  name: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  details: string;
}

export interface IFormProps {
  onClose: (e?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  isOpen: boolean;
}

export interface IModalProps {
  onClose: (e?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  isOpen: boolean;
}

export interface ITicketModalProps {
  isOpen?: boolean;
  isCalendly?: boolean;
  children: React.ReactNode;
}

export interface ICalendlyUserData {
  name: string;
  email: string;
  link: string;
}
