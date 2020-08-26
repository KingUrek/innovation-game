import React, { useState } from 'react';
import style from './style.module.css';
import Combodisplay from './ComboDisplay';
import Navigator from './Navigator';
import ItemsContainer from './ItemsContainer';
import ComboContext from './utils/context';
import { Link } from 'react-router-dom';
import routes from '../../../routes'

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
        <h1 style={{marginLeft:19}}>Customize Seu Combo</h1>

        <div style={{position:"relative",marginLeft:19}}>
        <span>Seu Combo Atual</span>
        <Link to={routes.payment}>
        <button className={style['finish-combo']}>Finalizar Combo</button>
        </Link>
        </div>

        <Combodisplay combo={combo} setCombo={setCombo} />
        <Navigator />
        <ItemsContainer />

      </ComboContext.Provider>
    </div>
  );
}
