import React, { useState } from "react";
import AdminDropDown from "../Global/AdminDropDown";

const ConditionsForAppearanceBlock = () => {
  const [pageValue, setPageValue] = useState("Page 1");
  const [questionValue, setQuestionValue] = useState("Question 1");
  return (
    <div
      style={{
        border: "1px solid #111",
        padding: "10px",
        margin: "10px 0 5px 0",
      }}
    >
      <div style={{ display: "flex" }}>
        <AdminDropDown
          size="primary"
          menu={["Page 1", "Page 2", "Page 3"]}
          value={pageValue || "select a page"}
          setValue={setPageValue}
        />
        <AdminDropDown
          size="primary"
          menu={["Question 1", "Question 2", "Question 2"]}
          value={questionValue || "select a question"}
          setValue={setQuestionValue}
        />
      </div>
      <p>If an answer is selected:</p>
    </div>
  );
};

export default ConditionsForAppearanceBlock;
