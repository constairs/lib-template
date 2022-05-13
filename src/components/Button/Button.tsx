import React from 'react';
import './Button.scss';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode | React.ReactNode[];
  content: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
}

const Button = ({ type = 'button', content, onClick }: ButtonProps) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
