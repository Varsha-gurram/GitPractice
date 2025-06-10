import React, { useState } from 'react';
import { Box } from '@mui/material';
import TopNavBarMain from './components/TopNavBar/TopNavBarMain';
import SidebarLayout from './components/SideBar/SidebarLayout';
import FilterMain from './components/FilterBar/FilterMain';
import BodyMain from './components/MainBody/MainBody';
import hackathonData from './components/MainBody/hackathonData'; 

const BodyLayout = () => {
  const [filters, setFilters] = useState({
    Domain: '',
    Location: '',
    skills: '',
    Rewards: '',
  });

  const handleChange = (label) => (event) => {
    setFilters((prev) => ({
      ...prev,
      [label]: event.target.value,
    }));
  };
  const filteredHackathons = hackathonData.filter(hackathon => {
    if (filters.Domain && !hackathon.domain?.includes(filters.Domain)) return false;
    if (filters.Location && !hackathon.location?.includes(filters.Location)) return false;
    if (filters.skills && !hackathon.skills?.includes(filters.skills)) return false;
    if (filters.Rewards) {
      const prize = parseInt(hackathon.prize);
      if (
        (filters.Rewards === '5k-10k' && (prize < 5000 || prize > 10000)) ||
        (filters.Rewards === '10k-20k' && (prize < 10000 || prize > 20000)) ||
        (filters.Rewards === 'Above 20k' && prize <= 20000)
      ) return false;
    }
    return true;
  });

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexShrink: 0 }}>
        <TopNavBarMain />
      </Box>
      <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ width: { xs: '100%', md: 220 }, p: 1 }}>
          <SidebarLayout />
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flexShrink: 0, p: 1 }}>
            <FilterMain formState={filters} handleChange={handleChange} />
          </Box>
          <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
            <BodyMain hackathons={filteredHackathons} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BodyLayout;
