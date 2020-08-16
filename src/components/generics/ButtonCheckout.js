import React, { useState, useContext } from 'react';
import { SiteContext } from '../../context';
import { clearToken } from '../../services';
import './style.css';

export default function ButtonCheckout() {
  const { setUser } = useContext(SiteContext);
  return (
    <div className="ButtonCheckout">
      <button className="btn-checkout" onClick={() => {
        clearToken()
        setUser()
      }}>Deseja sair da conta atual?</button>
    </div>
  );
}


