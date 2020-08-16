import React, { useState } from 'react';
import './style.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import Navigator from './Navigator';
import Destaquedisplay from './DestaqueDisplay';
import JoinButton from './JoinButton';

export default function NerdPage() {
  return (
    <div className="container">
      <GiHamburgerMenu className="menu-icon" />
      <Navigator />
      <Destaquedisplay />
      <p className="quest-call">Primary Quest!</p>
      <div className="join-button">
        <JoinButton />
      </div>
    </div>
  );
}
