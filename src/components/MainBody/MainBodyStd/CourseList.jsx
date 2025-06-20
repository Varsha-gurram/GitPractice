import React from "react";
import { Box, Typography, Avatar, LinearProgress, Chip } from "@mui/material";
import { classList3 } from "./CardData";
const CourseList = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        padding: 2,
        transition: "transform 0.3s ease",
        color:"black"
      }}
    >
      <Typography variant="h6" mb={2}>
        Total courses ({classList3.length})
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2,
          mb: 1,
          fontWeight: "bold",
          color: "text.secondary",
        }}
      >
        <Box sx={{ flex: 3 }}>Course name</Box>
        <Box sx={{ flex: 2 }}>Progress</Box>
        <Box sx={{ flex: 1.5 }}>Overall score</Box>
        <Box sx={{ flex: 1 }}>Status</Box>
      </Box>
      {classList3.map((course) => (
        <Box
          key={course.id}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            borderTop: "1px solid #f0f0f0",
          }}
        >
          <Box sx={{ flex: 3, display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar
              sx={{
                bgcolor: course.color,
                width: 32,
                height: 32,
                fontSize: 14,
              }}
            >
              {course.avatar}
            </Avatar>
            <Box>
              <Typography variant="body1" fontWeight={500}>
                {course.subject}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {course.chapters} chapter • {course.lectures} lecture
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 2, px: 1 }}>
            <LinearProgress
              variant="determinate"
              value={course.progress}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: "#eee",
                "& .MuiLinearProgress-bar": {
                  backgroundColor:
                    course.progress === 100 ? "#4caf50" : "#ffa726",
                },
              }}
            />
            <Typography variant="caption" color="text.secondary" mt={0.5}>
              {course.progress}%
            </Typography>
          </Box>
          <Box sx={{ flex: 1.5 }}>
            <Typography fontWeight={600}>{course.score}%</Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Chip
              label={course.status}
              size="small"
              color={course.status === "Completed" ? "success" : "warning"}
              variant="outlined"
              sx={{
                fontSize: "0.75rem",
                height: "24px",
                lineHeight: "1.5",
                px: 1.2,
                py: 0.5,
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default CourseList;
