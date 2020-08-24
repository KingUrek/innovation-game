import React from 'react';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';
import style from './style.module.css';

export default function Qtydisplay({ setQty, qty }) {
  const dinamicStyle = {
    minus: {
      color: qty === 0 ? 'grey' : 'tomato',
      cursor: qty === 0 ? 'default' : 'pointer',
    },
    plus: {
      color: 'turquoise',
      cursor: 'pointer',
    },
  };

  function change(type) {
    if (type === 'minus' && qty > 0) {
      setQty(-1);
    } else if (type === 'plus') {
      setQty(+1);
    }
  }

  return (
    <div className={style['qty-container']}>
      <AiFillMinusSquare
        style={dinamicStyle.minus}
        onClick={() => change('minus')}
        className={style['minus-icon']}
      />
      <input
        className={style['qty-input']}
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />
      <AiFillPlusSquare
        style={dinamicStyle.plus}
        onClick={() => change('plus')}
        className={style['plus-icon']}
      />
    </div>
  );
}
