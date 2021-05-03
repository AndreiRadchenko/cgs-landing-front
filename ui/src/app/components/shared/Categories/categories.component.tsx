import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ICategories } from '../../../../types/components/index';
import { Link } from 'react-router-dom';
import './style.css';

const Categories: React.FC<ICategories> = ({
  navigation,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className="nav-container">
      {navigation &&
        navigation.map((item, index) => (
          <div className="small-margin">
            <Link
              to={item.link}
              key={uuidv4()}
              onClick={() => setActiveIndex(index)}
            >
              <div className={index === activeIndex ? 'active-item' : 'item'}>
                {item.title}
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};
export default Categories;
