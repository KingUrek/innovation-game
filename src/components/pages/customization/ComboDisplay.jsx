import React, { useContext } from 'react';
import style from './style.module.css';
import Comboitem from './ComboItem';
import ComboContext from './utils/context';
import { round } from './utils/functions';

const _ = require('lodash');

export default function ComboDisplay() {
  const { combo, setCombo } = useContext(ComboContext);

  function deleteItem(itemName) {
    setCombo(combo.filter(({ name }) => name !== itemName));
  }

  return (
    <div className={style['combo-display']}>
      {combo.map((item) => (
        <Comboitem
          key={_.uniqueId()}
          deleteItem={deleteItem}
          {...item}
        />
      ))}
      <div className={style['total-container']}>
        <span>Total:</span>
        <span className={style.value}>{`R$${round(combo.reduce((acc, { quantity, price }) => acc + (quantity * price), 0))}`}</span>
      </div>

    </div>
  );
}
