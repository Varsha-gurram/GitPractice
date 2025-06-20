import React from 'react';
import {Box,Typography,Button,Avatar,List,ListItem,ListItemAvatar,ListItemText,Divider,} from '@mui/material';
const quizzes = [
  {
    title: 'Vector division',
    questions: '10 questions',
    time: '15 min',
  },
  {
    title: 'Vector division',
    questions: '10 questions',
    time: '15 min',
  },
];
const QuizCard = () => {
  return (
    <Box sx={{borderRadius: 2, p: 1,transition: 'transform 0.3s ease', }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="subtitle1" fontWeight="bold">Pending quizzes</Typography>
        <Button size="small">See all</Button>
      </Box>
      <List>
        {quizzes.map((quiz, index) => (
          <React.Fragment key={index}>
            <ListItem
              secondaryAction={
                <Button size="small" variant="outlined">Start</Button>
              }
            >
              <ListItemAvatar>
                <Avatar>Q</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={quiz.title}
                secondary={`${quiz.questions} • ${quiz.time}`}
              />
            </ListItem>
            {index < quizzes.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
export default QuizCard;
