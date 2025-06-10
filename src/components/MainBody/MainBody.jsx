import React from 'react';
import BodyLayout from './Card';
import hackathonData from './HackathonData';

function BodyMain({hackathons}) {
  return <BodyLayout hackathons={hackathonData}/>;
}

export default BodyMain;
