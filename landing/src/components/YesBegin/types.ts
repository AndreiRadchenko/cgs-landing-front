import { Dispatch, SetStateAction } from "react";

export type IYesBeginProps = {
  clickHandler: () => void;
  disableScroll: Dispatch<SetStateAction<boolean>>;
};
