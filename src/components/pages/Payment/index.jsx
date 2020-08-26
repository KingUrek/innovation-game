import React from 'react';
import './style.css';
import FormPayment from './FormPayment';
import NavCheckout from '../../generics/NavCheckout';

export default function Payment() {
  return (
    <div className="container Payment">
      <div className="container-payment">
        <FormPayment />
      </div>
      <NavCheckout />
    </div>
  );
}
