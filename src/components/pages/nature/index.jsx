import React, { useState } from 'react';
import style from './style.module.css';
import Navigator from './Navigator';
import Destaquedisplay from './DestaqueDisplay';
import JoinButton from './JoinButton';
import NavBarButton from '../../generics/NavBarBottom';

export default function NaturePage() {
  return (
    <div className={style.container}>
      <Navigator />
      <Destaquedisplay />
      <p className={style["quest-call"]}>Desafio Namastê!</p>
      <div className={style["join-button"]}>
        <JoinButton />
      </div>
      <NavBarButton type="nature"/>
    </div>
  );
}
