import React from 'react';
import './style.css';
import FormCheckout from './FormCheckout';
import NavButton from '../../generics/ButtonNav';
import NavCheckout from '../../generics/NavCheckout';

export default function Checkout(props) {
  console.log(props)
  return (
    <div className="container Checkout">
      <div className="container-checkout">
        <FormCheckout />
      </div>
      <NavCheckout />
    </div>
  );
}
