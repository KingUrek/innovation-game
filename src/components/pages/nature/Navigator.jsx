import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import style from './style.module.css';

export default function Navigator() {
  const [value, setValue] = useState(2);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={style.bottom}
    >
      <BottomNavigationAction label="Esportes" />
      <BottomNavigationAction label="Nerds" />
      <BottomNavigationAction label="Natureza" />
    </BottomNavigation>
  );
}
