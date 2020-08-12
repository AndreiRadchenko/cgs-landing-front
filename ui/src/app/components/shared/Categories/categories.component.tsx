import React from 'react';
import * as Styled from './categories.styles';
import { v4 as uuidv4 } from 'uuid';
import { ICategories } from '../../../../types/components/index';

const Categories: React.FC<ICategories> = ({ navigation }) => {
  const [activeLink, setActiveLink] = React.useState(0);
  return (
    <Styled.HeaderNav>
      {navigation &&
        navigation.map((item, index) => (
          <a
            href={item.link}
            key={uuidv4()}
            onClick={e => {
              setActiveLink(index);
            }}
          >
            <Styled.NavItem className={index === activeLink ? 'active' : ''}>
              {item.title}
            </Styled.NavItem>
          </a>
        ))}
    </Styled.HeaderNav>
  );
};
export default Categories;
