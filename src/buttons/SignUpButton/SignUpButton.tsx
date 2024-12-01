// types.ts
interface SignUpButtonProps {
  title: string;
  width?: 'hug' | 'fill';
  isEnabled?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
  onClick?: () => void;
}

// SignUpButton.tsx
import React, { FC } from 'react';
import './SignUpButton.styles.scss';

const SignUpButton: FC<SignUpButtonProps> = ({
  title,
  width = 'hug',
  isEnabled = true,
  isHovered = false,
  isPressed = false,
  onClick
}) => {
  return (
    <button 
      className={`SignUpButton SignUpButton--${width} text-accent body`}
      disabled={!isEnabled}
      data-hovered={isHovered}
      data-pressed={isPressed}
      onClick={onClick}
    >
      {title}
      <span className="SignUpButton__icon" />
    </button>
  );
};

export default SignUpButton;