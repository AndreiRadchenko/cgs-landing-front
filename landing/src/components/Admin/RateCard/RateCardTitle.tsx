import React, { ChangeEvent, useState } from "react";

import {
  AdminRateCardTitle,
  AdminRateCardTitleInput,
} from "../../../styles/AdminRateCard.styled";

const RateCardTitle = ({ title }: { title: string }) => {
  const [heading, setHeading] = useState<string>(title || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };

  return (
    <>
      <AdminRateCardTitle>Title</AdminRateCardTitle>
      <AdminRateCardTitleInput
        type="text"
        value={heading}
        onChange={handleChange}
      />
    </>
  );
};

export default RateCardTitle;
