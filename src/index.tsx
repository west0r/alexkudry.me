import React from 'react';
import ReactDOM from 'react-dom/client';
import CardPublicSpeaking from './cards/CardPublicSpeaking';
import ButtonLink from './buttons/ButtonLink';
import ButtonMenu from './buttons/ButtonMenu';
import ButtonMenuMobile from './buttons/ButtonMenuMobile';
import SignUpButton from './buttons/SignUpButton';
import BurgerButton from './buttons/BurgerButton';
import CardEducation from './cards/CardEducation/CardEducation';
import CardKnowledge from './cards/CardKnowledge/CardKnoweledge';
import CardMainPage from './cards/CardMainPage';
import { FooterDesktop } from './Footer/Footer';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
      <ButtonLink
        title="ButtonLink"
        width='fill'
        isEnabled={true}
        onClick={() => alert('Button 2 clicked!')}
      />
      <ButtonMenu
        title="ButtonMenu"
        isEnabled={true}
        isHovered={false}
        isPressed={false}
        isSelected={false}
        onClick={() => alert('Button 2 clicked!')}
      />
      <ButtonMenuMobile
        title="ButtonMenuMobile"
        isEnabled={true}
        isHovered={false}
        isPressed={false}
        isSelected={false}
        onClick={() => alert('Button 2 clicked!')}
      />
      <SignUpButton
        title="SignUpButton"
        isEnabled={true}
        isHovered={false}
        isPressed={false}
        onClick={() => alert('Button 2 clicked!')}
      />
      <BurgerButton
        isEnabled={true}
        isHovered={false}
        isPressed={false}
        onClick={() => alert('Button 2 clicked!')}
      />
      <CardEducation
        variant='desktop'
        date='4579mm45i23'
        title='aruithrgif'
        buttonText='fagsihudgf'
      />
      <CardKnowledge
        variant='desktop'
        label='4579mm45i23'
        title='aruithrgif'
      />
      <CardMainPage
        variant='desktop'
        labelLeft='sdfghdfgsfg'
        titleLeft='gdhjftghj'
        labelRight='sdfhdjkugtiutdrh'
        titleRight='dfhjfutyjyt'
      />
      <CardPublicSpeaking
        variant="desktop"
        label="Master Public Speaking"
        buttonText="Learn More"
        onButtonClick={() => alert('Button 1 clicked!')}
      />
      <FooterDesktop className="custom-class-desktop" />
      <Menu className="hidden lg:block" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);