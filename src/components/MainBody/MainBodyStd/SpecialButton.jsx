import React, { useState } from 'react';

const SpecialButton = () => {
  const [selectedButton, setSelectedButton] = useState('organizers');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        <svg width="450" height="80" viewBox="0 0 450 80">
          {/* Left Button - rounded left, inward curve right */}
          <path
            d="M 60 10 
       L 230 10  
       A 10 30 0 0 0 230 70
       L 60 70
       A 30 30 0 0 1 60 10 Z"
            fill={selectedButton === 'organizers' ? '#3b82f6' : '#9ca3af'} 
            stroke="white" strokeWidth="3"
            className="cursor-pointer transition-colors duration-200"
            onClick={() => setSelectedButton('organizers')}
          />

          {/* Right Button - outward curve left, rounded right */}
          <path
            d="M 230 10  
       Q 200 40 230 70
       L 390 70  
       A 30 30 0 0 0 390 10
       L 230 10 Z"
            fill={selectedButton === 'participants' ? '#10b981' : '#e5e7eb'}
            stroke="white" strokeWidth="4"
            className="cursor-pointer transition-colors duration-200"
            onClick={() => setSelectedButton('participants')}
          />

          {/* Text for Left Button */}
          <text
  x="145" y="40"
  textAnchor="middle"
  dominantBaseline="middle"
  className="fill-white text-lg font-medium cursor-pointer select-none"
  onClick={() => setSelectedButton('organizers')}
>
  For Organizers ↗
</text>

          {/* Text for Right Button */}
          <text
  x="310" y="40"
  textAnchor="middle"
  dominantBaseline="middle"
  className="fill-gray-800 text-lg font-medium cursor-pointer select-none"
  onClick={() => setSelectedButton('participants')}
>
  For Participants ↗
</text>
        </svg>
      </div>
    </div>
  );
};

export default SpecialButton;
// import { Box, Button, Stack } from '@mui/material';

// function SpecialButton() {
//   const buttonStyles = {
//     height: '56px',
//     minWidth: '160px',
//     padding: '0 2em',
//     textTransform: 'none',
//     borderRadius: '40px',
//     fontSize: '1rem',
//     fontWeight: 500,
//   };

//   return (
//     <Stack direction="row" spacing={0} alignItems="center">
//       {/* For Organizers – inward curve on right */}
//       <Box
//         sx={{
//           position: 'relative',
//           display: 'inline-flex',
//           alignItems: 'center',
//           backgroundColor: '#4f46e5',
//           borderRadius: '40px',
//           zIndex: 1,
//           height: '56px',
//           paddingRight: '2em',
//           paddingLeft: '2em',
//           '&::after': {
//             content: '""',
//             position: 'absolute',
//             top: '50%',
//             right: '-15px',
//             transform: 'translateY(-50%)',
//             width: '50px',
//             height: '60px',
//             backgroundColor: 'white', // match page background
//             borderRadius: '50%',
//             zIndex: 2,
//           },
//         }}
//       >
//         <Button
//           sx={{
//             ...buttonStyles,
//             backgroundColor: 'transparent',
//             color: 'white',
//             zIndex: 3,
//           }}
//         >
//           For Organizers ↗
//         </Button>
//       </Box>

//       {/* For Students – normal button overlapping the first */}
//       <Button
//         variant="contained"
//         sx={{
//           ...buttonStyles,
//           backgroundColor: '#16a34a',
//           color: 'white',
//           // marginLeft: '-30px', // overlap
//           zIndex: 4,
//           boxShadow: 3,
//         }}
//       >
//         For Students 🎓
//       </Button>
//     </Stack>
//   );
// }

// export default SpecialButton;
