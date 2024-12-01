// types.ts
interface ButtonMenuMobileProps {
  title: string;
  isEnabled?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

// ButtonMenuMobile.tsx
import React, { FC } from 'react';
import './ButtonMenuMobile.styles.scss';

const ButtonMenuMobile: FC<ButtonMenuMobileProps> = ({
  title,
  isEnabled = true,
  isHovered = false,
  isPressed = false,
  isSelected = false,
  onClick
}) => {
  return (
    <button 
      className="ButtonMenuMobile h1-mobile"
      disabled={!isEnabled}
      data-selected={isSelected}
      data-hovered={isHovered}
      data-pressed={isPressed}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonMenuMobile;