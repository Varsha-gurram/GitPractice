import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const NavBar = ({ brand, children }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#F8F8F8' }}>
      <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            height: '30px',
            width: '130px',
            backgroundColor: 'black',
    color: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
    padding: '13px',
    borderRadius: '20px',
          }}
        >
          {brand}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {children}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
