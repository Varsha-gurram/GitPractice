import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GradeIcon from '@mui/icons-material/Grade';
import SettingsIcon from '@mui/icons-material/Settings';
import {Box,Typography,List,ListItem,ListItemIcon,ListItemText,} from '@mui/material';
const SidebarLayoutStd = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Courses', icon: <MenuBookIcon /> },
    { text: 'Assignments', icon: <AssignmentIcon /> },
    { text: 'Grades', icon: <GradeIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];
  return (
    <Box sx={{ width: 250, p: 0 }}>
      <Typography variant="h6" gutterBottom>
        Student Panel
      </Typography>
      <List sx={{ mt: 5 }}>
        {menuItems.map(({ text, icon }) => (
          <ListItem button key={text}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default SidebarLayoutStd;
