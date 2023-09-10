import React from 'react'
import 'rsuite/dist/rsuite.min.css';
import { PieChart } from '@rsuite/charts';

const DataCard = ({ data, title }) => { 

  // Sample data
  const sampleData = [
    ['Age1', 10],
    ['Age2', 30],
    ['Age3', 20],
    ['Age4', 40]
  ];
  
  return (
    <div>
      <h4 className='text-center'>{title}</h4>
      <PieChart name="PieChart" data={data} />
    </div >
  );
};

export default DataCard;
