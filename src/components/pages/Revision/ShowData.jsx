import React, { useContext } from 'react';
import './style.css';
import routes from '../../../routes';
import ShowCard from '../../generics/ShowCard';
import ShowAddress from '../../generics/ShowAddress';
import ShowCombo from '../../generics/ShowCombo';
import ButtonCheckout from './ButtonCheckout';

export default function ShowData() {
  return (
    <div>
      <ShowCard />
      <ShowCombo />
      <ShowAddress />
      <ButtonCheckout />
    </div>
  );
}

