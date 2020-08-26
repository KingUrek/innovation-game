import React, { useContext } from 'react';
import { SiteContext } from '../../../context';
import 'style.css';

const submit = ({ selectedCombo, address, formPayment, user, setMessageReturn }) => {

  setMessageReturn()
}

export default function ButtonCheckout() {
  const { selectedCombo, address, formPayment, user, setMessageReturn } = useContext(SiteContext);
  return (
    <>
      <input
        className="ButtonCheckout"
        onClick={() => submit({ selectedCombo, address, formPayment, user, setMessageReturn })}
        value="Comprar!"
      />
    </>
  );
}
