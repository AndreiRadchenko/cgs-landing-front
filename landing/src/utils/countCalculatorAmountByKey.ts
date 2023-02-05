import { IStepOptions } from "../types/Admin/Response.types";
import { getNested } from "./getNestedObjectByKeys";

export const count = (
  options: IStepOptions[],
  answers: string | string[],
  keys: string[]
) =>
  options
    .map((option) => {
      if (typeof answers === "string") {
        return getNested(option, ...keys) && option.label === answers
          ? getNested(option, ...keys)
          : 0;
      }
      return answers
        .map((answer) =>
          getNested(option, ...keys) && option.label === answer
            ? getNested(option, ...keys)
            : 0
        )
        .reduce((acc, curr) => (acc || 0) + (curr || 0));
    })
    .reduce((acc, curr) => (acc || 0) + (curr || 0));
