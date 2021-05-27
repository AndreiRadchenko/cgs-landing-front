import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { ICategories } from '../../../../types/components/index';
import { NavLink } from '../NavLink/NavLink';
const Categories: React.FC<ICategories> = ({ navigation }) => {
  return (
    <div className="nav-container">
      {navigation &&
        navigation.map((item) => (
          <div key={uuidv4()} className="small-margin">
            <NavLink href={item.link}>
              <a>
                <div>{item.title}</div>
              </a>
            </NavLink>
          </div>
        ))}
    </div>
  );
};
export default Categories;
