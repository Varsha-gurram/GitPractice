import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import TopNavBarMain from './components/TopNavBar/TopNavBarMain';

const MainLayout = () => {
  return (
    <Box>
      <TopNavBarMain />
      <Box sx={{ paddingTop: '80px' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
