import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ICategories } from "../../../../types/components/index";
const Categories: React.FC<ICategories> = ({
  navigation,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className="nav-container">
      {navigation &&
        navigation.map((item, index) => (
          <div key={uuidv4()} className="small-margin">
            <a href={item.link}>
              <div className={index === activeIndex ? "active-item" : "item"}>
                {item.title}
              </div>
            </a>
          </div>
        ))}
    </div>
  );
};
export default Categories;
