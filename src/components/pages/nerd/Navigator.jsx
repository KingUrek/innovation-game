import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import style from './style.module.css';
import { Redirect, useHistory } from 'react-router-dom';
import routes from '../../../routes'

const arrNav = [routes.nerd,routes.nerd,routes.nature];

export default function Navigator() {
  const history = useHistory();
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(arrNav[newValue])
        history.goForward()
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
