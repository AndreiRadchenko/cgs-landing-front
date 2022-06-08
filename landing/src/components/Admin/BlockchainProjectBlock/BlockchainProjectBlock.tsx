import { useFormikContext } from "formik";
import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataBlockchainResponse } from "../../../types/Admin/Response.types";
import AddReview from "./BlockchainProjectEditor";
import BlockchainProjectView from "./BlockchainProjectView";
import AdminCarousel from "../Global/AdminImageCarousel";

const BlockchainProjectBlock = () => {
  const { values } = useFormikContext<IDataBlockchainResponse>();
  const [current, setCurrent] = useState(0);
  const [isNewStatus, setIsNewStatus] = useState(true);

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <AddReview current={current} newFlag={isNewStatus} />

        <Styled.AdminReviewBlock>
          {values.projects.length === 0 ? (
            <Styled.AdminSubTitle>No projects</Styled.AdminSubTitle>
          ) : (
            <BlockchainProjectView
              editFlag={isNewStatus}
              current={current}
              editTrigger={setIsNewStatus}
            />
          )}
          <AdminCarousel
            page={current}
            setPage={setCurrent}
            length={values.projects.length}
          />
        </Styled.AdminReviewBlock>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default BlockchainProjectBlock;
