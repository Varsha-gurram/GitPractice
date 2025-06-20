import React, { useRef } from 'react';
import Slider from 'react-slick';
import ClassCarouselCard from './ClassCarouselCard';
import { classList2 } from './CardData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ClassCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ position: 'relative', marginLeft: 2, marginRight: 2 }}>
      <IconButton
        onClick={() => sliderRef.current?.slickPrev()}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 50,
          //transform: 'translateY(-50%)',
          zIndex: 1,
          boxShadow: 2,
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Slider ref={sliderRef} {...settings}>
        {classList2.map((item, index) => (
          <div key={index}>
            <ClassCarouselCard {...item} />
          </div>
        ))}
      </Slider>
      <IconButton
        onClick={() => sliderRef.current?.slickNext()}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 50,
          boxShadow: 2,
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default ClassCarousel;
