import React from 'react';
import { Box, Typography } from '@mui/material';
import flame from '../../../Assets/flame.png';

const Schedule = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat', 'Sun'];
  const activeDays = 5;

  return (
    <Box
      sx={{
        //border: '1px solid #ccc',
        borderRadius: 2,
        padding: 1,
        maxWidth: 400,
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        transition: 'transform 0.3s ease',
      }}
    >
      <Typography variant="caption" color="black">
        5 days without a break<br />
        The record is 16 days without a break.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 1,
          marginY: 2,
        }}
      >
        {days.map((day, index) => (
          <Box key={day} sx={{ textAlign: 'center' }}>
            <img
              src={flame}
              alt="fire"
              style={{
                width: 24,
                height: 24,
                opacity: index < activeDays ? 1 : 0.3,
              }}
            />
            <Typography variant="caption" color="black">{day}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="body2" color="text.secondary">
        🔹 6 classes covered &nbsp;&nbsp; 🔸 4 assignments completed
      </Typography>
    </Box>
  );
};

export default Schedule;
