import React, { useState } from 'react';
import NavBar from './TopNavBarLayout';
import TopDropdownSelect from './TopDropdown';
import ProfileDropdown from './ProfileDropdown';

const TopNavBarMain = () => {
  const brand = "SkillCensui.Ai";

  const dropdownData = [
    {
      label: 'Host a contest',
      options: ['Contest Type 1', 'Contest Type 2', 'Contest Type 3'],
    },
    {
      label: 'Join a Contest',
      options: ['Contest 1', 'Contest 2', 'Contest 3'],
    },
  ];

  const [formState, setFormState] = useState(
    dropdownData.reduce((acc, item) => {
      acc[item.label] = '';
      return acc;
    }, {})
  );

  const handleChange = (label) => (event) => {
    setFormState((prev) => ({
      ...prev,
      [label]: event.target.value,
    }));
  };

  return (
    <NavBar brand={brand}>
      {dropdownData.map((dropdown, index) => (
        <TopDropdownSelect
          key={index}
          label={dropdown.label}
          value={formState[dropdown.label]}
          options={dropdown.options}
          onChange={handleChange(dropdown.label)}
        />
      ))}
      <ProfileDropdown />
    </NavBar>
  );
};

export default TopNavBarMain;
