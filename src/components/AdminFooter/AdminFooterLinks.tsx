import React from "react";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";

const AdminFooterLinks = ({
  state,
  onChangeFunction,
}: {
  state: {value: string}[];
  onChangeFunction: any;
}) => {
  return (
    <div>
      {state.map((i, ind) => (
          <SubHeaderWithInput
            name={`FooterBlock.links.${ind}.value`}
            header={`Add link ${ind + 1}`}
            inputValue={i.value}
            onChangeFunction={onChangeFunction}
            key={`link${ind}`}
          />
      ))}
    </div>
  );
};

export default AdminFooterLinks;
