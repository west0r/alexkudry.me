// types.ts
interface CardKnowledgeProps {
  variant: 'desktop' | 'mobile';
  label: string;
  title: string;
}

// CardKnowledge.tsx
import React, { FC } from 'react';
import './CardKnowledge.styles.scss';

const CardKnowledge: FC<CardKnowledgeProps> = ({
  variant,
  label,
  title
}) => {
  const isDesktop = variant === 'desktop';
  const baseClass = isDesktop ? 'CardKnowledge--Desktop' : 'CardKnowledge--Mobile';

  return (
    <div className={`CardKnowledge ${baseClass}`}>
      <div className={`${baseClass}__group`}>
        <div className={`${baseClass}__label h2-${variant}`}>{label}</div>
        <h2 className={`${baseClass}__title h2-${variant}`}>{title}</h2>
      </div>
    </div>
  );
};

export default CardKnowledge;