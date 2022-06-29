import { useState } from "react";
import { useFormikContext } from "formik";
import {
  IBlockchainProjectBlock,
  IDataBlockchainResponse,
} from "./../types/Admin/Response.types";

const useBlockchainLogic = () => {
  const { values, handleSubmit } = useFormikContext<IDataBlockchainResponse>();
  const [currentProjectNum, setCurrentProjectNum] = useState(0);

  const submitFunction = (feedback: IBlockchainProjectBlock) => {
    values.projects.push(feedback);
  };

  const deleteFunction = (id: number) => {
    values.projects.splice(id, 1);
    setCurrentProjectNum(id > 0 ? id - 1 : 0);
    handleSubmit();
  };

  const editFunction = (value: IBlockchainProjectBlock) => {
    values.projects[currentProjectNum] = value;
  };

  return {
    submitFunction,
    setCurrentProjectNum,
    currentProjectNum,
    deleteFunction,
    editFunction,
  };
};

export default useBlockchainLogic;
