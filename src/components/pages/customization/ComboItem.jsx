import React, { useState, useContext } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import style from './style.module.css';
import Qtydisplay from './QtyDisplay';
import ComboContext from './utils/context';
import { round } from './utils/functions';

export default function Comboitem({ name, price, quantity = 1, deleteItem }) {
  const { combo, setCombo } = useContext(ComboContext);

  function setQty(number) {
    const itemToAdd = combo.findIndex((item) => item.name === name);
    if (itemToAdd + 1) {
      combo[itemToAdd].quantity += number;
      setCombo([...combo]);
    }
  }

  return (
    <div className={style['item-container']}>
      <div className={style['title-container']}>
        <AiFillCloseSquare className={style['delete-item']} onClick={() => deleteItem(name)} />
        <div className={style.title}>
          <span>{name}</span>
        </div>

      </div>
      <Qtydisplay setQty={setQty} qty={quantity} />
      <span className={style.value}>{`R$${round(quantity * price)}`}</span>
    </div>
  );
}
