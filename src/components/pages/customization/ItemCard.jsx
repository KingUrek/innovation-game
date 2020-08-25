import React, { useContext } from 'react';
import ComboContext from './utils/context';
import style from './style.module.css';

export default function ItemCard({ addItemToCombo, ...item }) {
  const { name, price, image } = item;

  function addItem() {
    addItemToCombo({ ...item, quantity: 1 });
  }

  return (
    <div onClick={addItem} className={style['item-card-container']}>
      <div>
        <img className={style.image} width={45} height={45} src={image} alt="" />
      </div>
      <div style={{ marginLeft: 10 }}>
        <span className={style['item-card-title']}>{name}</span>
        <div className={style['price-container']}>
          <span className={style.price}>{`R$${price}`}</span>
        </div>
      </div>
    </div>
  );
}
