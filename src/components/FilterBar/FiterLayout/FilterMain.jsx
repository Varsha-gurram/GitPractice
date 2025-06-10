import React, { useState } from 'react';
import DropdownSelect from './Dropdown';
import { Box } from '@mui/material';

const FilterMain = () => {
  const dropdownData = [
    {
      label: 'Domain',
      options: ['Web Development', 'Mobile-App Development', 'Data Science'],
    },
    {
      label: 'Location',
      options: ['Online', 'In-Persons'],
    },
    {
      label: 'skills',
      options: ['React', 'Python', 'Java'],
    },
    {
      label: 'Rewards',
      options: ['5k-10k', '10k-20k', 'Above 20k'],
    },
  ];
  
  const [formState, setFormState] = useState(
    dropdownData.reduce((acc, item) => {
      acc[item.label] = '';
      return acc;
    }, {})
  );

  const handleChange = (label) => (event) => {
    setFormState((prev) => ({
      ...prev,
      [label]: event.target.value,
    }));
  };

  return (
    <Box sx={{
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap',
    p: 0.5,
   // border: '1px solid #ccc',
    borderRadius: '6px',
    pb:0,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    mb: 1
  }}> 
      {dropdownData.map((dropdown) => (
        <DropdownSelect
          sx={{backgroundColor:'gray'}}
          key={dropdown.label}
          label={dropdown.label}
          value={formState[dropdown.label]}
          options={dropdown.options}
          onChange={handleChange(dropdown.label)}
          
        />
      ))}
      <input placeholder='Search here...' style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '20px',
        padding: '4px 12px',
        width: { xs: '100%', sm: '250px' },
        backgroundColor: '#fff',
        boxShadow: 1,
      }}></input>
    </Box>
  );
};

export default FilterMain;
