import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SiteContext } from '../../../context';
import routes from '../../../routes';
import './style.css';

export default function NavBarButton({type}) {
  const { user } = useContext(SiteContext);
  return (
    <div className="NavBarButton">
      {!user
        ? <>
          <Link className={`link-nav-bar logoff link-${type}`} to={routes.login}>Realizar Login</Link>
          <Link className={`link-nav-bar logoff link-${type}`} to={routes.register}>Criar Conta</Link>
        </>
        : <>
          <Link className={`link-nav-bar logon link-${type}`}  to={routes.challenge}>Challenge</Link>
          <Link className={`link-nav-bar logon link-${type}`}  to={routes.profile}>Perfil</Link>
          <Link className={`link-nav-bar logon link-${type}`}  to={routes.combo}>Combos</Link>
        </>
      }
    </div>
  );
}
