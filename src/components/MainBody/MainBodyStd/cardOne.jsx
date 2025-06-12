import React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
const getGaugeColor = (value) => {
  if (value < 40) return '#f44336'; 
  if (value < 70) return '#ff9800'; 
  if (value>70) return '#4caf50';             
};
const getLearnerType = (value) => {
  if (value < 40) return 'Slow Learner';
  if (value < 70) return 'Medium Learner';
  return 'Fast Learner';
};

const CardOne = ({ value }) => {
  const color = getGaugeColor(value);
  const learnerType = getLearnerType(value);

  return (
    <div>
      <h3 style={{color:'black', textAlign:'center'}}>Overall Performance</h3>
      <h4 style={{color:'black',textAlign:'center'}}>Course completion rate</h4>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 1, md: 3 }}
        alignItems="left"
        justifyContent={"center"}
      >
        <Gauge
          width={200}
          height={100}
          value={value}
          startAngle={-90}
          endAngle={90}
          cornerRadius="10px"
          text=""
          sx={{
            '& .MuiGauge-valueArc': {
              fill: color,
            },
          }}>
            
          </Gauge>
      </Stack>
          <div style={{ textAlign: 'center' }}> 
        <h4>Performance: {value}%</h4>
        <h5 style={{ color: color }}>Learner Type: {learnerType}</h5>
        </div>
    </div>
  );
};

export default CardOne;
