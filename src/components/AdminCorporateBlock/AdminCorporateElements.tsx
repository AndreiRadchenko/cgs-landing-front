import { ICorporateBlock } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";

const AdminCorporateElements = ({
  state,
  onChangeFunction,
}: {
  state: ICorporateBlock;
  onChangeFunction: any;
}) => {
  return (
    <div>
      {state.blocks.map((i, ind) => (
        <div key={ind * 119994}>
          <SubHeaderWithInput
            name={`CorporateBlock.blocks.${ind}.subtitle`}
            header="Subtitle"
            inputValue={i.subtitle}
            key={`corporateTitle${ind}`}
            onChangeFunction={onChangeFunction}
          />
          <div>
            <SubHeaderWithInput
              name={`CorporateBlock.blocks.${ind}.text`}
              header="Text"
              inputValue={i.text}
              key={`corporateText${ind}`}
              onChangeFunction={onChangeFunction}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminCorporateElements;
