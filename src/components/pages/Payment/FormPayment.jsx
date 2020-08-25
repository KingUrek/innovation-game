import React, { useContext } from 'react';
import Cards from 'react-credit-cards';
import { SiteContext } from '../../../context';
import 'react-credit-cards/es/styles-compiled.css';

const handleSubmit = (e, cb) => {
  e.preventDefault()
  const obj = {
    number: e.target.number.value,
    name: e.target.name.value,
    expiry: e.target.expiry.value,
    cvc: e.target.cvc.value,
  }
  cb(obj)
}

export default function FormPayment() {
  const { setFormPayment, formPayment } = useContext(SiteContext)
  return (
    <div className="FormPayment">
      <form className="Form" onSubmit={(e) => handleSubmit(e, setFormPayment)}>
        <label for="name">Nome no Cartão</label>
        <input id="name" type="text" placeholder="Nome" class="form-control" required name="name" />
        <label for="expiry">Data de vencimento</label>
        <input
          type="tel"
          name="expiry"
          className="form-control"
          placeholder="Valid Thru"
          pattern="\d\d/\d\d"
          required
        />
        <label for="number">Número do Cartão (16 dígitos)</label>
        <input id="number" type="text" placeholder="Número do cartão" class="form-control" required name="number" minlength="13" maxlength="16" />
        <label for="cvc">cvc</label>
        <input id="cvc" type="text" placeholder="CVC" class="form-control" required name="cvc" minlength="3" maxlength="4" />
        <input type="submit" value="Confirmar" />
      </form>
      <Cards
        cvc={formPayment ? formPayment.cvc : ''}
        expiry={formPayment ? formPayment.expiry : ''}
        name={formPayment ? formPayment.name : ''}
        number={formPayment ? formPayment.number : ''}
      />
    </div>
  );
}
