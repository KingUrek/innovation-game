import React, { useContext } from 'react';
import { SiteContext } from '../../../context';
import routes from '../../../routes';
import { Redirect } from 'react-router-dom';

const mockProducts = [{
  name: "Água AMA",
  price: "1.99",
  quantity: 4,
},
{
  name: "Água AMA",
  price: "1.99",
  quantity: 4,
},
]

export default function ShowCombo() {
  const { selectedCombo } = useContext(SiteContext)
  const { name = 'show', schedule = '02/10/2010:20:00', products = mockProducts, description ="Combo legal", price="5.00" } = selectedCombo || {};
  return (
    <div className="ShowCombo">
      <h2>Combo:</h2>
      <h3>Nome: {name}</h3>
      <ul>
        <h3>Produtos:</h3>
        {products.map((item) => <li>{item.name} {item.quantity}x R$:{Number(item.price).toFixed(2)}un</li>)}
      </ul>
      <p>{description}</p>
      <h3>Preço: {Number(price).toFixed(2).toLocaleString('pt-BR')}</h3>
      <h3>Entrega: {schedule}</h3>
    </div>
  );
}

