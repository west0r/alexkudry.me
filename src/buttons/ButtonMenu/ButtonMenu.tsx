// types.ts
interface ButtonMenuProps {
  title: string;
  isEnabled?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

// ButtonMenu.tsx
import React, { FC } from 'react';
import './ButtonMenu.styles.scss';

const ButtonMenu: FC<ButtonMenuProps> = ({
  title,
  isEnabled = true,
  isHovered = false,
  isPressed = false,
  isSelected = false,
  onClick
}) => {
  return (
    <button 
      className="ButtonMenu"
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

export default ButtonMenu;