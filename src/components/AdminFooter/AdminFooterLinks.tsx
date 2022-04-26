import React from "react";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";

const AdminFooterLinks = ({
  state,
  onChangeFunction,
}: {
  state: {link: string}[];
  onChangeFunction: any;
}) => {
  return (
    <div>
      {state.map((i, ind) => (
          <SubHeaderWithInput
            name={`FooterBlock.links.${ind}.link`}
            header={`Add link ${ind + 1}`}
            inputValue={i.link}
            onChangeFunction={onChangeFunction}
            key={`link${ind}`}
          />
      ))}
    </div>
  );
};

export default AdminFooterLinks;
