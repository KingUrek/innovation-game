import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCheckout from '../ButtonCheckout';
import './style.css'

export default function TreeOfLinks() {
  return (
    <div className="nav-login">
      <Link className="link-login" to="/">Pagina Inicial</Link>
      <Link className="link-login" to="/profile">Perfil</Link>
      <ButtonCheckout />
    </div>
  );
}
