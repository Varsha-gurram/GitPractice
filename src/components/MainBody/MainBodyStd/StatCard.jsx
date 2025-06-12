import React from 'react';
import { Box, Typography, Grid, Avatar, CircularProgress } from '@mui/material';

const StatCard = ({ data }) => {
  return (
    <Box sx={{ width: '100%', borderRadius: 2, p: 2 }}>
      <Grid container spacing={2}>
        {data.map((item, index) => {
          const progress =
            item.maxValue !== undefined
              ? (item.value / item.maxValue) * 100
              : (item.value / 5) * 100; // Default out of 5

          return (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  marginTop: 0.7,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: item.bgColor,
                      color: item.color,
                      width: 40,
                      height: 40,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Typography variant="body2" color="textSecondary">
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{marginRight:25 ,alignItems:'Right'}}>
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
                <Box position="relative" display="inline-flex">
                  <CircularProgress
                    variant="determinate"
                    value={100}
                    size={36}
                    thickness={4}
                    sx={{ color: '#f0f0f0', position: 'absolute' }}
                  />
                  <CircularProgress
                    variant="determinate"
                    value={progress}
                    size={36}
                    thickness={4}
                    sx={{ color: item.color }}
                  />
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default StatCard;
