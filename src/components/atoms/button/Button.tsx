import React from 'react';

import { StyledButton } from './Button.styles';

type ButtonProps = {
  styleType?: 'remove' | 'send';
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
