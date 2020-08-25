import React from 'react';
import ItemLegend from './ItemLegend';

export default function Legend({ data }) {
  return (
    <div className="Legend">
      {data.map(item => <ItemLegend att={item} key={item.name} />)}
    </div>
  );
}


