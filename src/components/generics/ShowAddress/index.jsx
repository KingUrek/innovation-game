import React, { useContext } from 'react';
import { SiteContext } from '../../../context';
import 'style.css';

export default function ShowAddress() {
  const { address } = useContext(SiteContext)
  const { addressComplete, city, cep } = address;
  return (
    <div className="ShowAddress">
      <text>Endereço: {addressComplete}</text>
      <text>Cidade: {city}</text>
      <text>Cep: {cep}</text>
    </div>
  );
}
