import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import style from './style.module.css';
import Navigator from './Navigator';
import Destaquedisplay from './DestaqueDisplay';
import JoinButton from './JoinButton';
import NavBarButton from '../../generics/NavBarBottom';

export default function NerdPage() {
  return (
    <div className={style.container}>
      <Navigator />
      <Destaquedisplay />
      <p className={style['quest-call']}>Primary Quest!</p>
      <div className={style['join-button']}>
        <JoinButton />
      </div>
      <NavBarButton type="nerd"/>
    </div>
  );
}
