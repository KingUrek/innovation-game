import React from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';


export default function CustomPie({ data, legend }) {
  const valueWidth = legend ? 250 : 320;
  return (
    <PieChart width={valueWidth} height={210}>
      <Pie
        data={data}
        innerRadius={65}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={2}
        dataKey="value"
      >
        {
          data.map((entry, index) => {
            console.log(entry)
            return <Cell key={`cell-${index}`} fill={entry.name !== 'Restantes' ? entry.color : 'grey'} />
          })
        }
      </Pie>
    </PieChart>
  );
}
