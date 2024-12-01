// types.ts
interface FooterProps {
  className?: string;
}

interface TextGroupProps {
  text: string;
  buttonText: string;
  buttonHref: string;
}

// FooterDesktop.tsx
import React, { FC } from 'react';
import ButtonLink from '../buttons/ButtonLink';
import './Footer.styles.scss';

const TEXT_GROUPS: TextGroupProps[] = [
  {
    text: 'Telegram',
    buttonText: '@westor',
    buttonHref: 'https://t.me/west0r'
  },
  {
    text: 'Telegram канал',
    buttonText: "Workin' me softly",
    buttonHref: 'https://t.me/workinmesoftly'
  }
];

const FooterDesktop: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`FooterDesktop ${className}`}>
      <div className="FooterDesktop__sizeKeeper">
        {TEXT_GROUPS.map((group, index) => (
          <div key={index} className="FooterDesktop__textGroup">
            <div className="FooterDesktop__text text-secondary body">
              {group.text}
            </div>
            <ButtonLink
              title={group.buttonText}
              onClick={() => window.open(group.buttonHref, '_blank')}
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

// FooterMobile.tsx

const FooterMobile: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`FooterMobile ${className}`}>
      {TEXT_GROUPS.map((group, index) => (
        <div key={index} className="FooterMobile__textGroup">
          <div className="FooterMobile__text text-secondary body">
            {group.text}
          </div>
          <ButtonLink
            title={group.buttonText}
            onClick={() => window.open(group.buttonHref, '_blank')}
          />
        </div>
      ))}
    </footer>
  );
};

export { FooterDesktop, FooterMobile };