import { Dispatch, SetStateAction } from "react";

export type IBodyProps = {
  welcomePageButtonHandler: () => void;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  heroImg: string;
};
