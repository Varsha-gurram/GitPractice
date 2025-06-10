import React from 'react';
import { Box } from '@mui/material';
import TopNavBarMain from './components/TopNavBar/TopNavBarMain';
import SidebarLayout from './components/SideBar/SidebarLayout';
import FilterLayout from './components/FilterBar/FilterLayout';
import BodyMain from './components/MainBody/MainBody';

const BodyLayout = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexShrink: 0 }}>
        <TopNavBarMain />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          minHeight: 0,
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: 220 },
            borderRight: { md: '1px solid #ccc', xs: 'none' },
            p: 1,
            flexShrink: 0,
          }}
        >
          <SidebarLayout />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            minHeight: 0,
            width: { xs: '100%', md: 'auto' },
          }}
        >
          <Box sx={{ flexShrink: 0, borderBottom: '1px solid #ccc'}}>
            <FilterLayout />
          </Box>
          <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
            <BodyMain />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BodyLayout;
