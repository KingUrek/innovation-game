import React, { useContext } from 'react';
import { SiteContext } from '../../../context';
import 'style.css';

export default function ShowCombo() {
  const { selectedCombo } = useContext(SiteContext)
  const { name, schedule, products, description, price } = selectedCombo;
  return (
    <div className="ShowCombo">
      <h2>Combo:</h2>
      <h3>Nome: {name}</h3>
      <ul>
        <h3>Produtos:</h3>
        {products.map((item) => <li>{item.name} {item.qty}x R$:{item.price.toFixed(2).toLocaleString('pt-BR')}un</li>)}
      </ul>
      <p>{description}</p>
      <h3>Preço: {price.toFixed(2).toLocaleString('pt-BR')}</h3>
      <h3>Entrega: {schedule}</h3>
    </div>
  );
}
