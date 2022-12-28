import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import * as Styled from "../../../styles/AdminPage";

import CalculatorPagerForm from "./CalculatorPager";
import CalculatorPriceForm from "./CalculatorPriceForm";
import CalculatorResultsForm from "./CalculatorResultsForm";
import CalculatorStepsForm from "./CalculatorStepsForm";

const AdminCalculatorContent = () => {
  const [isBlockchain, toogleBlockchain] = useState<boolean>(false);

  const { data, refetch, isLoading } = useQuery(
    [queryKeys.getCalculatorData],
    () => adminCalculatorService.getCalculatorData()
  );

  const {
    data: classicSteps,
    isLoading: classicStepsIsLoading,
    refetch: classicRefetch,
  } = useQuery([queryKeys.getCalculatorClassicSteps], () =>
    adminCalculatorService.getCalculatorClassicSteps()
  );

  const {
    data: blockchainData,
    isLoading: blockchainIsLoading,
    refetch: blockchainRefetch,
  } = useQuery([queryKeys.getCalculatorBlockchainSteps], () =>
    adminCalculatorService.getCalculatorBlockchainSteps()
  );

  return (
    (classicSteps && blockchainData && (
      <Styled.AdminContentBlock>
        <Styled.AdminBlocksContent>
          <Styled.AdminHeader>CALCULATOR</Styled.AdminHeader>
          {(data && (
            <CalculatorPagerForm
              dataIsLoading={isLoading}
              refetch={refetch}
              data={data}
            />
          )) ||
            null}
          <CalculatorStepsForm
            classicIsLoading={classicStepsIsLoading}
            classicStepsData={classicSteps}
            classicRefetch={classicRefetch}
            blockchainIsLoading={blockchainIsLoading}
            blockchainStepsData={blockchainData}
            blockchainRefetch={blockchainRefetch}
            isBlockchain={isBlockchain}
            toogleBlockchain={toogleBlockchain}
          />
          <CalculatorResultsForm />
          <CalculatorPriceForm
            key={`${isBlockchain}`}
            isBlockchain={isBlockchain}
          />
        </Styled.AdminBlocksContent>
      </Styled.AdminContentBlock>
    )) ||
    null
  );
};

export default AdminCalculatorContent;
