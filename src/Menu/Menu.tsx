// MenuDesktop Component

import React from 'react';
import ButtonMenu from '../buttons/ButtonMenu';
import SignUpButton from '../buttons/SignUpButton';
import BurgerButton from '../buttons/BurgerButton';
import './Menu.styles.scss';

const MenuDesktop = () => {
  return (
    <nav className="MenuDesktop">
      <div className="MenuDesktop__leftButtons">
        <ButtonMenu title="Алексей Кудрявцев" />
        <ButtonMenu title="Навыки и образование" />
        <ButtonMenu title="Цены" />
        <ButtonMenu title="Статьи и выступления" />
      </div>
      <SignUpButton 
        title="Записаться на консультацию" 
        width="hug"
      />
    </nav>
  );
};

// MenuMobile Component
const MenuMobile = () => {
  return (
    <nav className="MenuMobile">
      <div className="MenuMobile__leftButtons">
        <BurgerButton />
        <SignUpButton 
          title="Записаться на консультацию" 
          width="hug"
        />
      </div>
    </nav>
  );
};

// Demo showing both menus
export default () => (
  <div className="flex flex-col gap-8 w-full">
    <MenuDesktop />
    <MenuMobile />
  </div>
);