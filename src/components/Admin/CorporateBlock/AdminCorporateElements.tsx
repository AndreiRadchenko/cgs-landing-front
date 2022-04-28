import { ICorporateBlock } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

interface ICorporateProps {
  state: ICorporateBlock;
  onChangeFunction: any;
}

const AdminCorporateElements = ({
  state,
  onChangeFunction,
}: ICorporateProps) => {
  return (
    <div>
      {state.blocks.map((i, ind) => (
        <div key={`Corporate${ind}`}>
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
