import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import placeholder from './static/placeholderImage.png';
import style from './style.module.css';
import routes from '../../../routes';

export default function ComboCard({ name, schedule, products, description, price, noPromotional }) {
  return (
    <div className={style['combo-container']}>
      <div>
        <img className={style.image} width={97} height={97} src={placeholder} alt="" />

      </div>
      <div>

        <p className={style.title}>{name}</p>
        <div className={style['price-container']}>
          {noPromotional && <span className={style['ex-price']}>{`R$${noPromotional}`}</span>}
          <span className={style.price}>{`R$${price}`}</span>
        </div>
        <Link to={routes.customize} className={style['customize-link']}>Customizar</Link>
        <IoIosArrowDown className={style['arrow-icon']} />
      </div>
    </div>
  );
}
