import React, { useState } from "react";
import { Formik } from "formik";

import AddRateCardImage from "./AddRateCardImage";
import PlusBtn from "./plusBtn";
import SaveBtn from "../Global/SaveBtn";
import TrashIconBtn from "./trashIconBtn";
import RateCardLevelsInput from "./RateCardLevelsInput";

import { IService } from "../../../types/Admin/AdminRateCard.types";

import {
  AddRateCardInfo,
  AdminAddServiceWrapper,
  DeleteBtn,
  RateCardBtnContainer,
  ServiceInput,
  ServiceInputLabel,
} from "../../../styles/AdminRateCard.styled";

const AdminAddService = ({ service }: { service: IService }) => {
  const [addRateCardInfo, setAddRateCardInfo] = useState(service.newService);

  const handleClick = () => {
    setAddRateCardInfo(false);
  };

  return (
    <Formik initialValues={service} onSubmit={() => console.log("hello")}>
      <>
        <AdminAddServiceWrapper>
          <AddRateCardImage />
          <div>
            <ServiceInputLabel>Service</ServiceInputLabel>
            <ServiceInput name="name" placeholder="Enter service" />
          </div>
        </AdminAddServiceWrapper>
        {addRateCardInfo && (
          <AddRateCardInfo onClick={handleClick}>
            <PlusBtn />
            Add information about rate card
          </AddRateCardInfo>
        )}
        {!addRateCardInfo &&
          service?.levels.map((level, idx) => (
            <RateCardLevelsInput
              key={`${level.name}${idx}`}
              level={level}
              idx={idx}
            />
          ))}
        <RateCardBtnContainer>
          <SaveBtn />
          <DeleteBtn>
            <TrashIconBtn />
            Delete Block
          </DeleteBtn>
        </RateCardBtnContainer>
      </>
    </Formik>
  );
};

export default AdminAddService;
