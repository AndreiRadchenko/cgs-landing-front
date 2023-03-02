import {
  ICalculatorQuestion,
  ICalculatorStep,
  ICalculator,
} from "../types/Admin/Response.types";
import { count } from "./countCalculatorAmountByKey";

export const getResults = (
  data: ICalculatorStep[] | undefined,
  questionsArr: ICalculatorQuestion[],
  ...keys: string[]
) => {
  // console.log("All data: ", data);
  // console.log("Questions array: ", questionsArr);
  // console.log("All keys: ", keys);

  if (!data) throw Error("No data found!");

  return questionsArr
    .map(
      (question, currInd) =>
        (count(data[currInd].options, question.answer, keys) || 0) +
        ((question.subStepAnswer &&
          data[currInd].subSteps &&
          data[currInd].subSteps.length > 0 &&
          count(
            data[currInd].subSteps[0].options,
            question.subStepAnswer,
            keys
          )) ||
          0)
    )
    .reduce((acc, curr) => (acc || 0) + (curr || 0));
};
