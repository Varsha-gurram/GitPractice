import React, { useState } from 'react';
import { Box } from '@mui/material';
import CheckboxGroup from './CheckboxGroup';

const MForm = () => {
  const [formState, setFormState] = useState({
    Online: false,
    'in-Person': false,
    Upcoming: false,
    Open: false,
    Ended: false,
    '1-4 Weeks': false,
    '1+ month': false,
    'Social good': false,
    'Buisiness friendly': false,
    'Select the Host(Drop)': false,
    'Buisiness Friendly': false,
    Public: false,
    Invite: false,
  });

  const checkboxGroups = [
    { title: 'Managed by Skill', options: ['Online', 'in-Person'] },
    { title: 'Status', options: ['Upcoming', 'Open', 'Ended'] },
    { title: 'Mode', options: ['Online', 'in-Person'] },
    { title: 'Team Size', options: ['Online', 'in-Person'] },
    { title: 'Length', options: ['1-4 Weeks', '1+ month'] },
    { title: 'Interested Tags', options: ['Social good', 'Buisiness friendly'] },
    { title: 'Host', options: ['Select the Host(Drop)', 'Buisiness Friendly'] },
    { title: 'Open to', options: ['Public', 'Invite'] },
  ];

  const handleChange = (event) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: '64px',
          left: 0,
          width: 240,
          height: 'calc(100vh - 64px)',
          backgroundColor: '#e3f2fd',
          overflowY: 'auto',
          //borderRight: '1px solid #ccc',
          p: 0,
        }}
      >
        {checkboxGroups.map((group, index) => (
          <CheckboxGroup
            key={index}
            title={group.title}
            options={group.options}
            state={formState}
            onChange={handleChange}
          />
        ))}
      </Box>
    </>
  );
};

export default MForm;
