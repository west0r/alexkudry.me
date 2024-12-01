// types.ts
interface ButtonLinkProps {
  title: string;
  width?: 'hug' | 'fill';
  isEnabled?: boolean;
  onClick?: () => void;
}

// ButtonLink.tsx
import React, { FC } from 'react';
import './ButtonLink.styles.scss';

const ButtonLink: FC<ButtonLinkProps> = ({
  title,
  width = 'hug',
  isEnabled = true,
  onClick
}) => {
  return (
    <button 
      className={`ButtonLink ButtonLink--${width} text-accent body`}
      disabled={!isEnabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonLink;