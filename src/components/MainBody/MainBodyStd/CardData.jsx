import { FaChalkboardTeacher, FaClipboardCheck, FaBook, FaHourglassHalf, FaCertificate, FaLaptopCode } from "react-icons/fa";
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
export const metricsCard1 = [
  {
    title: "Total enroll courses",
    value: 5,
    maxValue:5,
    text: "5",
    icon: <SchoolIcon/>,
    color: "#00C49F",
    bgColor: "#E0F7F4",
  },
  {
    title: "Course completed",
    value: 1,
    maxValue:5,
    text: "1",
    icon: <AssignmentIcon/>,
    color: "#00B0FF",
    bgColor: "#E0F3FF",
  },
  {
    title: "Hours spent",
    value: 112,
    text: "112h",
    icon: <FaHourglassHalf />,
    color: "#FF4081",
    bgColor: "#FFEAF2",
  },
];

export const metricsCard2 = [
  {
    title: "Live class attended",
    value: 70,
    maxValue: 100,
    text: "70%",
    icon: <FaChalkboardTeacher />,
    color: "#FF6D60",
    bgColor: "#FFE5E0",
  },
  {
    title: "Quiz practised",
    value: 20,
    maxValue: 30,
    text: "20/30",
    icon: <FaBook />,
    color: "#9C6ADE",
    bgColor: "#EFE4FD",
  },
  {
    title: "Assignment done",
    value: 10,
    maxValue: 15,
    text: "10/15",
    icon: <FaClipboardCheck />,
    color: "#4285F4",
    bgColor: "#E3EEFD",
  },
];
export const metricsCard3 = [
  {
    title: "Newtonian Mechanics Class 5",
    subject: "Physics 1",
    tutor:"by Rakesh Ahmed",
    date: "2023-10-01 10:00 AM",
    timeLeft:"2 min",
  },
  {
     title: "Polymer Class 3",
    subject: "chemistry 1",
    tutor:"by Khalil Khan",
    date: "2023-10-01 10:00 AM",
    timeLeft:"2 min",
  },
];