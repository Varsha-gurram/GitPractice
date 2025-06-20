import { Box, Typography } from '@mui/material';
import classImg from '../../Assets/ClassImg.jpg';

const ClassCarouselCard = ({
  title,
  teacher,
  dateTime,
  status,
}) => {
  const isInactive = status === 'inactive';

  return (
    <Box
      sx={{
        width: 300,
        p: 2,
        m: '0 auto',
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
        boxShadow: 2,
        textAlign: 'center',
        filter: isInactive ? 'blur(0px) brightness(0.9)' : 'none',
        opacity: isInactive ? 0.5 : 1,
        transition: 'transform 0.3s ease',
        '&:hover': { transform: isInactive ? 'none' : 'scale(1.05)' },
      }}
    >
      <Box
        component="img"
        src={classImg}
        alt={title}
        sx={{
          width: '100%',
          height: 120,
          objectFit: 'cover',
          borderRadius: 2,
          mb: 1.5,
        }}
      />
      <Typography variant="subtitle2"  color="black" fontWeight={600}>{title}</Typography>
      <Typography variant="body2" color="black ">by {teacher}</Typography>
      <Typography variant="caption" color="black " display="block" mt={1}>{dateTime}</Typography>
    </Box>
  );
};

export default ClassCarouselCard;
