import React from 'react';
import PropTypes from 'prop-types';
import { IButton } from '../../../../types/components/index';

import * as Styled from './button.styles';
import { Link } from 'react-router-dom';

const Button = ({ type, link, onClick, children }) => {
  return (
    <Link to={link}>
      <Styled.Button type={type} onClick={onClick}>
        {children}
      </Styled.Button>
    </Link>
  );
};
Button.propTypes = {
  link: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  link: '#',
  type: 'button',
  onClick: () => {},
};
export default Button;
