import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsCircleFill } from 'react-icons/bs';
import style from './style.module.css';

const _ = require('lodash');

const destaques = [
  'https://everydayonsales-infomartglobal.netdna-ssl.com//wp-content/uploads/2019/04/Royaltea-1-Utama-Buy-1-Free-1-Drink-Promotion-350x351.jpg',
  'https://2f8ujx1327dz3yckw91q1fym-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/dessert-story-singapore-month-of-may-free-drink-promotion-1-31-may-2018_why-not-deals.jpg',
];

export default function Destaquedisplay() {
  const [selected, setSelected] = useState(0);

  function next() {
    if (selected === destaques.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  }
  function previous() {
    if (selected === 0) {
      setSelected(destaques.length - 1);
    } else {
      setSelected(selected - 1);
    }
  }
  return (
    <div className={style["display-container"]}>
      <img className={style["display-image"]} src={destaques[selected]} alt="" />
      <IoIosArrowBack className={style["arrow-back"]} onClick={previous} />
      <IoIosArrowForward className={style["arrow-foward"]} onClick={next} />

      <div className={style["marks-container"]}>
        {destaques.map((d, i) => (
          <BsCircleFill
            key={_.uniqueId()}
            className={style["display-circle"]}
            size="10px"
            color={i === selected ? 'white' : 'black'}
          />
        ))}
      </div>

    </div>
  );
}
