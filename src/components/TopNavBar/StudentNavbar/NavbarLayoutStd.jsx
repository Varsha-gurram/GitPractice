import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ProfileDropdownStd from './ProfileDropdownStd';
import SchoolIcon from '@mui/icons-material/School';

const NavbarLayoutStd = ({ isSmallScreen, onMenuClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        boxShadow: 2,
        bgcolor: '#ffd3ac',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center',marginLeft: 5 }}>
        {isSmallScreen && (
          <IconButton onClick={onMenuClick} edge="start" sx={{  }}>
            <MenuIcon />
          </IconButton>
        )}
        <SchoolIcon sx={{ color: '#000', fontSize: 40 }} />
        <Typography variant="h6" sx={{marginLeft:3}}>EduPro</Typography>
      </Box>

      <ProfileDropdownStd />
    </Box>
  );
};

export default NavbarLayoutStd;
