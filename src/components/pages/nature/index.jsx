import React, { useState } from 'react';
import style from './style.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import Navigator from './Navigator';
import Destaquedisplay from './DestaqueDisplay';
import JoinButton from './JoinButton';

export default function NaturePage() {
  return (
    <div className={style.container}>
      <GiHamburgerMenu className={style["menu-icon"]} />
      <Navigator />
      <Destaquedisplay />
      <p className={style["quest-call"]}>Desafio Namastê!</p>
      <div className={style["join-button"]}>
        <JoinButton />
      </div>
    </div>
  );
}
