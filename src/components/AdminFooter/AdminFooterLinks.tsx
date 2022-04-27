import React from "react";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";

interface IFooterProps {
  state: { link: string }[];
  onChangeFunction: any;
}

const AdminFooterLinks = ({ state, onChangeFunction }: IFooterProps) => {
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
