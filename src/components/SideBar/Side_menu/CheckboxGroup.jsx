import React from 'react';
import {
  Box,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography,
} from '@mui/material';
import { lightBlue } from '@mui/material/colors';

const minwidth = 200;

const CheckboxGroup = ({ title, options = [], state = {}, onChange }) => (
  <Box
    sx={{
      width: minwidth,
      backgroundColor: lightBlue[50],
      p: 1,
      m: 0,
      border: '1px solid #e0e0e0',
      borderTop: 'none',
    }}
  >
    <FormLabel
      component="legend"
      sx={{
        mb: 0.5,
        fontWeight: 600,
        fontSize: '12px',
        color: '#000',
        mt: 0,
      }}
    >
      {title}
    </FormLabel>
    <FormGroup sx={{ pl: 3.5 }}>
      {options.map((opt) => (
        <FormControlLabel
          key={opt}
          control={
            <Checkbox
              checked={state[opt] || false}
              onChange={onChange}
              name={opt}
              size="small"
              sx={{ p: 0.1 }}
            />
          }
          label={
            <Typography sx={{ fontSize: '12px' }}>{opt}</Typography>
          }
          sx={{ mb: 0.5 }}
        />
      ))}
    </FormGroup>
  </Box>
);

export default CheckboxGroup;
