import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import placeholder from './static/placeholderImage.png';
import style from './style.module.css';
import routes from '../../../routes';

export default function ComboCard() {
  return (
    <div className={style['combo-container']}>
      <div>
        <img className={style.image} width={97} height={97} src={placeholder} alt="" />

      </div>
      <div>

        <p className={style.title}>Combochá plus</p>
        <div className={style['price-container']}>
          <span className={style['ex-price']}>R$79,90</span>
          <span className={style.price}>R$59,90</span>

        </div>
        <Link to={routes.customize} className={style['customize-link']}>Customizar</Link>
        <IoIosArrowDown className={style['arrow-icon']} />
      </div>
    </div>
  );
}
