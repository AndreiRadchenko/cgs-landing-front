import React from 'react';
import * as Styled from './categories.styles';
import { v4 as uuidv4 } from 'uuid';
import { ICategories } from '../../../../types/components/index';
import { Link } from 'react-scroll';

const Categories: React.FC<ICategories> = ({ navigation }) => {
  const [activeLink, setActiveLink] = React.useState(0);
  return (
    <Styled.HeaderNav>
      {navigation &&
        navigation.map((item, index) => (
          <Link
            to={item.link.slice(1)}
            spy={true}
            smooth={true}
            duration={500}
            key={uuidv4()}
            onClick={e => {
              setActiveLink(index);
            }}
          >
            <Styled.NavItem className={index === activeLink ? 'active' : ''}>
              {item.title}
            </Styled.NavItem>
          </Link>
        ))}
    </Styled.HeaderNav>
  );
};
export default Categories;
