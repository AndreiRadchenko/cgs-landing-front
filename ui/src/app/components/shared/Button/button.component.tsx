import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './button.styles';
import { Link } from 'react-router-dom';
const Button = ({ type, text, link }) => {
  return (
    <Link to={link}>
      <Styled.Button type={type}>{text}</Styled.Button>
    </Link>
  );
};
Button.propTypes = {
  link: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};
Button.defaultProps = {
  link: '#',
  type: 'button',
};
export default Button;
