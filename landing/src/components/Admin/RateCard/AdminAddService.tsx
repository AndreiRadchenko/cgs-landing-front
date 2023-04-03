import React, { useState } from "react";
import { Formik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

import { queryKeys } from "../../../consts/queryKeys";

import { adminRateCardService } from "../../../services/adminRateCard";

const AdminAddService = ({ service }: { service: IService }) => {
  const queryClient = useQueryClient();

  const [addRateCardInfo, setAddRateCardInfo] = useState(service.newService);

  const { mutateAsync: createService } = useMutation(
    [queryKeys.createRateCardService],
    (data: IService) => adminRateCardService.createRateCardService(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getRateCardData]);
      },
    }
  );

  const { mutateAsync: updateServiceById } = useMutation(
    [queryKeys.updateRateCardService],
    (data: IService) => adminRateCardService.updateRateCardService(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getRateCardData]);
      },
    }
  );

  const { mutateAsync: deleteServiceById } = useMutation(
    [queryKeys.deleteRateCardService],
    (id: string) => adminRateCardService.deleteRateCardService(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getRateCardData]);
      },
    }
  );

  const handleClick = () => {
    setAddRateCardInfo(false);
  };

  const handleDelete = (id: string) => {
    deleteServiceById(id);
  };

  const handleCreate = (service: IService) => {
    delete service.newService;
    createService(service);
  };

  const handleUpdate = (service: IService) => {
    updateServiceById(service);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={service}
      onSubmit={(values) =>
        values.newService ? handleCreate(values) : handleUpdate(values)
      }
    >
      {({ handleSubmit, values }) => (
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
          {!addRateCardInfo && <RateCardLevelsInput />}
          <RateCardBtnContainer>
            <SaveBtn handleClick={handleSubmit} />
            <DeleteBtn onClick={() => values._id && handleDelete(values._id)}>
              <TrashIconBtn />
              Delete Block
            </DeleteBtn>
          </RateCardBtnContainer>
        </>
      )}
    </Formik>
  );
};

export default AdminAddService;
