import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

export default function Navigator() {
  const [value, setValue] = useState(2);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="bottom"
    >
      <BottomNavigationAction label="Esportes" />
      <BottomNavigationAction label="Nerds" />
      <BottomNavigationAction label="Natureza" />
    </BottomNavigation>
  );
}
