import React, { useState, useContext } from 'react';
import style from './style.module.css';
import ComboContext from './utils/context';

const _ = require('lodash');

const categorias = [
  'Refrigerantes', 'Chás', 'Sucos', 'Águas', 'Energéticos',
  'Isotônicos',
];

export default function Navigator() {
  const [value, setValue] = useState(0);
  const { setCategory } = useContext(ComboContext);

  function changeCategory(index) {
    setCategory(categorias[index]);
    setValue(index);
  }
  return (
    <div className={style.navigator}>
      {categorias.map((categoria, i) => (
        <button
          key={_.uniqueId()}
          className={style['navigator-button']}
          type="button"
          style={{ backgroundColor: value === i ? 'tomato' : 'white' }}
          onClick={() => changeCategory(i)}
        >
          {categoria}

        </button>
      ))}
    </div>
  );
}
