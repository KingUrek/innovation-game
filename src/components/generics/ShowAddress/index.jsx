import React, { useContext } from 'react';
import { SiteContext } from '../../../context';
import { Redirect } from 'react-router-dom';
import routes from '../../../routes';

export default function ShowAddress() {
  const { address } = useContext(SiteContext)
  console.log(address,'ShowAddress')
  if(!address) return <Redirect to={routes.checkout}/>
  return (
    <div className="ShowAddress">
      <h3>Endereço: {address.addressComplete}</h3>
      <h3>Cidade: {address.city}</h3>
      <h3>Cep: {address.cep}</h3>
    </div>
  );
}
