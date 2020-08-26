import React from 'react';
import './style.css';
import FormCheckout from './FormCheckout';
import NavButton from '../../generics/ButtonNav';

export default function Checkout(props) {
  console.log(props)
  return (
    <div className="container Checkout">
      <div className="container-checkout">
        <FormCheckout />
      </div>
    </div>
  );
}
