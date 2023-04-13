import React, { createPortal, FC } from "react-dom";
import { Backdrop } from "./Loader.styled";

export interface ILoader {
  isActive: boolean;
}

export const Loader: FC<ILoader> = ({ isActive }) => {
  let container;
  if (typeof window !== "undefined") {
    const rootContainer = document.createElement("div");
    const parentElem = document.querySelector("#__next");
    parentElem?.appendChild(rootContainer);
    container = rootContainer;
  }

  const element = (
    <Backdrop>
      <div className="modal">
        <p>This is part of the modal</p>
      </div>
    </Backdrop>
  );

  return container ? createPortal(element, container) : null;
};
