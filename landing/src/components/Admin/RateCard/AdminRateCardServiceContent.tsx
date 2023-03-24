import React from "react";

import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import AdminAddService from "./AdminAddService";

import { IRateCardServiceProps } from "../../../types/Admin/AdminRateCard.types";

const AdminRateCardServiceContent = ({
  services,
  setServices,
}: IRateCardServiceProps) => {
  const handleNextClick = (idx: number) => {
    const newArrServices = [...services];
    newArrServices.splice(idx, 0, {
      name: "",
      levels: [],
    });
    setServices(newArrServices);
  };

  /*const handleClick = () => {
    const newRateCardArr = [...services].push({ name: "", levels: [] });
    setServices(newRateCardArr);
  };*/

  return (
    <>
      {services?.length > 0 ? (
        services?.map((service, idx) => (
          <AdminBlockDropDown
            key={`${service.name}${idx}`}
            title={service.name || "ADD SERVICE"}
            style={{ width: "100%" }}
            nextBtn
            onNextClick={() => handleNextClick(idx + 1)}
          >
            <AdminAddService service={service} />
          </AdminBlockDropDown>
        ))
      ) : (
        <AdminBlockDropDown
          title={"ADD SERVICE"}
          style={{ width: "100%" }}
          nextBtn
        >
          <AdminAddService />
        </AdminBlockDropDown>
      )}
    </>
  );
};

export default AdminRateCardServiceContent;
