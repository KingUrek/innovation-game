import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Inputs from '../../generics/Inputs';
import { SiteContext } from '../../../context';
import { fetchApi, saveToken } from '../../../services';
import ReportComponent from '../../generics/ReportComponent/index';
import TreeOfLinks from '../../generics/TreeOfLinks';
import { objEmail, objName, objPassword } from './utils/inputs'

async function userRegister(event, setStatus, setUser, setIsFetching) {
  event.preventDefault();
  const { iptName, iptEmail, iptPassword } = event.target;
  const body = {
    name: iptName.value,
    email: iptEmail.value,
    password: iptPassword.value,
  };
  setIsFetching(true);
  const data = await fetchApi({
    endpoint: 'http://localhost:3001/user/create',
    method: 'POST',
    body,
  });
  setIsFetching(false);
  if (data.success) {
    setUser({ email: data.data.email, name: data.data.name })
    saveToken(data.data.token)
    return setStatus({ error: false, success: true, message: 'Sucesso' })
  };
  if (!data.success) return setStatus({ error: true, success: false, message: data.message });
}

export default function FormRegister() {
  const { user, setUser } = useContext(SiteContext);
  const [status, setStatus] = useState({ error: false, success: false, message: '' });
  const [isFetching, setIsFetching] = useState(false);
  return (
    <div className="Main-Form">
      <h2>Cadastro</h2>
      {!status.message || <ReportComponent message={{ status, setStatus }} page="Register" />}
      {!user ?
        <form className="Form" onSubmit={(e) => userRegister(e, setStatus, setUser, setIsFetching)}>
          {[objName, objEmail, objPassword].map((inputs) => (
            <Inputs att={inputs} />
          ))}
          <input className="btn-submit" type="submit" disabled={isFetching} value={isFetching ? 'Carregando' : 'Criar'} />
          <Link className="link-redirect" to="/Login">Já possuo uma conta!</Link>
        </form>
        : <TreeOfLinks />
      }
    </div>
  );
}
