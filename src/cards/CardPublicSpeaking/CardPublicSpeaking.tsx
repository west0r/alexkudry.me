// types.ts
interface CardPublicSpeakingProps {
  variant: 'desktop' | 'mobile';
  label: string;
  buttonText: string;
  onButtonClick?: () => void;
}

// CardPublicSpeaking.tsx
import React, { FC } from 'react';
import ButtonLink from '../../buttons/ButtonLink';
import './CardPublicSpeaking.styles.scss';

const CardPublicSpeaking: FC<CardPublicSpeakingProps> = ({
  variant,
  label,
  buttonText,
  onButtonClick
}) => {
  const isDesktop = variant === 'desktop';
  const baseClass = isDesktop ? 'CardPublicSpeaking--Desktop' : 'CardPublicSpeaking--Mobile';

  return (
    <div className={`CardPublicSpeaking ${baseClass}`}>
      <div className={`${baseClass}__label text-primary body`}>{label}</div>
      <ButtonLink 
        title={buttonText}
        width="fill"
        onClick={onButtonClick}
      />
    </div>
  );
};

export default CardPublicSpeaking;