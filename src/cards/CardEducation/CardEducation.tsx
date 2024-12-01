// types.ts
interface CardEducationProps {
  variant: 'desktop' | 'mobile';
  date: string;
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
}

// CardEducation.tsx
import React, { FC } from 'react';
import ButtonLink from '../../buttons/ButtonLink';
import './CardEducation.styles.scss';

const CardEducation: FC<CardEducationProps> = ({
  variant,
  date,
  title,
  buttonText,
  onButtonClick
}) => {
  const isDesktop = variant === 'desktop';
  const baseClass = isDesktop ? 'CardEducation--Desktop' : 'CardEducation--Mobile';

  return (
    <div className={`CardEducation ${baseClass}`}>
      <div className={`${baseClass}__topGroup`}>
        <div className={`${baseClass}__labelGroup`}>
          <div className={`${baseClass}__date text-secondary body`}>{date}</div>
          <div className={`${baseClass}__title text-primary body`}>{title}</div>
        </div>
        <ButtonLink 
          title={buttonText}
          width="fill"
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default CardEducation;