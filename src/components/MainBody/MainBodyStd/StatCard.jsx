import React,{useState,useEffect} from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Avatar,
} from "@mui/material";
import {FaHourglassHalf} from "react-icons/fa";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
const iconMap = {
  school: <SchoolIcon />,
  assignment: <AssignmentIcon />,
  hourglass: <FaHourglassHalf />
};
const MetricItem = ({ icon, title, value, maxValue, text, color, bgColor }) => {
  const percentage = typeof maxValue !== "undefined" ? (value / maxValue) * 100 : 100;
  return (
    <Box display="flex" alignItems="center" gap={2} py={1} sx={{color:"black"}}>
      <Avatar sx={{ bgcolor: bgColor, color, width: 40, height: 40 }}>
        {icon}
      </Avatar>
      <Box flex={1}>
        <Typography variant="body2" fontWeight={500}>
          {title}
        </Typography>
        {title === "Hours spent" && (
          <Typography variant="caption" color="text.secondary">
            Total hours spent in courses
          </Typography>
        )}
      </Box>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={percentage}
          size={40}
          thickness={4}
          sx={{
            color: color,
            backgroundColor: bgColor,
            borderRadius: "50%",
          }}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" color="text.primary">
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const StatCard = () => {
  const [metrics,setMetrics]=useState([]);
  // useEffect(()=>{
  //    fetch("/json/data.json")
  //   .then(res => res.json())
  //   .then(data => {
  //     setMetrics(data);
  //     console.log(data); 
  //   })
  //   .catch(err => console.error("Error fetching data:", err));
  // },[]);
  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("/json/data.json");
      const data = await res.json();
      setMetrics(data);
      console.log(data)
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  fetchData();
}, []);

  return (
    <Box elevation={1} sx={{ p: 2, borderRadius: 2, mb: 2 }}>
      {metrics.map(({ icon, title, value, maxValue, text, color, bgColor }, index) => (
        <MetricItem key={index}
        icon={iconMap[icon]} 
        title={title}
        value={value}
        maxValue={maxValue}
        text={text}
        color={color}
        bgColor={bgColor}
         />
      ))}
    </Box>
  );
};

export default StatCard;
