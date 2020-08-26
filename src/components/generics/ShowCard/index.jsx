import React, { useContext } from 'react';
import Cards from 'react-credit-cards';
import { SiteContext } from '../../../context';
import 'react-credit-cards/es/styles-compiled.css';

export default function ShowCard() {
  const { formPayment } = useContext(SiteContext)
  return (
    <Cards
      cvc={formPayment ? formPayment.cvc : ''}
      expiry={formPayment ? formPayment.expiry : ''}
      name={formPayment ? formPayment.name : ''}
      number={formPayment ? formPayment.number : ''}
    />
  );
}
