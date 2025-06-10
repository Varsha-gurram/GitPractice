import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const DropdownSelect = ({ label, value, options, onChange }) => {
  return (
    <Box sx={{ minWidth: 150, mb: 2,height:'30px'}}>
    <Box sx={{}}>
      <FormControl size="small" height="10px" sx={{
        minWidth: 140,
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
        },
        '& .MuiSelect-select': {
          padding: '8px 12px',
          fontSize: '14px',
          display:'flex',height:'15px',flexWrap:'wrap'
        },
      }}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          label={label}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
    </Box>
  );
};

export default DropdownSelect;
