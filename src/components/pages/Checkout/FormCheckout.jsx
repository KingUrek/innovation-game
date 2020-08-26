import React, { useContext } from 'react';
import { SiteContext } from '../../../context';
import 'react-credit-cards/es/styles-compiled.css';
import { Link } from 'react-router-dom';
import routes from '../../../routes';

const handleSubmit = (e, cb) => {
  e.preventDefault()
  const { city, address, address2, cep } = e.target;
  const addressComplete = address2 ? `${address.value} ${address2.value}` : address.value;
  const obj = {
    city: city.value,
    address: addressComplete,
    cep: cep.value,
  }
  cb(obj)
}

export default function FormCheckout() {
  const { setAddress, address } = useContext(SiteContext)
  return (
    <div className="FormCheckout">
      <form className="Form" onSubmit={(e) => handleSubmit(e, setAddress)}>
        <label for="city">Cidade</label>
        <input id="city" type="text" placeholder="Cidade da entrega" class="form-control" required name="city" />
        <label for="address">Endereço</label>
        <input
          type="text"
          name="address"
          className="form-control"
          placeholder="Rua Prata, 56"
          required
        />
        <label for="address2">Complemento</label>
        <input
          type="text"
          name="address2"
          className="form-control"
          placeholder="apt 303"
        />
        <label for="cep">Cep</label>
        <input id="cep" type="text" placeholder="30310-200" class="form-control" required name="cep" pattern="\d{5}-?\d{3}" />
        <input type="submit" className="btn-form" value={!address ? "Confirmar" : "Atualizar"} />
      </form>
      {address ? <Link to={routes.review} className="btn-form">Revisar Compra</Link> : null}
    </div>
  );
}
