import React, { useEffect, useState, useContext } from 'react';
import ItemCard from './ItemCard';
import placeholder from './static/placeholderImage.png';
import style from './style.module.css';
import ComboContext from './utils/context';

const _ = require('lodash');

async function getItems() {
  const { data } = await fetch(`${process.env.REACT_APP_SERVER_PATH}/api/products`)
    .then((r) => r.json());

  return data;
}
export default function ItemsContainer() {
  const [products, setProducts] = useState([]);
  const { combo, setCombo, category } = useContext(ComboContext);
  useEffect(() => {
    getItems().then(setProducts);
  }, []);

  function addItemToCombo(item) {
    const itemToAdd = combo.findIndex(({ name }) => item.name === name);
    if (itemToAdd + 1) {
      combo[itemToAdd].quantity += 1;
      setCombo([...combo]);
    } else {
      setCombo([...combo, item]);
    }
  }
  return (
    <div className={style['items-container']}>

      {products.filter((item) => item.category === category).map((props) => (
        <ItemCard
          addItemToCombo={addItemToCombo}
          key={_.uniqueId()}
          {...props}
          image={placeholder}
        />
      ))}

    </div>
  );
}
