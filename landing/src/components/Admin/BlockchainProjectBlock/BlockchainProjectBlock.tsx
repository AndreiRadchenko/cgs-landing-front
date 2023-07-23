import { useFormikContext } from "formik";
import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataBlockchainResponse } from "../../../types/Admin/Response.types";
import AddReview from "./BlockchainProjectEditor";
import BlockchainProjectView from "./BlockchainProjectView";
import AdminCarousel from "../Global/AdminImageCarousel";
import AddLogoFrame from "../LogosBlock/AddLogoFrame";
import LogoElement from "../LogosBlock/LogoElement";

const BlockchainProjectBlock = () => {
  const { values } = useFormikContext<IDataBlockchainResponse>();
  const [current, setCurrent] = useState(0);
  const [isNewStatus, setIsNewStatus] = useState(true);

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Blockchain</Styled.AdminHeader>
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
      <br />
      <br />
      <Styled.AdminSubTitle>Logos (normal)</Styled.AdminSubTitle>
      <br />
      <Styled.AdminBlockchainLogosGrid>
        <AddLogoFrame
          state={values.LogosBlock}
          submit={() => {
            console.log("submit");
          }}
        />
        {values.LogosBlock.images?.map((i) => (
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          <LogoElement image={i} key={Math.random()} deleteLogo={() => {}} />
        ))}
      </Styled.AdminBlockchainLogosGrid>
      <br />
      <Styled.AdminSubTitle>Logos (hover)</Styled.AdminSubTitle>
      <br />
      <Styled.AdminBlockchainLogosGrid>
        <AddLogoFrame
          state={values.LogosBlock}
          submit={() => {
            console.log("submit");
          }}
        />
        {values.LogosBlock.images?.map((i) => (
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          <LogoElement image={i} key={Math.random()} deleteLogo={() => {}} />
        ))}
      </Styled.AdminBlockchainLogosGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default BlockchainProjectBlock;
