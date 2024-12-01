// types.ts
interface CardMainPageProps {
  variant: 'desktop' | 'mobile';
  labelLeft: string;
  titleLeft: string;
  labelRight: string;
  titleRight: string;
}

// CardMainPage.tsx
import React, { FC } from 'react';
import './CardMainPage.styles.scss';

const CardMainPage: FC<CardMainPageProps> = ({
  variant,
  labelLeft,
  titleLeft,
  labelRight,
  titleRight
}) => {
  const isDesktop = variant === 'desktop';
  const baseClass = isDesktop ? 'CardMainPage--Desktop' : 'CardMainPage--Mobile';

  return (
    <div className={`CardMainPage ${baseClass}`}>
      <div className={`${baseClass}__leftGroup`}>
        <div className={`${baseClass}__label text-secondary body`}>{labelLeft}</div>
        <h2 className={`${baseClass}__title body`}>{titleLeft}</h2>
      </div>
      <div className={`${baseClass}__rightGroup`}>
        <div className={`${baseClass}__label text-secondary body`}>{labelRight}</div>
        <h2 className={`${baseClass}__title text-accent`}>{titleRight}</h2>
      </div>
    </div>
  );
};

export default CardMainPage;