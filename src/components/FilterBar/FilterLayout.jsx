import React from 'react';
import { Box } from '@mui/material';      
import MForm from '../SideBar/Side_menu/SideBarMain';
import FilterMain from './FiterLayout/FilterMain';
const FilterLayout = () => {
  return (
    <Box sx={{ display: 'flex'}}>
      <Box sx={{ maxHeight:'100vh' }}>
        <MForm/>
      </Box>
      <Box sx={{ flexGrow:1,width:'500px' }}>
        <FilterMain/>
      </Box>
    </Box>
  );
};

export default FilterLayout;
