import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const SidebarLayoutStd = () => {
  return (
    <Box sx={{ width: 250, p: 0 }}>
      <Typography variant="h6" gutterBottom>  
      </Typography>
      <List sx={{mt:5}}>
        {['Dashboard', 'Courses', 'Assignments', 'Grades', 'Settings'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SidebarLayoutStd;
