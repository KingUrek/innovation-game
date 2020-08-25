import React, { useContext, useState } from 'react';
import Cards from 'react-credit-cards';
import { SiteContext } from '../../../context';
import 'react-credit-cards/es/styles-compiled.css';

const confirmBuy = (value) => {
  console.log(value)
}

const handleSubmit = (e, formPayment, cb) => {
  e.preventDefault()
  const { city, address, address2, cep } = e.target;
  const addressComplete = address2 ? `${address.value} ${address2.value}` : address.value;
  const obj = {
    city: city.value,
    address: addressComplete,
    cep: cep.value,
    ...formPayment,
  }
  cb(obj)
}

export default function FormCheckout() {
  const { formPayment } = useContext(SiteContext)
  const [data, setData] = useState()
  return (
    <div className="FormCheckout">
      <form className="Form" onSubmit={(e) => handleSubmit(e, formPayment, setData)}>
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
        <Cards
          cvc={formPayment ? formPayment.cvc : ''}
          expiry={formPayment ? formPayment.expiry : ''}
          name={formPayment ? formPayment.name : ''}
          number={formPayment ? formPayment.number : ''}
        />
        <input type="submit" className="btn-form" value={!data?"Confirmar":"Atualizar"} />
      </form>
      {data ? <input type="button" className="btn-form" value="Confirmar compra" onClick={() => confirmBuy(data)} /> : null}
    </div>
  );
}
