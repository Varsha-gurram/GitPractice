import { Box, Typography, Avatar, Button, Chip, Stack } from '@mui/material';

const ClassStd = ({
  title,
  subject,
  subjectColor,
  teacher,
  image,
  dateTime,
  timeLeft,
  timeColor,
  liveDotColor
}) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, borderBottom: '1px solid #eee',transition: 'transform 0.3s ease',color:'black' }}>
    <Avatar src={image} sx={{ width: 45, height: 45 }} />
    <Box sx={{ flex: 1 }}>
      <Typography fontWeight={600} variant="body2">{title}</Typography>
      <Stack direction="row" spacing={1} alignItems="center" mt={0.2}>
        <Chip 
          label={subject} 
          size="small" 
          sx={{ 
            backgroundColor: `${subjectColor}20`, 
            color: subjectColor, 
            fontSize: '0.75rem', 
            height: 24,
            lineHeight: 1,
            px: 1.2 
          }} 
        />
        <Typography variant="caption" color="text.secondary">by {teacher}</Typography>
      </Stack>
    </Box>
    <Stack spacing={0.5} alignItems="flex-end">
      <Chip 
        label={dateTime} 
        size="small" 
        sx={{ 
          backgroundColor: '#fdebd0', 
          fontSize: '0.75rem', 
          height: 24,
          lineHeight: 1,
          px: 1
        }} 
      />
      <Stack direction="row" spacing={1} alignItems="center">
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: liveDotColor }} />
        <Typography variant="caption" sx={{ color: timeColor }}>{timeLeft}</Typography>
      </Stack>
    </Stack>
    <Button variant="contained" color="success" size="small">Join</Button>
  </Box>
);

export default ClassStd;
