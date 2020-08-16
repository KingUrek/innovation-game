import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import Destaquedisplay from './DestaqueDisplay';
import ComboCard from './ComboCard';

export default function CombosPage() {
  const [combos, setCombos] = useState([]);

  function getInformation() {
    fetch(`${process.env.REACT_APP_SERVER_PATH}/api/combos`).then((r) => r.json()).then(console.log);
  }

  useEffect(() => {
    getInformation();
  });
  return (
    <div className={style.container}>
      <p>Combos</p>
      <p>Destaques</p>
      <Destaquedisplay />
      <ComboCard />

    </div>
  );
}
