import React from "react";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import { useQuery } from "react-query";

import * as Styled from "../../styles/AdminPage";

const AdminBlockchain = () => {
  const { data } = useQuery(queryKeys.validToken, () =>
    validTokenGlobal.validToken()
  );
  return data ? (
    <Styled.AdminWrapper>
      {/*
				components here
			*/}
    </Styled.AdminWrapper>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Somethimg went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminBlockchain;
