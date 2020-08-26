import React, { useContext } from 'react';
import { SiteContext } from '../../../context';
import 'react-credit-cards/es/styles-compiled.css';
import { Link } from 'react-router-dom';
import ShowCard from '../../generics/ShowCard';

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
        <label htmlFor="name">Nome no Cartão</label>
        <input id="name" type="text" placeholder="Nome" className="form-control" required name="name" />
        <label htmlFor="expiry">Data de vencimento</label>
        <input
          type="tel"
          name="expiry"
          className="form-control"
          placeholder="01/20"
          pattern="\d\d/\d\d"
          required
        />
        <label htmlFor="number">Número do Cartão (16 dígitos)</label>
        <input id="number" type="text" placeholder="Número do cartão" className="form-control" required name="number" minLength="13" maxLength="16" />
        <label htmlFor="cvc">cvc</label>
        <input id="cvc" type="text" placeholder="CVC" className="form-control" required name="cvc" minLength="3" maxLength="4" />
        <ShowCard />
        <input type="submit" className="btn-form" value={!formPayment ? "Confirmar" : "Atualizar"} />
      </form>
      {formPayment ? <Link className="btn-form" to="/checkout">Adicionar o Endereço</Link> : null}
    </div>
  );
}
