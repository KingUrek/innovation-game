import React from 'react';

export default function ItemLegend({ att }) {
  const { name, value, color, totalPoints } = att;
  return (
    <div className="ItemLegend">
      <div className="square" style={{background: color}}/>
      <text>{name}</text>
      {/* {name==="Restantes"?<text>{`${value}/${totalPoints} Pontos`}</text>:<text>{`${value} Pontos`}</text>} */}
    </div>
  );
}
