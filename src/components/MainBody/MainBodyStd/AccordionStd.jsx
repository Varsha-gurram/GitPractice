import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const faqData = [
  {
    question: 'Do you have any questions?',
    answer: 'Well, we have answers for you!',
  },
  {
    question: 'What are the courses offered?',
    answer: 'We offer a variety of courses including web development, data science, and more.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can contact support via email at edu@gmail.com or call us at +1234567890.',
  },
];

const SideAccordion = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          width: '100%',
          p: 1,
          backgroundColor: '#f0f0f0',
          borderBottom: '1px solid #ccc',
          color: 'black',
        }}
      >
        FAQs
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          width: '100%',
          maxWidth: 1200,
          border: '1px solid #ccc',
          borderRadius: 2,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          mx: 'auto',
          color: 'black',
        }}
      >
        <Box
          sx={{
            width: isSmallScreen ? '100%' : selectedIndex !== null ? '40%' : '100%',
            backgroundColor: '#f9f9f9',
            borderRight: !isSmallScreen && selectedIndex !== null ? '1px solid #ccc' : 'none',
            transition: 'width 0.3s ease',
          }}
        >
          <List dense>
            {faqData.map((item, index) => (
              <ListItemButton
                key={index}
                selected={selectedIndex === index}
                onClick={() => handleClick(index)}
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <ListItemText primary={item.question} />
                <ChevronRightIcon
                  sx={{
                    transform: selectedIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
        {selectedIndex !== null && (
          <Box
            sx={{
              width: isSmallScreen ? '100%' : '60%',
              p: 2,
              backgroundColor: '#fff',
              borderTop: isSmallScreen ? '1px solid #ccc' : 'none',
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              {faqData[selectedIndex].question}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2">{faqData[selectedIndex].answer}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SideAccordion;
