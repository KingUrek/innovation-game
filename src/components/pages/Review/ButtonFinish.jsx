import React, { useContext, useState } from 'react';
import { SiteContext } from '../../../context';
import routes from '../../../routes'
import { Link } from 'react-router-dom';

//Tudo ta mokado aqui, nao sei como realizar a ligação, os campos do corpo
const submit = ({ selectedCombo, address, formPayment, user, setMessageRequest, setStatus }) => {
  console.log(selectedCombo, address, formPayment, user)
  setStatus('success');
  setMessageRequest({
    status: 'success',
    message: 'Compra Realizada!',
  })
}

export default function ButtonFinnish() {
  const { selectedCombo, address, formPayment, user, setMessageRequest } = useContext(SiteContext);
  const [status, setStatus] = useState('');
  return (
    <>
      {
        status === ''
          ? <input
            className="btn-form"
            onClick={() => submit({ selectedCombo, address, formPayment, user, setMessageRequest, setStatus })}
            value="Comprar!"
          />
          : <>
            <Link className="btn-form" to={routes.nerd}>Voltar para home</Link>
            <Link className="btn-form" to={routes.checkout}>Revisar os dados</Link>
          </>
      }

    </>
  );
}
