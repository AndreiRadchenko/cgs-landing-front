import React, { FC } from "react";
import * as Styled from "./LetsGoForm.styled";
import CareersForm from "../CareersForm/Form/index";
import { IContactBlock } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";

interface ILetsGoForm {
  contact?: IContactBlock;
  vacancy: string;
}

const LetsGoForm: FC<ILetsGoForm> = ({ contact, vacancy }) => {
  return (
    <>
      {contact && (
        <>
          <Styled.FormTitle>
            <SplitBrackets text={contact.title} />
          </Styled.FormTitle>
          <Styled.FormContainer>
            <CareersForm data={contact.form} vacancy={vacancy} />
            <Styled.FormImage image={contact.form.image}>
              <Styled.FormCodeImg />
            </Styled.FormImage>
          </Styled.FormContainer>
        </>
      )}
    </>
  );
};

export default LetsGoForm;
