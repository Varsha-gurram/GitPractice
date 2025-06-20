import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import { red } from '@mui/material/colors';

const Submit = () => {
  return (
    <Box
      sx={{
        padding: 2,
        maxWidth: 400,
        //boxShadow: 1,
        backgroundColor: '#fff',
        transition: 'transform 0.3s ease',
        color:'black'
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Assignment
      </Typography>
      <Typography variant="body1" fontWeight="500">
        Advanced problem solving math
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
       <Chip label="H. math 1" size="small"
         sx={{
            backgroundColor: '#d1fae5',
            color: '#065f46',
            height: 24,
            fontSize: '0.75rem', 
            fontWeight: 500,
            lineHeight: 1,
            padding: '0 4px',
          }}
        />
        <Typography variant="caption" color="text.secondary">
          Assignment 5
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            backgroundColor: red[500],
            borderRadius: '50%',
            mr: 1,
          }}
        />
        <Typography variant="caption" color="error">
          Submit before : 15th Oct, 2024 ; 12:00PM
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 2,
          borderTop: '1px solid #eee',
          pt: 1,
        }}
      >
        <Button size="small" variant="outlined" color="success">
          View
        </Button>
        <Button size="small" variant="contained" color="success">
          Upload
        </Button>
      </Box>
    </Box>
  );
};

export default Submit;
