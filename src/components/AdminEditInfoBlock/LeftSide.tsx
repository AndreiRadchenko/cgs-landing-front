import React from "react";
import * as Styled from "../../styles/AdminPage";

const forms = [
  { text: "Title", rows: 1 },
  { text: "Text 1", rows: 2 },
  { text: "Text 2", rows: 2 },
  { text: "Button", rows: 1 },
];

const LeftSideBlock = () => {
  return (
    <div>
      {forms.map((i) => (
        <div key={Math.random()}>
          <Styled.AdminBlockSubTitle>{i.text}</Styled.AdminBlockSubTitle>
          <Styled.AdminInput rows={i.rows} />
        </div>
      ))}
    </div>
  );
};

export default LeftSideBlock;
