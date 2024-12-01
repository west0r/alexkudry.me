// types.ts
interface BurgerButtonProps {
  isEnabled?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

// BurgerButton.tsx
import React, { FC } from 'react';
import './BurgerButton.styles.scss';

const BurgerButton: FC<BurgerButtonProps> = ({
  isEnabled = true,
  isHovered = false,
  isPressed = false,
  isSelected = false,
  onClick
}) => {
  const iconClassName = isSelected ? 'BurgerButton__cross' : 'BurgerButton__burger';
  
  return (
    <button 
      className="BurgerButton"
      disabled={!isEnabled}
      data-selected={isSelected}
      data-hovered={isHovered}
      data-pressed={isPressed}
      onClick={onClick}
    >
      <span className={iconClassName} />
    </button>
  );
};

export default BurgerButton;