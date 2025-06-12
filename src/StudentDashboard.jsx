import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import NavbarLayoutStd from './components/TopNavBar/StudentNavbar/NavbarLayoutStd';
import SidebarLayoutStd from './components/SideBar/StdSideBar/SideBarLayoutStd';
import BodyLayoutStd from './components/MainBody/MainBodyStd/BodyLayoutStd';

const StudentDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => setDrawerOpen(prev => !prev);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Box
        sx={{position: 'fixed',top: 0,left: 0,right: 0,height: 64,display: 'flex',alignItems: 'center',borderRadius:50,justifyContent: 'space-between',
          zIndex: 1201}}>
        <NavbarLayoutStd isSmallScreen={isMobile} onMenuClick={toggleDrawer} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          pt: '64px',
          height: 'calc(100vh - 64px)',
        }}
      >
        {!isMobile && (
          <Box
            sx={{width: 180,bgcolor: '#ffd6ac',boxShadow: '3px solid black',borderRadius:5,p: 2,mt:0.5}}>
            <SidebarLayoutStd />
          </Box>
        )}
        <Box sx={{ flex: 1, p: 3, bgcolor: '#fff', overflowY: 'auto' }}>

          <BodyLayoutStd/>
        </Box>
      </Box>
      <Drawer open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 200, p: 2 }}>
          <SidebarLayoutStd />
        </Box>
      </Drawer>
    </Box>
  );
};
export default StudentDashboard;
