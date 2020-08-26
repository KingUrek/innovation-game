import React,{useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import placeholder from './static/placeholderImage.png';
import style from './style.module.css';
import routes from '../../../routes';

export default function ComboCard({ name, schedule, products, description, price, noPromotional }) {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  
  function selectCombo(){
    localStorage.setItem('combo',JSON.stringify(products))
    history.push(routes.payment)
  }

  function customizeCombo(){
    console.log('meu pau')
    localStorage.setItem('combo',JSON.stringify(products))
    history.push(routes.customize)
  }


  return (
    <div className={style['combo-container']}>
      <div>
        <img onClick={selectCombo} className={style.image} width={97} height={97} src={placeholder} alt="" />

      </div>
      <div>

        <p onClick={selectCombo} className={style.title}>{name}</p>
        <div className={style['price-container']}>
          {noPromotional && <span className={style['ex-price']}>{`R$${noPromotional}`}</span>}
          <span className={style.price}>{`R$${price}`}</span>
        </div>
        <span onClick={customizeCombo} className={style['customize-link']}>Customizar</span>
        {open && <div style={{marginBottom:30}}>
          <p>Produtos:</p>
          {products.map(({name,quantity}) => <p>{`${quantity} x ${name}`}</p>)}
        </div>}
        <IoIosArrowDown onClick={() => setOpen(!open)} className={style['arrow-icon']} />
      </div>
    </div>
  );
}
