import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import Destaquedisplay from './DestaqueDisplay';
import ComboCard from './ComboCard';
import sequelizer from '../../../utils/sequelize';

export default function CombosPage() {
  const [combos, setCombos] = useState([]);

  async function getInformation() {
    const combo = await fetch(`${process.env.REACT_APP_SERVER_PATH}/api/combos`).then((r) => r.json());
    return sequelizer.combo(combo.data);
  }

  useEffect(() => {
    getInformation().then(setCombos);
  }, []);
  return (
    <div className={style.container}>
      <p className={style['page-title']}>Combos</p>
      <p className={style['display-title']}>Destaques</p>
      <Destaquedisplay />
      {combos.map((props) => <ComboCard {...props} />)}
    </div>
  );
}
