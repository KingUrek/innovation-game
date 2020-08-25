import React, { useState } from 'react';
import style from './style.module.css';
import Combodisplay from './ComboDisplay';
import Navigator from './Navigator';
import ItemsContainer from './ItemsContainer';
import ComboContext from './utils/context';

export default function CustomizationPage() {
  const [combo, changeCombo] = useState(JSON.parse(localStorage.getItem('combo')) || []);
  const [category, setCategory] = useState('Refrigrante');

  function setCombo(item) {
    localStorage.setItem('combo', JSON.stringify(item));
    changeCombo(item);
  }
  return (
    <div className={style.container}>
      <ComboContext.Provider value={{ combo, setCombo, category, setCategory }}>
        <h1>Customize Seu Combo</h1>
        <span>Seu Combo Atual</span>
        <Combodisplay combo={combo} setCombo={setCombo} />
        <Navigator />
        <ItemsContainer />

      </ComboContext.Provider>
    </div>
  );
}
