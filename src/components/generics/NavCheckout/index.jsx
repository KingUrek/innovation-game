import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { SiteContext } from '../../../context';
import routes from '../../../routes';
import './style.css';

export default function NavCheckout() {
  const { formPayment, address } = useContext(SiteContext);
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to={routes.review} />
  return (
    <div className="NavCheckout">
      <>
        <Link className={`link-nav-bar logon link-nerd`} to={routes.payment}>Forma de Pagamentos</Link>
        <Link className={`link-nav-bar logon link-nerd`} to={routes.checkout}>Endereço</Link>
        <input disabled={!formPayment || !address} className={`link-nav-bar logon link-nerd`} onClick={() => setRedirect(true)} value="Revisar o pedido" />
      </>
    </div>
  );
}
