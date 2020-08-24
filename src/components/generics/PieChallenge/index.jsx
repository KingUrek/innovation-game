import React from 'react';
import './style.css';
import CustomPie from './CustomPie';
import Legend from './Legend';

const createData = (objectives) => {
  const defaultObj = {
    totalPoints: 0,
    completedPoints: 0,
    qtd: objectives.length,
    completedObject: 0,
    chartValues: []
  }
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const obj = objectives.reduce((acc, item, index) => {
    const { points, done, name } = item;
    acc.totalPoints += points;
    if (done) {
      acc.completedPoints += item.points;
      acc.completedObject += 1;
      acc.chartValues.push({ name, value: points, color: COLORS[index] })
    }
    return acc;
  }, defaultObj)
  const { totalPoints, completedPoints, chartValues } = obj
  if (totalPoints !== completedPoints) {
    chartValues.push(
      {
        name: `Restantes`,
        value: totalPoints - completedPoints,
        color: COLORS[0],
        totalPoints,
      }
    );
  }
  return obj;
}

export default function PieChallenge({ objectives, legend = true }) {
  const data = createData(objectives)
  const { totalPoints, completedPoints } = data
  return (
    <div className="PieChallenge">
      <CustomPie data={data.chartValues} legend={legend} />
      {<h2 className={`total-points${legend ? ' with-legend' : ''}`}>{`${completedPoints}/${totalPoints} Pontos`}</h2>}
      {legend ? <Legend data={data.chartValues} /> : null}
    </div>
  );
}
